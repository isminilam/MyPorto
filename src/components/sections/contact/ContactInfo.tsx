import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../../../data/constants';

export default function ContactInfo() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: undefined,
    },
  ];

  return (
    <div className="contact-info-col md:col-span-2 glass rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-white/10 h-full">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Let&apos;s Connect</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          I&apos;m always excited to discuss new opportunities, interesting projects,
          and creative collaborations. Feel free to reach out!
        </p>
      </div>

      <div className="space-y-3.5 mt-8">
        {contactInfo.map((info) => {
          const Icon = info.icon;
          const content = (
            <>
              <div className="p-3 rounded-xl bg-primary-500/15 text-primary-400 group-hover:bg-primary-500/25 transition-colors shrink-0">
                <Icon size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">
                  {info.label}
                </p>
                <p className="text-sm text-gray-200 font-medium truncate group-hover:text-white transition-colors">
                  {info.value}
                </p>
              </div>
            </>
          );

          if (info.href) {
            return (
              <a
                key={info.label}
                href={info.href}
                className="contact-info-card flex items-center gap-4 p-4 rounded-xl bg-surface-950/40 hover:bg-white/[0.08] group border border-white/5 hover:border-primary-500/30 transition-colors"
              >
                {content}
              </a>
            );
          }

          return (
            <div
              key={info.label}
              className="contact-info-card flex items-center gap-4 p-4 rounded-xl bg-surface-950/40 group border border-white/5"
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
