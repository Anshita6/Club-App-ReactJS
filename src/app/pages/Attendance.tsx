import React, { useState, useEffect } from "react";
import { Search, QrCode, CheckCircle2, XCircle, ScanLine } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, Button, Input, Table, TableHeader, TableRow, TableHead, TableBody, TableCell, Avatar, Badge } from "../components/ui";
import { useTheme } from "../contexts/ThemeContext";

const initialParticipants = [
  { id: "STU001", name: "Alice Freeman", email: "alice.f@university.edu", status: "Present", time: "09:05 AM" },
  { id: "STU002", name: "Bobby Singer", email: "b.singer@university.edu", status: "Present", time: "09:12 AM" },
  { id: "STU004", name: "Dean Winchester", email: "dean.w@university.edu", status: "Absent", time: "-" },
  { id: "STU006", name: "Frank Castle", email: "f.castle@university.edu", status: "Present", time: "09:25 AM" },
  { id: "STU007", name: "Gina Linetti", email: "gina.l@university.edu", status: "Absent", time: "-" },
];

export function Attendance() {
  const [scanning, setScanning] = useState(true);
  const [scanResult, setScanResult] = useState<null | { success: boolean, name?: string }>(null);
  const [participants, setParticipants] = useState(initialParticipants);
  const { theme } = useTheme();

  // Simulate scanning action
  useEffect(() => {
    if (!scanning) return;
    
    const timer = setTimeout(() => {
      setScanning(false);
      setScanResult({ success: true, name: "Dean Winchester" });
      
      // Update participant list
      setParticipants(prev => prev.map(p => 
        p.id === "STU004" ? { ...p, status: "Present", time: "09:30 AM" } : p
      ));
      
      // Reset scanner after 3 seconds
      setTimeout(() => {
        setScanResult(null);
        setScanning(true);
      }, 3000);
    }, 4000); // 4 seconds of scanning

    return () => clearTimeout(timer);
  }, [scanning]);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Attendance Tracking</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Scan QR codes or mark attendance manually.</p>
        </div>
        <div className="flex gap-2">
          <select className="h-10 rounded-xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-[#121212] px-4 py-2 text-sm text-slate-700 dark:text-slate-200 shadow-sm focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20 transition-all font-medium">
            <option>Event: Hackathon 2026</option>
            <option>Event: Weekly Meeting</option>
          </select>
          <Button variant="outline">Export CSV</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* QR Scanner Mock */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>QR Scanner</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className={`w-full aspect-square rounded-xl border-2 flex flex-col items-center justify-center p-6 relative overflow-hidden transition-colors duration-300 ${
              scanResult?.success 
                ? (theme === 'dark' ? 'bg-emerald-500/10 border-emerald-500/50' : 'bg-emerald-50 border-emerald-500') 
                : (theme === 'dark' ? 'bg-[#121212] border-dashed border-slate-700' : 'bg-slate-100 border-dashed border-slate-300')
            }`}>
              
              {scanning ? (
                <>
                  <ScanLine className="h-20 w-20 text-indigo-500 dark:text-indigo-400 mb-4 animate-pulse" />
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 text-center animate-pulse">Scanning...</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-2">Point at student's event QR code.</p>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/20 dark:via-indigo-400/20 to-transparent w-full h-[150%] animate-[scan_2s_ease-in-out_infinite]" />
                </>
              ) : scanResult?.success ? (
                <div className="flex flex-col items-center animate-in zoom-in duration-300">
                  <div className="h-20 w-20 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400 text-center">Scan Successful!</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100 text-center mt-2">{scanResult.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center">Marked Present</p>
                </div>
              ) : (
                <>
                  <QrCode className="h-20 w-20 text-slate-400 dark:text-slate-600 mb-4" />
                  <p className="text-sm text-slate-500 dark:text-slate-400 text-center">Camera inactive.</p>
                </>
              )}
            </div>
            <div className="w-full mt-4 flex gap-2">
              <Input placeholder="Enter Student ID manually..." className="flex-1 bg-white dark:bg-[#121212]" />
              <Button>Mark</Button>
            </div>
          </CardContent>
        </Card>

        {/* Participant List */}
        <Card className="lg:col-span-2">
          <div className="p-5 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/20 rounded-t-2xl">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500" />
              <Input placeholder="Search participants..." className="pl-9 bg-white dark:bg-[#121212]" />
            </div>
            <div className="text-sm font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-[#18181b] px-3 py-1.5 rounded-lg shadow-sm border border-slate-200/60 dark:border-slate-700">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">142</span> <span className="text-slate-400 dark:text-slate-500">/ 200</span> Present
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]"></TableHead>
                <TableHead>Participant</TableHead>
                <TableHead>Time Scanned</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {participants.map((p) => (
                <TableRow key={p.id}>
                  <TableCell>
                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 accent-indigo-600 dark:accent-indigo-500 cursor-pointer dark:bg-[#121212]" defaultChecked={p.status === "Present"} />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar fallback={p.name.split(' ').map(n => n[0]).join('')} className="h-8 w-8 text-xs bg-indigo-50 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300" />
                      <div>
                        <div className="font-medium text-slate-900 dark:text-slate-100 text-sm">{p.name}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{p.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-slate-500 dark:text-slate-400">{p.time}</TableCell>
                  <TableCell>
                    {p.status === "Present" ? (
                      <Badge variant="success" className="bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20">
                        <CheckCircle2 className="w-3 h-3 mr-1" /> Present
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-slate-500 dark:text-slate-400 dark:border-slate-700">
                        <XCircle className="w-3 h-3 mr-1" /> Absent
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
