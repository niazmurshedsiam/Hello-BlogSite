import Aos from 'aos';
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ManageBlogCard = (props) => {

    const { _id, title, imageUrl, content } = props.singleBlog;
    const slice = content.slice(0, 130)

    const deletEventHandler = (_id, e) => {

        console.log(_id);
        fetch(`http://localhost:5000/delete/${_id}`, {
            method: 'DELETE'
        })

            .then(() => {
                e.target.parentNode.parentNode.parentNode.style.display = "none";
            });
    }
    Aos.init()
    return (

        <div className="col-md-4 mb-5" data-aos="fade-up" data-aos-duration="1000"
        >
            <Card >
                <Card.Img variant="top" style={{ height: "250px" }} src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div style={{ height: "100px", borderBottom: '1px solid green' }}>
                        <Card.Text>
                            {slice}..........
                        </Card.Text>
                    </div>
                    <div className="text-center pt-3">
                        <Button onClick={(e) => deletEventHandler(_id, e)} variant="danger">Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ManageBlogCard;