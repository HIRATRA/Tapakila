/* eslint-disable react/no-unescaped-entities */
import {
  CalendarDays,
  CheckCircle,
  CreditCard,
  MapPin,
  Search,
  Ticket,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function MarketingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover and Book Amazing Events
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Your one-stop platform for finding, booking, and managing
                    tickets to the best events in your area.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative hidden flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search events..."
                      className="pl-9 pr-4 py-6 rounded-lg"
                    />
                  </div>
                  <Link href="/events">
                    <Button size="lg" className="px-8 cursor-pointer">
                      Find Events
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Mobile Tickets</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
              <div className="relative lg:ml-auto">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={800}
                    height={600}
                    alt="Event crowd"
                    className="object-cover w-full aspect-[4/3] rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-lg shadow-lg border hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CalendarDays className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Upcoming Events</p>
                      <p className="text-xs text-muted-foreground">
                        1,200+ in your area
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-background/0 pointer-events-none"
            aria-hidden="true"
          ></div>
        </section>

        {/* Trusted By Section */}
        <section className="py-12 border-y bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-sm font-medium text-muted-foreground">
                TRUSTED BY ORGANIZERS WORLDWIDE
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-center">
                    <Image
                      src="/placeholder-logo.svg"
                      width={120}
                      height={40}
                      alt={`Partner logo ${i}`}
                      className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Everything you need for events
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Tapakila provides a seamless experience for both event-goers and
                organizers with powerful features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Search className="h-10 w-10 text-primary" />,
                  title: "Discover Events",
                  description:
                    "Find events based on your interests, location, and availability with our smart search.",
                },
                {
                  icon: <Ticket className="h-10 w-10 text-primary" />,
                  title: "Easy Booking",
                  description:
                    "Book tickets in seconds with our streamlined checkout process and multiple payment options.",
                },
                {
                  icon: <MapPin className="h-10 w-10 text-primary" />,
                  title: "Location Based",
                  description:
                    "Find events near you with our location-based recommendations and mapping features.",
                },
                {
                  icon: <CreditCard className="h-10 w-10 text-primary" />,
                  title: "Secure Payments",
                  description:
                    "Your transactions are protected with bank-level security and encryption.",
                },
                {
                  icon: <Users className="h-10 w-10 text-primary" />,
                  title: "Social Sharing",
                  description:
                    "Share events with friends and coordinate group bookings with integrated social features.",
                },
                {
                  icon: <CalendarDays className="h-10 w-10 text-primary" />,
                  title: "Calendar Integration",
                  description:
                    "Add events directly to your calendar and get reminders before the event.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-6 rounded-xl border bg-background/50 hover:bg-background hover:shadow-md transition-all"
                >
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                How It Works
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple steps to your next event
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Getting tickets to your favorite events has never been easier.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-border -z-10"></div>
              {[
                {
                  step: "01",
                  title: "Find Events",
                  description:
                    "Search for events by category, location, or date. Filter results to find exactly what you're looking for.",
                },
                {
                  step: "02",
                  title: "Book Tickets",
                  description:
                    "Select your tickets, choose your seats if applicable, and complete your purchase securely.",
                },
                {
                  step: "03",
                  title: "Enjoy the Event",
                  description:
                    "Receive your tickets instantly via email or in the app. Just show them at the entrance and enjoy!",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Events Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Featured Events
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Discover upcoming events
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Browse through our curated selection of the hottest events
                happening soon.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Summer Music Festival",
                  date: "Jun 15-17, 2024",
                  location: "Central Park, New York",
                  price: "$89",
                  image:
                    "https://images.squarespace-cdn.com/content/v1/5f0770791aaf57311515b23d/1720451762802-0KY5YG9TMT4I0Q95N3IW/Jams_SummerFestival_BlogThumbnail.png",
                },
                {
                  title: "Tech Conference 2024",
                  date: "Jul 10-12, 2024",
                  location: "Convention Center, San Francisco",
                  price: "$199",
                  image:
                    "https://women-in-tech.org/wp-content/uploads/2024/06/womenintech-global-summit-2024.jpg",
                },
                {
                  title: "Food & Wine Expo",
                  date: "Aug 5-7, 2024",
                  location: "Grand Hall, Chicago",
                  price: "$45",
                  image:
                    "https://images.artfacts.net/exhibpics/1ce9d019-9f61-41a2-be7c-3a29afb0f9af",
                },
              ].map((event, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border bg-background transition-all hover:shadow-md"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      width={600}
                      height={400}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <div className="mt-2 flex items-center text-sm text-muted-foreground">
                      <CalendarDays className="mr-1 h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="mt-1 flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      {event.location}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-bold">From {event.price}</span>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/events">
                <Button size="lg" variant="outline" className="mx-auto">
                  View All Events
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What our users say
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Don't just take our word for it - hear from some of our
                satisfied users.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Tapakila made finding concert tickets so easy! The interface is intuitive and I love the mobile tickets feature.",
                  name: "Sarah Johnson",
                  title: "Music Enthusiast",
                },
                {
                  quote:
                    "As an event organizer, Tapakila has streamlined our ticketing process completely. The analytics are incredibly helpful.",
                  name: "Michael Chen",
                  title: "Event Manager",
                },
                {
                  quote:
                    "I've tried many ticketing platforms, but Tapakila offers the best user experience by far. Their customer support is also excellent!",
                  name: "Jessica Williams",
                  title: "Regular Event-goer",
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="flex flex-col p-6 bg-background rounded-xl border"
                >
                  <div className="flex-1">
                    <p className="text-lg italic">"{testimonial.quote}"</p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="rounded-2xl bg-primary/5 p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Ready to discover your next event?
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Join thousands of event-goers who use Tapakila to
                      discover, book, and enjoy amazing events.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/events">
                      <Button size="lg" className="px-8">
                        Get Started
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="px-8">
                      For Event Organizers
                    </Button>
                  </div>
                </div>
                <div className="relative lg:ml-auto">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Event app on mobile"
                    className="rounded-xl object-cover w-full aspect-[3/2]"
                  />
                </div>
              </div>
              <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
              <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
