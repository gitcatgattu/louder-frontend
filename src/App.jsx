import React, { useEffect, useState } from 'react';
import { getEvents } from './api';
import EventCard from './components/EventCard';

function App() {
  const [events, setEvents] = useState([]);
  const [search,setSearch]=useState('')
  useEffect(() => {
    getEvents()
      .then(res => setEvents(res.data))
      .catch(err => console.error('❌ Error fetching events:', err));
  }, []);

  return ( <div className="container py-5">
    <h1 className="text-center mb-4">🎉 Sydney Events</h1>

    <input
      type="text"
      className="form-control mb-5"
      placeholder="Search events..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <div className="row g-4">
      {events.map(event => (
        <div className="col-md-6 col-lg-4" key={event._id}>
          <EventCard event={event} />
        </div>
      ))}
    </div>
  </div>
);
}

export default App;
