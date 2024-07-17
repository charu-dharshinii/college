import React from 'react';
import './Events.css';
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';
import event4 from '../assets/event4.jpg';

const events = [
  { name: 'Pongal Fest', image: event1, description: 'Traditional day to be celebrated for thanking our Sun.' },
  { name: 'Celenza', image: event2, description: 'A display of the finest art from upcoming artists.' },
  { name: 'Drestein', image: event3, description: 'An exciting day of technical activities and competitions.' },
  { name: 'Smart India Hackathon', image: event4, description: 'An Intercollege program to showcase the cpding talent of students.' },
];

const Events = () => {
  return (
    <div>
      <h1>Events</h1>
      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.name} />
            <h2>{event.name}</h2>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;