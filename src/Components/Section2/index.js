import React from 'react'
import Button from 'react-bootstrap/Button';

function Section2() {
    return (
        <div className='section2MainConatiner'>
            <div className='section2ChildContainer my-4'>
                <div className='mx-3' style={{padding: "18px"}}>
                    <h1>We are dedicated to bringing you <span className='orangeColor'>musical vision to your life</span></h1>
                    <h4 className='my-5 grayColor'>Whether you are seasoned artist or just starting your musical journey, our state-of-the-art recording facility and experienced team are here to support you every step of the way. </h4>
                    <Button className='orange' variant="">Contact Us</Button>{' '}
                </div>
            </div>
            <div className='section2ChildContainer'>
                {/* <img className='section2MenImage' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRRNBBzYtgDqW6USuJMlLCfGHkh6fUvWljID59-FTLm1xfRV7wh" alt="men image" /> */}
                <img className='section2MenImage' src="https://images.unsplash.com/photo-1593697821094-53ed19153f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW4lMjB3aXRoJTIwbWljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
        </div>
    )
}

export default Section2;
