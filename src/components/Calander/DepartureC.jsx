import React, { useState } from "react";

// sample data (replace with API)
const treks = [
  {
    id: 1,
    title: "Himalayan Sunrise Trek",
    startDate: "2025-09-10",
    endDate: "2025-09-16",
    seatsLeft: 7,
  },
  {
    id: 2,
    title: "Alpine Adventure",
    startDate: "2025-10-24",
    endDate: "2025-10-30",
    seatsLeft: 2,
  },
  {
    id: 3,
    title: "Nepal Basecamp Trek",
    startDate: "2025-10-08",
    endDate: "2025-10-14",
    seatsLeft: 0,
  },
];

function formatDate(date) {
  return new Date(date);
}

function getCalendarDays(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const days = [];
  const startWeekday = firstDay.getDay();
  const totalDays = lastDay.getDate();

  for (let i = 0; i < startWeekday; i++) days.push(null);
  for (let d = 1; d <= totalDays; d++) days.push(new Date(year, month, d));

  return days;
}

function SeatsBadge({ left }) {
  if (left === 0)
    return (
      <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-[10px] font-medium">
        Sold Out
      </span>
    );
  if (left <= 3)
    return (
      <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-[10px] font-medium">
        {left} left
      </span>
    );
  return (
    <div className="text-green-700 rounded-full text-[7px] font-medium">
      Booked
    </div>
  );
}

export default function WeddingClanders() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const monthDays = getCalendarDays(currentYear, currentMonth);

  const monthName = new Date(currentYear, currentMonth).toLocaleString(
    "default",
    { month: "long", year: "numeric" }
  );

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  return (
    <div className="max-w-3xl mx-auto lg:px-20 lg:py-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 sticky top-0 bg-white z-10 py-2">
        <button
          onClick={prevMonth}
          className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          ‹
        </button>
        <h2 className="text-xl sm:text-2xl font-bold text-pink-400">
          {monthName}
        </h2>
        <button
          onClick={nextMonth}
          className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          ›
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-[11px] sm:text-sm font-semibold text-pink-500 mb-2">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2 sm:gap-2 text-xs sm:text-sm">
        {monthDays.map((date, i) => (
          <div
            key={i}
            className={`min-h-[40px] min-w-[38px] border rounded-lg p-1 sm:p-2 flex flex-col relative bg-white shadow-sm ${
              date?.toDateString() === today.toDateString()
                ? "border-blue-500 ring-3 ring-blue-300"
                : "border-gray-200"
            }`}
          >
            {date && (
              <>
                <div className="text-right font-semibold text-black text-[11px] sm:text-sm mb-1">
                  {date.getDate()}
                </div>
                <div className="flex-1 space-y-3">
                  {treks
                    .filter((t) => {
                      const start = formatDate(t.startDate);
                      const end = formatDate(t.endDate);
                      return date >= start && date <= end;
                    })
                    .map((t) => (
                      <div
                        key={t.id}
                        className="bg-blue-50 border border-blue-200 rounded-md px-1 py-0.5 sm:p-2 text-left hover:shadow-md transition"
                      >
                      <SeatsBadge />
                      </div>
                    ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
