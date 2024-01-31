import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import "./App.css";


const WeeklyScheduler = () => {
  const [currentWeekStart, setCurrentWeekStart] = useState(DateTime.local().startOf('week'));
  const [selectedTimezone, setSelectedTimezone] = useState('UTC');

  const loadWeeklySchedule = () => {
    const weekdays = [];
    for (let i = 2; i <= 6; i++) { 
      const day = currentWeekStart.plus({ days: i - 1 }).setZone(selectedTimezone);
      weekdays.push(
        <div key={i} className="day">
          <div className='day1'>
          <h3>{day.toFormat('EEEE')}</h3>
          <p>{day.toFormat('dd/MM')}</p>
           </div>
          <div className='day2'>
          <label><input type="checkbox" />8:AM</label>
          <label><input type="checkbox" />8:30AM</label>
          <label><input type="checkbox" />9:00AM</label>
          <label><input type="checkbox" />9:30AM</label>
          <label><input type="checkbox" />10:AM</label>
          <label><input type="checkbox" />10:30AM</label>
          <label><input type="checkbox" />11:00AM</label> 
          <label><input type="checkbox" />11:30AM</label>
                      <br></br> <br></br>
          <label><input type="checkbox" />12:AM</label>
          <label><input type="checkbox" />12:30PM</label>
          <label><input type="checkbox" />1:00PM</label>
          <label><input type="checkbox" />1:30PM</label>
          <label><input type="checkbox" />2:00PM</label>
          <label><input type="checkbox" />2:30PM</label>
          <label><input type="checkbox" />3:00PM</label>
          <label><input type="checkbox" />3:30PM</label>
          <label><input type="checkbox" />1:00PM</label>
          <label><input type="checkbox" />1:30PM</label>
          <label><input type="checkbox" />2:00PM</label>
          <label><input type="checkbox" />2:30PM</label>
          <label><input type="checkbox" />3:00PM</label>
          <label><input type="checkbox" />3:30PM</label>
          <label><input type="checkbox" />4:00PM</label>
          <label><input type="checkbox" />4:30PM</label>
          <label><input type="checkbox" />5:00PM</label> 
                      <br></br> <br></br>
          <label><input type="checkbox" />5:30PM</label>
          <label><input type="checkbox" />6:00PM</label>
          <label><input type="checkbox" />6:30PM</label>
          <label><input type="checkbox" />7:00PM</label>
          <label><input type="checkbox" />7:30PM</label>
          <label><input type="checkbox" />8:00PM</label>
          <label><input type="checkbox" />8:30PM</label>
          <label><input type="checkbox" />9:00PM</label>
          <label><input type="checkbox" />9:30PM</label>          
          <label><input type="checkbox" />10:00PM</label>
          <label><input type="checkbox" />10:30PM</label>
          <label><input type="checkbox" />11:00PM</label>
          </div>

        </div>
      );
    }
    return weekdays;
  };

  const updateWeek = (weeksToAdd) => {
    setCurrentWeekStart(currentWeekStart.plus({ weeks: weeksToAdd }));
  };

  const handleTimezoneChange = (e) => {
    setSelectedTimezone(e.target.value);
  };

  useEffect(() => {

    console.log('Schedule updated for timezone:', selectedTimezone);
  }, [selectedTimezone, currentWeekStart]);

  return (
    <div>
    

      <div className='div1'>
      <button onClick={() => updateWeek(-1)} className='but1'> <FontAwesomeIcon icon={faCaretLeft} />Previous Week</button>
        <button className='but2'>{currentWeekStart.toFormat('MMMM dd, yyyy')}</button>
        <button className='but3'onClick={() => updateWeek(1)}>Next Week<FontAwesomeIcon icon={faCaretRight} /></button>
      </div>

      <div className='div2'>
        <label htmlFor="timezone">Timezone:</label> <br></br>
        <select id="timezone" onChange={handleTimezoneChange} value={selectedTimezone}>
          <option value="UTC">UTC</option>
          <option value="America/New_York">Eastern Time (ET)</option>
        </select>
      </div>

      <div className="schedule-container">
        {loadWeeklySchedule()}
      </div>
    </div>
  );
};

export default WeeklyScheduler;

