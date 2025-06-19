import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarCard = ({ onCreateBoard }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Calendar</h3>
      
      <div className="mb-6 flex justify-center">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          inline
          className="w-full"
        />
      </div>
    </div>
  );
};

export default CalendarCard;