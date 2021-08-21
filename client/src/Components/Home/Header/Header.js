import Aos from 'aos';
import React from 'react';
import './Header.css';

const Header = () => {

    Aos.init();
    return (
        <section >
            <div className="hederInfo">
            </div>
            <div className="container">
                <div s className="row mb-5 margin p-5" data-aos-duration="1000"
                    data-aos="zoom-in">
                    <div className="col-md-5 ">
                        <h3 style={{ color: "white" }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                        <p>August 22,2021</p>
                    </div>
                    <div className="col-md-7 text-white">
                        <p style={{ color: 'black' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Header;