"use client";

import { motion } from "framer-motion";

interface OpeningHoursProps {
  compact?: boolean;
}

const hours = [
  { day: "Montag", closed: true },
  { day: "Dienstag", open: "08:00", close: "18:45" },
  { day: "Mittwoch", open: "08:00", close: "18:45" },
  { day: "Donnerstag", open: "08:00", close: "18:45" },
  { day: "Freitag", open: "08:00", close: "19:15" },
  { day: "Samstag", open: "08:00", close: "19:15" },
  { day: "Sonntag", open: "08:00", close: "18:45" },
];

export default function OpeningHours({ compact = false }: OpeningHoursProps) {
  // Get current day (0 = Sunday, 1 = Monday, etc.)
  const today = new Date().getDay();
  const todayIndex = today === 0 ? 6 : today - 1; // Convert to Monday-first order

  if (compact) {
    // Compact version for home page
    const todayHours = hours[todayIndex];
    return (
      <div className="text-center">
        <p className="text-sm text-contrast/70">
          Heute:{" "}
          <span className="text-contrast font-medium">
            {todayHours.closed
              ? "Ruhetag"
              : `${todayHours.open} – ${todayHours.close}`}
          </span>
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-3"
    >
      {hours.map((item, index) => (
        <div
          key={item.day}
          className={`flex justify-between items-center py-2 ${
            index === todayIndex
              ? "text-accent font-medium"
              : "text-contrast/70"
          }`}
        >
          <span className="w-28">{item.day}</span>
          <span className="text-right">
            {item.closed ? (
              <span className="text-muted italic">Ruhetag</span>
            ) : (
              `${item.open} – ${item.close}`
            )}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
