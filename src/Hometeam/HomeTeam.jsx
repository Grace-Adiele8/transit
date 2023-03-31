import React from 'react';
import Basetag from '../ui/Basetag/Basetag';
import HomeTeams from './HomeTeams.';
import './index.css';
import jessica from './../assets/jessica.png';
import kathleen from './../assets/Kathleen Smith.png';
import rebecca from './../assets/Rebecca Tylor.png';

function HomeTeam() {
  return (
    <div className='home_team'>
      <Basetag text='The Transporters'className='home_team_basetag'/>
      <h5 className='home_team_text'>Meet Expert Team</h5>
      <div className='home_team_persons'>
      <HomeTeams images={jessica} name='Jessca Arow' profession='Designer'/>
      <HomeTeams images={kathleen} name='Kathleen Smith' profession='Designer'/>
      <HomeTeams images={rebecca} name='Rebecca Tylor' profession='Designer'/>
      

      </div>
    </div>
  )
}

export default HomeTeam
