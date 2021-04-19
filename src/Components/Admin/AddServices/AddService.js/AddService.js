import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { UserContext } from '../../../../App';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null);
    const onSubmit = data => {
        const serviceData = {
            service: data.service,
            duration: data.duration,
            price: data.price,
            description: data.description,
            serviceItemI: data.serviceItemI,
            serviceItemII: data.serviceItemII,
            serviceItemIII: data.serviceItemIII,
            serviceItemIv: data.serviceItemIv,
            imageUrl: imageUrl 
        };
        const url = `https://lit-shore-85433.herokuapp.com/addServices`

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
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
        <div className="addProductComp bg-dark h-100 pt-5 text-light">
            <div className="ps-5">
            <h3 >Add <span className="text-danger">Services</span></h3>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="addProductForm">
                        <div className="d-flex">
                            <div>
                                <label htmlFor="">Service</label><br/>
                                <input type="text" name="service" defaultValue="" ref={register} {...register('service')} placeholder="Service"/><br/> <br/>
                            </div>
                            <span>&nbsp; &nbsp;</span>
                            <div>
                                <label htmlFor="">Duration</label><br/>
                                <input type="text" name="duration" defaultValue="" ref={register} {...register('duration')} placeholder="Duration"/><br/><br/>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div>
                                <label htmlFor="">Description</label><br/>
                                <input type="text" name="description" defaultValue="" className="" ref={register} {...register('description')} placeholder="Description"/><br/><br/>
                            </div>
                            <span>&nbsp; &nbsp;</span>
                            <div>
                                <label htmlFor="">Price</label><br/>
                                <input type="text" name="price" defaultValue="" className="" ref={register} {...register('price')} placeholder="Price"/><br/><br/>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div>
                                <label>Service Item I</label> <br/>
                                <input type="text" name="serviceItemI" ref={register} {...register('serviceItemI')} placeholder="Service Item" /> <br/><br/>
                            </div>
                            <span>&nbsp; &nbsp;</span>
                            <div>
                                <label>Service Item II</label> <br/>
                                <input type="text" name="serviceItemII" ref={register} {...register('serviceItemII')} placeholder="Service Item" /> <br/><br/>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div>
                                <label>Service Item III</label> <br/>
                                <input type="text" name="serviceItemIII" ref={register} {...register('serviceItemIII')} placeholder="Service Item" /> <br/><br/>
                            </div>
                            <span>&nbsp; &nbsp;</span>
                            <div>
                                <label>Service Item Iv</label> <br/>
                                <input type="text" name="serviceItemIv" ref={register} {...register('serviceItemIv')} placeholder="Service Item" /> <br/><br/>
                            </div>
                        </div>
                        <div>
                                <label htmlFor="">Add Photo</label><br/>
                                <label htmlFor="" for="img" className="uploadPhoto bg-danger rounded-3 p-1"><i class="fas fa-cloud-upload-alt"></i> Upload photo</label><br/>
                            </div>
                        <input type="file" name="uploadFile" id="img"  style={{display: 'none'}} onChange={handleImageUpload} /><br/>
                    </div>
                    <button type="submit"  className="rounded-3 bg-danger text-light ps-3 pe-3 pt-1 pb-1">Send</button>
                </form>
                </div>
            </div>
    );
};

export default AddService;