import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';

const AddReviews = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null);
    const onSubmit = data => {
        const productData = {
            name: data.name,
            description: data.description,
            designation: data.designation,
            imageUrl: imageUrl 
        };
        const url = `http://localhost:5000/addReviews`

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => console.log('server side response', res))
    };
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '4f0b935346250d58c5e27d1c28188cfd');
        imageData.append('image', event.target.files[0])
        console.log(event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          })
    }
    return (
        <div className="row">
            <div className="col-md-3 sideBar">
                <Sidebar />
            </div>
            <div className="col">
                <div className="addProductComp bg-dark h-100 pt-5 text-light">
                    <div className="ps-5">
                    <h3 >Customer <span className="text-danger">Reviews</span></h3>
                        <form  onSubmit={handleSubmit(onSubmit)}>
                            <div className="addProductForm">
                                <label htmlFor="">Name</label><br/>
                                <input type="text" name="name" defaultValue="" className="" ref={register} {...register('name')} placeholder="Your Name"/><br/><br/>
                                <label htmlFor="">Description</label><br/>
                                <input type="text" name="description" defaultValue="" className="" ref={register} {...register('description')} placeholder="Write Something"/><br/><br/>
                                <label>Your Designation</label> <br/>
                                <input type="text" name="designation" ref={register} {...register('designation')} placeholder="Your Designation" /> <br/><br/>
                                <label htmlFor="">Add Photo</label><br/>
                                <label htmlFor="" for="img" className="uploadPhoto bg-danger rounded-3 p-1"><i class="fas fa-cloud-upload-alt"></i> Upload photo</label><br/>
                                <input type="file" name="uploadFile" id="img"  style={{display: 'none'}} onChange={handleImageUpload} /><br/>
                            </div>
                            <button type="submit"  className="rounded-3 bg-danger text-light ps-3 pe-3 pt-1 pb-1">Send</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default AddReviews;