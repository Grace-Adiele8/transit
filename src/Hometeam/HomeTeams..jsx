import React from 'react';
import './index.css';

function HomeTeams({images,name,profession}) {
  return (
    <div className='home_teams'>
      <div className='home_teams_image'>
        <img src={images} alt="team" />
      </div>
      <div className="home_teams_text">
        <h6 className='home_teams_full_name'>{name}</h6>
        <p className='home_teams_profession'>{profession}</p>
      </div>
      <div className="home_teams_contact">

      </div>
    </div>
  )
}

export default HomeTeams
