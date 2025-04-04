"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

import FeaturedEventCard from "@/components/featured-event-card";
import { events } from "@/lib/events";

const FeaturesPage = () => {
  // Get featured events
  const featuredEvents = events.filter((event) => event.featured);

  // Get upcoming events (next 7 days)
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);

  const upcomingEvents = events
    .filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate >= today && eventDate <= nextWeek;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Explore Featured and Upcoming Events
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Stay updated with the latest happenings and secure your spot at the
          most exciting events near you.
        </p>
      </div>

      {/* Featured events section */}
      {featuredEvents.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Events</h2>
            <Button variant="link">View all</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredEvents.slice(0, 2).map((event) => (
              <FeaturedEventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}

      {/* Upcoming events section */}
      {upcomingEvents.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <Button variant="link">View all</Button>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-background rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3 sm:mb-0">
                    <div className="bg-primary/10 text-primary rounded-md p-3 flex flex-col items-center justify-center min-w-[60px]">
                      <span className="text-xl font-bold">
                        {new Date(event.date).getDate()}
                      </span>
                      <span className="text-xs">
                        {new Date(event.date).toLocaleString("default", {
                          month: "short",
                        })}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{event.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant={
                        event.ticketTypes.some((ticket) => ticket.available > 0)
                          ? "default"
                          : "destructive"
                      }
                    >
                      {event.ticketTypes.some((ticket) => ticket.available > 0)
                        ? "Available"
                        : "Sold Out"}
                    </Badge>
                    <Button size="sm">Get Tickets</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default FeaturesPage;
