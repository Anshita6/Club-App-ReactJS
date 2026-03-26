import React from "react";
import { Download, Award, TrendingUp, TrendingDown, FileText, Filter } from "lucide-react";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, AreaChart, Area
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Button, Table, TableHeader, TableRow, TableHead, TableBody, TableCell, Avatar, Badge, Progress } from "../components/ui";
import { useTheme } from "../contexts/ThemeContext";

const eventPartData = [
  { name: "Jan", attendance: 400 }, { name: "Feb", attendance: 300 },
  { name: "Mar", attendance: 550 }, { name: "Apr", attendance: 450 },
  { name: "May", attendance: 700 }, { name: "Jun", attendance: 850 }
];

const clubGrowthData = [
  { name: "W1", coding: 120, robotics: 80, music: 40 },
  { name: "W2", coding: 135, robotics: 90, music: 45 },
  { name: "W3", coding: 160, robotics: 95, music: 55 },
  { name: "W4", coding: 200, robotics: 105, music: 70 },
];

const revenueTrendsData = [
  { name: "Q1", dues: 4000, tickets: 2400 },
  { name: "Q2", dues: 3000, tickets: 1398 },
  { name: "Q3", dues: 2000, tickets: 9800 },
  { name: "Q4", dues: 2780, tickets: 3908 },
];

const topMembers = [
  { id: "STU001", name: "Alice Freeman", club: "Coding Club", score: 98, attendance: "100%", trend: "up" },
  { id: "STU042", name: "David Chen", club: "Robotics Club", score: 92, attendance: "95%", trend: "up" },
  { id: "STU015", name: "Sarah Jenkins", club: "Photography Society", score: 88, attendance: "90%", trend: "down" },
  { id: "STU088", name: "Marcus Johnson", club: "Music Production", score: 85, attendance: "85%", trend: "up" },
  { id: "STU003", name: "Cassie Blake", club: "Debate Society", score: 82, attendance: "80%", trend: "down" },
];

