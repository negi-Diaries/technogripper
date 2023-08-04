import React from 'react';
import Container from 'react-bootstrap/Container';

function FooterBottom(props) {
    let { data, copyright } = props;
    let listData = data.map((data, i) => {
        return <p className='FooterBottomParagraphTag' key={i}><a className='FooterLink' target='_blank' rel="noreferrer" href={data.website}> {data.name}</a></p>
    });

    let listData2 = copyright.map((data, i) => {
        return <p className='FooterBottomParagraphTag' key={i}>{data}</p>
    })


    return (
        <Container>
        <div className='footerBottomData' style={{ paddingTop: "50px" }}>
            <div className='footerBottomSubData'>
                {listData}
            </div>
            <div className='footerBottomSubData'>
                {listData2}
            </div>
        </div>
        </Container>
    )
}

export default FooterBottom;
