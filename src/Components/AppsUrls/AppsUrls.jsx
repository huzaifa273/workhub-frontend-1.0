import React from "react";
import "./appsUrls.css";

const AppsUrls = ({ apps }) => {
  return (
    <div className="apps-urls">
      <h2>Apps & URLs</h2>
      {apps.map((app, index) => (
        <div key={index} className="app-item">
          <div className="app-name">{app.name}</div>
          <div className="app-time">{app.time}</div>
        </div>
      ))}
      <a href="#">View all</a>
    </div>
  );
};

export default AppsUrls;
