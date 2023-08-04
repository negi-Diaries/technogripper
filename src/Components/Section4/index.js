import React, { useEffect, useState } from 'react'

function Section4() {
    // let aryData = ["Top-Notch Equipment","Competitive Rates","Expertise and Guidance","Inspiring Environment"];
    let cardData = [
        {
            name: "Top-Notch Equipment",
            isSelected: false
        },
        {
            name: "Competitive Rates",
            isSelected: false
        },
        {
            name: "Expertise and Guidance",
            isSelected: false
        },
        {
            name: "Inspiring Environment",
            isSelected: false
        }

    ]

    const [myData, setMyData] = useState(cardData);
    useEffect(()=>{
        console.log(myData);
    },[myData]);
    const CardSelectionHandler = (idx) => {
        let newCardCopy = myData.map((eachCard, index) => {
            eachCard.isSelected = false;
            if (index === idx) {
                eachCard.isSelected = true;
            }
            return eachCard;
        })
        setMyData(newCardCopy);
    }

    return (
        <div className='section4' style={{cursor: "pointer"}}>
            <h1 className='margin-top-30px' style={{ fontSize: "50px", width: "30%", textAlign: "center" }}>Why Choose Reverie Records?</h1>
            <div className='cardBody margin-top-60px'>
                {myData.map((data, i) => {
                    return <div key={i} className={`cards ${data.isSelected && "orangeColorCard"}`} onClick={() => CardSelectionHandler(i)}>{data.name}</div>
                })}
            </div>
        </div>
    )
}

export default Section4;
