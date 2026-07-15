'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2, Loader2, Upload } from 'lucide-react';
import { toast } from 'sonner';

const schema = z.object({
  name: z.string().min(2, 'Enter your full name'),
  company: z.string().optional(),
  phone: z.string().min(10, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email'),
  city: z.string().optional(),
  state: z.string().optional(),
  location: z.string().optional(),
  service: z.string().min(1, 'Select a service'),
  budget: z.string().optional(),
  projectType: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, 'Tell us a bit about your requirement'),
  terms: z.literal(true, { errorMap: () => ({ message: 'Please accept the terms' }) }),
});

const SERVICES = ['Fuel Station Construction', 'Oil & Gas Infrastructure', 'Civil Engineering', 'Road Construction', 'Bridge Construction', 'Industrial Construction', 'Heavy Machinery', 'Equipment Supply', 'EPC Projects', 'Infrastructure Development'];
const BUDGETS = ['< ₹10 Lakh', '₹10–50 Lakh', '₹50 Lakh – 1 Cr', '₹1–5 Cr', '₹5–25 Cr', '> ₹25 Cr'];
const TIMELINES = ['Immediate', 'Within 1 Month', '1–3 Months', '3–6 Months', '6+ Months'];
const TYPES = ['Government', 'Private', 'PSU', 'Public–Private', 'Individual'];

function Field({ label, required, error, children }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">{label}{required && ' *'}</label>
      {children}
      {error && <div className="mt-1.5 text-xs text-red-400">{error}</div>}
    </div>
  );
}

const inputCls = "w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/30 focus:border-red-500/70 focus:bg-white/[0.06] outline-none transition";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { terms: false },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Submit failed');
      setDone(true);
      reset();
      toast.success('Quote request received. We will call you within 24 business hours.');
    } catch (e) {
      toast.error('Something went wrong. Please try again or WhatsApp us.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section relative bg-black">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-red-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="relative max-w-content container-p grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] uppercase tracking-[0.25em] text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Get In Touch
          </div>
          <h2 className="font-display mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Talk to our <span className="text-gradient-red">project experts.</span>
          </h2>
          <p className="mt-5 text-white/60 leading-relaxed">
            Share your project brief — a senior estimator will call you back within 24 business hours with a preliminary scope and budget.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: MapPin, k: 'Head Office', v: 'Level 12, Arroyo Tower, BKC, Mumbai – 400051, India' },
              { icon: Phone, k: 'Call Us', v: '+91 98765 43210 · +91 22 4000 8000', href: 'tel:+919876543210' },
              { icon: Mail, k: 'Email', v: 'info@arroyoengineering.com · quote@arroyoengineering.com', href: 'mailto:info@arroyoengineering.com' },
              { icon: Clock, k: 'Business Hours', v: 'Mon–Sat, 9:00 AM – 7:00 PM IST' },
            ].map((c, i) => (
              <a key={i} href={c.href || '#'} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-transparent border border-red-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:border-red-500 transition">
                  <c.icon className="w-5 h-5 text-red-400 group-hover:text-white transition" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/50">{c.k}</div>
                  <div className="text-white mt-1">{c.v}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 aspect-video">
            <iframe
              title="Arroyo HQ Map"
              src="https://www.google.com/maps?q=Bandra+Kurla+Complex+Mumbai&output=embed"
              className="w-full h-full grayscale contrast-125"
              loading="lazy" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6 md:p-10">
            {done ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="font-display text-3xl font-bold text-white">Request Received.</h3>
                <p className="mt-3 text-white/60 max-w-md mx-auto">Thank you. A senior member from our team will call you back within 24 business hours with a preliminary scope and quote.</p>
                <button onClick={() => setDone(false)} className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition">
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Full Name" required error={errors.name?.message}>
                    <input {...register('name')} className={inputCls} placeholder="Amit Sharma" />
                  </Field>
                  <Field label="Company Name" error={errors.company?.message}>
                    <input {...register('company')} className={inputCls} placeholder="Sharma Enterprises" />
                  </Field>
                  <Field label="Phone Number" required error={errors.phone?.message}>
                    <input {...register('phone')} className={inputCls} placeholder="+91 98765 43210" />
                  </Field>
                  <Field label="Email Address" required error={errors.email?.message}>
                    <input {...register('email')} className={inputCls} placeholder="you@company.com" />
                  </Field>
                  <Field label="City" error={errors.city?.message}>
                    <input {...register('city')} className={inputCls} placeholder="Mumbai" />
                  </Field>
                  <Field label="State" error={errors.state?.message}>
                    <input {...register('state')} className={inputCls} placeholder="Maharashtra" />
                  </Field>
                </div>

                <Field label="Project Location" error={errors.location?.message}>
                  <input {...register('location')} className={inputCls} placeholder="e.g. NH-48, Ahmedabad-Vadodara stretch" />
                </Field>

                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Service Required" required error={errors.service?.message}>
                    <select {...register('service')} className={inputCls}>
                      <option value="">Select a service</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </Field>
                  <Field label="Project Type" error={errors.projectType?.message}>
                    <select {...register('projectType')} className={inputCls}>
                      <option value="">Select type</option>
                      {TYPES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </Field>
                  <Field label="Estimated Budget" error={errors.budget?.message}>
                    <select {...register('budget')} className={inputCls}>
                      <option value="">Select budget</option>
                      {BUDGETS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </Field>
                  <Field label="Timeline" error={errors.timeline?.message}>
                    <select {...register('timeline')} className={inputCls}>
                      <option value="">Select timeline</option>
                      {TIMELINES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </Field>
                </div>

                <Field label="Project Brief" required error={errors.message?.message}>
                  <textarea {...register('message')} rows={4} className={inputCls} placeholder="Share as much detail as you can about your project scope, site conditions, timeline, etc." />
                </Field>

                <Field label="Attach Documents (Optional)">
                  <label className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-dashed border-white/15 text-white/60 cursor-pointer hover:border-red-500/40 transition">
                    <Upload className="w-4 h-4" />
                    <span className="text-sm">Drop or click to upload site layout, RFQ, drawings...</span>
                    <input type="file" className="hidden" />
                  </label>
                </Field>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" {...register('terms')} className="mt-1 w-4 h-4 accent-red-600" />
                  <span className="text-sm text-white/60">
                    I agree to be contacted by Arroyo Engineering and accept the <a href="#" className="text-white underline">privacy policy</a> & <a href="#" className="text-white underline">terms</a>.
                  </span>
                </label>
                {errors.terms?.message && <div className="text-xs text-red-400">{errors.terms.message}</div>}

                <button type="submit" disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold shadow-[0_20px_50px_-15px_rgba(220,38,38,0.7)] transition disabled:opacity-60">
                  {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <>Request Free Quote <ArrowRight className="w-4 h-4" /></>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
