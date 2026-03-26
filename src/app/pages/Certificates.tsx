import React, { useState } from "react";
import { Award, Download, CheckCircle, Search, X, Share2, Award as AwardIcon } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle, Button, Input, Table, TableHeader, TableRow, TableHead, TableBody, TableCell, Avatar, Badge } from "../components/ui";

export function Certificates() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("All Events");
  
  const handleShare = () => {
    toast.success("Link Copied", { description: "Certificate link has been copied to clipboard." });
  };
  
  const handleDownload = () => {
    toast.success("Downloading", { description: "Certificate PDF is downloading." });
  };

  const allItems = [1, 2, 3];
  const items = allItems.filter(item => 
    `Student Name ${item}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Certificate Generation</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Issue official event participation certificates.</p>
        </div>
        <div className="flex gap-2">
          <select 
            className="h-10 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
          >
            <option value="All Events">All Events</option>
            <option value="Hackathon 2026">Hackathon 2026</option>
            <option value="Robotics Workshop">Robotics Workshop</option>
          </select>
          <Button onClick={() => toast.success("Certificates Generated", { description: "Generating certificates for all eligible students." })}>
            Generate All (142)
          </Button>
        </div>
      </div>

      <Card>
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/50 dark:bg-slate-800/20">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500" />
            <Input 
              placeholder="Search students..." 
              className="pl-9 bg-white dark:bg-[#121212]" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Only showing students with verified attendance.</p>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <div className="h-16 w-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <AwardIcon className="h-8 w-8 text-slate-400 dark:text-slate-500" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">No certificates found</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-sm">No students match your current search criteria.</p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar fallback={`S${item}`} className="h-8 w-8 text-xs bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400" />
                      <div>
                        <div className="font-medium text-slate-900 dark:text-slate-100">Student Name {item}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">STU00{item}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-slate-600 dark:text-slate-300">Hackathon 2026</TableCell>
                  <TableCell>
                    <Badge variant={item === 1 ? "success" : "default"} className={item === 1 ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400" : ""}>
                      {item === 1 ? "Issued" : "Pending"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    {item === 1 ? (
                      <>
                        <Button variant="ghost" size="icon" onClick={() => setPreviewOpen(true)}>
                          <Search className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={handleDownload}>
                          <Download className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={handleShare}>
                          <Share2 className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="outline" size="sm" onClick={() => setPreviewOpen(true)}>Preview</Button>
                        <Button size="sm">
                          <Award className="h-4 w-4 mr-1" />
                          Generate
                        </Button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Card>

      {/* Certificate Preview Modal */}
      {previewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setPreviewOpen(false)} />
          <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Certificate Preview</h3>
              <button onClick={() => setPreviewOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-8 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-x-auto">
              {/* Mock Certificate Design */}
              <div className="w-[600px] shrink-0 h-[400px] bg-white border-8 border-indigo-900 dark:border-indigo-800 p-8 flex flex-col items-center justify-center text-center shadow-2xl relative">
                <div className="absolute top-4 left-4 h-16 w-16 opacity-10">
                  <Award className="h-full w-full text-indigo-900" />
                </div>
                <h1 className="text-4xl font-serif text-slate-900 mb-2">Certificate of Participation</h1>
                <p className="text-slate-500 mb-6">This is proudly presented to</p>
                <h2 className="text-3xl font-bold text-indigo-600 mb-6 border-b-2 border-indigo-100 pb-2 px-12">Student Name 1</h2>
                <p className="text-slate-600 max-w-md">
                  For successfully completing the <strong>Hackathon 2026</strong> organized by the Coding Club on March 20, 2026.
                </p>
                <div className="w-full flex justify-between px-12 mt-12">
                  <div className="border-t border-slate-400 pt-2 w-32">
                    <p className="text-xs font-medium text-slate-700">Club President</p>
                  </div>
                  <div className="border-t border-slate-400 pt-2 w-32">
                    <p className="text-xs font-medium text-slate-700">University Admin</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-2 bg-slate-50/50 dark:bg-slate-800/50">
              <Button variant="outline" onClick={() => setPreviewOpen(false)}>Close</Button>
              <Button onClick={handleDownload}>
                <Download className="h-4 w-4 mr-2" /> Download PDF
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
