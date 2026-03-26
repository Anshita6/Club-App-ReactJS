import React from "react";
import { Link, useNavigate } from "react-router";
import { Building2, Mail, Lock, User, Shield } from "lucide-react";
import { Button, Input } from "../components/ui";
import { toast } from "sonner";

export function Login() {
  const navigate = useNavigate();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Successfully logged in", {
      description: "Welcome back to CampusSync!",
    });
    navigate('/');
  };
  
  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-[#121212] transition-colors duration-200">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-2 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">CampusSync</span>
          </div>

          <h2 className="mt-6 text-3xl font-extrabold text-slate-900 dark:text-slate-100">Sign in to your account</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Or{" "}
            <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
              create a new account
            </Link>
          </p>

          <div className="mt-8">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email address</label>
                <div className="mt-1 relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 dark:text-slate-500" />
                  <Input type="email" placeholder="you@university.edu" className="pl-10 dark:bg-slate-900 dark:border-slate-700" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                <div className="mt-1 relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 dark:text-slate-500" />
                  <Input type="password" placeholder="••••••••" className="pl-10 dark:bg-slate-900 dark:border-slate-700" required />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 dark:border-slate-700 text-indigo-600 focus:ring-indigo-600 dark:focus:ring-indigo-500 accent-indigo-600 dark:bg-slate-900"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900 dark:text-slate-300">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Sign in
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          alt="University campus"
        />
        <div className="absolute inset-0 bg-indigo-900/40 dark:bg-[#121212]/80 mix-blend-multiply" />
      </div>
    </div>
  );
}

export function Register() {
  const navigate = useNavigate();
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Account created successfully", {
      description: "Please sign in with your new credentials.",
    });
    navigate('/login');
  };
  
  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-[#121212] transition-colors duration-200">
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          alt="Students studying"
        />
        <div className="absolute inset-0 bg-indigo-900/40 dark:bg-[#121212]/80 mix-blend-multiply" />
      </div>
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-2 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">CampusSync</span>
          </div>

          <h2 className="mt-6 text-3xl font-extrabold text-slate-900 dark:text-slate-100">Create an account</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
              Sign in
            </Link>
          </p>

          <div className="mt-8">
            <form className="space-y-5" onSubmit={handleRegister}>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                <div className="mt-1 relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 dark:text-slate-500" />
                  <Input type="text" placeholder="John Doe" className="pl-10 dark:bg-slate-900 dark:border-slate-700" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email address</label>
                <div className="mt-1 relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 dark:text-slate-500" />
                  <Input type="email" placeholder="you@university.edu" className="pl-10 dark:bg-slate-900 dark:border-slate-700" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Role</label>
                <div className="mt-1 relative">
                  <Shield className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 dark:text-slate-500" />
                  <select className="h-10 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent dark:bg-slate-900 pl-10 pr-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="member">Member</option>
                    <option value="leader">Club Leader</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                <div className="mt-1 relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 dark:text-slate-500" />
                  <Input type="password" placeholder="••••••••" className="pl-10 dark:bg-slate-900 dark:border-slate-700" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Confirm Password</label>
                <div className="mt-1 relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 dark:text-slate-500" />
                  <Input type="password" placeholder="••••••••" className="pl-10 dark:bg-slate-900 dark:border-slate-700" required />
                </div>
              </div>

              <Button type="submit" className="w-full mt-2" size="lg">
                Register Account
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
