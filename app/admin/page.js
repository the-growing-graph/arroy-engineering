'use client';
import { useEffect, useState } from 'react';
import { Lock, Eye, EyeOff, Search, Download, RefreshCw, LogOut, Mail, Phone, Calendar, MapPin, Building2, IndianRupee, Filter, ArrowUpRight } from 'lucide-react';
import { ArroyoLogo } from '@/components/site/logo';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const ADMIN_PASSWORD = 'arroyo-admin@123456';
const STORAGE_KEY = 'arroyo_admin_auth';

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [pwd, setPwd] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved === 'ok') setAuthed(true);
      setChecking(false);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (pwd === ADMIN_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'ok');
      setAuthed(true);
      toast.success('Welcome back, Admin.');
    } else {
      toast.error('Incorrect password.');
      setPwd('');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setAuthed(false);
    setPwd('');
  };

  if (checking) {
    return <div className="min-h-screen bg-black flex items-center justify-center text-white/50">Loading...</div>;
  }

  if (!authed) {
    return (
      <main className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-6">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-red-600/15 blur-[140px]" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-700/15 blur-[140px]" />

        <motion.form initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          onSubmit={handleLogin}
          className="relative w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent glass-strong p-8 md:p-10">
          <ArroyoLogo size={48} />
          <div className="mt-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-[10px] uppercase tracking-[0.25em] text-red-400">
            <Lock className="w-3 h-3" /> Admin Console
          </div>
          <h1 className="font-display mt-4 text-3xl md:text-4xl font-bold text-white">Sign in to continue.</h1>
          <p className="mt-2 text-sm text-white/60">Enter your admin password to access lead management.</p>

          <div className="mt-8">
            <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">Password</label>
            <div className="relative">
              <input type={show ? 'text' : 'password'} value={pwd} onChange={(e) => setPwd(e.target.value)} autoFocus
                className="w-full pl-4 pr-11 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/30 focus:border-red-500/70 focus:bg-white/[0.06] outline-none transition"
                placeholder="••••••••••••" />
              <button type="button" onClick={() => setShow(s => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white">
                {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold shadow-[0_20px_50px_-15px_rgba(220,38,38,0.7)]">
            <Lock className="w-4 h-4" /> Sign In
          </button>

          <div className="mt-6 text-center text-xs text-white/40">Authorised personnel only · Arroyo Engineering</div>
        </motion.form>
      </main>
    );
  }

  return <Dashboard onLogout={handleLogout} />;
}

function Dashboard({ onLogout }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState('');
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/contacts', { cache: 'no-store' });
      const data = await res.json();
      setItems(data.items || []);
    } catch (e) {
      toast.error('Failed to load leads');
    } finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const filtered = items.filter(it => {
    const hay = `${it.name} ${it.email} ${it.phone} ${it.company} ${it.service} ${it.message} ${it.city}`.toLowerCase();
    if (q && !hay.includes(q.toLowerCase())) return false;
    if (filter !== 'all' && it.service !== filter) return false;
    return true;
  });

  const services = [...new Set(items.map(i => i.service).filter(Boolean))];

  const stats = {
    total: items.length,
    today: items.filter(i => new Date(i.createdAt).toDateString() === new Date().toDateString()).length,
    week: items.filter(i => (Date.now() - new Date(i.createdAt).getTime()) < 7 * 864e5).length,
    quote: items.filter(i => i.source === 'quote_popup').length,
  };

  const exportCsv = () => {
    const headers = ['id', 'createdAt', 'name', 'email', 'phone', 'company', 'city', 'state', 'service', 'budget', 'timeline', 'projectType', 'message'];
    const csv = [headers.join(',')].concat(
      filtered.map(r => headers.map(h => `"${String(r[h] ?? '').replace(/"/g, '""')}"`).join(','))
    ).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `arroyo-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Admin Navbar */}
      <header className="sticky top-0 z-30 glass-strong border-b border-white/10">
        <div className="max-w-content container-p flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <ArroyoLogo size={38} />
            <div className="hidden md:block h-6 w-[1px] bg-white/15" />
            <span className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Admin Console
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={load} className="p-2 rounded-full hover:bg-white/5 text-white/70" title="Refresh">
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button onClick={exportCsv} className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 text-white text-sm hover:bg-white/10">
              <Download className="w-4 h-4" /> Export CSV
            </button>
            <button onClick={onLogout} className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm hover:bg-red-500/20">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-content container-p py-8">
        <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-white">Lead Inbox</h1>
            <p className="text-sm text-white/60 mt-1">All quote requests & contact submissions from the website.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { k: 'Total Leads', v: stats.total, c: 'from-red-600/20 to-transparent border-red-500/30' },
            { k: 'Today', v: stats.today, c: 'from-emerald-600/20 to-transparent border-emerald-500/30' },
            { k: 'This Week', v: stats.week, c: 'from-blue-600/20 to-transparent border-blue-500/30' },
            { k: 'Quote Pop-ups', v: stats.quote, c: 'from-amber-600/20 to-transparent border-amber-500/30' },
          ].map((s, i) => (
            <div key={i} className={`rounded-2xl p-5 border bg-gradient-to-b ${s.c}`}>
              <div className="text-xs uppercase tracking-widest text-white/60">{s.k}</div>
              <div className="font-display text-3xl md:text-4xl font-bold text-white mt-1">{s.v}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name, email, phone, message..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white/[0.03] border border-white/10 text-white placeholder:text-white/40 focus:border-red-500/60 outline-none" />
          </div>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-3 rounded-full bg-white/[0.03] border border-white/10 text-white focus:border-red-500/60 outline-none">
            <option value="all">All services</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.02]">
          <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-white/[0.03] text-[10px] uppercase tracking-widest text-white/50 border-b border-white/10">
            <div className="col-span-3">Name</div>
            <div className="col-span-3 hidden md:block">Contact</div>
            <div className="col-span-3 hidden md:block">Service</div>
            <div className="col-span-2 hidden md:block">Received</div>
            <div className="col-span-1 text-right">Open</div>
          </div>
          {loading ? (
            <div className="p-10 text-center text-white/50">Loading leads...</div>
          ) : filtered.length === 0 ? (
            <div className="p-16 text-center">
              <Mail className="w-12 h-12 text-white/20 mx-auto mb-4" />
              <div className="text-white font-semibold">No leads yet.</div>
              <div className="text-sm text-white/50 mt-1">New submissions from the website will appear here.</div>
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {filtered.map((l, i) => (
                <button key={l.id} onClick={() => setSelected(l)}
                  className="w-full grid grid-cols-12 gap-2 items-center px-4 py-4 hover:bg-white/[0.03] transition text-left">
                  <div className="col-span-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center text-white font-semibold text-xs">
                        {l.name?.split(' ').map(x => x[0]).slice(0,2).join('').toUpperCase() || '?'}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white truncate">{l.name}</div>
                        <div className="text-[11px] text-white/50 truncate md:hidden">{l.email}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 hidden md:block">
                    <div className="text-xs text-white/80 truncate">{l.email}</div>
                    <div className="text-[11px] text-white/50 truncate">{l.phone}</div>
                  </div>
                  <div className="col-span-3 hidden md:block">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[11px] text-red-300">
                      {l.service || '—'}
                    </div>
                  </div>
                  <div className="col-span-2 hidden md:block text-xs text-white/60">
                    {new Date(l.createdAt).toLocaleString('en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                  </div>
                  <div className="col-span-1 text-right">
                    <ArrowUpRight className="w-4 h-4 text-white/50 inline" />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Detail drawer */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" />
            <motion.aside initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-xl z-50 bg-[#0a0a0a] border-l border-white/10 overflow-y-auto">
              <div className="sticky top-0 z-10 glass-strong border-b border-white/10 px-6 py-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-red-400">Lead Details</div>
                  <div className="font-display text-lg font-bold text-white">{selected.name}</div>
                </div>
                <button onClick={() => setSelected(null)} className="px-3 py-1.5 rounded-full text-sm border border-white/10 text-white/70 hover:bg-white/5">Close</button>
              </div>

              <div className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Mail, k: 'Email', v: selected.email, link: `mailto:${selected.email}` },
                    { icon: Phone, k: 'Phone', v: selected.phone, link: `tel:${selected.phone}` },
                    { icon: Building2, k: 'Company', v: selected.company || '—' },
                    { icon: MapPin, k: 'Location', v: [selected.city, selected.state].filter(Boolean).join(', ') || '—' },
                    { icon: IndianRupee, k: 'Budget', v: selected.budget || '—' },
                    { icon: Calendar, k: 'Timeline', v: selected.timeline || '—' },
                  ].map((r, i) => (
                    <div key={i} className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/50">
                        <r.icon className="w-3 h-3" /> {r.k}
                      </div>
                      {r.link ? (
                        <a href={r.link} className="text-sm text-white mt-1 hover:text-red-400 break-all">{r.v}</a>
                      ) : (
                        <div className="text-sm text-white mt-1 break-all">{r.v}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5">
                  <div className="text-[10px] uppercase tracking-widest text-red-400 mb-1">Service Required</div>
                  <div className="text-white font-semibold">{selected.service || '—'}</div>
                  {selected.projectType && <div className="text-xs text-white/60 mt-1">Type: {selected.projectType}</div>}
                  {selected.location && <div className="text-xs text-white/60">Project location: {selected.location}</div>}
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Project Brief / Message</div>
                  <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] text-sm text-white/80 leading-relaxed whitespace-pre-wrap">
                    {selected.message}
                  </div>
                </div>

                <div className="text-xs text-white/50 flex items-center justify-between border-t border-white/5 pt-4">
                  <span>ID: {selected.id?.slice(0, 8)}...</span>
                  <span>Source: {selected.source || 'contact_form'}</span>
                  <span>{new Date(selected.createdAt).toLocaleString('en-IN')}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a href={`tel:${selected.phone}`} className="px-4 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white text-center font-semibold text-sm">Call {selected.name?.split(' ')[0]}</a>
                  <a href={`mailto:${selected.email}?subject=Re: Your enquiry to Arroyo Engineering&body=Dear ${selected.name},%0D%0A%0D%0AThank you for reaching out to Arroyo Engineering.`}
                    className="px-4 py-3 rounded-full border border-white/15 bg-white/5 text-white text-center font-semibold text-sm">Reply by Email</a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
