import React from 'react';
import './Dashboard.css';

function ProjectOverview() {
  return (
    <div className="project-overview">
      <img className="mainD-img" src="https://cdn.shortpixel.ai/spai/w_1197+q_glossy+ret_img+to_webp/eclipse-online.com/wp-content/uploads/business-dashboards-header.jpg" alt="" />
      <div className="header">
        <h1 className="dash-h1">DASHBOARD</h1>
        <div className="summary">
          <p>Welcome to the project dashboard. Here you can see an overview of all projects, their statuses, and recent activity.</p>
        </div>
        <div className="mainD-box">
          <div className="dash-div">
            <h3 className="dash-h3">Projects: All</h3>
            <h4 className="dash-h4">50</h4>
          </div>
          <div className="dash-div">
            <h3 className="dash-h3">Projects: New</h3>
            <h4 className="dash-h4">21</h4>
          </div>
          <div className="dash-div">
            <h3 className="dash-h3">Projects: Active</h3>
            <h4 className="dash-h4">51</h4>
          </div>
          <div className="dash-div">
            <h3 className="dash-h3">Projects: Complete</h3>
            <h4 className="dash-h4">101</h4>
          </div>
        </div>
        <div className="project-progress">
          <h2>Progress Overview</h2>
          <div className="progress-item">
            <span>All Projects</span>
            <div className="progress-bar"><div className="progress" style={{ width: '80%' }}></div></div>
          </div>
          <div className="progress-item">
            <span>New Projects</span>
            <div className="progress-bar"><div className="progress" style={{ width: '50%' }}></div></div>
          </div>
          <div className="progress-item">
            <span>Active Projects</span>
            <div className="progress-bar"><div className="progress" style={{ width: '70%' }}></div></div>
          </div>
          <div className="progress-item">
            <span>Complete Projects</span>
            <div className="progress-bar"><div className="progress" style={{ width: '90%' }}></div></div>
          </div>
        </div>
        <div className="team-section">
          <h2>Team Members</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member" />
              <p>John Doe</p>
            </div>
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team Member" />
              <p>Jane Smith</p>
            </div>
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Team Member" />
              <p>Michael Johnson</p>
            </div>
          </div>
        </div>
        <div className="dash-imgbox">
          <img className="dash-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qu1HeZMk_oz4-odz1OKiKlD_32ecI-OY7A&s" alt="" />
          <img className="dash-img" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Zd_stanovnistvo_graf.JPG" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProjectOverview;
