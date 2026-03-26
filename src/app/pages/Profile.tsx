import React from "react";
import { useNavigate } from "react-router";
import { Mail, Briefcase, MapPin, Calendar, Award, Building2 } from "lucide-react";
import { Card, CardContent, Button, Badge, Avatar } from "../components/ui";

export function Profile() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out max-w-5xl mx-auto">
      {/* Profile Header */}
      <div className="relative h-48 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 overflow-hidden shadow-sm">
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
      </div>
      
      <div className="relative px-4 sm:px-6 pb-6 pt-0 sm:-mt-16 -mt-12 flex flex-col sm:flex-row items-center sm:items-end gap-6 text-center sm:text-left">
        <div className="h-32 w-32 rounded-full border-4 border-white dark:border-[#121212] bg-white dark:bg-slate-800 overflow-hidden shadow-md z-10 shrink-0">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="James Doe" className="h-full w-full object-cover" />
        </div>
        <div className="flex-1 z-10 pb-2">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">James Doe</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium mt-1">Computer Science Major • Senior Year</p>
        </div>
        <div className="flex gap-2 z-10 pb-2">
          <Button variant="outline" onClick={() => navigate('/settings')}>Edit Profile</Button>
          <Button>View Public Profile</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Info */}
        <Card className="lg:col-span-1 h-max dark:bg-slate-800/50 dark:border-slate-700">
          <CardContent className="p-6 space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2 mb-4">Contact Information</h3>
            <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
              <Mail className="h-4 w-4 mr-3 text-slate-400 dark:text-slate-500" />
              j.doe@university.edu
            </div>
            <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
              <Briefcase className="h-4 w-4 mr-3 text-slate-400 dark:text-slate-500" />
              System Admin Role
            </div>
            <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
              <MapPin className="h-4 w-4 mr-3 text-slate-400 dark:text-slate-500" />
              Campus Dorms, Block A
            </div>
            <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
              <Calendar className="h-4 w-4 mr-3 text-slate-400 dark:text-slate-500" />
              Joined Aug 2023
            </div>
          </CardContent>
        </Card>

        {/* Right Column: Activity */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="dark:bg-slate-800/50 dark:border-slate-700">
            <CardContent className="p-6">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2 mb-4 flex items-center">
                <Building2 className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" /> Joined Clubs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Coding Club", role: "President", bg: "bg-indigo-100 dark:bg-indigo-500/10", text: "text-indigo-600 dark:text-indigo-400" },
                  { name: "Robotics Club", role: "Member", bg: "bg-emerald-100 dark:bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400" }
                ].map((club, i) => (
                  <div key={i} className="flex items-center p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                    <div className={`w-10 h-10 rounded ${club.bg} flex items-center justify-center mr-3 shrink-0`}>
                      <Building2 className={`h-5 w-5 ${club.text}`} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-100 text-sm">{club.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{club.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-slate-800/50 dark:border-slate-700">
            <CardContent className="p-6">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2 mb-4 flex items-center">
                <Award className="h-4 w-4 mr-2 text-amber-500" /> Earned Certificates
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Hackathon 2025 Winner", date: "Oct 2025" },
                  { title: "Intro to AI Workshop", date: "Sep 2025" },
                ].map((cert, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 mr-3 text-slate-400 dark:text-slate-500" />
                      <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{cert.title}</span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{cert.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
