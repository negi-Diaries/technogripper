import React from 'react'

function About(props) {
    const listItems = props.data.map((data,i) =>
      <p className='footerHeadingData' key={i}>
      <a className="FooterLink" href={`https://${data}.com`}>{data}</a>
      </p>
    );
    return (
      <div>
      <p className='footerHeading'>About</p>
        {listItems}
      </div>
    );
  }

export default About;
