import React from 'react';
import './OverviewPage.css';

const OverviewCard = ({ overview }) => {
  const { author, date, source, rating, title, description } = overview;
  return (
    <div className="overview-card">
      <div className="overview-header">
        <div className="author">{author}</div>
        <div className="date">{date} on {source}</div>
      </div>
      <div className="rating">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="star">
            ★
          </span>
        ))}
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
};

const ActivityCard = ({ activity }) => {
  const { activityName, deadline, assignedTo, status } = activity;
  return (
    <div className="activity-card">
      <div className="activity-header">
        <div className="activity-name">{activityName}</div>
        <div className="deadline">{deadline}</div>
      </div>
      <div className="assigned-to">Assigned to: {assignedTo}</div>
      <div className={`status ${status.toLowerCase()}`}>{status}</div>
    </div>
  );
};

const OverviewPage = () => {
  const overviews = [
    {
      author: 'Kavita Sinha',
      date: '7 days ago',
      source: 'Google',
      rating: 5,
      title: 'Absolutely amazing!',
      description: 'Ben took myself, my husband, and his siblings (all various ages) on a caving adventure. It was such a great experience. He was very patient and knowledgeable about the caves and the area. Highly recommend him!'
    },
    {
      author: 'Curiosity387209',
      date: 'December 20',
      source: 'Tripadvisor',
      rating: 5,
      title: 'Excellent half-day adventure for teen sons',
      description: 'We arranged a half day rock climbing adventure in Superior (outside of the main part of town). The guide was friendly and helpful. We would definitely recommend this adventure to families with kids.'
    },
    {
      author: 'Kyle M',
      date: 'December 17',
      source: 'Tripadvisor',
      rating: 5,
      title: 'Unforgettable Canyoneering Trip',
      description:
        "If you're interested in an adventure that pushes you safely outside your comfort zone, this is it! Our guide was very experienced and knowledgeable about the canyon. We had a blast and would highly recommend this trip."
    },
    {
      author: 'Robert Pedneault',
      date: 'December 16',
      source: 'Tripadvisor',
      rating: 5,
      title: 'Highly recommended!',
      description:
        'We have hired this company during our last visit in Tucson. The guide was very professional and knowledgeable about the area. We had a great time and would highly recommend them.'
    },
    {
      author: 'Sophie M',
      date: 'December 16',
      source: 'Tripadvisor',
      rating: 5,
      title: 'Human and rocks, living the edge!',
      description:
        'Great adventure with amazing guide. Safety first always. The experience was unforgettable!'
    }
  ];

  const activities = [
    {
      activityName: 'Design Mockups',
      deadline: 'July 25, 2024',
      assignedTo: 'Alice',
      status: 'In Progress'
    },
    {
      activityName: 'API Integration',
      deadline: 'July 30, 2024',
      assignedTo: 'Bob',
      status: 'Not Started'
    },
    {
      activityName: 'Testing',
      deadline: 'August 5, 2024',
      assignedTo: 'Charlie',
      status: 'Completed'
    },
    // Add more activities as necessary
  ];

  return (
    <div className="overview-container">
      <h1>Project Overview</h1>
      <div className="section overviews-section">
        <h2>Overviews</h2>
        <div className="overviews-container">
          {overviews.map((overview, index) => (
            <OverviewCard key={index} overview={overview} />
          ))}
        </div>
      </div>
      <div className="section activities-section">
        <h2>Activities</h2>
        <div className="activities-container">
          {activities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
