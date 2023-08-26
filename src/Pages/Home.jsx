import React from 'react';
import sci from '../assets/sci.jpg';

import '../styles/home.css'

const Home = () => {
    return (
      <div className='front_img d-flex flex-column'>
        <img src={sci} alt='' />
        <section className='heading_home'>
            <h1>SciAstra</h1>
            <h2>For the love of Science</h2>
        </section>
        
      </div>
    );
  };
  
  export default Home;