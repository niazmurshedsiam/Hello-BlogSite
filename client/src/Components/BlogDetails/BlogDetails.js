import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './BlogDetails.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Aos from 'aos';

const BlogDetails = () => {

    const { id } = useParams();
    const [blogDetails, setBlogDetails] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/blogsAll')
            .then(res => res.json())
            .then(data => setBlogDetails(data))
    }, [])

    const singleBlog = blogDetails.find(blog => blog._id === id);
    console.log(singleBlog);
    console.log(singleBlog?.title);
    const stringDate = new Date(singleBlog?.date).toDateString('dd/MM/YY')
    const slice = singleBlog?.content.slice(0, 340)

    Aos.init()

    return (
        <>
            <NavBar />

            <div className="container mt-5">
                <p className="text-secondary">Biyans Who . <span>{stringDate}</span></p>
                <h1 >{singleBlog?.title}</h1>
                <p>{slice}</p>

                <div className="social-icon">

                    <a className="facebook" target="_blank" href="https://facebook.com">Share <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a className="tweeter" target="_blank" href="https://twitter.com">Tweet <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className="pinterest" target="_blank" href="https://www.pinterest.de/">Pinterest <FontAwesomeIcon icon={faPinterest} />
                    </a>

                </div>
                <div data-aos="zoom-in"
                    data-aos-duration="3000" className="blog-details">
                    <img style={{ height: "500px" }} className="img-fluid w-50 my-5" src={singleBlog?.imageUrl} alt="" />

                    <p>{singleBlog?.content}</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BlogDetails;