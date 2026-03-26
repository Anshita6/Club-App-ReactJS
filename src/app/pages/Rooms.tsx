import React from "react";
import { Plus, Users, DoorOpen, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, Badge, Button } from "../components/ui";

const rooms = [
  { name: "Main Auditorium", capacity: 500, type: "Hall", status: "Booked" },
  { name: "Tech Lab A", capacity: 40, type: "Lab", status: "Available" },
  { name: "Workshop 3", capacity: 60, type: "Workshop", status: "Booked" },
  { name: "Conference Rm 1", capacity: 20, type: "Meeting", status: "Available" },
];

export function Rooms() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Room & Resource Booking</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Manage venue capacities and scheduling conflicts.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Booking
        </Button>
      </div>

      {/* Capacity Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {rooms.map((room, i) => (
          <Card key={i} className={`border-l-4 ${room.status === 'Available' ? 'border-l-emerald-500 dark:border-l-emerald-400' : 'border-l-indigo-500 dark:border-l-indigo-400'} dark:bg-slate-800/50`}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{room.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{room.type}</p>
                </div>
                <DoorOpen className="h-5 w-5 text-slate-400 dark:text-slate-500" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                  <Users className="h-4 w-4 mr-1.5" />
                  {room.capacity}
                </div>
                <Badge variant={room.status === "Available" ? "success" : "default"} className={room.status === "Available" ? "dark:bg-emerald-500/10 dark:text-emerald-400" : "dark:bg-slate-700 dark:text-slate-200"}>{room.status}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Calendar Mock */}
      <Card className="dark:bg-slate-800/50">
        <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <CardTitle className="dark:text-slate-100">Booking Schedule - Today</CardTitle>
          <div className="flex items-center gap-4 text-sm dark:text-slate-300">
            <span className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-indigo-500"></div> Booked</span>
            <span className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-emerald-500"></div> Available</span>
          </div>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Timeline Header */}
            <div className="grid grid-cols-[150px_1fr_1fr_1fr_1fr_1fr] bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
              <div className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400 border-r border-slate-200 dark:border-slate-700">Room</div>
              <div className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400 border-r border-slate-200 dark:border-slate-700 text-center">09:00 AM</div>
              <div className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400 border-r border-slate-200 dark:border-slate-700 text-center">11:00 AM</div>
              <div className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400 border-r border-slate-200 dark:border-slate-700 text-center">01:00 PM</div>
              <div className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400 border-r border-slate-200 dark:border-slate-700 text-center">03:00 PM</div>
              <div className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400 text-center">05:00 PM</div>
            </div>
            
            {/* Rows */}
            {rooms.map((room, i) => (
              <div key={i} className="grid grid-cols-[150px_1fr_1fr_1fr_1fr_1fr] border-b border-slate-100 dark:border-slate-800 relative group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <div className="p-4 text-sm font-medium text-slate-900 dark:text-slate-200 border-r border-slate-100 dark:border-slate-800 bg-white dark:bg-[#18181b]">{room.name}</div>
                <div className="border-r border-slate-100 dark:border-slate-800 p-1">
                  {room.status === 'Booked' && i % 2 === 0 && (
                    <div className="w-full h-full bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 rounded text-xs font-medium p-2 flex items-center justify-center">
                      Coding Club
                    </div>
                  )}
                </div>
                <div className="border-r border-slate-100 dark:border-slate-800 p-1"></div>
                <div className="border-r border-slate-100 dark:border-slate-800 p-1">
                  {room.status === 'Booked' && i % 2 !== 0 && (
                    <div className="w-full h-full bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 rounded text-xs font-medium p-2 flex items-center justify-center">
                      Robotics WS
                    </div>
                  )}
                </div>
                <div className="border-r border-slate-100 dark:border-slate-800 p-1">
                  {i === 0 && (
                    <div className="w-full h-full bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 rounded text-xs font-medium p-2 flex items-center justify-center">
                      Event Setup
                    </div>
                  )}
                </div>
                <div className="p-1"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}