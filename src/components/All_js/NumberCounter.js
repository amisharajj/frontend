// CounterSection.js
import React from 'react';
import CountUp from 'react-countup';
import '../All_css/NumberCounter.css';

const CounterSection = () => {
  const counters = [
    { id: 1, title: 'Children’s lives improved', count: 105 },
    { id: 2, title: 'Social workers and government officials trained', count: 122 },
    { id: 3, title: 'Families supported', count: 653 },
  ];

  const sectionStyle = [{
    backgroundImage: `url("https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
  }];

  return (
    <div className="counter-section">
      {counters.map((counter) => (
        <div key={counter.id} className="counter-item">
          <CountUp end={counter.count} duration={3} className="counter" />
          <p className="counter-title">{counter.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CounterSection;