export function Reports() {
  const { theme } = useTheme();
  
  const gridColor = theme === "dark" ? "#334155" : "#e2e8f0";
  const textColor = theme === "dark" ? "#94a3b8" : "#64748b";
  const tooltipBg = theme === "dark" ? "#18181b" : "#ffffff";
  const tooltipBorder = theme === "dark" ? "#27272a" : "#e2e8f0";
  const tooltipText = theme === "dark" ? "#f1f5f9" : "#0f172a";
  const barHoverBg = theme === "dark" ? "#27272a" : "#f1f5f9";

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Reports & Analytics</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Comprehensive insights into club system performance.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      <Card className="bg-slate-50/50 dark:bg-slate-800/20 border-dashed dark:border-slate-800">
        <div className="p-4 flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium text-sm mr-2 w-full sm:w-auto">
            <Filter className="h-4 w-4" /> Filters
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full flex-1">
            <select className="h-10 rounded-xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-[#121212] px-4 py-2 text-sm text-slate-700 dark:text-slate-200 shadow-sm focus:border-indigo-500 focus:outline-none w-full">
              <option>Last 6 Months</option>
              <option>This Year</option>
              <option>Last Year</option>
            </select>
            <select className="h-10 rounded-xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-[#121212] px-4 py-2 text-sm text-slate-700 dark:text-slate-200 shadow-sm focus:border-indigo-500 focus:outline-none w-full">
              <option>All Clubs</option>
              <option>Coding Club</option>
              <option>Robotics Club</option>
              <option>Music Production</option>
            </select>
            <select className="h-10 rounded-xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-[#121212] px-4 py-2 text-sm text-slate-700 dark:text-slate-200 shadow-sm focus:border-indigo-500 focus:outline-none w-full">
              <option>All Event Types</option>
              <option>Workshops</option>
              <option>Hackathons</option>
              <option>Socials</option>
            </select>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Event Participation */}
        <Card>
          <CardHeader>
            <CardTitle>Event Participation</CardTitle>
            <CardDescription>Total attendance across all events per month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart key="reports-event-part" data={eventPartData}>
                  <CartesianGrid key="grid" strokeDasharray="3 3" vertical={false} stroke={gridColor} />
                  <XAxis key="x-axis" dataKey="name" axisLine={false} tickLine={false} tick={{ fill: textColor }} dy={10} />
                  <YAxis key="y-axis" axisLine={false} tickLine={false} tick={{ fill: textColor }} />
                  <Tooltip key="tooltip" contentStyle={{ borderRadius: '8px', border: `1px solid ${tooltipBorder}`, backgroundColor: tooltipBg, color: tooltipText, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Line key="line-attendance" type="monotone" dataKey="attendance" stroke={theme === "dark" ? "#818cf8" : "#4f46e5"} strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Club Growth */}
        <Card>
          <CardHeader>
            <CardTitle>Club Member Growth</CardTitle>
            <CardDescription>Weekly new member registrations by top clubs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart key="reports-club-growth" data={clubGrowthData}>
                  <CartesianGrid key="grid" strokeDasharray="3 3" vertical={false} stroke={gridColor} />
                  <XAxis key="x-axis" dataKey="name" axisLine={false} tickLine={false} tick={{ fill: textColor }} dy={10} />
                  <YAxis key="y-axis" axisLine={false} tickLine={false} tick={{ fill: textColor }} />
                  <Tooltip key="tooltip" contentStyle={{ borderRadius: '8px', border: `1px solid ${tooltipBorder}`, backgroundColor: tooltipBg, color: tooltipText, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Area key="area-coding" type="monotone" dataKey="coding" stackId="1" stroke={theme === "dark" ? "#818cf8" : "#4f46e5"} fill={theme === "dark" ? "#818cf8" : "#4f46e5"} fillOpacity={0.2} />
                  <Area key="area-robotics" type="monotone" dataKey="robotics" stackId="1" stroke={theme === "dark" ? "#34d399" : "#10b981"} fill={theme === "dark" ? "#34d399" : "#10b981"} fillOpacity={0.2} />
                  <Area key="area-music" type="monotone" dataKey="music" stackId="1" stroke={theme === "dark" ? "#fbbf24" : "#f59e0b"} fill={theme === "dark" ? "#fbbf24" : "#f59e0b"} fillOpacity={0.2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Revenue Trends */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
            <CardDescription>Income from membership dues vs ticket sales</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart key="reports-revenue-trends" data={revenueTrendsData}>
                  <CartesianGrid key="grid" strokeDasharray="3 3" vertical={false} stroke={gridColor} />
                  <XAxis key="x-axis" dataKey="name" axisLine={false} tickLine={false} tick={{ fill: textColor }} dy={10} />
                  <YAxis key="y-axis" axisLine={false} tickLine={false} tick={{ fill: textColor }} />
                  <Tooltip key="tooltip" contentStyle={{ borderRadius: '8px', border: `1px solid ${tooltipBorder}`, backgroundColor: tooltipBg, color: tooltipText, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} cursor={{fill: barHoverBg}} />
                  <Bar key="bar-dues" dataKey="dues" fill={theme === "dark" ? "#a78bfa" : "#8b5cf6"} radius={[4, 4, 0, 0]} name="Membership Dues" />
                  <Bar key="bar-tickets" dataKey="tickets" fill={theme === "dark" ? "#38bdf8" : "#0ea5e9"} radius={[4, 4, 0, 0]} name="Event Tickets" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Member Activity Analytics Dashboard */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              Member Activity Analytics
            </CardTitle>
            <CardDescription>Top performing members based on participation and attendance</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member</TableHead>
                  <TableHead>Primary Club</TableHead>
                  <TableHead>Participation Score</TableHead>
                  <TableHead>Attendance Rate</TableHead>
                  <TableHead className="text-right">Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar fallback={member.name.split(' ').map(n=>n[0]).join('')} className="h-8 w-8 text-xs bg-indigo-50 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300" />
                        <div>
                          <div className="font-medium text-slate-900 dark:text-slate-100">{member.name}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">{member.id}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-slate-600 dark:text-slate-300">{member.club}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 max-w-[120px]">
                        <span className="font-medium text-slate-900 dark:text-slate-100">{member.score}</span>
                        <Progress value={member.score} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="success" className="bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">{member.attendance}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      {member.trend === 'up' ? (
                        <TrendingUp className="h-5 w-5 text-emerald-500 dark:text-emerald-400 inline-block" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-red-500 dark:text-red-400 inline-block" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
