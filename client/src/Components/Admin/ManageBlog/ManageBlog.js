import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ManageBlogCard from './ManageBlogCard';

const ManageBlog = () => {

    const [manageBlog, setManageBlog] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogsAll')
            .then(res => res.json())
            .then(data => setManageBlog(data))
    }, [])

    return (
        <div className="container-fluid" >
            <div className="row">
                <Sidebar />

                <div style={{ backgroundColor: "#6cdf6a" }} className="col-md-10 bg-#6cdf6a">

                    <div className="row mt-5">
                        {
                            manageBlog.length === 0 &&
                            <div className="text-center mt-3 ml-5"> <img src="https://cdn.dribbble.com/users/194846/screenshots/1452453/loadingspinner.gif" alt="" /></div>
                        }
                        {
                            manageBlog.map(singleBlog => <ManageBlogCard key={singleBlog._id} singleBlog={singleBlog} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageBlog;