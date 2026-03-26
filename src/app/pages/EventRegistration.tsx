import React from "react";
import { Search, Calendar as CalendarIcon, MapPin, Ticket } from "lucide-react";
import { Card, CardContent, Badge, Button, Input, Progress } from "../components/ui";
import { useNavigate } from "react-router";

const upcomingEvents = [
  { 
    id: 1, 
    title: "Web3 Developer Summit", 
    club: "Coding Club", 
    date: "Apr 15, 2026", 
    time: "9:00 AM", 
    location: "Tech Center Hall", 
    status: "Open",
    attendees: 120,
    capacity: 200,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 2, 
    title: "Battlebots Arena Challenge", 
    club: "Robotics Club", 
    date: "May 02, 2026", 
    time: "2:00 PM", 
    location: "Sports Complex", 
    status: "Filling Fast",
    attendees: 45,
    capacity: 50,
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 3, 
    title: "Indie Music Showcase", 
    club: "Music Production", 
    date: "May 10, 2026", 
    time: "7:30 PM", 
    location: "Amphitheater", 
    status: "Open",
    attendees: 300,
    capacity: 1000,
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 4, 
    title: "Portrait Photography Walk", 
    club: "Photography Society", 
    date: "Jun 05, 2026", 
    time: "10:00 AM", 
    location: "City Center Square", 
    status: "Waitlist",
    attendees: 30,
    capacity: 30,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export function EventRegistration() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Event Registration</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Discover and register for upcoming university events.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input placeholder="Search events by name, club..." className="pl-9" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {upcomingEvents.map((event) => (
          <Card key={event.id} className="flex flex-col overflow-hidden hover:-translate-y-1 transition-transform duration-200">
            <div className="h-48 w-full relative">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <Badge variant={event.status === "Open" ? "success" : event.status === "Waitlist" ? "warning" : "info"} className="mb-2 shadow-sm border-0">
                  {event.status}
                </Badge>
                <h3 className="text-lg font-bold text-white leading-tight line-clamp-2">{event.title}</h3>
              </div>
            </div>
            
            <CardContent className="p-4 flex-1 space-y-3">
              <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                {event.club}
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-slate-600">
                  <CalendarIcon className="h-4 w-4 mr-2 text-slate-400" />
                  {event.date} • {event.time}
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <MapPin className="h-4 w-4 mr-2 text-slate-400" />
                  <span className="line-clamp-1">{event.location}</span>
                </div>
              </div>
              <div className="pt-2">
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>Registration</span>
                  <span>{event.attendees}/{event.capacity}</span>
                </div>
                <Progress 
                  value={(event.attendees / event.capacity) * 100} 
                  indicatorClassName={event.status === 'Waitlist' ? 'bg-red-500' : event.status === 'Filling Fast' ? 'bg-amber-500' : 'bg-emerald-500'}
                />
              </div>
            </CardContent>
            
            <div className="p-4 pt-0 mt-auto">
              <Button className="w-full" disabled={event.status === "Waitlist"} onClick={() => navigate('/payments')}>
                <Ticket className="mr-2 h-4 w-4" />
                {event.status === "Waitlist" ? "Join Waitlist" : "Register Now"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
