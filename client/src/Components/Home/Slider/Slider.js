import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {

    const [slider, setSlider] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/blogsAll')
            .then(res => res.json())
            .then(data => setSlider(data))
    }, [])

    return (
        <div className="container carosal h-50">
            <h2 className="pb-3 text-secondary">Popular Post</h2>
            <Carousel>{slider.map(slide =>
                <div className="d-flex ">
                    <img style={{ height: "400px", width: "500px" }} className="img-fluid image" src={slide.imageUrl} />

                    <div className=" p-4 text " style={{ height: "400px" }}>
                        <Link to={`/details/${slide._id}`}>
                            <h2 className="text-underline">  <u>{slide.title} </u></h2>
                        </Link>
                        <p className="text-secondary">{slide.stringDate}</p>

                        <p >{slide.content}
                        </p>
                        <Link to={`/details/${slide._id}`}> Continue reading</Link>
                    </div>
                </div>)}
            </Carousel>
        </div>
    );
};

export default Slider;