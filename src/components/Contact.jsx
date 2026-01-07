import { useState } from "react";
import Reveal from "./Reveal";

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
      const res = await fetch("http://localhost:5000/api/contacts", {
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
      <section id="contact" className="bg-black py-24">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-4xl text-white font-bold text-center mb-10">
            Contact Me
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-[#141414] text-white"
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 rounded bg-[#141414] text-white"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 rounded bg-[#141414] text-white"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 py-3 rounded text-white hover:scale-105 transition"
            >
              Send Message
            </button>

            {status && (
              <p className="text-center text-gray-400 mt-2">
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
