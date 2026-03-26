import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Plus, Search, Filter, Users, Building2, Calendar, ExternalLink, Edit2, Trash2, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { 
  Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter, 
  Badge, Button, Input, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle
} from "../components/ui";

const initialClubs = [
  { id: 1, name: "Coding Club", category: "Technology", members: 245, eventsCount: 12, status: "Active", leader: "Sarah Jenkins", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 2, name: "Robotics Club", category: "Engineering", members: 112, eventsCount: 5, status: "Active", leader: "Michael Chang", image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 3, name: "Music Production", category: "Arts", members: 84, eventsCount: 8, status: "Active", leader: "David O", image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 4, name: "Photography Society", category: "Arts", members: 156, eventsCount: 14, status: "Active", leader: "Emma Stone", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 5, name: "Debate Society", category: "Academic", members: 64, eventsCount: 3, status: "Inactive", leader: "James Wilson", image: "https://images.unsplash.com/photo-1475721025870-24606f5b7218?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 6, name: "Green Earth", category: "Environment", members: 92, eventsCount: 6, status: "Active", leader: "Lisa Chen", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
];

export function Clubs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [clubsList, setClubsList] = useState(initialClubs);
  const [clubToDelete, setClubToDelete] = useState<number | null>(null);
  const navigate = useNavigate();

  const filteredClubs = clubsList.filter(club => 
    club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    club.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const confirmDelete = () => {
    if (clubToDelete !== null) {
      setClubsList(prev => prev.filter(c => c.id !== clubToDelete));
      toast.success("Club Deleted", {
        description: "The club and all its associations have been removed.",
      });
      setClubToDelete(null);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      
      <Dialog open={clubToDelete !== null} onOpenChange={(open) => !open && setClubToDelete(null)}>
        <DialogContent>
          <DialogHeader>
            <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center mb-4">
              <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-500" />
            </div>
            <DialogTitle>Delete Club?</DialogTitle>
            <DialogDescription>
              Are you sure you want to permanently delete this club? This action cannot be undone and will remove all associated members and event history.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-6">
            <Button variant="outline" onClick={() => setClubToDelete(null)}>Cancel</Button>
            <Button variant="danger" onClick={confirmDelete}>Delete Club</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Club Management</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Manage all university student clubs and organizations.</p>
        </div>
        <Button className="shrink-0" onClick={() => toast.info("Create form opened")}>
          <Plus className="mr-2 h-4 w-4" />
          Create New Club
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500" />
          <Input 
            placeholder="Search clubs by name, category..." 
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="shrink-0">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
        <select className="h-10 rounded-xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-[#121212] px-4 py-2 text-sm text-slate-700 dark:text-slate-200 shadow-sm focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20 transition-all">
          <option>All Categories</option>
          <option>Technology</option>
          <option>Arts</option>
          <option>Academic</option>
        </select>
      </div>

      {filteredClubs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-white dark:bg-[#18181b] rounded-xl border border-slate-200 dark:border-slate-800 border-dashed">
          <div className="h-16 w-16 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-4">
            <Search className="h-8 w-8 text-slate-400 dark:text-slate-500" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">No clubs found</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
            We couldn't find any clubs matching your search criteria. Try adjusting your filters or search terms.
          </p>
          <Button variant="outline" className="mt-6" onClick={() => setSearchQuery("")}>
            Clear Search
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.map((club) => (
            <Card key={club.id} className="overflow-hidden flex flex-col hover:shadow-md transition-shadow relative group">
              <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                <Button variant="outline" size="icon" className="h-8 w-8 bg-white/90 dark:bg-[#18181b]/90 hover:bg-white dark:hover:bg-[#18181b] text-slate-700 dark:text-slate-200 backdrop-blur-sm border-0">
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8 bg-white/90 dark:bg-[#18181b]/90 hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-500 text-slate-700 dark:text-slate-200 backdrop-blur-sm border-0"
                  onClick={() => setClubToDelete(club.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="h-32 w-full relative bg-slate-200 dark:bg-slate-800">
                <img src={club.image} alt={club.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 dark:from-slate-900/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <Badge variant={club.status === "Active" ? "success" : "default"} className="shadow-sm">
                    {club.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{club.name}</CardTitle>
                    <CardDescription className="mt-1">{club.category}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pb-4 flex-1">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <Building2 className="h-4 w-4 mr-2 text-slate-400 dark:text-slate-500" />
                    <span>Led by <span className="font-medium text-slate-900 dark:text-slate-100">{club.leader}</span></span>
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <Users className="h-4 w-4 mr-2 text-slate-400 dark:text-slate-500" />
                    <span>{club.members} active members</span>
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <Calendar className="h-4 w-4 mr-2 text-slate-400 dark:text-slate-500" />
                    <span>{club.eventsCount} total events</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="pt-0 flex gap-2">
                <Button variant="outline" className="w-full" onClick={() => navigate('/members')}>Manage Members</Button>
                <Button variant="ghost" size="icon" className="shrink-0" onClick={() => navigate('/events')}>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
