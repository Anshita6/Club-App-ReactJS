import React, { useState } from "react";
import { User, Bell, Lock, Shield, Moon, Sun, Key } from "lucide-react";
import { Card, CardContent, Button, Input } from "../components/ui";
import { useTheme } from "../contexts/ThemeContext";

export function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Account Settings</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Manage your preferences and system permissions.</p>
        </div>
        <Button>Save Changes</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="col-span-1 space-y-1">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'profile' ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-200'}`}
          >
            <User className="h-4 w-4 mr-3" /> Profile Settings
          </button>
          <button 
            onClick={() => setActiveTab('notifications')}
            className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'notifications' ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-200'}`}
          >
            <Bell className="h-4 w-4 mr-3" /> Notifications
          </button>
          <button 
            onClick={() => setActiveTab('security')}
            className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'security' ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-200'}`}
          >
            <Lock className="h-4 w-4 mr-3" /> Account Security
          </button>
          <button 
            onClick={() => setActiveTab('theme')}
            className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'theme' ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-200'}`}
          >
            {theme === 'dark' ? <Moon className="h-4 w-4 mr-3" /> : <Sun className="h-4 w-4 mr-3" />} Theme Settings
          </button>
        </div>

        {/* Settings Content */}
        <div className="col-span-1 md:col-span-3 space-y-6">
          {activeTab === 'profile' && (
            <Card className="dark:bg-slate-800/50 dark:border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">Personal Information</h3>
                <div className="space-y-4 max-w-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">First Name</label>
                      <Input defaultValue="James" className="dark:bg-[#121212] dark:border-slate-700" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Last Name</label>
                      <Input defaultValue="Doe" className="dark:bg-[#121212] dark:border-slate-700" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                    <Input defaultValue="j.doe@university.edu" type="email" className="dark:bg-[#121212] dark:border-slate-700" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Department</label>
                    <select className="h-10 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#121212] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Computer Science</option>
                      <option>Engineering</option>
                    </select>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-1">Role Permissions</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">You are currently assigned the <strong className="text-slate-900 dark:text-slate-200">System Admin</strong> role.</p>
                    </div>
                    <Shield className="h-8 w-8 text-indigo-100 dark:text-indigo-500/20" />
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                    <p className="text-sm text-slate-700 dark:text-slate-300">As a System Admin, you have full access to all clubs, member data, and financial records. Only super admins can modify your access level.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'notifications' && (
            <Card className="dark:bg-slate-800/50 dark:border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">Notification Preferences</h3>
                <div className="space-y-4">
                  {[
                    { title: "Email Notifications", desc: "Receive daily summary emails" },
                    { title: "Push Notifications", desc: "Get real-time browser alerts" },
                    { title: "Event Reminders", desc: "Alert me 24 hours before an event" }
                  ].map((pref, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800 last:border-0 last:pb-0">
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{pref.title}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{pref.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={i !== 1} />
                        <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 dark:after:border-slate-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600 dark:peer-checked:bg-indigo-500"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'security' && (
            <Card className="dark:bg-slate-800/50 dark:border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4 flex items-center"><Key className="w-5 h-5 mr-2 text-slate-400" /> Change Password</h3>
                <div className="space-y-4 max-w-lg">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Current Password</label>
                    <Input type="password" placeholder="••••••••" className="dark:bg-[#121212] dark:border-slate-700" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">New Password</label>
                    <Input type="password" placeholder="••••••••" className="dark:bg-[#121212] dark:border-slate-700" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Confirm New Password</label>
                    <Input type="password" placeholder="••••••••" className="dark:bg-[#121212] dark:border-slate-700" />
                  </div>
                  <Button className="mt-2">Update Password</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'theme' && (
            <Card className="dark:bg-slate-800/50 dark:border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">Appearance</h3>
                <div className="flex items-center gap-6">
                  <div 
                    onClick={() => theme !== 'light' && toggleTheme()}
                    className={`cursor-pointer rounded-xl border-2 p-4 text-center transition-all ${theme === 'light' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-[#121212] text-slate-500 dark:text-slate-400 hover:border-slate-300'}`}
                  >
                    <Sun className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">Light Mode</span>
                  </div>
                  <div 
                    onClick={() => theme !== 'dark' && toggleTheme()}
                    className={`cursor-pointer rounded-xl border-2 p-4 text-center transition-all ${theme === 'dark' ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-[#121212] text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600'}`}
                  >
                    <Moon className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">Dark Mode</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
