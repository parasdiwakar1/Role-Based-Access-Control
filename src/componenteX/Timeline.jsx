import { useState, useCallback } from 'react';
import './Timeline.css';

function Timeline() {
  const [entries, setEntries] = useState([]);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const addRow = useCallback(() => {
    setEntries([...entries, { task: '', times: Array(7).fill(0) }]);
  }, [entries]);

  const handleTaskChange = (index, value) => {
    const newEntries = [...entries];
    newEntries[index].task = value;
    setEntries(newEntries);
  };

  const handleTimeChange = (entryIndex, timeIndex, value) => {
    const newEntries = [...entries];
    const sanitizedValue = Math.max(0, Math.min(parseInt(value, 10) || 0, 24));
    newEntries[entryIndex].times[timeIndex] = sanitizedValue;
    setEntries(newEntries);
  };

  return (
    <div className="timesheet-app">
      <header>
        <h1>Timeline Tracker</h1>
      </header>

      <main>
        <div className="timesheet-container">
          <table>
            <thead>
              <tr>
                <th>Task / Location</th>
                {days.map((day, index) => (
                  <th key={index}>{day}</th>
                ))}
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {entries.length === 0 ? (
                <tr>
                  <td colSpan="9" className="no-entries">
                    <div>
                      <i className="fa-solid fa-circle-exclamation"></i>
                      <p>No time tracked this week!</p>
                      <button className="add-row" onClick={addRow}>
                        Add a new entry
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                entries.map((entry, entryIndex) => (
                  <tr key={entryIndex}>
                    <td>
                      <input
                        type="text"
                        placeholder="Enter task or location"
                        value={entry.task}
                        onChange={(e) =>
                          handleTaskChange(entryIndex, e.target.value)
                        }
                        aria-label={`Task ${entryIndex + 1}`}
                      />
                    </td>
                    {entry.times.map((time, timeIndex) => (
                      <td key={timeIndex}>
                        <input
                          className="inputTime"
                          type="number"
                          value={time}
                          onChange={(e) =>
                            handleTimeChange(entryIndex, timeIndex, e.target.value)
                          }
                          aria-label={`Time for ${days[timeIndex]} - Task ${
                            entryIndex + 1
                          }`}
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

        <button className="add-row" onClick={addRow}>
          + Add Row
        </button>
      </main>
    </div>
  );
}

export default Timeline;
