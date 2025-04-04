import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Event } from "@/lib/events";
import Link from "next/link";

interface EventCardProps {
  event: Event;
  viewMode: string;
}

export default function EventCard({ event, viewMode }: EventCardProps) {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  if (viewMode === "list") {
    return (
      <Card className="overflow-hidden transition-all hover:shadow-md py-0">
        <div className="flex flex-col md:flex-row">
          <div className="relative h-48 w-full md:h-auto md:w-48 flex-shrink-0">
            <Image
              src={
                event.imageUrl ||
                "https://kzmleevqk1ps9yb70uod.lite.vusercontent.net/placeholder.svg?height=400&width=600"
              }
              alt={event.title}
              fill
              className="object-cover"
            />
            <Badge
              className="absolute top-2 left-2"
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
          </div>
          <div className="flex flex-col flex-1 p-6">
            <div className="mb-2">
              <Badge variant="outline" className="mb-2">
                {event.category}
              </Badge>
              <h3 className="text-xl font-bold line-clamp-1">{event.title}</h3>
            </div>
            <p className="text-muted-foreground line-clamp-2 mb-4">
              {event.description}
            </p>
            <div className="mt-auto space-y-2">
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{formattedDate}</span>
                <span className="mx-2">•</span>
                <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center justify-between w-full">
                  <div className="font-bold">
                    From{" "}
                    {Math.min(
                      ...event.ticketTypes.map((ticket) => ticket.price)
                    ).toFixed(2)}
                  </div>
                  <Button asChild>
                    <Link href={`/events/${event.id}`}>More Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md h-full flex flex-col gap-0 py-0">
      <div className="relative h-48">
        <Image
          src={event.imageUrl || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover"
        />
        <Badge
          className="absolute top-2 left-2"
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
        <Badge
          variant="outline"
          className="absolute top-2 right-2 bg-background/80"
        >
          {event.category}
        </Badge>
      </div>
      <CardContent className="p-6 flex-1">
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{event.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {event.description}
        </p>
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{event.location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto">
        <div className="flex items-center justify-between w-full">
          <div className="font-bold">
            From{" "}
            {Math.min(
              ...event.ticketTypes.map((ticket) => ticket.price)
            ).toFixed(2)}
          </div>
          <Button asChild>
            <Link href={`/events/${event.id}`}>More Details</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
