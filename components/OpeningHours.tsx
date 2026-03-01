"use client";

const hours = [
  { day: "Mo", time: "Ruhetag", closed: true },
  { day: "Di", time: "08:00 – 18:45" },
  { day: "Mi", time: "08:00 – 18:45" },
  { day: "Do", time: "08:00 – 18:45" },
  { day: "Fr", time: "08:00 – 19:15" },
  { day: "Sa", time: "08:00 – 19:15" },
  { day: "So", time: "08:00 – 18:45" },
];

export default function OpeningHours() {
  const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  return (
    <div className="space-y-3">
      {hours.map((item, index) => {
        const isToday = index === todayIndex;

        return (
          <div
            key={item.day}
            className={`flex justify-between items-center py-2 border-b border-charcoal/10 ${
              isToday ? "font-medium" : ""
            }`}
            style={{
              borderColor: "rgba(30,30,28,0.1)",
              color: isToday ? "var(--charcoal)" : "rgba(30,30,28,0.7)",
              backgroundColor: isToday ? "rgba(176,141,87,0.1)" : undefined
            }}
          >
            <span className="body-sm">
              {item.day}
              {isToday && <span className="ml-2 text-xs" style={{ color: "var(--aged-brass)" }}>Heute</span>}
            </span>
            <span className={`body-sm ${item.closed ? "italic" : ""}`}>
              {item.time}
            </span>
          </div>
        );
      })}
    </div>
  );
}
