import React, { useState } from "react";
import { Download, Search, FileText, Check, AlertCircle, Mail, Receipt } from "lucide-react";
import { toast } from "sonner";
import { 
  Card, CardContent, Button, Input, Table, TableHeader, TableRow, TableHead, TableBody, TableCell, Badge, Avatar,
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle
} from "../components/ui";

const allPaymentsData = [
  { id: "TXN-7A8B9C", member: "Dean Winchester", event: "Membership Dues 2026", amount: "$50.00", status: "Paid", date: "Mar 10, 2026" },
  { id: "TXN-4F2D1E", member: "Alice Freeman", event: "Hackathon Registration", amount: "$15.00", status: "Paid", date: "Mar 11, 2026" },
  { id: "TXN-9X8Y7Z", member: "Bobby Singer", event: "Membership Dues 2026", amount: "$50.00", status: "Pending", date: "-" },
  { id: "TXN-2M3N4P", member: "Elena Gilbert", event: "Photography Workshop", amount: "$25.00", status: "Paid", date: "Mar 12, 2026" },
  { id: "TXN-5Q6R7S", member: "Frank Castle", event: "Robotics Kit Deposit", amount: "$100.00", status: "Paid", date: "Mar 12, 2026" },
  { id: "TXN-8T9U0V", member: "Gina Linetti", event: "Membership Dues 2026", amount: "$50.00", status: "Pending", date: "-" },
];

export function Payments() {
  const [payments] = useState(allPaymentsData);
  const [isReminderOpen, setIsReminderOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPayments = payments.filter(p => {
    const matchesSearch = p.id.toLowerCase().includes(searchQuery.toLowerCase()) || p.member.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All Status" || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleExport = () => {
    toast.success("Receipts Exported", { description: "Download will start immediately." });
  };

  const handleSendReminder = () => {
    toast.success("Reminder Sent", {
      description: `Payment reminder sent to ${selectedMember}.`,
    });
    setIsReminderOpen(false);
  };

  const handleProcessPayment = () => {
    toast.success("Payment Successful", {
      description: `Payment confirmed for ${selectedMember}. Receipt generated.`,
    });
    setIsPaymentOpen(false);
  };

  const triggerReminder = (member: string) => {
    setSelectedMember(member);
    setIsReminderOpen(true);
  };
  
  const triggerPayment = (member: string) => {
    setSelectedMember(member);
    setIsPaymentOpen(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      
      <Dialog open={isReminderOpen} onOpenChange={setIsReminderOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send Payment Reminder</DialogTitle>
            <DialogDescription>
              Are you sure you want to send an email reminder to <span className="font-semibold text-slate-900 dark:text-slate-100">{selectedMember}</span> for their pending dues?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4">
            <Button variant="ghost" onClick={() => setIsReminderOpen(false)}>Cancel</Button>
            <Button onClick={handleSendReminder} className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white">Send Reminder</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isPaymentOpen} onOpenChange={setIsPaymentOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Process Payment</DialogTitle>
            <DialogDescription>
              Complete the payment transaction for <span className="font-semibold text-slate-900 dark:text-slate-100">{selectedMember}</span>.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 my-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Card Information</label>
              <Input placeholder="0000 0000 0000 0000" className="font-mono" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Expiry Date</label>
                <Input placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">CVC</label>
                <Input placeholder="123" type="password" />
              </div>
            </div>
          </div>
          <DialogFooter className="mt-4">
            <Button variant="ghost" onClick={() => setIsPaymentOpen(false)}>Cancel</Button>
            <Button onClick={handleProcessPayment} className="bg-emerald-600 hover:bg-emerald-700 text-white border-0">Confirm Payment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Payment Management</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Track membership dues and event ticket sales.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExport}>
            <Download className="mr-2 h-4 w-4" />
            Export Receipts
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <Card className="bg-indigo-600 text-white border-none shadow-md overflow-hidden relative dark:bg-indigo-500">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute right-8 bottom-[-10%] w-16 h-16 bg-indigo-500/50 dark:bg-indigo-400/50 rounded-full blur-xl"></div>
          <div className="p-6 relative z-10">
            <p className="text-indigo-100 text-sm font-medium uppercase tracking-wider">Total Collected (This Month)</p>
            <p className="text-4xl font-bold mt-2 tracking-tight text-white">$4,250.00</p>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Pending Dues</p>
            <p className="text-4xl font-bold mt-2 text-amber-600 dark:text-amber-500 tracking-tight">$1,850.00</p>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Transactions</p>
            <p className="text-4xl font-bold mt-2 text-slate-900 dark:text-slate-100 tracking-tight">184</p>
          </div>
        </Card>
      </div>

      <Card>
        <div className="p-5 border-b border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50 dark:bg-slate-800/20 rounded-t-2xl">
          <div className="relative flex-1 w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500" />
            <Input 
              placeholder="Search by Transaction ID or Member..." 
              className="pl-9 bg-white dark:bg-[#121212]" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <select 
              className="h-10 rounded-xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-[#121212] px-4 py-2 text-sm text-slate-700 dark:text-slate-200 shadow-sm focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20 transition-all flex-1 sm:flex-none"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All Status">All Status</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>

        {filteredPayments.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <div className="h-16 w-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <Receipt className="h-8 w-8 text-slate-400 dark:text-slate-500" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">No transactions found</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-sm">We couldn't find any payments matching your current filters.</p>
            {(searchQuery || statusFilter !== "All Status") && (
              <Button variant="outline" className="mt-4" onClick={() => { setSearchQuery(""); setStatusFilter("All Status"); }}>
                Clear Filters
              </Button>
            )}
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Member</TableHead>
                <TableHead>Event / Item</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Receipt</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPayments.map((txn) => (
                <TableRow key={txn.id}>
                  <TableCell className="font-mono text-xs text-slate-500 dark:text-slate-400">{txn.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar fallback={txn.member.split(' ').map(n=>n[0]).join('')} className="h-6 w-6 text-[10px] bg-slate-100 dark:bg-slate-800" />
                      <span className="font-medium text-slate-900 dark:text-slate-200">{txn.member}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-600 dark:text-slate-300">{txn.event}</TableCell>
                  <TableCell className="font-medium text-slate-900 dark:text-slate-100">{txn.amount}</TableCell>
                  <TableCell>
                    {txn.status === "Paid" ? (
                      <Badge variant="success" className="bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                        <Check className="w-3 h-3 mr-1" /> Paid
                      </Badge>
                    ) : (
                      <Badge variant="warning" className="bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
                        <AlertCircle className="w-3 h-3 mr-1" /> Pending
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    {txn.status === "Paid" ? (
                      <Button variant="ghost" size="icon" onClick={() => toast.info("Receipt downloaded")}>
                        <FileText className="h-4 w-4 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400" />
                      </Button>
                    ) : (
                      <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="sm" onClick={() => triggerPayment(txn.member)} className="text-xs text-indigo-600 dark:text-indigo-400">
                          Pay Now
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => triggerReminder(txn.member)}>
                          <Mail className="h-4 w-4 text-slate-400 hover:text-amber-600 dark:hover:text-amber-400" />
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Card>
    </div>
  );
}
