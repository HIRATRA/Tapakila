// This is a mock implementation for demonstration purposes
// In a real application, this would connect to a database

type Booking = {
  id: string;
  eventId: string;
  userId: string;
  ticketTypeId: string;
  quantity: number;
  totalPrice: number;
  createdAt: string;
};

// Mock bookings storage
const bookings: Booking[] = [];

export async function createBooking(
  data: Omit<Booking, "id" | "createdAt">
): Promise<Booking> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Generate a random booking ID
  const bookingId = `booking-${Math.random().toString(36).substring(2, 10)}`;

  const newBooking: Booking = {
    id: bookingId,
    ...data,
    createdAt: new Date().toISOString(),
  };

  // In a real app, this would save to a database
  bookings.push(newBooking);

  return newBooking;
}

export async function getBookingsByUserId(userId: string): Promise<Booking[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return bookings.filter((booking) => booking.userId === userId);
}

export async function getBookingById(id: string): Promise<Booking | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  return bookings.find((booking) => booking.id === id) || null;
}
