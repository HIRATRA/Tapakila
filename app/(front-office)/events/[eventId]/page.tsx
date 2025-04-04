/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getEventById } from "@/lib/events";
import TicketBookingForm from "./ticket-booking-form";

import { Event } from "@/lib/events";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { bookTicket } from "./actions";

const EventPage = () => {
  const params = useParams();
  const { eventId } = params as { eventId: string };
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const fetchedEvent = await getEventById(eventId);
        if (fetchedEvent) {
          setEvent(fetchedEvent);
        } else {
          setError("Event not found");
        }
      } catch {
        setError("An error occurred while fetching event details.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!event) {
    return <div>Event not found</div>;
  }

  // Format date for display
  const eventDate = new Date(event.date);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(eventDate);

  // Format time for display
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(eventDate);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Event Image and Main Details */}
        <div className="lg:col-span-2">
          <div className="relative w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden mb-6">
            <Image
              src={event.imageUrl || "/placeholder.svg"}
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{event.title}</h1>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CalendarDays className="h-5 w-5" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span>{formattedTime}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{event.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <Badge variant="outline" className="px-3 py-1">
              {event.category}
            </Badge>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{event.attendees} attending</span>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About This Event</h2>
              <div className="prose max-w-none">
                <p className="text-base leading-relaxed">{event.description}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Organizer</h2>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={event.organizer.imageUrl || "/placeholder.svg"}
                    alt={event.organizer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{event.organizer.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {event.organizer.description}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Location</h2>
              <Card>
                <CardContent className="p-4">
                  <div className="relative w-full h-[200px] rounded-md overflow-hidden mb-4">
                    <Image
                      src={`/placeholder.svg?height=200&width=600`}
                      alt="Event location map"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-medium">{event.venue}</h3>
                  <p className="text-muted-foreground">{event.location}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Ticket Booking Section */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Tickets</h2>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Available</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {event.ticketTypes.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className="font-medium">
                        {ticket.name}
                      </TableCell>
                      <TableCell>${ticket.price.toFixed(2)}</TableCell>
                      <TableCell>
                        {ticket.available > 0 ? (
                          <span
                            className={
                              ticket.available < 10 ? "text-orange-500" : ""
                            }
                          >
                            {ticket.available} left
                          </span>
                        ) : (
                          <span className="text-red-500">Sold Out</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <Separator className="my-6" />

              <TicketBookingForm
                eventId={event.id}
                ticketTypes={event.ticketTypes}
                bookTicket={bookTicket}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
