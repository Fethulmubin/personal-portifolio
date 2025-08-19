"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_soslj55",
        "template_ae0tn8d",
        form.current,
        "GnxDm1GPkTI3B4KNd"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current?.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message!");
          setLoading(false);
        }
      );
  };

  return (
    <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/30 shadow-lg rounded-2xl p-5 mt-10 relative">
      <Toaster position="top-center" richColors />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full flex flex-col gap-6"
      >
        <div>
          <label htmlFor="name" className="text-white block mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="What’s your good name?"
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-white block mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="What’s your email address?"
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-white block mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="How can I help you?"
            rows={5}
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="mt-2 bg-gray-600 hover:bg-gray-700 transition-colors py-3 rounded-lg font-medium"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
