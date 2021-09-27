import React, { useState, useEffect } from 'react';
import './App.css';
import './components/styles.css'
import axios from 'axios';
import MentorList from './components/MentorList';
import LOGO from './assets/logo.png'
import LEFT_HANDLE from './assets/left_handle.png'
import RIGHT_HANDLE from './assets/right_handle.png'
import LEFT_MITT from './assets/left_oven_mitt.png'
import RIGHT_MITT from './assets/right_oven_mitt.png'
import TABLE from './assets/table.png'

function App() {
  const url = "https://api.hackillinois.org/upload/blobstore/";

  const [mentors, setMentors] = useState('');

  useEffect(() => {
    getMentors();
  }, [])

  const getMentors = () => {
    axios.get(`${url}mentors/`)
    .then(res => {
      const allMentors = res.data.data;
      setMentors(allMentors);
    })
    .catch(err => {
      console.error(`Error: ${err}`);
    });
  }

  return (
    <div>
      <div className="mobile">
        <img src={LEFT_HANDLE} alt='left handle' className="left_handle"/>
        <img src={RIGHT_HANDLE} alt='right handle' className="right_handle"/>
        <img src={LEFT_MITT} alt='left oven mitt' className="left_mitt"/>
        <img src={RIGHT_MITT} alt='right oven mitt' className="right_mitt"/>
        <img src={TABLE} alt='table with mixing bowl' className="table"/>
      </div>
        <img src={LOGO} alt='HackIllinois 2022 Logo' className="logo"/>
        <h1 className="title">
          MENTORS
        </h1>
        <div className="container">
          <MentorList mentors={mentors} />
        </div>
    </div>
  );
}

export default App;
