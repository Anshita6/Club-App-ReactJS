import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Plus, Search, Calendar as CalendarIcon, MapPin, Clock, Users, AlertTriangle, List, Grid, CalendarX2 } from "lucide-react";
import { toast } from "sonner";
import { 
  Card, CardContent, CardHeader, CardTitle, Badge, Button, Input, Progress,
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle
} from "../components/ui";

const allEvents = [
  { 
    id: 1, 
    title: "Hackathon 2026: AI Solutions", 
    club: "Coding Club", 
    date: "Mar 20 - 22, 2026", 
    time: "48 Hours", 
    location: "Main Auditorium", 
    attendees: 350, 
    capacity: 500,
    status: "Registration Open",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  { 
    id: 2, 
    title: "Photography Workshop: Lighting", 
    club: "Photography Society", 
    date: "Mar 25, 2026", 
    time: "10:00 AM - 1:00 PM", 
    location: "Studio 2B", 
    attendees: 30, 
    capacity: 30,
    status: "Sold Out",
    image: "https://images.unsplash.com/photo-1554048665-d04a60216b23?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  { 
    id: 3, 
    title: "Spring Music Fest", 
    club: "Music Production", 
    date: "Apr 05, 2026", 
    time: "6:00 PM - 11:00 PM", 
    location: "Campus Amphitheater", 
    attendees: 840, 
    capacity: 1000,
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
];

export function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Event Created", {
      description: "The event has been scheduled and members will be notified.",
    });
    setIsModalOpen(false);
  };

  const filteredEvents = allEvents.filter(e => e.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out relative">
      
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Event</DialogTitle>
            <DialogDescription>
              Schedule a new event and allocate venue capacity.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCreateEvent} className="space-y-4 my-2">
            <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200/60 dark:border-amber-500/20 rounded-xl p-4 flex gap-3 text-amber-800 dark:text-amber-500 text-sm">
              <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-500" />
              <p>Conflict detected: <strong>Main Auditorium</strong> is already booked for "Robotics Workshop" on selected date.</p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Event Title</label>
              <Input placeholder="e.g. Annual Tech Symposium" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Date</label>
                <Input type="date" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Time</label>
                <Input type="time" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Venue / Location</label>
              <Input placeholder="e.g. Main Auditorium" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Capacity</label>
                <Input type="number" placeholder="500" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Club</label>
                <select className="h-10 w-full rounded-xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-[#121212] px-4 text-sm text-slate-700 dark:text-slate-200 shadow-sm focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20" required defaultValue="">
                  <option value="" disabled>Select Club...</option>
                  <option>Coding Club</option>
                  <option>Robotics Club</option>
                </select>
              </div>
            </div>
            <DialogFooter className="mt-6">
              <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
              <Button type="submit">Create Event</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Event Management</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Schedule, approve, and track all club events.</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Create Event
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between items-center">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500" />
          <Input 
            placeholder="Search events..." 
            className="pl-9" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg self-end sm:self-auto">
          <button 
            className={`p-1.5 rounded-md ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 shadow-sm text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
            onClick={() => setViewMode('grid')}
          >
            <Grid className="h-4 w-4" />
          </button>
          <button 
            className={`p-1.5 rounded-md ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 shadow-sm text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
            onClick={() => setViewMode('list')}
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>

      {filteredEvents.length === 0 ? (
        <Card className="flex flex-col items-center justify-center p-12 text-center border-dashed dark:border-slate-800 dark:bg-slate-800/30">
          <div className="h-16 w-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
            <CalendarX2 className="h-8 w-8 text-slate-400 dark:text-slate-500" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">No events found</h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 mb-6 max-w-sm">There are currently no events matching your criteria. Create a new event to get started.</p>
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Create Event
          </Button>
        </Card>
      ) : (
        viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 w-full relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent dark:from-slate-900/80" />
                  <div className="absolute top-3 left-3">
                    <Badge variant={
                      event.status === "Registration Open" ? "success" : 
                      event.status === "Sold Out" ? "danger" : "default"
                    } className="shadow-sm border-white/20 dark:border-white/10 border backdrop-blur-md bg-white/90 dark:bg-[#18181b]/90 text-slate-900 dark:text-slate-100">
                      {event.status}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="p-5 pb-2">
                  <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
                    {event.club}
                  </div>
                  <CardTitle className="text-lg line-clamp-1">{event.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="p-5 pt-0 pb-4 flex-1">
                  <div className="space-y-2 mt-2 mb-4">
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CalendarIcon className="h-4 w-4 mr-2 text-slate-400 dark:text-slate-500" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <Clock className="h-4 w-4 mr-2 text-slate-400 dark:text-slate-500" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <MapPin className="h-4 w-4 mr-2 text-slate-400 dark:text-slate-500" />
                      {event.location}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span>Capacity</span>
                      <span className="font-medium text-slate-700 dark:text-slate-300">{event.attendees} / {event.capacity}</span>
                    </div>
                    <Progress 
                      value={(event.attendees / event.capacity) * 100} 
                      indicatorClassName={(event.attendees / event.capacity) >= 1 ? 'bg-red-500 dark:bg-red-500' : (event.attendees / event.capacity) > 0.8 ? 'bg-amber-500 dark:bg-amber-500' : 'bg-indigo-600 dark:bg-indigo-500'}
                    />
                  </div>
                </CardContent>
                
                <div className="p-5 pt-4 mt-auto border-t border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/20">
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-1.5 text-slate-400 dark:text-slate-500" />
                    <span className="text-slate-600 dark:text-slate-400">{event.capacity - event.attendees} seats left</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => navigate('/event-registration')}>Manage Event</Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="flex flex-col sm:flex-row overflow-hidden hover:shadow-md transition-shadow">
                <div className="sm:w-48 h-32 sm:h-auto relative shrink-0">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col sm:flex-row p-5 gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                        {event.club}
                      </div>
                      <Badge variant={
                        event.status === "Registration Open" ? "success" : 
                        event.status === "Sold Out" ? "danger" : "default"
                      } className="scale-90 origin-left">
                        {event.status}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{event.title}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600 dark:text-slate-300">
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1.5 text-slate-400" /> {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1.5 text-slate-400" /> {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1.5 text-slate-400" /> {event.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end justify-between sm:border-l sm:border-slate-100 dark:sm:border-slate-800 sm:pl-5 sm:w-48 shrink-0 mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
                    <div className="w-full mb-3 sm:mb-0">
                      <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                        <span>Capacity</span>
                        <span className="font-medium text-slate-700 dark:text-slate-300">{event.attendees}/{event.capacity}</span>
                      </div>
                      <Progress 
                        value={(event.attendees / event.capacity) * 100} 
                        indicatorClassName={(event.attendees / event.capacity) >= 1 ? 'bg-red-500' : 'bg-indigo-600'}
                        className="h-1.5"
                      />
                    </div>
                    <Button variant="outline" size="sm" className="w-full sm:w-auto" onClick={() => navigate('/event-registration')}>Manage Event</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )
      )}
    </div>
  );
}
