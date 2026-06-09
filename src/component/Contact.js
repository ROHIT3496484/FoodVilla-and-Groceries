import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    setSubmitted(true);
    setForm({ name: "", message: "" });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h1>
      <p className="text-gray-600 mb-6">
        Have a question or feedback? Reach out to us anytime.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-1">📧 Email</h3>
          <a
            href="mailto:rohitrana349@gmail.com"
            className="text-orange-600 hover:underline text-sm break-all"
          >
            rohitrana349@gmail.com
          </a>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-1">📞 Phone</h3>
          <a
            href="tel:+918476802241"
            className="text-orange-600 hover:underline text-sm"
          >
            8476802241
          </a>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-50 border border-gray-200 rounded-xl p-6 flex flex-col gap-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            rows={4}
            placeholder="How can we help?"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2.5 rounded-lg shadow self-start px-6"
        >
          Submit
        </button>
        {submitted && (
          <p className="text-green-600 text-sm font-medium">
            Thanks for reaching out! We&apos;ll get back to you soon.
          </p>
        )}
      </form>

      <p className="text-sm text-gray-500 mt-6 text-center">
        Maintained by <span className="font-semibold">Rohit Rana</span>
      </p>
    </div>
  );
};

export default Contact;
