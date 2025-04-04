import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Event } from "@/lib/events";
import Link from "next/link";

interface FeaturedEventCardProps {
  event: Event;
}

export default function FeaturedEventCard({ event }: FeaturedEventCardProps) {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md py-0">
      <div className="relative h-64 md:h-80">
        <Image
          src={event.imageUrl || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge variant="outline" className="bg-background/80">
            Featured
          </Badge>
          <Badge variant="outline" className="bg-background/80">
            {event.category}
          </Badge>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="font-bold text-2xl mb-2">{event.title}</h3>
          <p className="line-clamp-2 text-white/80 mb-4">{event.description}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
            <div className="flex items-center text-sm text-white/80">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center text-sm text-white/80">
              <Clock className="h-4 w-4 mr-2" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center text-sm text-white/80">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{event.location}</span>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
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
              <div className="text-xl text-white/80 mt-1">
                From{" $"}
                {Math.min(
                  ...event.ticketTypes.map((ticket) => ticket.price)
                ).toFixed(2)}
              </div>
            </div>
            <Button asChild>
              <Link href={`/events/${event.id}`}>Show More Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
