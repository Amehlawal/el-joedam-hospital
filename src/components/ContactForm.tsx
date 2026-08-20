"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");

    // Simulate async submission (Ready to attach EmailJS, Resend, Formspree, or Next.js API Route)
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setFormData({
        name: "",
        contact: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("error");
      setErrorMessage("Unable to send message at this moment. Please call us directly.");
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg shadow-slate-900/5">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900">Send Us a Message</h3>
        <p className="text-sm text-slate-600 mt-1">
          Have an inquiry? Fill out the form below and our team will get back to you promptly.
        </p>
      </div>

      {status === "success" && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-sm">Message Sent Successfully!</p>
            <p className="text-xs text-emerald-700 mt-0.5">
              Thank you for contacting EL-JOEDAM Specialist Hospital. We will reach out to you shortly.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-2 text-xs font-semibold text-emerald-800 underline"
            >
              Send another message
            </button>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-sm">Submission Notice</p>
            <p className="text-xs text-red-700 mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Full Name <span className="text-hospital-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Chukwuma Obi"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:border-hospital-blue-600 focus:ring-2 focus:ring-hospital-blue-100 transition-all outline-none"
          />
        </div>

        <div>
          <label htmlFor="contact" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Phone Number or Email <span className="text-hospital-red-600">*</span>
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            required
            value={formData.contact}
            onChange={handleChange}
            placeholder="080... or email@example.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:border-hospital-blue-600 focus:ring-2 focus:ring-hospital-blue-100 transition-all outline-none"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Subject / Service of Interest
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. General Consultation / Diagnostic Inquiry"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:border-hospital-blue-600 focus:ring-2 focus:ring-hospital-blue-100 transition-all outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Message <span className="text-hospital-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Please write your inquiry or question here..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:border-hospital-blue-600 focus:ring-2 focus:ring-hospital-blue-100 transition-all outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-hospital-blue-800 hover:bg-hospital-blue-900 active:scale-[0.99] transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed text-sm"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-slate-500 text-center pt-1">
          For urgent medical attention, please call our direct hospital line:{" "}
          <a href="tel:08165221928" className="font-semibold text-hospital-blue-700 underline">
            (+234) 816-522-1928
          </a>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
