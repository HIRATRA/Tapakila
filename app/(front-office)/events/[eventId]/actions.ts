"use server";

import { revalidatePath } from "next/cache";
import * as z from "zod";
import { getEventById, updateTicketAvailability } from "@/lib/events";
import { createBooking } from "@/lib/bookings";

// Validation schema for booking form
const BookingSchema = z.object({
  eventId: z.string(),
  userId: z.string(),
  ticketType: z.string(),
  quantity: z.coerce.number().int().positive(),
});

export async function bookTicket(formData: FormData) {
  try {
    // Parse and validate form data
    const parsed = BookingSchema.parse({
      eventId: formData.get("eventId"),
      userId: formData.get("userId"),
      ticketType: formData.get("ticketType"),
      quantity: formData.get("quantity"),
    });

    // Get event details
    const event = await getEventById(parsed.eventId);
    if (!event) {
      return { success: false, message: "Event not found" };
    }

    // Find selected ticket type
    const ticketType = event.ticketTypes.find(
      (t) => t.id === parsed.ticketType
    );
    if (!ticketType) {
      return { success: false, message: "Invalid ticket type" };
    }

    // Check if tickets are available
    if (ticketType.available < parsed.quantity) {
      return {
        success: false,
        message: `Only ${ticketType.available} tickets available`,
      };
    }

    // Check if quantity exceeds max per purchase
    if (parsed.quantity > ticketType.maxPerPurchase) {
      return {
        success: false,
        message: `Maximum ${ticketType.maxPerPurchase} tickets per purchase`,
      };
    }

    // Create booking record
    const booking = await createBooking({
      eventId: parsed.eventId,
      userId: parsed.userId,
      ticketTypeId: parsed.ticketType,
      quantity: parsed.quantity,
      totalPrice: ticketType.price * parsed.quantity,
    });

    // Update ticket availability
    await updateTicketAvailability(
      parsed.eventId,
      parsed.ticketType,
      ticketType.available - parsed.quantity
    );

    // Revalidate the event page to show updated availability
    revalidatePath(`/event/${parsed.eventId}`);

    return {
      success: true,
      message: "Booking successful",
      bookingId: booking.id,
    };
  } catch (error) {
    console.error("Booking error:", error);
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Invalid form data. Please check your inputs.",
      };
    }

    return {
      success: false,
      message: "An error occurred while processing your booking.",
    };
  }
}
