// DateList.js
import React, { useState, useEffect } from 'react';

const DateList = () => {
  const [dateData, setDateData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Note: The path is relative to the public folder
        const data = await response.json();
        setDateData(data);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);

  const [selectedDates, setSelectedDates] = useState([]);

  const handleCheckboxChange = (date) => {
    setSelectedDates((prevSelectedDates) =>
      prevSelectedDates.includes(date)
        ? prevSelectedDates.filter((d) => d !== date)
        : [...prevSelectedDates, date]
    );
  };

  return (
    <div>
      <h2>Dates with Checkboxes</h2>
      <ul>
        {dateData.map((item) => (
          <li key={item.Id}>
            <label>
              <input
                type="checkbox"
                checked={selectedDates.includes(item.Date)}
                onChange={() => handleCheckboxChange(item.Date)}
              />
              {`${item.Date} - ${item.Time}`}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DateList;
