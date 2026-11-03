'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { personalInfo } from '../../../data/constants';
import Button from '../../ui/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus('idle');

    try {
      // Send directly via FormSubmit AJAX
      const res = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        // Fallback: direct mailto in case of CORS or submission limit
        window.location.href = `mailto:${personalInfo.email}?subject=Contact from ${encodeURIComponent(
          formData.name
        )}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(
          formData.email
        )}`;
        setStatus('success');
      }
    } catch {
      // Network or Adblock fallback
      window.location.href = `mailto:${personalInfo.email}?subject=Contact from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(
        formData.email
      )}`;
      setStatus('success');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="contact-form-box md:col-span-3 h-full">
      <form
        onSubmit={handleSubmit}
        className="glass rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full border border-white/10"
      >
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5"
              >
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 outline-none transition-colors text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5"
              >
                Your Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@email.com"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 outline-none transition-colors text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <label
              htmlFor="contact-message"
              className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Tell me about your project or just say hello..."
              className="w-full flex-1 min-h-[110px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 outline-none transition-colors text-sm resize-none"
            />
          </div>
        </div>

        {/* Submission Status Alerts */}
        {status === 'success' && (
          <div className="mt-3 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center gap-2.5 text-xs text-emerald-300">
            <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
            <span>Pesan berhasil dikirim! Saya akan segera menghubungi Anda.</span>
          </div>
        )}

        {status === 'error' && (
          <div className="mt-3 p-3 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-300">
            <AlertCircle size={16} className="text-red-400 shrink-0" />
            <span>Terjadi kendala pengiriman. Silakan kirim langsung via email ke isminilamng@gmail.com</span>
          </div>
        )}

        <Button
          type="submit"
          disabled={loading}
          className="w-full justify-center mt-5"
        >
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Sending Message...</span>
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle2 size={16} />
              <span>Message Sent!</span>
            </>
          ) : (
            <>
              <Send size={16} />
              <span>Send Message</span>
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
