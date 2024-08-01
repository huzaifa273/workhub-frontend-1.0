import React from "react";
import "./activity.css";

const Activity = ({ activities }) => {
  return (
    <div className="activity">
      <h2>Recent Activity</h2>
      {activities.map((activity, index) => (
        <div key={index} className="activity-item">
          <img src={activity.image} alt="Activity" />
          <div className="activity-info">
            <div className="activity-user">{activity.user}</div>
            <div className="activity-time">{activity.time}</div>
          </div>
        </div>
      ))}
      <a href="#">View all</a>
    </div>
  );
};

export default Activity;
