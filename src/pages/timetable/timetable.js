import React from "react";

const Timetable = () => {
  const timetableData = [
    { day: "Monday", date: "01-May", detail: "Parent-Teacher Meeting" },
    { day: "Tuesday", date: "02-May", detail: "Holiday" },
    { day: "Wednesday", date: "03-Aug", detail: "Exams" },
    { day: "Thursday", date: "04-May", detail: "Parent-Teacher Meeting" },
    { day: "Friday", date: "05-May", detail: "Sports Gala" },
    { day: "Saturday", date: "06-Aug", detail: "Exams" },
    { day: "Monday", date: "07-May", detail: "Parent-Teacher Meeting" },
    { day: "Tuesday", date: "08-May", detail: "Holiday" },
    { day: "Wednesday", date: "09-Aug", detail: "Exams" },
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="bg-[#f98526] py-[7px] rounded mb-[15px]">
        <h1 className="text-2xl text-[#fff] font-[500] text-center">School Calendar (2023-24)</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {timetableData.map(({ day, date, detail }) => (
          <div key={date} className="bg-gray-200 p-4 rounded-md shadow">
            <h2 className="text-xl font-bold mb-2">{day}</h2>
            <p className="text-gray-700">{date}</p>
            <p className="mt-2">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
