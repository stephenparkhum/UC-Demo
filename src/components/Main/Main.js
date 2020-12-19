import React from 'react';
import philosophyImage from '../../images/All-Hands-HI-Cropped-e1433814849283.jpg';

export default function Main() {
    return (
      <main>
          <div className="main--text-model">
              <h1>WORKING TOGETHER TO MAKE MORE SUSTAINABLE ENVIRONMENTS</h1>
              <p><span className="accent">THE URBAN COLLABORATIVE, LLC</span> is an interdisciplinary design firm that focuses on helping our clients achieve their sustainability goals through engaging, educational, and efficient participatory processes tailored to each project’s scale, context, and culture. Our award-winning work addresses environmental, fiscal, and social sustainability in ways that support and enhance our clients’ missions. 
              <br /><br />While we complete private sector work for clients committed to advancing sustainability, most of our work is for U.S. federal agencies including the National Aeronautics and Space Administration and the Department of Defense. The Urban Collaborative also works on U.S. federal civil works projects prioritizing resilient systems by integrating regional master planning with capacity building among stakeholders. This includes teaching master planning PROSPECT courses to federal planners and practitioners. We have helped craft national policies, we teach from those policies, and we prepare plans aligned with those policies. Additionally, we focus on municipal planning for cities and counties throughout the country.</p>
          </div>
          <div className="main--text-model philosophy">
              <img src={philosophyImage} />
              <h1>Philosophy</h1>
              <p><span className="accent">Collaboration.</span> The Urban Collaborative prioritizes working with our clients and stakeholders in all aspects of design and planning. We have pioneered a process that integrates the goals and needs of all involved in an engaging, efficient, and effective manner.
              <br /><br /><span className="accent">Sustainability.</span> Our goal is to create places that support and sustain an area’s or an installation’s diverse missions and that are environmentally, economically, and socially sustainable.
              <br /><br /><span className="accent">Responsiveness.</span> We pride ourselves on being responsive to client needs for large and small sites worldwide. With offices in Eugene-Oregon, Dayton-Ohio, Honolulu-Hawaii, Knoxville-Tennessee, New York-New York, Portland-Oregon, Salt Lake City-Utah, San Antonio-Texas, San Francisco-California, Charleston-South Carolina, Washington, DC, and Kaiserslautern-Germany as well as staff in Phoenix-Arizona, and Austin-Texas, we have a wide reach. We can adjust to changing requirements and pressing deadlines.</p>     
          </div>
      </main>
    )
};