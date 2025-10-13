import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xzzanvdl");
  const [honeypot, setHoneypot] = useState(''); // Honeypot field for spam protection

  // Show success message if form was submitted successfully
  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="p-8 bg-accent-1/10 border border-accent-1/20 rounded-xl">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-accent-1 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent Successfully!</h3>
          <p className="text-muted-foreground mb-4">
            Thank you for reaching out. I'll get back to you within 24 hours.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-primary text-primary-contrast rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Send Another Message
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 border border-border bg-card rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="Your full name"
            disabled={state.submitting}
            required
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
            className="mt-1 text-sm text-accent-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border border-border bg-card rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="your.email@example.com"
            disabled={state.submitting}
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="mt-1 text-sm text-accent-2"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-4 py-3 border border-border bg-card rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
            placeholder="Tell me about your project, collaboration opportunity, or just say hello..."
            disabled={state.submitting}
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="mt-1 text-sm text-accent-2"
          />
        </div>

        <motion.button
          type="submit"
          disabled={state.submitting}
          whileHover={{ scale: state.submitting ? 1 : 1.02 }}
          whileTap={{ scale: state.submitting ? 1 : 0.98 }}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
            state.submitting
              ? 'bg-muted text-muted-foreground cursor-not-allowed'
              : 'bg-primary text-primary-contrast hover:bg-primary/90'
          }`}
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </motion.button>

        {state.errors && Array.isArray(state.errors) && state.errors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-accent-2/10 border border-accent-2/20 rounded-lg text-accent-2"
          >
            <p className="font-medium">Failed to send message</p>
            <p className="text-sm">Please check the form and try again.</p>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;

