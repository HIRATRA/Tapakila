export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  imageUrl: string;
  category: string;
  attendees: number;
  featured: boolean;
  organizer: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
  };
  ticketTypes: {
    id: string;
    name: string;
    price: number;
    available: number;
    maxPerPurchase: number;
  }[];
};

// Mock data for demonstration
export const events: Event[] = [
  {
    id: "1",
    title: "Summer Music Festival 2024",
    description:
      "Join us for the biggest music festival of the year! Featuring top artists from around the world, this three-day event will be packed with amazing performances across five stages. Enjoy food from local vendors, art installations, and activities for all ages. Don't miss this unforgettable experience with fellow music lovers in a beautiful outdoor setting. Early bird tickets are available now!",
    venue: "Central Park",
    location: "New York, NY",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5f0770791aaf57311515b23d/1720451762802-0KY5YG9TMT4I0Q95N3IW/Jams_SummerFestival_BlogThumbnail.png",
    date: "2025-04-05",
    time: "12:00 PM - 11:00 PM",
    category: "Music",
    attendees: 1250,
    featured: true,
    organizer: {
      id: "org-1",
      name: "Tapakila Events",
      description: "Premier event organizer",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    ticketTypes: [
      {
        id: "ticket-1",
        name: "VIP",
        price: 299.99,
        available: 25,
        maxPerPurchase: 2,
      },
      {
        id: "ticket-2",
        name: "Early Bird",
        price: 149.99,
        available: 100,
        maxPerPurchase: 4,
      },
      {
        id: "ticket-3",
        name: "Standard",
        price: 199.99,
        available: 500,
        maxPerPurchase: 6,
      },
      {
        id: "ticket-4",
        name: "Group (5+ people)",
        price: 179.99,
        available: 0,
        maxPerPurchase: 10,
      },
    ],
  },
  {
    id: "2",
    title: "Tech Conference 2024",
    description:
      "Join industry leaders and innovators at the Tech Conference 2024. This two-day event will feature keynote speakers, panel discussions, and workshops on the latest trends in technology. Network with professionals from various fields and gain insights into the future of tech. Early bird tickets are available now!",
    venue: "Convention Center",
    location: "San Francisco, CA",
    imageUrl:
      "https://women-in-tech.org/wp-content/uploads/2024/06/womenintech-global-summit-2024.jpg",
    date: "2025-04-05",
    time: "9:00 AM - 5:00 PM",
    category: "Technology",
    attendees: 800,
    featured: false,
    organizer: {
      id: "org-2",
      name: "Tech Innovators",
      description: "Leading tech conference organizer",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    ticketTypes: [
      {
        id: "ticket-5",
        name: "VIP Pass",
        price: 499.99,
        available: 50,
        maxPerPurchase: 2,
      },
      {
        id: "ticket-6",
        name: "Standard Pass",
        price: 299.99,
        available: 200,
        maxPerPurchase: 4,
      },
      {
        id: "ticket-7",
        name: "Student Pass",
        price: 99.99,
        available: 100,
        maxPerPurchase: 6,
      },
    ],
  },
  {
    id: "3",
    title: "Art Expo 2024",
    description:
      "Explore the world of contemporary art at the Art Expo 2024. This three-day event will showcase works from emerging and established artists. Attend workshops, panel discussions, and networking events. Don't miss this opportunity to immerse yourself in the art world!",
    venue: "Art Gallery",
    location: "Los Angeles, CA",
    imageUrl:
      "https://images.artfacts.net/exhibpics/1ce9d019-9f61-41a2-be7c-3a29afb0f9af",
    date: "2025-04-05",
    time: "10:00 AM - 6:00 PM",
    category: "Art",
    attendees: 600,
    featured: true,
    organizer: {
      id: "org-3",
      name: "Art Connect",
      description: "Connecting artists and art lovers",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    ticketTypes: [
      {
        id: "ticket-8",
        name: "VIP Access",
        price: 199.99,
        available: 30,
        maxPerPurchase: 2,
      },
      {
        id: "ticket-9",
        name: "General Admission",
        price: 49.99,
        available: 300,
        maxPerPurchase: 4,
      },
      {
        id: "ticket-10",
        name: "Student Ticket",
        price: 29.99,
        available: 50,
        maxPerPurchase: 6,
      },
    ],
  },
  {
    id: "4",
    title: "Food Festival 2024",
    description:
      "Savor the flavors of the world at the Food Festival 2024. This two-day event will feature food trucks, local restaurants, and chefs showcasing their best dishes. Enjoy live music, cooking demonstrations, and activities for all ages. Bring your appetite and join us for a delicious experience!",
    venue: "City Park",
    location: "Chicago, IL",
    imageUrl:
      "https://disneyparksblog.com/app/uploads/2024/08/2024-disney-eats-foodie-guide-food-and-wine-header.png",
    date: "2025-04-05",
    time: "11:00 AM - 10:00 PM",
    category: "Food & Drink",
    attendees: 1500,
    featured: false,
    organizer: {
      id: "org-4",
      name: "Food Lovers Unite",
      description: "Celebrating food culture and community",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    ticketTypes: [
      {
        id: "ticket-11",
        name: "VIP Tasting Pass",
        price: 99.99,
        available: 100,
        maxPerPurchase: 2,
      },
      {
        id: "ticket-12",
        name: "General Admission",
        price: 29.99,
        available: 500,
        maxPerPurchase: 4,
      },
      {
        id: "ticket-13",
        name: "Family Pack (4 tickets)",
        price: 79.99,
        available: 200,
        maxPerPurchase: 6,
      },
    ],
  },
  {
    id: "5",
    title: "Fashion Week 2025",
    description:
      "Experience the latest trends in fashion at Fashion Week 2024. This week-long event will feature runway shows, designer showcases, and networking opportunities. Join fashion enthusiasts, industry professionals, and influencers for an unforgettable experience!",
    venue: "Fashion District",
    location: "Miami, FL",
    imageUrl:
      "https://rexclarkeadventures.com/wp-content/uploads/2025/02/MixCollage-14-Feb-2025-10-08-PM-5005.jpg",
    date: "2025-04-05",
    time: "9:00 AM - 10:00 PM",
    category: "Fashion",
    attendees: 2000,
    featured: true,
    organizer: {
      id: "org-5",
      name: "Fashion Forward",
      description: "Leading fashion event organizer",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    ticketTypes: [
      {
        id: "ticket-14",
        name: "VIP Access",
        price: 399.99,
        available: 50,
        maxPerPurchase: 2,
      },
      {
        id: "ticket-15",
        name: "General Admission",
        price: 199.99,
        available: 300,
        maxPerPurchase: 4,
      },
      {
        id: "ticket-16",
        name: "Student Ticket",
        price: 99.99,
        available: 100,
        maxPerPurchase: 6,
      },
    ],
  },
  {
    id: "6",
    title: "Sports Expo 2025",
    description:
      "Join us for the Sports Expo 2024, where sports enthusiasts gather to celebrate their passion. This two-day event will feature interactive exhibits, athlete meet-and-greets, and workshops on various sports. Don't miss this opportunity to connect with fellow fans and learn from the best!",
    venue: "Sports Arena",
    location: "Dallas, TX",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gEErcSbJ8vvvZx_UaTEQLYbLTj3xsS_GQw&s",
    date: "2025-04-05",
    time: "10:00 AM - 6:00 PM",
    category: "Sports",
    attendees: 1200,
    featured: false,
    organizer: {
      id: "org-6",
      name: "Sports Connect",
      description: "Connecting sports enthusiasts and professionals",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    ticketTypes: [
      {
        id: "ticket-17",
        name: "VIP Access",
        price: 199.99,
        available: 50,
        maxPerPurchase: 2,
      },
      {
        id: "ticket-18",
        name: "General Admission",
        price: 49.99,
        available: 500,
        maxPerPurchase: 4,
      },
      {
        id: "ticket-19",
        name: "Family Pack (4 tickets)",
        price: 149.99,
        available: 200,
        maxPerPurchase: 6,
      },
    ],
  },
  {
    id: "7",
    title: "Wellness Retreat 2025",
    description:
      "Join us for a rejuvenating experience at the Wellness Retreat 2024. This three-day event will focus on mental and physical well-being, featuring workshops, yoga sessions, and wellness talks. Connect with like-minded individuals and take a break from your daily routine!",
    venue: "Mountain Resort",
    location: "Denver, CO",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3CzR-O74SMcVQx1XgBbL-Vbm8wgJJWgS5A&s",
    date: "2025-04-05",
    time: "9:00 AM - 5:00 PM",
    category: "Health & Wellness",
    attendees: 300,
    featured: true,
    organizer: {
      id: "org-7",
      name: "Wellness World",
      description: "Promoting health and wellness",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    ticketTypes: [
      {
        id: "ticket-20",
        name: "VIP Retreat Pass",
        price: 299.99,
        available: 20,
        maxPerPurchase: 2,
      },
      {
        id: "ticket-21",
        name: "Standard Retreat Pass",
        price: 149.99,
        available: 100,
        maxPerPurchase: 4,
      },
      {
        id: "ticket-22",
        name: "Group Pass (5+ people)",
        price: 129.99,
        available: 50,
        maxPerPurchase: 10,
      },
    ],
  },
  {
    id: "8",
    title: "Film Festival 2025",
    description:
      "Celebrate the art of cinema at the Film Festival 2024. This week-long event will showcase independent films, documentaries, and panel discussions with filmmakers. Join us for screenings, Q&A sessions, and networking opportunities with industry professionals.",
    venue: "Cineplex Theater",
    location: "Seattle, WA",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbC9MGKuGjrzrBOSc_5irYx09ojRVgavhrIQ&s",
    date: "2025-04-05",
    time: "10:00 AM - 10:00 PM",
    category: "Film",
    attendees: 1000,
    featured: false,
    organizer: {
      id: "org-8",
      name: "Cinema Connect",
      description: "Connecting filmmakers and audiences",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    ticketTypes: [
      {
        id: "ticket-23",
        name: "VIP Pass",
        price: 199.99,
        available: 50,
        maxPerPurchase: 2,
      },
      {
        id: "ticket-24",
        name: "General Admission",
        price: 49.99,
        available: 500,
        maxPerPurchase: 4,
      },
      {
        id: "ticket-25",
        name: "Student Ticket",
        price: 29.99,
        available: 100,
        maxPerPurchase: 6,
      },
    ],
  },
  {
    id: "9",
    title: "Gaming Expo 2025",
    description:
      "Join us for the Gaming Expo 2024, where gamers unite to celebrate their passion. This three-day event will feature game demos, tournaments, and panels with industry experts. Don't miss this opportunity to connect with fellow gamers and discover the latest in gaming!",
    venue: "Gaming Arena",
    location: "Las Vegas, NV",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtwxuPe637m-A8tbxxnf5xgiMjkNDJzqNtA&s",
    date: "2025-04-05",
    time: "10:00 AM - 8:00 PM",
    category: "Gaming",
    attendees: 2000,
    featured: true,
    organizer: {
      id: "org-9",
      name: "Game Connect",
      description: "Connecting gamers and developers",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    ticketTypes: [
      {
        id: "ticket-26",
        name: "VIP Access",
        price: 299.99,
        available: 50,
        maxPerPurchase: 2,
      },
      {
        id: "ticket-27",
        name: "General Admission",
        price: 99.99,
        available: 500,
        maxPerPurchase: 4,
      },
      {
        id: "ticket-28",
        name: "Family Pack (4 tickets)",
        price: 249.99,
        available: 200,
        maxPerPurchase: 6,
      },
    ],
  },
  {
    id: "10",
    title: "Travel Expo 2025",
    description:
      "Explore the world of travel at the Travel Expo 2024. This two-day event will feature travel agencies, tour operators, and workshops on travel planning. Join us for presentations, networking opportunities, and exclusive travel deals!",
    venue: "Expo Center",
    location: "Orlando, FL",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-vPlBJNGkmgL8tdklzfCDOu-KfzEmz_FAw&s",
    date: "2025-04-05",
    time: "10:00 AM - 6:00 PM",
    category: "Travel",
    attendees: 800,
    featured: false,
    organizer: {
      id: "org-10",
      name: "Travel Connect",
      description: "Connecting travelers and travel professionals",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    ticketTypes: [
      {
        id: "ticket-29",
        name: "VIP Access",
        price: 199.99,
        available: 50,
        maxPerPurchase: 2,
      },
      {
        id: "ticket-30",
        name: "General Admission",
        price: 49.99,
        available: 500,
        maxPerPurchase: 4,
      },
      {
        id: "ticket-31",
        name: "Family Pack (4 tickets)",
        price: 149.99,
        available: 200,
        maxPerPurchase: 6,
      },
    ],
  },
  {
    id: "11",
    title: "Startup Summit 2025",
    description:
      "Connect with entrepreneurs and investors at the Startup Summit 2024. This two-day event will feature pitch competitions, workshops, and networking opportunities. Learn from industry leaders and take your startup to the next level!",
    venue: "Innovation Hub",
    location: "Austin, TX",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jRFVgix92sYdHLQDdK1rMT0Rj68oRMWxOg&s",
    date: "2025-04-05",
    time: "9:00 AM - 6:00 PM",
    category: "Business",
    attendees: 500,
    featured: true,
    organizer: {
      id: "org-11",
      name: "Startup Connect",
      description: "Empowering entrepreneurs worldwide",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    ticketTypes: [
      {
        id: "ticket-32",
        name: "VIP Pass",
        price: 299.99,
        available: 30,
        maxPerPurchase: 2,
      },
      {
        id: "ticket-33",
        name: "General Admission",
        price: 99.99,
        available: 200,
        maxPerPurchase: 4,
      },
      {
        id: "ticket-34",
        name: "Student Pass",
        price: 49.99,
        available: 50,
        maxPerPurchase: 6,
      },
    ],
  },
  {
    id: "12",
    title: "Photography Workshop 2025",
    description:
      "Enhance your photography skills at the Photography Workshop 2024. This one-day event will feature hands-on sessions, expert tips, and networking opportunities with fellow photographers.",
    venue: "Studio 101",
    location: "Portland, OR",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU0p0nMt3h05qxlUxdDoS6opR-yx8_E_E8dA&s",
    date: "2025-04-05",
    time: "10:00 AM - 4:00 PM",
    category: "Photography",
    attendees: 150,
    featured: false,
    organizer: {
      id: "org-12",
      name: "Photo Pros",
      description: "Helping photographers grow",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    ticketTypes: [
      {
        id: "ticket-35",
        name: "Workshop Pass",
        price: 149.99,
        available: 50,
        maxPerPurchase: 2,
      },
      {
        id: "ticket-36",
        name: "General Admission",
        price: 99.99,
        available: 100,
        maxPerPurchase: 4,
      },
    ],
  },
  {
    id: "13",
    title: "Comedy Night 2024",
    description:
      "Laugh out loud at Comedy Night 2024. Featuring top comedians from around the country, this one-night event promises to be an evening full of fun and laughter.",
    venue: "Comedy Club",
    location: "Boston, MA",
    imageUrl:
      "https://kzmleevqk1ps9yb70uod.lite.vusercontent.net/placeholder.svg?height=400&width=600",
    date: "2025-04-05",
    time: "7:00 PM - 10:00 PM",
    category: "Comedy",
    attendees: 300,
    featured: true,
    organizer: {
      id: "org-13",
      name: "Laugh Factory",
      description: "Bringing laughter to life",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    ticketTypes: [
      {
        id: "ticket-37",
        name: "VIP Seating",
        price: 99.99,
        available: 20,
        maxPerPurchase: 2,
      },
      {
        id: "ticket-38",
        name: "General Admission",
        price: 49.99,
        available: 200,
        maxPerPurchase: 4,
      },
    ],
  },
  {
    id: "14",
    title: "Book Fair 2024",
    description:
      "Discover the latest books and meet your favorite authors at the Book Fair 2024. This two-day event will feature book signings, panel discussions, and workshops for writers.",
    venue: "Library Hall",
    location: "Philadelphia, PA",
    imageUrl:
      "https://kzmleevqk1ps9yb70uod.lite.vusercontent.net/placeholder.svg?height=400&width=600",
    date: "2025-04-05",
    time: "10:00 AM - 5:00 PM",
    category: "Literature",
    attendees: 400,
    featured: false,
    organizer: {
      id: "org-14",
      name: "Book Lovers",
      description: "Celebrating the joy of reading",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    ticketTypes: [
      {
        id: "ticket-39",
        name: "VIP Pass",
        price: 79.99,
        available: 50,
        maxPerPurchase: 2,
      },
      {
        id: "ticket-40",
        name: "General Admission",
        price: 29.99,
        available: 300,
        maxPerPurchase: 4,
      },
    ],
  },
  {
    id: "15",
    title: "Dance Festival 2024",
    description:
      "Celebrate the art of dance at the Dance Festival 2024. This three-day event will feature performances, workshops, and networking opportunities for dancers and enthusiasts.",
    venue: "Dance Academy",
    location: "Atlanta, GA",
    imageUrl:
      "https://kzmleevqk1ps9yb70uod.lite.vusercontent.net/placeholder.svg?height=400&width=600",
    date: "2025-04-05",
    time: "10:00 AM - 8:00 PM",
    category: "Dance",
    attendees: 600,
    featured: true,
    organizer: {
      id: "org-15",
      name: "Dance Connect",
      description: "Connecting dancers worldwide",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    ticketTypes: [
      {
        id: "ticket-41",
        name: "VIP Pass",
        price: 199.99,
        available: 30,
        maxPerPurchase: 2,
      },
      {
        id: "ticket-42",
        name: "General Admission",
        price: 99.99,
        available: 400,
        maxPerPurchase: 4,
      },
    ],
  },
  {
    id: "16",
    title: "Science Fair 2024",
    description:
      "Explore the wonders of science at the Science Fair 2024. This one-day event will feature interactive exhibits, experiments, and presentations by leading scientists.",
    venue: "Science Center",
    location: "Houston, TX",
    imageUrl:
      "https://kzmleevqk1ps9yb70uod.lite.vusercontent.net/placeholder.svg?height=400&width=600",
    date: "2025-04-05",
    time: "10:00 AM - 4:00 PM",
    category: "Science",
    attendees: 800,
    featured: false,
    organizer: {
      id: "org-16",
      name: "Science Connect",
      description: "Inspiring the next generation of scientists",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    ticketTypes: [
      {
        id: "ticket-43",
        name: "VIP Pass",
        price: 99.99,
        available: 50,
        maxPerPurchase: 2,
      },
      {
        id: "ticket-44",
        name: "General Admission",
        price: 49.99,
        available: 500,
        maxPerPurchase: 4,
      },
    ],
  },
  {
    id: "17",
    title: "History Expo 2024",
    description:
      "Step back in time at the History Expo 2024. This two-day event will feature historical reenactments, exhibits, and lectures by historians.",
    venue: "History Museum",
    location: "Washington, D.C.",
    imageUrl:
      "https://kzmleevqk1ps9yb70uod.lite.vusercontent.net/placeholder.svg?height=400&width=600",
    date: "2025-04-05",
    time: "10:00 AM - 5:00 PM",
    category: "History",
    attendees: 500,
    featured: true,
    organizer: {
      id: "org-17",
      name: "History Connect",
      description: "Bringing history to life",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    ticketTypes: [
      {
        id: "ticket-45",
        name: "VIP Pass",
        price: 79.99,
        available: 30,
        maxPerPurchase: 2,
      },
      {
        id: "ticket-46",
        name: "General Admission",
        price: 29.99,
        available: 300,
        maxPerPurchase: 4,
      },
    ],
  },
  {
    id: "18",
    title: "Fitness Expo 2024",
    description:
      "Get inspired at the Fitness Expo 2024. This one-day event will feature fitness classes, workshops, and product showcases for fitness enthusiasts.",
    venue: "Fitness Center",
    location: "San Diego, CA",
    imageUrl:
      "https://kzmleevqk1ps9yb70uod.lite.vusercontent.net/placeholder.svg?height=400&width=600",
    date: "2025-04-05",
    time: "9:00 AM - 5:00 PM",
    category: "Fitness",
    attendees: 700,
    featured: false,
    organizer: {
      id: "org-18",
      name: "Fitness Connect",
      description: "Promoting health and fitness",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    ticketTypes: [
      {
        id: "ticket-47",
        name: "VIP Pass",
        price: 99.99,
        available: 50,
        maxPerPurchase: 2,
      },
      {
        id: "ticket-48",
        name: "General Admission",
        price: 49.99,
        available: 500,
        maxPerPurchase: 4,
      },
    ],
  },
  {
    id: "19",
    title: "Music Awards 2024",
    description:
      "Celebrate the best in music at the Music Awards 2024. This one-night event will feature live performances, award presentations, and special guest appearances.",
    venue: "Concert Hall",
    location: "Nashville, TN",
    imageUrl:
      "https://kzmleevqk1ps9yb70uod.lite.vusercontent.net/placeholder.svg?height=400&width=600",
    date: "2025-04-05",
    time: "7:00 PM - 11:00 PM",
    category: "Music",
    attendees: 1000,
    featured: true,
    organizer: {
      id: "org-19",
      name: "Music Connect",
      description: "Celebrating musical excellence",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    ticketTypes: [
      {
        id: "ticket-49",
        name: "VIP Pass",
        price: 199.99,
        available: 50,
        maxPerPurchase: 2,
      },
      {
        id: "ticket-50",
        name: "General Admission",
        price: 99.99,
        available: 500,
        maxPerPurchase: 4,
      },
    ],
  },
  {
    id: "20",
    title: "Holiday Market 2024",
    description:
      "Get into the holiday spirit at the Holiday Market 2024. This three-day event will feature local vendors, holiday treats, and festive activities for the whole family.",
    venue: "Town Square",
    location: "Salt Lake City, UT",
    imageUrl:
      "https://kzmleevqk1ps9yb70uod.lite.vusercontent.net/placeholder.svg?height=400&width=600",
    date: "2025-04-05",
    time: "10:00 AM - 8:00 PM",
    category: "Holiday",
    attendees: 1500,
    featured: false,
    organizer: {
      id: "org-20",
      name: "Holiday Connect",
      description: "Spreading holiday cheer",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    ticketTypes: [
      {
        id: "ticket-51",
        name: "VIP Pass",
        price: 49.99,
        available: 100,
        maxPerPurchase: 2,
      },
      {
        id: "ticket-52",
        name: "General Admission",
        price: 19.99,
        available: 1000,
        maxPerPurchase: 4,
      },
    ],
  },
];

export async function getEventById(id: string): Promise<Event | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return events.find((event) => event.id === id) || null;
}

export async function updateTicketAvailability(
  eventId: string,
  ticketTypeId: string,
  newAvailability: number
): Promise<void> {
  // In a real application, this would update the database
  const event = events.find((e) => e.id === eventId);
  if (event) {
    const ticketType = event.ticketTypes.find((t) => t.id === ticketTypeId);
    if (ticketType) {
      ticketType.available = newAvailability;
    }
  }
}
