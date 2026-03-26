import React, { useState } from "react";
import { Bell, Pin, Clock, MoreHorizontal, MessageSquareOff } from "lucide-react";
import { Card, CardContent, Button, Avatar, Badge } from "../components/ui";

const allAnnouncements = [
  {
    id: 1,
    title: "Urgent: Venue Change for Web3 Summit",
    description: "Please note that the Web3 Developer Summit tomorrow has been moved from the Main Auditorium to the Tech Center Hall due to technical upgrades. All registration tickets remain valid.",
    author: "James Doe",
    authorRole: "System Admin",
    timestamp: "2 hours ago",
    pinned: true,
    club: "System",
  },
  {
    id: 2,
    title: "Hackathon Registration closes in 24 hours!",
    description: "Final call for Hackathon 2026 registrations. Make sure to form your teams and submit your project proposals before the deadline. Late entries will not be accepted.",
    author: "Sarah Jenkins",
    authorRole: "President",
    timestamp: "1 day ago",
    pinned: false,
    club: "Coding Club",
  },
  {
    id: 3,
    title: "Call for Volunteers: Music Fest",
    description: "We need 20 volunteers for stage setup and crowd control during the upcoming Spring Music Fest. Volunteer hours will be officially credited to your certificates.",
    author: "David O",
    authorRole: "Event Coordinator",
    timestamp: "3 days ago",
    pinned: false,
    club: "Music Production",
  }
];

export function Announcements() {
  const [announcements, setAnnouncements] = useState(allAnnouncements);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Announcements</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Latest updates from university administration and club leaders.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setAnnouncements([])} className="hidden sm:flex">Clear All</Button>
          <Button onClick={() => setAnnouncements(allAnnouncements)}>
            <Bell className="mr-2 h-4 w-4" />
            Post Announcement
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {announcements.length === 0 ? (
          <Card className="flex flex-col items-center justify-center p-12 text-center border-dashed dark:border-slate-800 dark:bg-slate-800/30">
            <div className="h-16 w-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <MessageSquareOff className="h-8 w-8 text-slate-400 dark:text-slate-500" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">No announcements available</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 mb-6 max-w-sm">There are no new updates or announcements at this time. Check back later.</p>
            <Button onClick={() => setAnnouncements(allAnnouncements)}>
              <Bell className="mr-2 h-4 w-4" />
              Add Announcement
            </Button>
          </Card>
        ) : (
          announcements.map((announcement) => (
            <Card key={announcement.id} className={`overflow-hidden dark:bg-slate-800/50 ${announcement.pinned ? 'border-indigo-200 dark:border-indigo-500/30 shadow-indigo-100/50 dark:shadow-indigo-900/20' : 'dark:border-slate-700'}`}>
              {announcement.pinned && (
                <div className="bg-indigo-50 dark:bg-indigo-500/10 px-4 py-2 border-b border-indigo-100 dark:border-indigo-500/20 flex items-center text-xs font-semibold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
                  <Pin className="w-3 h-3 mr-2" />
                  Pinned Announcement
                </div>
              )}
              <CardContent className="p-5">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={announcement.club === "System" ? "danger" : "default"} className="dark:bg-slate-700 dark:text-slate-200">
                        {announcement.club}
                      </Badge>
                      <span className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                        <Clock className="w-3 h-3 mr-1" />
                        {announcement.timestamp}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{announcement.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{announcement.description}</p>
                    
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center gap-3">
                      <Avatar fallback={announcement.author.split(' ').map(n=>n[0]).join('')} className="w-8 h-8 text-xs bg-slate-100 dark:bg-slate-700 dark:text-slate-200" />
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-200 leading-none">{announcement.author}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{announcement.authorRole}</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="shrink-0 text-slate-400 dark:hover:bg-slate-800">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
