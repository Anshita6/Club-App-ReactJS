import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { 
  Users, 
  Building2, 
  Calendar, 
  Percent,
  AlertCircle,
  Ticket,
  Award
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Button, Skeleton } from "../components/ui";
import { useTheme } from "../contexts/ThemeContext";

const engagementData = [
  { name: "Jan", members: 400, events: 24 },
  { name: "Feb", members: 300, events: 13 },
  { name: "Mar", members: 550, events: 38 },
  { name: "Apr", members: 450, events: 39 },
  { name: "May", members: 700, events: 48 },
  { name: "Jun", members: 600, events: 38 },
];

const revenueData = [
  { name: "Jan", revenue: 1200 },
  { name: "Feb", revenue: 2100 },
  { name: "Mar", revenue: 800 },
  { name: "Apr", revenue: 1600 },
  { name: "May", revenue: 2400 },
  { name: "Jun", revenue: 3200 },
];

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const gridColor = theme === "dark" ? "#334155" : "#e2e8f0";
  const textColor = theme === "dark" ? "#94a3b8" : "#64748b";
  const tooltipBg = theme === "dark" ? "#18181b" : "#ffffff";
  const tooltipBorder = theme === "dark" ? "#27272a" : "#e2e8f0";
  const tooltipText = theme === "dark" ? "#f1f5f9" : "#0f172a";
  const barHoverBg = theme === "dark" ? "#27272a" : "#f8fafc";

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <Skeleton className="h-8 w-64 mb-2" />
            <Skeleton className="h-4 w-48" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {Array(5).fill(0).map((_, i) => (
            <Card key={i}>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="w-full">
                    <Skeleton className="h-4 w-24 mb-3" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                  <Skeleton className="h-10 w-10 rounded-xl" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Array(2).fill(0).map((_, i) => (
            <Card key={i} className="flex flex-col">
              <CardHeader className="border-b border-slate-100/50 dark:border-slate-800/50">
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-64" />
              </CardHeader>
              <CardContent className="flex-1 pt-6">
                <Skeleton className="h-[300px] w-full rounded-lg" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Dashboard Overview</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Welcome back, James. Here's what's happening today.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate('/reports')}>View Reports</Button>
          <Button onClick={() => navigate('/announcements')}>New Announcement</Button>
        </div>
      </div>

      {/* 5 Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <Card className="cursor-pointer hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-colors" onClick={() => navigate('/members')}>
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Members</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">2,845</span>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-indigo-50/80 dark:bg-indigo-500/10 ring-1 ring-indigo-100 dark:ring-indigo-500/20"><Users className="h-5 w-5 text-indigo-600 dark:text-indigo-400" /></div>
            </div>
          </div>
        </Card>
        
        <Card className="cursor-pointer hover:border-purple-200 dark:hover:border-purple-500/30 transition-colors" onClick={() => navigate('/clubs')}>
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Clubs</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">42</span>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-purple-50/80 dark:bg-purple-500/10 ring-1 ring-purple-100 dark:ring-purple-500/20"><Building2 className="h-5 w-5 text-purple-600 dark:text-purple-400" /></div>
            </div>
          </div>
        </Card>

        <Card className="cursor-pointer hover:border-emerald-200 dark:hover:border-emerald-500/30 transition-colors" onClick={() => navigate('/events')}>
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Upcoming Events</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">18</span>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-500/10 ring-1 ring-emerald-100 dark:ring-emerald-500/20"><Calendar className="h-5 w-5 text-emerald-600 dark:text-emerald-400" /></div>
            </div>
          </div>
        </Card>

        <Card className="cursor-pointer hover:border-blue-200 dark:hover:border-blue-500/30 transition-colors" onClick={() => navigate('/attendance')}>
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Attendance Rate</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">84%</span>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-blue-50/80 dark:bg-blue-500/10 ring-1 ring-blue-100 dark:ring-blue-500/20"><Percent className="h-5 w-5 text-blue-600 dark:text-blue-400" /></div>
            </div>
          </div>
        </Card>

        <Card className="cursor-pointer hover:border-amber-200 dark:hover:border-amber-500/30 transition-colors" onClick={() => navigate('/payments')}>
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Pending Payments</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">34</span>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-50/80 dark:bg-amber-500/10 ring-1 ring-amber-100 dark:ring-amber-500/20"><AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" /></div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="flex flex-col">
          <CardHeader className="border-b border-slate-100/50 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20">
            <CardTitle>Event Participation</CardTitle>
            <CardDescription>Trends in event attendance vs membership</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pt-6">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart key="event-participation-chart" data={engagementData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid key="grid" strokeDasharray="3 3" vertical={false} stroke={gridColor} opacity={0.6} />
                  <XAxis key="x-axis" dataKey="name" axisLine={false} tickLine={false} tick={{ fill: textColor, fontSize: 12 }} dy={10} />
                  <YAxis key="y-axis" axisLine={false} tickLine={false} tick={{ fill: textColor, fontSize: 12 }} dx={-10} />
                  <Tooltip key="tooltip" contentStyle={{ borderRadius: '12px', border: `1px solid ${tooltipBorder}`, backgroundColor: tooltipBg, color: tooltipText, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' }} />
                  <Line key="line-members" type="monotone" dataKey="members" stroke={theme === "dark" ? "#818cf8" : "#4f46e5"} strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6, strokeWidth: 0 }} name="Membership" />
                  <Line key="line-events" type="monotone" dataKey="events" stroke={theme === "dark" ? "#c084fc" : "#a855f7"} strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6, strokeWidth: 0 }} name="Participation" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader className="border-b border-slate-100/50 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20">
            <CardTitle>Member Activity & Revenue</CardTitle>
            <CardDescription>Monthly dues and ticket sales</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pt-6">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart key="member-activity-chart" data={revenueData} margin={{ top: 0, right: 0, bottom: 0, left: -20 }}>
                  <CartesianGrid key="grid" strokeDasharray="3 3" vertical={false} stroke={gridColor} opacity={0.6} />
                  <XAxis key="x-axis" dataKey="name" axisLine={false} tickLine={false} tick={{ fill: textColor, fontSize: 12 }} dy={10} />
                  <YAxis key="y-axis" axisLine={false} tickLine={false} tick={{ fill: textColor, fontSize: 12 }} />
                  <Tooltip key="tooltip" cursor={{fill: barHoverBg}} contentStyle={{ borderRadius: '12px', border: `1px solid ${tooltipBorder}`, backgroundColor: tooltipBg, color: tooltipText, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' }} />
                  <Bar key="bar-revenue" dataKey="revenue" fill={theme === "dark" ? "#34d399" : "#10b981"} radius={[4, 4, 0, 0]} name="Revenue ($)" maxBarSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader className="border-b border-slate-100/50 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20 flex flex-row items-center justify-between py-4">
            <div>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates from your clubs and members</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {[
                { title: "John registered for Hackathon 2026", time: "10 minutes ago", icon: Ticket, color: "text-blue-500 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-500/10" },
                { title: "Sarah joined Robotics Club", time: "1 hour ago", icon: Users, color: "text-emerald-500 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
                { title: "Attendance marked for Music Fest", time: "3 hours ago", icon: Calendar, color: "text-indigo-500 dark:text-indigo-400", bg: "bg-indigo-50 dark:bg-indigo-500/10" },
                { title: "Certificate generated for Photography Walk", time: "Yesterday", icon: Award, color: "text-purple-500 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-500/10" },
                { title: "Payment completed for Robotics Workshop", time: "Yesterday", icon: Percent, color: "text-amber-500 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-500/10" }
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${activity.bg}`}>
                    <activity.icon className={`h-5 w-5 ${activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">{activity.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
