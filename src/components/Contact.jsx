import { useState } from "react";
import Reveal from "./Reveal";
import API_BASE_URL from "../config";

const API_URL = `${API_BASE_URL}/contacts`;

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "Something went wrong ❌");
      }
    } catch (err) {
      setStatus("Server error ❌");
    }
  };

  return (
    <Reveal>
      <section
        id="contact"
        className="bg-black py-16 sm:py-20 md:py-24"
      >
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl text-white font-bold text-center mb-8 sm:mb-10">
            Contact Me
          </h2>

          {/* Contact Information */}
          <div className="mb-8 text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:surenderthakur40437@gmail.com" className="hover:text-orange-500 transition">
                surenderthakur40437@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Bilaspur, Himachal Pradesh, India</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 sm:p-4 rounded-lg bg-[#141414] text-white focus:ring-2 focus:ring-orange-500"
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 sm:p-4 rounded-lg bg-[#141414] text-white focus:ring-2 focus:ring-orange-500"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 sm:p-4 rounded-lg bg-[#141414] text-white focus:ring-2 focus:ring-orange-500"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 py-3 sm:py-4 rounded-xl text-white hover:scale-105 transition"
            >
              Send Message
            </button>

            {status && (
              <p className="text-center text-sm sm:text-base text-gray-400 mt-2">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </Reveal>
  );
};

export default Contact;
