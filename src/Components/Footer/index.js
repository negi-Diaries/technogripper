import React from 'react'
// import Container from 'react-bootstrap/Container';
import Services from './Services';
import About from './About';
import Terms from './Terms';
import FooterBottom from './FooterBottom';

function Footer() {
    let servicesData = ["Recording", "Production", "Mixing", "SongWriting"];
    let aboutData = ["Missiton", "FAQ", "Contact Us"];
    let termsData = ["Privacy and cookies policy", "Terms of service"];
    // let socialMedia = ["Twitter", "Facebook", "Instagram", "YouTube", "Spotify"];
    let socialMedia = [{
        name: "Twitter",
        website: "https://twitter.com/home"
    },
    {
        name: "Facebook",
        website: "https://www.facebook.com/"
    },
    {
        name: "Instagram",
        website: "https://www.instagram.com/"
    },
    {
        name: "YouTube",
        website: "https://www.youtube.com/"
    },
    {
        name: "Spotify",
        website: "https://open.spotify.com/"
    }
];
    let copyright = ["Privacy Policy", "All rights reserved"];
    return (
        <div style={{ backgroundColor: "#e0e4fc", paddingTop: "50px", paddingBottom: "30px" }}>
            <div className='footer'>
                <div className='imageSectionFooter'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-qcG1orrmKhEWausjrHr32b7t7kCJppBBWNFnW0o9wUHSEXa" alt="" />
                </div>
                <div className='information'>
                    <div className='contentMainBody'>
                        <Services data={servicesData} />
                    </div>
                    <div className='contentMainBody'>
                        <About data={aboutData} />
                    </div>
                    <div className='contentMainBody'>
                        <Terms data={termsData} />
                    </div>
                </div>
            </div>
            <FooterBottom data={socialMedia} copyright={copyright} />
        </div>
    )
}

export default Footer
