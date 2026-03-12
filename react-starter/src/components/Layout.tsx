import { Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  BedDouble,
  UserRound,
  ClipboardList,
  AlertTriangle,
  Building2,
  Menu,
  X,
} from "lucide-react";
import logo from "../assets/Logo_MOPHOB_1.png";
import { useState } from "react";

const navItems = [
  { path: "/", label: "แดชบอร์ด", icon: LayoutDashboard },
  { path: "/labor-room", label: "ห้องคลอด", icon: BedDouble },
  { path: "/high-risk", label: "ความเสี่ยงสูง", icon: AlertTriangle },
  { path: "/hospital-summary", label: "สรุปรายโรงพยาบาล", icon: Building2 },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F8FA] flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden animate-fade-in"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky lg:top-0 lg:h-screen inset-y-0 left-0 z-50 w-64 flex flex-col transform transition-transform lg:translate-x-0 bg-[#FFF0F5] border-r border-[#FADADD] animate-slide-in-left ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="px-5 h-16 shrink-0 border-b border-[#FADADD] animate-fade-in-up flex items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="MOPH OB Logo" className="w-10 h-10 object-contain" />
            <div>
              <h1 className="text-sm font-bold text-[#C2185B]">MOPH OB</h1>
              <p className="text-[10px] text-[#F48FB1] leading-tight">Provincial Labor Room Monitor</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-0.5 mt-1">
          <p className="text-[10px] font-medium text-[#F48FB1] uppercase tracking-widest px-3 mb-2 animate-fade-in delay-100">เมนูหลัก</p>
          {navItems.map((item, i) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== "/" && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                style={{ animationDelay: `${150 + i * 60}ms` }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all animate-slide-in-left ${
                  isActive
                    ? "bg-white text-[#E91E63] font-semibold shadow-sm border border-[#FADADD]"
                    : "text-[#AD1457] hover:bg-[#FCE4EC] hover:text-[#C2185B]"
                }`}
              >
                <item.icon size={17} className={isActive ? "text-[#E91E63]" : "text-[#F06292]"} />
                {item.label}
                {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#E91E63] animate-pulse-dot" />}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-[#FADADD] animate-fade-in delay-500">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#E91E63] flex items-center justify-center">
              <UserRound size={14} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-[#C2185B] font-medium">Admin</p>
              <p className="text-[9px] text-[#F48FB1]">v1.0.0</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-4 lg:px-6 h-16 shrink-0 flex items-center justify-between sticky top-0 z-30 animate-fade-in">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div>
              <h2 className="text-base font-bold text-[#333]">
                ระบบเฝ้าระวังห้องคลอดระดับจังหวัด
              </h2>
              <p className="text-xs text-[#999]">
                Provincial Labor Room Monitoring System
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#999] hidden sm:block">
              {new Date().toLocaleDateString("th-TH", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <div className="w-8 h-8 rounded-full bg-[#FCE4EC] flex items-center justify-center">
              <UserRound size={16} className="text-[#E91E63]" />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-hidden relative">
          <div key={location.pathname} className="absolute inset-0 overflow-auto p-4 lg:p-6 flex flex-col animate-fade-in-up">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
