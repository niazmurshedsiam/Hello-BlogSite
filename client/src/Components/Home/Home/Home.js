import React from 'react';
import Header from '../Header/Header';
import Sliders from '../Slider/Slider';
import RecentPost from '../RecentPost/RecentPost';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';



const Home = () => {
    return (
        <>
            <NavBar />
            <Header />
            <Sliders />
            <RecentPost />
            <Footer />
        </>
    );
};

export default Home;