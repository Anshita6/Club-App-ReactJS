import React, { useState } from "react";
import { Download, Plus, Search, Filter, MoreHorizontal, UsersRound } from "lucide-react";
import { toast } from "sonner";
import { 
  Card, Button, Input, Badge, Table, TableHeader, TableRow, TableHead, TableBody, TableCell, Avatar,
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger
} from "../components/ui";

const allMembersData = [
  { id: "STU001", name: "Alice Freeman", email: "alice.f@university.edu", role: "President", club: "Coding Club", joinDate: "Aug 12, 2024", status: "Active", attendance: "95%" },
  { id: "STU002", name: "Bobby Singer", email: "b.singer@university.edu", role: "Member", club: "Coding Club", joinDate: "Sep 01, 2024", status: "Active", attendance: "82%" },
  { id: "STU003", name: "Cassie Blake", email: "c.blake@university.edu", role: "Treasurer", club: "Photography Society", joinDate: "Aug 15, 2024", status: "Active", attendance: "100%" },
  { id: "STU004", name: "Dean Winchester", email: "dean.w@university.edu", role: "Member", club: "Robotics Club", joinDate: "Oct 10, 2024", status: "Pending Payment", attendance: "45%" },
  { id: "STU005", name: "Elena Gilbert", email: "elena.g@university.edu", role: "Secretary", club: "Debate Society", joinDate: "Aug 20, 2024", status: "Inactive", attendance: "10%" },
  { id: "STU006", name: "Frank Castle", email: "f.castle@university.edu", role: "Member", club: "Robotics Club", joinDate: "Sep 05, 2024", status: "Active", attendance: "78%" },
  { id: "STU007", name: "Gina Linetti", email: "gina.l@university.edu", role: "Member", club: "Music Production", joinDate: "Nov 01, 2024", status: "Active", attendance: "88%" },
];

export function Members() {
  const [members] = useState(allMembersData);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [clubFilter, setClubFilter] = useState("All Clubs");

  const filteredMembers = members.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) || m.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClub = clubFilter === "All Clubs" || m.club === clubFilter;
    return matchesSearch && matchesClub;
  });

  const handleExport = () => {
    toast.success("CSV Export Started", {
      description: "Your file will download shortly.",
    });
  };

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Member Added Successfully", {
      description: "A welcome email has been sent to the new member.",
    });
    setIsAddDialogOpen(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Members Directory</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">View and manage all students enrolled in clubs.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExport}>
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
          
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Member
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Member</DialogTitle>
                <DialogDescription>
                  Enter the student's details below to enroll them in a club.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddMember} className="space-y-4 my-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                  <Input placeholder="e.g. Jane Doe" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                  <Input type="email" placeholder="e.g. student@university.edu" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Assign to Club</label>
                  <select className="h-10 w-full rounded-xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-[#121212] px-4 py-2 text-sm text-slate-700 dark:text-slate-200 shadow-sm focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20" required defaultValue="">
                    <option value="" disabled>Select a club...</option>
                    <option>Coding Club</option>
                    <option>Robotics Club</option>
                    <option>Photography Society</option>
                  </select>
                </div>
                <DialogFooter className="mt-6">
                  <Button type="button" variant="ghost" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
                  <Button type="submit">Add Member</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card>
        <div className="p-5 border-b border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row gap-4 items-center bg-slate-50/50 dark:bg-slate-800/20 rounded-t-2xl">
          <div className="relative flex-1 w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500" />
            <Input 
              placeholder="Search members..." 
              className="pl-9 bg-white dark:bg-[#121212]" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <select 
              className="h-10 rounded-xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-[#121212] px-4 py-2 text-sm text-slate-700 dark:text-slate-200 shadow-sm focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20 transition-all flex-1 sm:flex-none"
              value={clubFilter}
              onChange={(e) => setClubFilter(e.target.value)}
            >
              <option value="All Clubs">All Clubs</option>
              <option value="Coding Club">Coding Club</option>
              <option value="Robotics Club">Robotics Club</option>
            </select>
            <select className="h-10 rounded-xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-[#121212] px-4 py-2 text-sm text-slate-700 dark:text-slate-200 shadow-sm focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20 transition-all flex-1 sm:flex-none">
              <option>All Status</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Inactive</option>
            </select>
            <Button variant="outline" size="icon" className="shrink-0">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {filteredMembers.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <div className="h-16 w-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <UsersRound className="h-8 w-8 text-slate-400 dark:text-slate-500" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">No members found</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-sm">We couldn't find any members matching your current filters.</p>
            {(searchQuery || clubFilter !== "All Clubs") && (
              <Button variant="outline" className="mt-4" onClick={() => { setSearchQuery(""); setClubFilter("All Clubs"); }}>
                Clear Filters
              </Button>
            )}
          </div>
        ) : (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member</TableHead>
                  <TableHead>Club & Role</TableHead>
                  <TableHead>Joined Date</TableHead>
                  <TableHead>Attendance</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar fallback={member.name.split(' ').map(n => n[0]).join('')} className="bg-indigo-50 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300" />
                        <div>
                          <div className="font-medium text-slate-900 dark:text-slate-100">{member.name}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">{member.id} • {member.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm font-medium text-slate-900 dark:text-slate-200">{member.club}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{member.role}</div>
                    </TableCell>
                    <TableCell className="text-sm text-slate-500 dark:text-slate-400">
                      {member.joinDate}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{member.attendance}</span>
                        <div className="w-16 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${parseInt(member.attendance) > 80 ? 'bg-emerald-500' : parseInt(member.attendance) > 50 ? 'bg-amber-500' : 'bg-red-500'}`}
                            style={{ width: member.attendance }}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          member.status === "Active" ? "success" : 
                          member.status === "Pending Payment" ? "warning" : 
                          "danger"
                        }
                      >
                        {member.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <p className="text-sm text-slate-500 dark:text-slate-400">Showing {filteredMembers.length} of {allMembersData.length} members</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm" disabled>Next</Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}
