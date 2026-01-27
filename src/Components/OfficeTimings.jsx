import React from "react";

const OfficeTimings = () => {
  const schedule = [
    { day: "Monday", time: "9:00 AM – 5:00 PM" },
    { day: "Tuesday", time: "9:00 AM – 5:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 5:00 PM" },
    { day: "Thursday", time: "9:00 AM – 5:00 PM" },
    { day: "Friday", time: "9:00 AM – 5:00 PM" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <section>
      <div className="max-w-[90%] mx-auto text-center py-4">
        <h2 className="badge mb-6">
          Office <span className="text-sky-600">Hours</span>
        </h2>

        {/* 7 Days in One Row */}
        <div className="bg-darkblue p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {schedule.map((item, index) => (
                <div
                key={index}
                className={`flex flex-col items-center justify-center px-2 py-8 rounded-lg ${
                    item.time === "Closed"
                    ? "bg-red-100 text-reddish"
                    : "bg-white text-gray-800"
                }`}
                >
                <h3 className="font-semibold text-lg font-inter mb-2">{item.day}</h3>
                <p className="text-sm font-bold font-montserrat">{item.time}</p>
                </div>
            ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default OfficeTimings;
