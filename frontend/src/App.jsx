import React, { useState } from 'react';
import {
  LayoutDashboard,
  Boxes,
  ShoppingCart,
  ShoppingBag,
  BarChart3,
  Headphones,
  Settings,
  LogOut,
  Search,
  Bell,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Trash2,
  Edit,
  Package,
  TrendingUp,
  AlertTriangle,
  Users,
  Store,
  FileText,
  Plus,
  Shield,
  UserCheck,
  Sparkles,
  ArrowUpRight,
  Activity,
  Sun,
  Moon,
  Lock,
  Mail,
  User,
  Gamepad2
} from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'

  const [currentUser, setCurrentUser] = useState({
    name: 'Alyanna Violena',
    email: 'admin@gamevault.ph',
    role: 'Gaming Shop Admin'
  });

  const [authForm, setAuthForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [authError, setAuthError] = useState('');

  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeFilter, setActiveFilter] = useState('All Orders');
  const [searchTerm, setSearchTerm] = useState('');

  const [inventoryItems] = useState([
    { id: 'GSP-101', name: 'HyperPulse 7.1 Wireless Gaming Headset', category: 'Audio & Peripherals', stock: 120, price: '$149.00', status: 'In Stock' },
    { id: 'GSP-102', name: 'ApexPro Magnetic Hall-Effect Keyboard', category: 'Keyboards & Mice', stock: 16, price: '$189.00', status: 'Low Stock' },
    { id: 'GSP-103', name: 'RTX 5080 Phantom OC 16GB GPU', category: 'PC Components', stock: 0, price: '$999.00', status: 'Out of Stock' },
    { id: 'GSP-104', name: 'Vortex 240Hz OLED Gaming Monitor', category: 'Displays', stock: 85, price: '$549.00', status: 'In Stock' },
    { id: 'GSP-105', name: 'TitanForge Reclining Gaming Chair', category: 'Gaming Furniture', stock: 34, price: '$329.00', status: 'In Stock' },
  ]);

  const [orders] = useState([
    { id: 'ORD-7041', name: 'ApexPro Hall-Effect Keyboard', stockValue: '$189K', quantity: 24, status: 'Delivered', date: '2026-03-13' },
    { id: 'ORD-7042', name: 'RTX 5080 Phantom OC Batch', stockValue: '$940K', quantity: 18, status: 'Cancelled', date: '2026-03-13' },
    { id: 'ORD-7043', name: 'HyperPulse Wireless Headset', stockValue: '$149K', quantity: 32, status: 'Delivered', date: '2026-03-12' },
    { id: 'ORD-7044', name: 'ShadowGlide 60g Esports Mouse', stockValue: '$95K', quantity: 45, status: 'Delivered', date: '2026-03-11' },
    { id: 'ORD-7045', name: 'Vortex 240Hz OLED Monitor', stockValue: '$275K', quantity: 9, status: 'Cancelled', date: '2026-03-10' },
  ]);

  const topStores = [
    { name: 'GG Arcade & Gear - BGC', value: '$874k', width: '85%', color: 'from-cyan-500 to-indigo-600' },
    { name: 'CritHit Gaming Hub - Makati', value: '$721k', width: '70%', color: 'from-indigo-500 to-purple-600' },
    { name: 'LevelUp PC & Console - Taft', value: '$598k', width: '60%', color: 'from-purple-500 to-pink-600' },
    { name: 'PixelVault Esports - Quezon City', value: '$500k', width: '50%', color: 'from-blue-500 to-cyan-600' },
    { name: 'Respawn Rig & Peripherals - Alabang', value: '$395k', width: '40%', color: 'from-emerald-500 to-teal-600' },
  ];

  const filteredOrders = orders.filter(order => {
    const matchesFilter = activeFilter === 'All Orders' || order.status === activeFilter;
    const matchesSearch = order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const theme = darkMode
    ? {
        shell: 'bg-[#060913] text-slate-100',
        sidebar: 'bg-[#090e1a]/95 text-slate-300 border-slate-800/80',
        mainBg: 'bg-gradient-to-br from-[#060913] via-[#0b1120] to-[#0f172a]',
        header: 'bg-[#090e1a]/85 border-slate-800/80 text-slate-300',
        card: 'bg-gradient-to-br from-[#111827] to-[#090e1a] border-slate-800',
        subCard: 'bg-[#060913] border-slate-800',
        profileCard: 'bg-gradient-to-r from-slate-900 to-[#111827] border-slate-800',
        input: 'bg-[#04060b] border-slate-800 text-slate-200 placeholder-slate-500',
        iconBtn: 'bg-[#04060b] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700',
        navIdle: 'hover:bg-slate-800/60 text-slate-400 hover:text-white',
        tableHead: 'bg-[#060913] text-slate-400 border-slate-800',
        tableRow: 'hover:bg-slate-800/40 text-slate-300',
        divider: 'border-slate-800',
        textPrimary: 'text-white',
        textSecondary: 'text-slate-300',
        textMuted: 'text-slate-400',
        pillMuted: 'bg-[#060913] border-slate-800 text-slate-400',
        banner: 'bg-gradient-to-r from-indigo-900/40 via-purple-900/20 to-cyan-900/40 border-indigo-500/30',
        badgeBox: 'bg-indigo-950/60 border-indigo-500/30 text-indigo-300',
        donutCenter: 'bg-[#060913]',
        donutTrack: 'bg-slate-700'
      }
    : {
        shell: 'bg-slate-100 text-slate-900',
        sidebar: 'bg-white/95 text-slate-700 border-slate-200',
        mainBg: 'bg-gradient-to-br from-slate-100 via-slate-50 to-indigo-50/50',
        header: 'bg-white/90 border-slate-200 text-slate-700',
        card: 'bg-white border-slate-200',
        subCard: 'bg-slate-50 border-slate-200',
        profileCard: 'bg-gradient-to-r from-indigo-50/80 to-cyan-50/70 border-slate-200',
        input: 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400',
        iconBtn: 'bg-slate-50 border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-300',
        navIdle: 'hover:bg-slate-100 text-slate-600 hover:text-slate-900',
        tableHead: 'bg-slate-100 text-slate-600 border-slate-200',
        tableRow: 'hover:bg-slate-50 text-slate-700',
        divider: 'border-slate-200',
        textPrimary: 'text-slate-900',
        textSecondary: 'text-slate-700',
        textMuted: 'text-slate-500',
        pillMuted: 'bg-slate-100 border-slate-200 text-slate-600',
        banner: 'bg-gradient-to-r from-indigo-600 via-indigo-700 to-cyan-700 border-indigo-500/40 text-white',
        badgeBox: 'bg-white/15 border-white/25 text-white',
        donutCenter: 'bg-white',
        donutTrack: 'bg-slate-300'
      };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setAuthError('');

    if (!authForm.email.trim() || !authForm.password.trim()) {
      setAuthError('Pakilagay ang email at password.');
      return;
    }

    if (authMode === 'register') {
      if (!authForm.name.trim()) {
        setAuthError('Pakilagay ang buong pangalan mo.');
        return;
      }
      if (authForm.password.length < 6) {
        setAuthError('Dapat at least 6 characters ang password.');
        return;
      }
      if (authForm.password !== authForm.confirmPassword) {
        setAuthError('Hindi magkapareho ang password at confirm password.');
        return;
      }

      setCurrentUser({
        name: authForm.name.trim(),
        email: authForm.email.trim(),
        role: 'Gaming Shop Staff'
      });
    } else {
      setCurrentUser((prev) => ({
        ...prev,
        email: authForm.email.trim()
      }));
    }

    setIsAuthenticated(true);
    setAuthForm({ name: '', email: '', password: '', confirmPassword: '' });
  };

  const handleQuickDemoLogin = () => {
    setAuthError('');
    setCurrentUser({
      name: 'Alyanna Violena',
      email: 'admin@gamevault.ph',
      role: 'Gaming Shop Admin'
    });
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveTab('dashboard');
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 3)
      .map((part) => part[0].toUpperCase())
      .join('');
  };

  // LOG IN / CREATE ACCOUNT SCREEN 
  if (!isAuthenticated) {
    return (
      <div className={`min-h-screen ${theme.shell} ${theme.mainBg} font-sans antialiased flex flex-col justify-between p-6 selection:bg-indigo-500 selection:text-white`}>
        {/* Top bar with Theme Switcher */}
        <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className={`font-extrabold tracking-wider text-sm ${theme.textPrimary}`}>
                GAME<span className="text-cyan-400">VAULT</span>
              </h1>
              <p className={`text-[10px] font-medium ${theme.textMuted}`}>Gaming Shop Inventory v3.2</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl border text-xs font-bold transition-all shadow-sm ${theme.iconBtn}`}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>

        {/* Auth Card */}
        <div className="max-w-md w-full mx-auto my-8">
          <div className={`${theme.card} border rounded-2xl p-7 shadow-2xl space-y-6`}>
            <div className="flex items-center justify-between">
              <div>
                <span className="inline-flex items-center space-x-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                  <Gamepad2 className="w-3.5 h-3.5" />
                  <span>GameVault Portal</span>
                </span>
                <h2 className={`text-2xl font-extrabold mt-1 ${theme.textPrimary}`}>
                  {authMode === 'login' ? 'Sign In to System' : 'Create Shop Account'}
                </h2>
                <p className={`text-xs mt-1 ${theme.textMuted}`}>
                  {authMode === 'login'
                    ? 'Access gaming gear inventory, branch orders, and stock alerts.'
                    : 'Register a new staff or admin account for GameVault.'}
                </p>
              </div>
            </div>

            {/* Mode Switcher Tabs */}
            <div className={`grid grid-cols-2 gap-1.5 p-1.5 rounded-xl border ${theme.subCard}`}>
              <button
                type="button"
                onClick={() => {
                  setAuthMode('login');
                  setAuthError('');
                }}
                className={`py-2 rounded-lg text-xs font-bold transition-all ${
                  authMode === 'login'
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                    : `${theme.textMuted} hover:text-indigo-400`
                }`}
              >
                Log In
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthMode('register');
                  setAuthError('');
                }}
                className={`py-2 rounded-lg text-xs font-bold transition-all ${
                  authMode === 'register'
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                    : `${theme.textMuted} hover:text-indigo-400`
                }`}
              >
                Create Account
              </button>
            </div>

            {authError && (
              <div className="bg-rose-950/70 border border-rose-700/60 text-rose-300 text-xs font-semibold px-4 py-2.5 rounded-xl">
                {authError}
              </div>
            )}

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {authMode === 'register' && (
                <div>
                  <label className={`block text-xs font-bold mb-1.5 ${theme.textSecondary}`}>Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g., Alyanna Violena"
                      value={authForm.name}
                      onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 text-xs border rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all ${theme.input}`}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className={`block text-xs font-bold mb-1.5 ${theme.textSecondary}`}>Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    placeholder="admin@gamevault.ph"
                    value={authForm.email}
                    onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                    className={`w-full pl-10 pr-4 py-2.5 text-xs border rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all ${theme.input}`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-bold mb-1.5 ${theme.textSecondary}`}>Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={authForm.password}
                    onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                    className={`w-full pl-10 pr-4 py-2.5 text-xs border rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all ${theme.input}`}
                  />
                </div>
              </div>

              {authMode === 'register' && (
                <div>
                  <label className={`block text-xs font-bold mb-1.5 ${theme.textSecondary}`}>Confirm Password</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={authForm.confirmPassword}
                      onChange={(e) => setAuthForm({ ...authForm, confirmPassword: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 text-xs border rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all ${theme.input}`}
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all"
              >
                {authMode === 'login' ? 'Log In to Dashboard' : 'Create Account & Continue'}
              </button>
            </form>

            <div className={`pt-4 border-t ${theme.divider} flex items-center justify-between text-xs`}>
              <span className={theme.textMuted}>Need quick preview?</span>
              <button
                type="button"
                onClick={handleQuickDemoLogin}
                className="font-bold text-cyan-400 hover:text-indigo-400 transition-colors"
              >
                Demo Admin Login →
              </button>
            </div>
          </div>
        </div>

        <div className={`text-center text-[11px] ${theme.textMuted}`}>
          GameVault Gaming Shop Inventory System • Dark & Light Theme Ready
        </div>
      </div>
    );
  }

  // ================= MAIN INVENTORY SYSTEM SHELL =================
  return (
    <div className={`flex h-screen ${theme.shell} font-sans antialiased overflow-hidden selection:bg-indigo-500 selection:text-white`}>

      {/* Sidebar */}
      <aside className={`w-72 ${theme.sidebar} backdrop-blur-xl flex flex-col justify-between p-5 border-r shadow-2xl z-20`}>
        <div>
          {/* App Branding Header */}
          <div className="flex items-center space-x-3 px-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className={`font-extrabold tracking-wider text-sm ${theme.textPrimary}`}>
                GAME<span className="text-cyan-400">VAULT</span>
              </h1>
              <p className={`text-[10px] font-medium ${theme.textMuted}`}>Gaming Shop Inventory v3.2</p>
            </div>
          </div>

          {/* User Profile Card */}
          <div className={`flex items-center space-x-3 p-3.5 mb-6 ${theme.profileCard} rounded-2xl border shadow-inner`}>
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center overflow-hidden border border-indigo-500/50 shadow-md shrink-0">
              <span className="text-indigo-400 font-bold text-sm">{getInitials(currentUser.name)}</span>
            </div>
            <div className="overflow-hidden">
              <h4 className={`text-xs font-bold truncate ${theme.textPrimary}`}>{currentUser.name}</h4>
              <p className="text-[11px] text-indigo-400 font-medium truncate">{currentUser.role}</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'inventory', label: 'Inventory', icon: Boxes },
              { id: 'orders', label: 'Orders', icon: ShoppingCart },
              { id: 'purchase', label: 'Purchase', icon: ShoppingBag },
              { id: 'stores', label: 'Stores', icon: Store },
              { id: 'reporting', label: 'Reporting', icon: BarChart3 },
              { id: 'support', label: 'Support', icon: Headphones },
              { id: 'settings', label: 'Settings', icon: Settings },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3.5 px-4 py-3 rounded-xl text-xs font-semibold transition-all duration-300 group ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/30 scale-[1.02]'
                      : theme.navIdle
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white shadow-sm shadow-white animate-pulse" />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Logout Button */}
        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center space-x-3 px-4 py-3 text-slate-400 hover:text-rose-400 transition-colors text-xs font-semibold rounded-xl hover:bg-rose-950/20"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </aside>

      {/* Main Container */}
      <main className={`flex-1 flex flex-col overflow-hidden ${theme.mainBg}`}>

        {/* Top Header Bar */}
        <header className={`h-18 ${theme.header} backdrop-blur-md border-b flex items-center justify-between px-8 z-10 shadow-sm`}>
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-bold tracking-wide uppercase">
              {activeTab === 'dashboard' ? 'Gaming Shop Command Center' : `${activeTab} Module Control`}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search gear, GPUs, or orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 text-xs border rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-inner ${theme.input}`}
              />
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl border text-xs font-bold transition-all shadow-sm ${theme.iconBtn}`}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
              <span className="hidden sm:inline">{darkMode ? 'Light' : 'Dark'}</span>
            </button>

            <button
              type="button"
              className={`p-2.5 rounded-xl border relative transition-all shadow-sm ${theme.iconBtn}`}
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full animate-ping"></span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Dynamic Views Content Area */}
        <div className="flex-1 overflow-auto p-8 space-y-6">

          {/* ================= DASHBOARD VIEW ================= */}
          {activeTab === 'dashboard' && (
            <div className="max-w-7xl mx-auto space-y-6">

              {/* Greeting Banner */}
              <div className={`relative ${theme.banner} border p-6 rounded-2xl shadow-xl overflow-hidden flex items-center justify-between`}>
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <div>
                  <h2 className={`text-xl font-extrabold tracking-tight flex items-center gap-2 ${darkMode ? 'text-white' : 'text-white'}`}>
                    Welcome back, {currentUser.name.split(' ')[0]}! <span className="text-xl">🎮</span>
                  </h2>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-slate-300' : 'text-indigo-50'}`}>
                    Gaming gear & hardware stock nodes are live. System efficiency is running at{' '}
                    <span className="text-emerald-300 font-semibold">99.8%</span>.
                  </p>
                </div>
                <div className="hidden md:flex items-center space-x-3">
                  <div className={`${theme.badgeBox} border px-4 py-2 rounded-xl text-center`}>
                    <div className="text-[10px] uppercase tracking-wider font-semibold">Active Hub</div>
                    <div className="text-xs font-bold">MANILA-HQ-01</div>
                  </div>
                </div>
              </div>

              {/* Overview Metric Cards */}
              <div>
                <h3 className={`text-xs font-bold uppercase tracking-widest mb-3 ${theme.textMuted}`}>Live Gaming Shop Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                  <div className={`${theme.card} p-5 rounded-2xl border shadow-lg relative overflow-hidden group hover:border-indigo-500/50 transition-all duration-300`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`text-2xl font-black ${theme.textPrimary}`}>5,483</div>
                        <div className={`text-xs font-medium mt-1 ${theme.textMuted}`}>Total Gaming SKUs</div>
                      </div>
                      <div className="p-3.5 bg-cyan-950/60 rounded-xl text-cyan-400 border border-cyan-800/40 shadow-inner">
                        <Package className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-[10px] text-emerald-400 font-semibold">
                      <ArrowUpRight className="w-3 h-3 mr-1" /> +12.4% from last week
                    </div>
                  </div>

                  <div className={`${theme.card} p-5 rounded-2xl border shadow-lg relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`text-2xl font-black ${theme.textPrimary}`}>2,859</div>
                        <div className={`text-xs font-medium mt-1 ${theme.textMuted}`}>Fulfilled Gear Orders</div>
                      </div>
                      <div className="p-3.5 bg-emerald-950/60 rounded-xl text-emerald-400 border border-emerald-800/40 shadow-inner">
                        <ShoppingCart className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-[10px] text-emerald-400 font-semibold">
                      <ArrowUpRight className="w-3 h-3 mr-1" /> +8.1% fulfillment rate
                    </div>
                  </div>

                  <div className={`${theme.card} p-5 rounded-2xl border shadow-lg relative overflow-hidden group hover:border-indigo-500/50 transition-all duration-300`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`text-2xl font-black ${theme.textPrimary}`}>$1.24M</div>
                        <div className={`text-xs font-medium mt-1 ${theme.textMuted}`}>Hardware Stock Value</div>
                      </div>
                      <div className="p-3.5 bg-indigo-950/60 rounded-xl text-indigo-400 border border-indigo-800/40 shadow-inner">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-[10px] text-emerald-400 font-semibold">
                      <ArrowUpRight className="w-3 h-3 mr-1" /> +15.3% asset valuation
                    </div>
                  </div>

                  <div className={`${theme.card} p-5 rounded-2xl border shadow-lg relative overflow-hidden group hover:border-rose-500/50 transition-all duration-300`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-black text-rose-400">38</div>
                        <div className={`text-xs font-medium mt-1 ${theme.textMuted}`}>Out of Stock Alerts</div>
                      </div>
                      <div className="p-3.5 bg-rose-950/60 rounded-xl text-rose-400 border border-rose-800/40 shadow-inner">
                        <AlertTriangle className="w-5 h-5 animate-bounce" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-[10px] text-rose-400 font-semibold">
                      Restock GPUs & peripherals
                    </div>
                  </div>

                </div>
              </div>

              {/* Grid Widgets Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Users Widget */}
                <div className={`${theme.card} p-6 rounded-2xl border shadow-xl flex flex-col justify-between`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider ${theme.textSecondary}`}>Active Gamers</span>
                    <span className="text-slate-500 font-bold hover:text-indigo-400 cursor-pointer">⋮</span>
                  </div>
                  <div className="py-6 text-center">
                    <div className="inline-block p-5 bg-gradient-to-tr from-indigo-950 to-slate-800 rounded-full mb-3 text-indigo-400 border border-indigo-500/30 shadow-lg">
                      <Users className="w-8 h-8" />
                    </div>
                    <div className={`text-4xl font-black tracking-tight ${theme.textPrimary}`}>583 K</div>
                    <div className={`text-xs mt-1 font-medium ${theme.textMuted}`}>Registered Shop Members</div>
                  </div>
                  <div className={`${theme.subCard} p-3 rounded-xl border text-center text-[11px] ${theme.textMuted}`}>
                    New signups: <span className="text-emerald-400 font-bold">+4,230</span> this month
                  </div>
                </div>

                {/* Donut Chart Widget */}
                <div className={`${theme.card} p-6 rounded-2xl border shadow-xl flex flex-col justify-between`}>
                  <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${theme.textSecondary}`}>Gear Inventory Ratio</div>
                  <div className="flex items-center justify-center py-4">
                    <div className={`relative w-36 h-36 rounded-full border-[10px] border-indigo-600 flex items-center justify-center shadow-2xl shadow-indigo-500/20 ${theme.donutCenter}`}>
                      <div className="absolute text-center">
                        <span className={`text-2xl font-black ${theme.textPrimary}`}>68%</span>
                        <div className={`text-[9px] font-bold uppercase ${theme.textMuted}`}>Allocated</div>
                      </div>
                    </div>
                  </div>
                  <div className={`flex justify-around text-xs pt-3 border-t ${theme.divider} font-medium ${theme.textSecondary}`}>
                    <div className="flex items-center space-x-2">
                      <span className={`w-3 h-3 rounded-full ${theme.donutTrack} shadow-sm`}></span>
                      <span>Sold Units</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-indigo-600 shadow-sm shadow-indigo-500"></span>
                      <span>Total Stock</span>
                    </div>
                  </div>
                </div>

                {/* Top Stores Widget */}
                <div className={`${theme.card} p-6 rounded-2xl border shadow-xl lg:row-span-2 flex flex-col`}>
                  <div className={`text-xs font-bold uppercase tracking-wider mb-4 ${theme.textSecondary}`}>Top Gaming Branches by Sales</div>
                  <div className="space-y-3.5 overflow-y-auto pr-1 flex-1 max-h-[380px]">
                    {topStores.map((store, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className={`font-semibold truncate ${theme.textSecondary}`}>{store.name}</span>
                          <span className="font-black text-emerald-400">{store.value}</span>
                        </div>
                        <div className={`w-full ${theme.subCard} h-2 rounded-full overflow-hidden border`}>
                          <div className={`bg-gradient-to-r ${store.color} h-full rounded-full shadow-sm`} style={{ width: store.width }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expense vs Profit Graph Widget */}
                <div className={`lg:col-span-2 ${theme.card} p-6 rounded-2xl border shadow-xl`}>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-bold uppercase tracking-wider ${theme.textSecondary}`}>Hardware Supply Expense vs Profit Trend</span>
                    <span className="text-xs font-semibold bg-indigo-950 text-indigo-400 px-3 py-1 rounded-lg border border-indigo-800/50">Last 6 Months</span>
                  </div>
                  <div className={`h-44 flex items-end justify-between px-4 pt-4 border-b ${theme.divider} relative`}>
                    <div className="absolute inset-x-4 bottom-6 h-28 bg-gradient-to-t from-indigo-950/30 via-indigo-900/10 to-transparent rounded-t-2xl pointer-events-none"></div>
                    {['Dec', 'Jan', 'Feb', 'Mar', 'April', 'May', 'Jun'].map((m, i) => (
                      <div key={i} className="flex flex-col items-center z-10 space-y-2">
                        <div className="w-3 h-3 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-full shadow-md shadow-indigo-500/50 ring-4 ring-indigo-950/40"></div>
                        <span className={`text-xs font-bold ${theme.textMuted}`}>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ================= INVENTORY VIEW ================= */}
          {activeTab === 'inventory' && (
            <div className={`max-w-7xl mx-auto ${theme.card} rounded-2xl shadow-2xl border p-6 space-y-6`}>
              <div className={`flex items-center justify-between pb-4 border-b ${theme.divider}`}>
                <div>
                  <h2 className={`text-xl font-extrabold tracking-tight ${theme.textPrimary}`}>Gaming Gear & Hardware Inventory</h2>
                  <p className={`text-xs mt-1 ${theme.textMuted}`}>Real-time stock catalog for GPUs, keyboards, headsets, monitors, and chairs.</p>
                </div>
                <button className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all">
                  <Plus className="w-4 h-4" />
                  <span>Register New Gaming SKU</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className={`${theme.tableHead} text-xs font-bold border-b uppercase tracking-wider`}>
                      <th className="py-3.5 px-4 rounded-l-xl">SKU Code</th>
                      <th className="py-3.5 px-4">Gaming Item</th>
                      <th className="py-3.5 px-4">Category</th>
                      <th className="py-3.5 px-4">Stock Qty</th>
                      <th className="py-3.5 px-4">Unit Price</th>
                      <th className="py-3.5 px-4 rounded-r-xl">Status</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${theme.divider}`}>
                    {inventoryItems.map((item, idx) => (
                      <tr key={idx} className={`${theme.tableRow} transition-colors`}>
                        <td className="py-4 px-4 font-mono text-xs text-indigo-400 font-bold">{item.id}</td>
                        <td className={`py-4 px-4 font-bold ${theme.textPrimary}`}>{item.name}</td>
                        <td className="py-4 px-4">{item.category}</td>
                        <td className="py-4 px-4 font-semibold">{item.stock}</td>
                        <td className="py-4 px-4 font-black text-emerald-400">{item.price}</td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                            item.status === 'In Stock' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 shadow-sm' :
                            item.status === 'Low Stock' ? 'bg-amber-950/80 text-amber-400 border border-amber-800/50 shadow-sm' :
                            'bg-rose-950/80 text-rose-400 border border-rose-800/50 shadow-sm'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ================= ORDERS VIEW ================= */}
          {activeTab === 'orders' && (
            <div className={`max-w-7xl mx-auto ${theme.card} rounded-2xl shadow-2xl border p-6`}>

              <div className={`flex items-center justify-between mb-6 pb-4 border-b ${theme.divider}`}>
                <div>
                  <h2 className={`text-xl font-extrabold tracking-tight ${theme.textPrimary}`}>Gaming Gear Order History</h2>
                  <p className={`text-sm mt-1 ${theme.textMuted}`}>Track customer & branch hardware orders, batch values, and delivery status.</p>
                </div>

                <div className={`flex items-center space-x-2 ${theme.subCard} p-1.5 rounded-xl text-xs font-semibold border shadow-inner`}>
                  {['All Orders', 'Delivered', 'Cancelled'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveFilter(tab)}
                      className={`px-4 py-2 rounded-lg transition-all ${
                        activeFilter === tab
                          ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md font-bold'
                          : `${theme.textMuted} hover:text-indigo-400`
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Filters */}
              <div className={`flex items-center justify-end space-x-2 mb-4 text-xs ${theme.textMuted}`}>
                <div className={`flex items-center space-x-2 ${theme.subCard} border px-3.5 py-2 rounded-xl shadow-inner`}>
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span className={`font-semibold ${theme.textSecondary}`}>13-03-2026</span>
                </div>
                <span>To</span>
                <div className={`flex items-center space-x-2 ${theme.subCard} border px-3.5 py-2 rounded-xl shadow-inner`}>
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span className={`font-semibold ${theme.textSecondary}`}>13-03-2026</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className={`${theme.tableHead} text-xs font-bold border-b uppercase tracking-wider`}>
                      <th className="py-3.5 px-4 rounded-l-xl">S No</th>
                      <th className="py-3.5 px-4">Order ID</th>
                      <th className="py-3.5 px-4">Order Item</th>
                      <th className="py-3.5 px-4">Stock Value</th>
                      <th className="py-3.5 px-4">Quantity</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right rounded-r-xl">Actions</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${theme.divider}`}>
                    {filteredOrders.length > 0 ? (
                      filteredOrders.map((item, index) => (
                        <tr key={index} className={`${theme.tableRow} transition-colors`}>
                          <td className="py-4 px-4 font-bold text-slate-500">{index + 1}</td>
                          <td className={`py-4 px-4 font-mono font-bold ${theme.textPrimary}`}>{item.id}</td>
                          <td className={`py-4 px-4 font-semibold ${theme.textSecondary}`}>{item.name}</td>
                          <td className="py-4 px-4 font-black text-emerald-400">{item.stockValue}</td>
                          <td className="py-4 px-4 font-semibold">{item.quantity}K</td>
                          <td className="py-4 px-4">
                            <span
                              className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                                item.status === 'Delivered'
                                  ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 shadow-sm'
                                  : 'bg-rose-950/80 text-rose-400 border border-rose-800/50 shadow-sm'
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right space-x-2">
                            <button className="p-2 bg-slate-800 text-slate-300 hover:text-white hover:bg-indigo-600 rounded-xl transition-all shadow-sm">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 bg-slate-800 text-slate-300 hover:text-white hover:bg-rose-600 rounded-xl transition-all shadow-sm">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center py-12 text-slate-500 font-semibold">
                          No matching gaming gear orders found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className={`flex items-center justify-center space-x-2 mt-6 pt-4 border-t ${theme.divider} text-xs font-bold ${theme.textMuted}`}>
                <button className={`p-2 border rounded-xl ${theme.pillMuted}`}><ChevronLeft className="w-4 h-4" /></button>
                <button className="w-8 h-8 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md">1</button>
                <button className={`w-8 h-8 rounded-xl border ${theme.pillMuted}`}>2</button>
                <button className={`w-8 h-8 rounded-xl border ${theme.pillMuted}`}>3</button>
                <span className="px-2">...</span>
                <button className={`w-8 h-8 rounded-xl border ${theme.pillMuted}`}>12</button>
                <button className={`p-2 border rounded-xl ${theme.pillMuted}`}><ChevronRight className="w-4 h-4" /></button>
              </div>

            </div>
          )}

          {/* ================= PURCHASE VIEW ================= */}
          {activeTab === 'purchase' && (
            <div className={`max-w-7xl mx-auto ${theme.card} rounded-2xl shadow-2xl border p-6 space-y-6`}>
              <div className={`pb-4 border-b ${theme.divider}`}>
                <h2 className={`text-xl font-extrabold tracking-tight ${theme.textPrimary}`}>Distributor & Supplier Purchase Orders</h2>
                <p className={`text-xs mt-1 ${theme.textMuted}`}>Manage GPU, peripheral, and gaming chair restock shipments.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className={`${theme.subCard} p-5 rounded-2xl border shadow-lg`}>
                  <div className={`text-xs font-semibold uppercase ${theme.textMuted}`}>Total Purchase Value</div>
                  <div className={`text-2xl font-black mt-2 ${theme.textPrimary}`}>$128,450.00</div>
                  <div className="text-[10px] text-emerald-400 font-bold mt-2">Audited distributor invoices</div>
                </div>
                <div className={`${theme.subCard} p-5 rounded-2xl border shadow-lg`}>
                  <div className={`text-xs font-semibold uppercase ${theme.textMuted}`}>Incoming Hardware Shipments</div>
                  <div className="text-2xl font-black text-amber-400 mt-2">12 Shipments</div>
                  <div className="text-[10px] text-amber-400 font-bold mt-2">Expected arrival in 48 hours</div>
                </div>
                <div className={`${theme.subCard} p-5 rounded-2xl border shadow-lg`}>
                  <div className={`text-xs font-semibold uppercase ${theme.textMuted}`}>Completed Restock Batches</div>
                  <div className="text-2xl font-black text-emerald-400 mt-2">148 Batches</div>
                  <div className="text-[10px] text-emerald-400 font-bold mt-2">Logged in inventory ledger</div>
                </div>
              </div>
            </div>
          )}

          {/* ================= STORES VIEW ================= */}
          {activeTab === 'stores' && (
            <div className={`max-w-7xl mx-auto ${theme.card} rounded-2xl shadow-2xl border p-6 space-y-6`}>
              <div className={`pb-4 border-b ${theme.divider} flex justify-between items-center`}>
                <div>
                  <h2 className={`text-xl font-extrabold tracking-tight ${theme.textPrimary}`}>Gaming Shop Branches</h2>
                  <p className={`text-xs mt-1 ${theme.textMuted}`}>Regional retail outlets, esports hubs, and PC gear branches.</p>
                </div>
                <button className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/30 flex items-center space-x-2">
                  <Store className="w-4 h-4" />
                  <span>Register Gaming Branch</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {topStores.map((store, i) => (
                  <div key={i} className={`${theme.subCard} p-5 rounded-2xl border shadow-lg flex items-center justify-between group hover:border-indigo-500/50 transition-all`}>
                    <div>
                      <h4 className={`font-bold text-sm group-hover:text-cyan-400 transition-colors ${theme.textPrimary}`}>{store.name}</h4>
                      <p className={`text-xs mt-1 font-medium ${theme.textMuted}`}>Gaming Retail & Gear Branch</p>
                      <p className="text-[11px] text-indigo-400 font-bold mt-1">Status: Open & Operational</p>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-black text-emerald-400">{store.value}</div>
                      <div className="text-[10px] text-slate-500 uppercase font-semibold">Gross Sales</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= REPORTING VIEW ================= */}
          {activeTab === 'reporting' && (
            <div className={`max-w-7xl mx-auto ${theme.card} rounded-2xl shadow-2xl border p-6 space-y-6`}>
              <div className={`pb-4 border-b ${theme.divider}`}>
                <h2 className={`text-xl font-extrabold tracking-tight ${theme.textPrimary}`}>Gaming Shop Reports & Analytics</h2>
                <p className={`text-xs mt-1 ${theme.textMuted}`}>Stock movement summaries, best-selling gear logs, and revenue reports.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className={`${theme.subCard} p-6 rounded-2xl border shadow-lg flex items-center space-x-4`}>
                  <div className="p-4 bg-indigo-950/80 rounded-2xl text-indigo-400 border border-indigo-800/50">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${theme.textPrimary}`}>Monthly Hardware Stock Audit</h4>
                    <p className={`text-xs mt-1 ${theme.textMuted}`}>Summary of GPUs, monitors, and peripherals across branches.</p>
                  </div>
                </div>
                <div className={`${theme.subCard} p-6 rounded-2xl border shadow-lg flex items-center space-x-4`}>
                  <div className="p-4 bg-emerald-950/80 rounded-2xl text-emerald-400 border border-emerald-800/50">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${theme.textPrimary}`}>Branch Sales & Profit Report</h4>
                    <p className={`text-xs mt-1 ${theme.textMuted}`}>Live MongoDB sales and order fulfillment analytics.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= SUPPORT VIEW ================= */}
          {activeTab === 'support' && (
            <div className={`max-w-7xl mx-auto ${theme.card} rounded-2xl shadow-2xl border p-6 space-y-6`}>
              <div className={`pb-4 border-b ${theme.divider}`}>
                <h2 className={`text-xl font-extrabold tracking-tight ${theme.textPrimary}`}>Shop Support & Warranty Desk</h2>
                <p className={`text-xs mt-1 ${theme.textMuted}`}>Hardware warranty guides, RMA requests, and system help.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className={`${theme.subCard} p-6 rounded-2xl border shadow-lg`}>
                  <div className="p-3 bg-indigo-950/80 rounded-xl text-indigo-400 inline-block mb-3 border border-indigo-800/50">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <h4 className={`text-sm font-bold ${theme.textPrimary}`}>Gear Warranty & RMA Guide</h4>
                  <p className={`text-xs mt-1 ${theme.textMuted}`}>Replacement and testing procedures for headsets, mice, and GPUs.</p>
                </div>
                <div className={`${theme.subCard} p-6 rounded-2xl border shadow-lg`}>
                  <div className="p-3 bg-emerald-950/80 rounded-xl text-emerald-400 inline-block mb-3 border border-emerald-800/50">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <h4 className={`text-sm font-bold ${theme.textPrimary}`}>Branch POS & System Support</h4>
                  <p className={`text-xs mt-1 ${theme.textMuted}`}>Direct assistance for inventory sync issues and branch terminals.</p>
                </div>
              </div>
            </div>
          )}

          {/* ================= SETTINGS VIEW ================= */}
          {activeTab === 'settings' && (
            <div className={`max-w-7xl mx-auto ${theme.card} rounded-2xl shadow-2xl border p-6 space-y-6`}>
              <div className={`pb-4 border-b ${theme.divider}`}>
                <h2 className={`text-xl font-extrabold tracking-tight ${theme.textPrimary}`}>System & Access Settings</h2>
                <p className={`text-xs mt-1 ${theme.textMuted}`}>Manage admin permissions, theme mode, and API settings.</p>
              </div>
              <div className="space-y-4">
                <div className={`${theme.subCard} p-5 rounded-2xl border shadow-lg flex items-center justify-between`}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-indigo-950/80 text-indigo-400 rounded-xl border border-indigo-800/50">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${theme.textPrimary}`}>Role-Based Access Control (RBAC)</h4>
                      <p className={`text-xs ${theme.textMuted}`}>Restrict stock edits and order deletions to authorized shop admins.</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-400 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800/50 shadow-sm">ACTIVE PROTOCOL</span>
                </div>

                <div className={`${theme.subCard} p-5 rounded-2xl border shadow-lg flex items-center justify-between`}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-amber-950/80 text-amber-400 rounded-xl border border-amber-800/50">
                      {darkMode ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${theme.textPrimary}`}>Interface Theme Mode</h4>
                      <p className={`text-xs ${theme.textMuted}`}>Currently using {darkMode ? 'Dark Navy Mode' : 'Light Mode'}.</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDarkMode((prev) => !prev)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-xs font-bold shadow-md"
                  >
                    Switch to {darkMode ? 'Light Mode' : 'Dark Mode'}
                  </button>
                </div>

                <div className={`${theme.subCard} p-5 rounded-2xl border shadow-lg flex items-center justify-between`}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-cyan-950/80 text-cyan-400 rounded-xl border border-cyan-800/50">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${theme.textPrimary}`}>MongoDB Inventory Sync</h4>
                      <p className={`text-xs ${theme.textMuted}`}>Ready to connect to Express REST API on port 5000.</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-400 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800/50 shadow-sm">READY</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}