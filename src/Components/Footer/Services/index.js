import React from "react";

function Services(props) {
    const listItems = props.data.map((data, i) =>
        <p className='footerHeadingData' key={i}>
            <a className="FooterLink" target="_blank" rel="noreferrer" href={`https://${data}.com`}>{data}</a>
        </p>
        // eslint-disable-next-line
    );
    return (
        <div>
            <p className='footerHeading'>Services</p>
            {listItems}
        </div>
    );
}

export default Services;
