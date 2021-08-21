import Aos from 'aos';
import React from 'react';
import { Link } from 'react-router-dom';

const RecentPostDetails = (props) => {


    const { _id, title, content, imageUrl, date } = props.blog;

    const description = content.slice(1, 400);
    const shortDescription = content.slice(100, 200);
    const shortTitle = title.slice(10, 100);
    const stringDate = new Date(date).toDateString('dd/MM/YY')
    Aos.init()

    return (

        <div className="container mb-5" data-aos="fade-up"
            data-aos-duration="1000">

            <div className="row">
                <div className="col-sm-10">
                    <div className="row">
                        <div className=" col-sm-6">
                            <img className="img-fluid" style={{ height: '400px' }} src={imageUrl} alt="" />
                        </div>
                        <div style={{ float: 'left' }} className="col-sm-6 mb-4">

                            <Link to={`/details/${_id}`}>
                                <h2>  {title}</h2>
                            </Link>

                            <p className="text-secondary"> {stringDate} *<span> 1 Comment</span></p>
                            <p className="text"> {description}..........</p>
                            <Link to={`/details/${_id}`}><u>Continue reading</u></Link>
                        </div>
                    </div>

                </div>

                <div className="col-sm-2 mb-4 ">

                    <Link to={`/details/${_id}`}>
                        <h6 className="text-capitalize"> {shortTitle}   </h6>
                    </Link>
                    <p className="text-secondary">{stringDate}</p>
                    <p className="text text-capitalize"> {shortDescription}....</p>
                    <Link to={`/details/${_id}`}><u>Continue reading</u></Link>
                </div>
            </div>
        </div>
    );
};

export default RecentPostDetails;