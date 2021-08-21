import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './AddBlog.css';
import axios from 'axios';
import { useState } from 'react';


const AddBlog = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null)

    const onSubmit = (data, e) => {
        const fromData = {
            imageUrl: imageUrl,
            title: data.title,
            content: data.content,
            date: new Date()
        }

        const url = `http://localhost:5000/addBlog`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(fromData)
        })
            .then(res => res.json())
            .then(result => {

                if (result) {
                    alert("Blog Added successful....")
                    e.target.reset()
                }
            })
    }


    const handleImageUpload = (e) => {
        console.log(e.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", 'f2ba7412e0a54266270f7441b219296d');
        imageData.append("image", e.target.files[0])


        axios.post('https://api.imgbb.com/1/upload', imageData)

            .then(function (response) {
                setImageUrl(response.data.data.url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-10 formInfo">

                    <div >

                        <form className="mt-5 p-5 w-70" onSubmit={handleSubmit(onSubmit)}>

                            <label for="formFile" class="form-label">Upload a cover image</label> <br />
                            <input type="file" onChange={handleImageUpload} name="" id="" /><br /><br />


                            <label for="exampleFormControlInput1" class="form-label">Add blog Title</label><br />
                            <input className="form-control" {...register("title", { required: true })} />
                            {errors.title && <span className="err">Title field is required</span>} <br />


                            <label for="exampleFormControlTextarea1" class="form-label">Add  Blog Content</label>
                            <textarea className="form-control" cols="30" rows="10" {...register("content", { required: true })} />
                            {errors.content && <span className="err">Require to add blog content
                            </span>} <br />

                            <div className="text-center">
                                <input type="submit" value="Save" className=" blog-btn" />
                            </div>

                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;