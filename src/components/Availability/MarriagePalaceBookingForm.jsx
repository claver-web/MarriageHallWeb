// MarriagePalaceBookingForm.jsx
import React, { useMemo, useState } from "react";

const HALLS = [
  { id: "grand", label: "Grand Ballroom", capacity: 800 },
  { id: "royal", label: "Royal Hall", capacity: 500 },
  { id: "pearl", label: "Pearl Lawn (Outdoor)", capacity: 1200 },
];

const addDays = (d, n) => {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
};

export default function MarriagePalaceBookingForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(null);
  const [errors, setErrors] = useState({});

  // today in YYYY-MM-DD for input[min]
  const todayStr = useMemo(() => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }, []);

  const [form, setForm] = useState({
    eventType: "Wedding",
    date: "",
    startTime: "18:00",
    endTime: "23:00",
    guests: "",
    hallId: "",
    catering: "In-house",
    budget: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate() {
    const errs = {};
    const dateObj = form.date ? new Date(form.date) : null;
    if (!form.date) errs.date = "Please choose a date.";
    if (dateObj && dateObj < addDays(new Date(todayStr), 0)) {
      errs.date = "Date must be today or later.";
    }
    if (!form.startTime) errs.startTime = "Start time is required.";
    if (!form.endTime) errs.endTime = "End time is required.";
    if (form.startTime && form.endTime && form.startTime >= form.endTime) {
      errs.endTime = "End time must be after start time.";
    }
    if (!form.guests) errs.guests = "Please enter guest count.";
    if (form.guests && (Number(form.guests) < 20 || Number(form.guests) > 3000)) {
      errs.guests = "Guests must be between 20 and 3000.";
    }
    if (!form.hallId) errs.hallId = "Please select a hall.";
    const hall = HALLS.find((h) => h.id === form.hallId);
    if (hall && form.guests && Number(form.guests) > hall.capacity) {
      errs.guests = `Selected hall fits up to ${hall.capacity} guests.`;
    }
    if (!form.name.trim()) errs.name = "Your name is required.";
    if (!/^\+?[0-9\s\-()]{7,16}$/.test(form.phone || "")) {
      errs.phone = "Enter a valid phone number.";
    }
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      errs.email = "Enter a valid email or leave blank.";
    }
    if (form.budget && Number(form.budget) < 0) {
      errs.budget = "Budget cannot be negative.";
    }
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    setLoading(true);
    // Simulate availability check + submission
    await new Promise((r) => setTimeout(r, 900));
    const reference = "BK-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setSubmitted({ ...form, reference });
    setLoading(false);

    // Clear form (optional)
    // setForm({ ...initialState });
  }

  const field =
    "block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200";
  const label =
    "mb-1 block text-sm font-medium text-slate-700";

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Card */}
      <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white">
        {/* Header */}
        <div className="bg-[#C21E56] p-6 text-white">
          <h1 className="text-xl font-semibold">Booking & Availability</h1>
          <p className="text-sm opacity-90">
            Check available dates and request a provisional hold for your event.
          </p>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} noValidate className="p-6">
          {/* Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Event Type */}
            <div className="md:col-span-2">
              <label className={label} htmlFor="eventType">Event type</label>
              <div className="flex flex-wrap gap-2">
                {["Wedding", "Reception", "Engagement", "Sangeet", "Other"].map((t) => (
                  <label key={t} className={`cursor-pointer select-none rounded-full border px-4 py-2 text-sm
                      ${form.eventType === t ? "border-indigo-500 bg-indigo-50 text-indigo-700" : "border-slate-300 bg-white text-slate-700"}`}>
                    <input
                      type="radio"
                      name="eventType"
                      value={t}
                      className="sr-only"
                      checked={form.eventType === t}
                      onChange={handleChange}
                    />
                    {t}
                  </label>
                ))}
              </div>
            </div>

            {/* Date */}
            <div>
              <label className={label} htmlFor="date">Event date</label>
              <input
                id="date"
                name="date"
                type="date"
                min={todayStr}
                value={form.date}
                onChange={handleChange}
                className={field}
                aria-invalid={!!errors.date}
                aria-describedby={errors.date ? "date-err" : undefined}
                required
              />
              {errors.date && <p id="date-err" className="mt-1 text-xs text-rose-600">{errors.date}</p>}
            </div>

            {/* Time */}
            <div className="flex gap-3">
              <div className="flex-1">
                <label className={label} htmlFor="startTime">Start time</label>
                <input
                  id="startTime"
                  name="startTime"
                  type="time"
                  value={form.startTime}
                  onChange={handleChange}
                  className={field}
                  aria-invalid={!!errors.startTime}
                />
                {errors.startTime && <p className="mt-1 text-xs text-rose-600">{errors.startTime}</p>}
              </div>
              <div className="flex-1">
                <label className={label} htmlFor="endTime">End time</label>
                <input
                  id="endTime"
                  name="endTime"
                  type="time"
                  value={form.endTime}
                  onChange={handleChange}
                  className={field}
                  aria-invalid={!!errors.endTime}
                />
                {errors.endTime && <p className="mt-1 text-xs text-rose-600">{errors.endTime}</p>}
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className={label} htmlFor="guests">Guest count</label>
              <input
                id="guests"
                name="guests"
                type="number"
                min="20"
                max="3000"
                inputMode="numeric"
                placeholder="e.g., 450"
                value={form.guests}
                onChange={handleChange}
                className={field}
                aria-invalid={!!errors.guests}
                required
              />
              <p className="mt-1 text-[11px] text-slate-500">
                Capacity hint: Grand 800 · Royal 500 · Pearl 1200
              </p>
              {errors.guests && <p className="mt-1 text-xs text-rose-600">{errors.guests}</p>}
            </div>

            {/* Hall */}
            <div>
              <label className={label} htmlFor="hallId">Preferred hall</label>
              <select
                id="hallId"
                name="hallId"
                value={form.hallId}
                onChange={handleChange}
                className={field}
                aria-invalid={!!errors.hallId}
                required
              >
                <option value="" disabled>Choose a hall</option>
                {HALLS.map((h) => (
                  <option key={h.id} value={h.id}>
                    {h.label} — up to {h.capacity}
                  </option>
                ))}
              </select>
              {errors.hallId && <p className="mt-1 text-xs text-rose-600">{errors.hallId}</p>}
            </div>

            {/* Catering */}
            <div>
              <label className={label} htmlFor="catering">Catering</label>
              <select
                id="catering"
                name="catering"
                value={form.catering}
                onChange={handleChange}
                className={field}
              >
                <option>In-house</option>
                <option>Outside Vendor</option>
                <option>Not Sure</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className={label} htmlFor="budget">Approx. budget (₹)</label>
              <input
                id="budget"
                name="budget"
                type="number"
                min="0"
                inputMode="numeric"
                placeholder="e.g., 800000"
                value={form.budget}
                onChange={handleChange}
                className={field}
              />
              {errors.budget && <p className="mt-1 text-xs text-rose-600">{errors.budget}</p>}
            </div>

            {/* Contact */}
            <div className="md:col-span-2 grid grid-cols-1 gap-5 md:grid-cols-3">
              <div>
                <label className={label} htmlFor="name">Your name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={handleChange}
                  className={field}
                  aria-invalid={!!errors.name}
                  required
                />
                {errors.name && <p className="mt-1 text-xs text-rose-600">{errors.name}</p>}
              </div>
              <div>
                <label className={label} htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="+91 98xxxxxxx"
                  value={form.phone}
                  onChange={handleChange}
                  className={field}
                  aria-invalid={!!errors.phone}
                  required
                />
                {errors.phone && <p className="mt-1 text-xs text-rose-600">{errors.phone}</p>}
              </div>
              <div>
                <label className={label} htmlFor="email">Email (optional)</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={field}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
              </div>
            </div>

            {/* Notes */}
            <div className="md:col-span-2">
              <label className={label} htmlFor="notes">Notes / special requests</label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                placeholder="Decor theme, baraat entry, stage size, parking, etc."
                value={form.notes}
                onChange={handleChange}
                className={`${field} resize-y`}
              />
            </div>
          </div>

          {/* Footer actions */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-md bg-[#C21E56] px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Checking availability…" : "Check availability"}
            </button>

            <p className="text-xs text-slate-500">
              By submitting, you agree to be contacted via phone or email.
            </p>
          </div>

          {/* Success banner */}
          {submitted && (
            <div
              role="status"
              className="mt-6 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"
            >
              <p className="font-medium">Request received!</p>
              <p className="mt-1">
                Ref <span className="font-mono">{submitted.reference}</span> — Our team will confirm availability for{" "}
                <strong>{submitted.date}</strong> ({submitted.eventType}) and get back to you shortly.
              </p>
            </div>
          )}
        </form>

        {/* Small print / trust badges */}
        <div className="border-t border-slate-100 bg-slate-50 px-6 py-4">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <li>✓ Fully AC &amp; Generator Backup</li>
            <li>✓ 500+ Parking</li>
            <li>✓ Fire &amp; Safety Compliant</li>
            <li>✓ In-house Catering Available</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
