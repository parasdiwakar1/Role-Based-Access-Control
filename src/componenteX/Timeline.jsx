import { useState } from 'react';
import './Timeline.css';

function Timeline() {
  
  const [entries, setEntries] = useState([]);

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const addRow = () => {
    setEntries([...entries, { task: '', times: Array(7).fill(0) }]);
  };

  const handleTaskChange = (index, value) => {
    const newEntries = [...entries];
    newEntries[index].task = value;
    setEntries(newEntries);
  };

  const handleTimeChange = (entryIndex, timeIndex, value) => {
    const newEntries = [...entries];
    newEntries[entryIndex].times[timeIndex] = parseInt(value, 10) || 0;
    setEntries(newEntries);
  };

  return (
    <div className="timesheet-app">
      <header>
        <h1>TimesLine Tracker</h1>
        
      </header>

      <main>
        

        <div className="timesheet-container">
          <table>
            <thead>
              <tr>
                <th>Task / Location</th>
                {days.map((day, index) => <th key={index}>{day}</th>)}
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {entries.length === 0 ? (
                <tr>
                  <td colSpan="9" className="no-entries">
                    <div>
                    <i class="fa-solid fa-circle-exclamation"></i>
                      <p>No time tracked this week!</p>
                      <button className='addrow' onClick={addRow}>Add a new entry</button>
                    </div>
                  </td>
                </tr>
              ) : (
                entries.map((entry, entryIndex) => (
                  <tr key={entryIndex}>
                    <td>
                      <input
                        type="text"
                        value={entry.task}
                        onChange={(e) => handleTaskChange(entryIndex, e.target.value)}
                      />
                    </td>
                    {entry.times.map((time, timeIndex) => (
                      <td key={timeIndex}>
                        <input
                        className='inputTime'
                          type="number"
                          value={time}
                          onChange={(e) => handleTimeChange(entryIndex, timeIndex, e.target.value)}
                        />
                      </td>
                    ))}
                    <td>{entry.times.reduce((a, b) => a + b, 0)}h</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <button className="add-row" onClick={addRow}>+ Add Row</button>
      </main>
    </div>
  );
}

export default Timeline;
