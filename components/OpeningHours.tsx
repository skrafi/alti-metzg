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
  const today = new Date().getDay();
  const todayIndex = today === 0 ? 6 : today - 1;

  if (compact) {
    const todayHours = hours[todayIndex];
    return (
      <div className="inline-flex items-center gap-3 px-4 py-2 bg-forest/10 border border-forest/20">
        <span className="w-2 h-2 bg-forest-light rounded-full animate-pulse" />
        <span className="text-sm font-medium text-charcoal">
          Heute:{" "}
          {todayHours.closed ? (
            <span className="text-charcoal/50">Ruhetag</span>
          ) : (
            <span className="text-forest font-semibold">
              {todayHours.open} – {todayHours.close}
            </span>
          )}
        </span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="hours-grid"
    >
      {hours.map((item, index) => {
        const isToday = index === todayIndex;
        const isClosed = item.closed;

        return (
          <div
            key={item.day}
            className={`hours-row ${isToday ? "today" : ""} ${isClosed ? "closed" : ""}`}
          >
            <span className="font-medium flex items-center gap-2">
              {isToday && <span className="w-2 h-2 bg-current rounded-full" />}
              {item.day}
              {isToday && <span className="text-xs opacity-80">(Heute)</span>}
            </span>
            <span className={`text-right ${isClosed ? "italic" : ""}`}>
              {isClosed ? (
                "Ruhetag"
              ) : (
                <span className="font-semibold">
                  {item.open} – {item.close}
                </span>
              )}
            </span>
          </div>
        );
      })}
    </motion.div>
  );
}
