
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import RecentPostDetails from './RecentPostDetails';


const RecentPost = () => {


    const [error, setError] = useState(false)
    const [search, setSearch] = useState('')

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {

        const url = `http://localhost:5000/blogs?search=${search}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [search])

    const handleSearch = (e) => {
        setSearch(e.target.value);

        if (blogs.length === 0) {
            setError(true)
        }

        else if (blogs.length !== 0 || e.target.value === '') {
            setError(false)
        }
    }
    console.log(search);
    return (
        <>

            <h2 className="text-secondary ml-5 pl-5 pb-5">Recent Post</h2>

            {
                error && <p className="text-danger text-center ">No blog found . Try to search another blog...</p>
            }

            <div class="input-group mb-3 w-50 m-auto pb-5">
                <input onChange={handleSearch} type="text" class="form-control" placeholder="Search blog by title" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-outline-success" type="button" id="button-addon2">Search</button>
            </div>

            {
                blogs.length === 0 &&
                <div className="text-center mt-3 ml-5"> <img src="https://cdn.dribbble.com/users/194846/screenshots/1452453/loadingspinner.gif" alt="" /></div>
            }

            {
                blogs.map((blog) => <RecentPostDetails key={blog._id} blog={blog} />)
            }

        </>
    );
};

export default RecentPost;