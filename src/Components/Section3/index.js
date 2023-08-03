import React from 'react';
import Button from 'react-bootstrap/Button';

function Section3() {
  return (
    <div style={{width: "100%"}}>
      <h3 style={{textAlign: "center", color:"#534848", padding: "60px 0 0 0"}}>Our Services</h3>
      <h1>Professional Recording Mixing And Mastering <span className='orangeColor'>Music Production</span> SongWriting Sessions</h1>
      <div className='displayFlex'>
      <h2 className='margin-top-60px' style={{color:"#534848", width: "50%"}}>We believe in making professional recording services accessible to all  musicians, and our rates are tailored to fit various budgets.</h2>
      </div>
      <Button className='orange margin-top-30px' variant="">Contact Us</Button>{' '}
    </div>
  )
}

export default Section3
