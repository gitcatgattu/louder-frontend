import React, { useState } from 'react';
import { subscribeEmail } from '../api';

const EventCard = ({ event }) => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleRedirect = async () => {
    if (email===null) {
      alert('Please enter your email!');
      return;
    }
  
    try {
      await subscribeEmail(email, event._id);  // 💥 Send email + event ID to backend
      alert('✅ You are subscribed! Redirecting...');
      window.open(event.link, 'youtube.com');
      setShowModal(false);
      setEmail('');
    } catch (err) {
      alert('❌ Error: ' + (err.response?.data?.message || 'Something went wrong'));
    }
  };
  

  return (






    <div className="card h-100 shadow-sm">
      <img src={event.image} className="card-img-top" alt={event.title} style={{ height: '180px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{event.title}</h5>
      <a href={`${event.location}`} className='card-subtitle mb-2 text-muted'> visit website</a>
          <p className="card-text">{event.description}</p>
        </div>
        <button className="btn btn-dark mt-3 w-100" onClick={() => setShowModal(true)}>
          GET TICKETS
        </button>
      </div>

      {showModal && (
        <div className="modal d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content p-3">
              <div className="modal-header">
                <h5 className="modal-title">Enter your email to continue</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button onClick={handleRedirect} className="btn btn-success">
                  Proceed to Event
                </button>
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
 
  );
};


export default EventCard;


// import React, { useState } from 'react';
// import { subscribeEmail } from '../api'; // Make sure this is defined in api.js

// const EventCard = ({ event }) => {
//   const [email, setEmail] = useState('');
//   const [showModal, setShowModal] = useState(false);

//   const handleRedirect = async () => {
//     if (!email) {
//       alert('Please enter your email!');
//       return;
//     }

//     try {
//       await subscribeEmail(email, event._id); // 📤 Send email + event ID to backend
//       alert('✅ You are subscribed! Redirecting to the ticket site...');
//       window.open(event.link, '_blank');       // 🔗 Redirect to external event link
//       setShowModal(false);                     // ✅ Hide modal
//       setEmail('');                            // 🧹 Clear input
//     } catch (err) {
//       console.error('❌ Subscription error:', err);
//       const msg = err.response?.data?.message || 'Something went wrong';
//       alert(`❌ Error: ${msg}`);
//     }
//   };

//   return (
//     <div className="card event-card">
//       <img src={event.image} className="img-fluid" alt={event.title} />
//       <h2>{event.title}</h2>
//       <p>{event.date} | {event.location}</p>
//       <p>{event.description}</p>

//       <button onClick={() => setShowModal(true)}>GET TICKETS</button>

//       {showModal && (
//         <div className="modal">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//           <button onClick={handleRedirect}>Proceed to Site</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventCard;
