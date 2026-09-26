import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import { profile } from '../data/profile';

/**
 * Floating WhatsApp click-to-chat widget.
 *
 * The number is read from VITE_WHATSAPP_NUMBER and must include the country
 * code (for example "18573399017"). Everything that is not a digit is
 * stripped before building the wa.me link, so "+1 (857) 339-9017" also works.
 *
 * If the variable is unset the widget renders nothing at all, so an
 * unconfigured deploy never shows a dead chat button.
 */

const RAW_NUMBER = (import.meta.env.VITE_WHATSAPP_NUMBER ?? '').toString();
const NUMBER = RAW_NUMBER.replace(/\D/g, '');

const PREFILL = `Hi ${profile.name.split(' ')[0]}, I found your portfolio and wanted to get in touch.`;

const WhatsAppIcon = ({ className = '' }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.886-9.885 9.886m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.82 11.82 0 0 0 20.465 3.49" />
    </svg>
);

const WhatsAppWidget: React.FC = () => {
    const [open, setOpen] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);

    const close = useCallback(() => setOpen(false), []);

    // Escape closes the panel.
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open, close]);

    // Clicking outside closes the panel.
    useEffect(() => {
        if (!open) return;
        const onClick = (e: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(e.target as Node)) close();
        };
        document.addEventListener('mousedown', onClick);
        return () => document.removeEventListener('mousedown', onClick);
    }, [open, close]);

    if (!NUMBER) return null;

    const href = `https://wa.me/${NUMBER}?text=${encodeURIComponent(PREFILL)}`;

    return (
        <div ref={panelRef} className="fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-3 print:hidden">
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.96 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        role="dialog"
                        aria-label="Chat on WhatsApp"
                        className="w-[17rem] sm:w-80 rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
                    >
                        <div className="flex items-start justify-between gap-3 bg-[#25D366] px-4 py-3">
                            <div className="flex items-center gap-2 text-white">
                                <WhatsAppIcon className="w-5 h-5" />
                                <span className="font-semibold text-sm">Chat on WhatsApp</span>
                            </div>
                            <button
                                onClick={close}
                                aria-label="Close WhatsApp chat panel"
                                className="text-white/90 hover:text-white rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="p-4 space-y-3">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Hi, I&apos;m {profile.name.split(' ')[0]}. Send a message and I&apos;ll get back to you.
                            </p>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={close}
                                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-[#25D366] hover:brightness-105 active:scale-[0.98] text-white font-semibold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
                            >
                                <WhatsAppIcon className="w-4 h-4" />
                                Start chat
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
                aria-expanded={open}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
            >
                <AnimatePresence mode="wait" initial={false}>
                    {open ? (
                        <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                            <X className="w-6 h-6" />
                        </motion.span>
                    ) : (
                        <motion.span key="wa" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                            <WhatsAppIcon className="w-7 h-7" />
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
};

export default WhatsAppWidget;
