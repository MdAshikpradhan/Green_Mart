import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    return (
        <div className="row">
            <div className="col-md-4 sideBar">
                <Sidebar />
            </div>
            <div className="col">
            <h3 style={{marginLeft: '45px'}}>Add Product</h3>
                <form >
                    <div className="addProductForm">
                        <div className="d-flex">
                            <div>
                                <label htmlFor="">Product Name</label><br/>
                                <input type="text" name="name" defaultValue=""  placeholder="name"/>
                            </div>
                            <span>&nbsp; &nbsp; &nbsp; </span>
                            <span>&nbsp; &nbsp; &nbsp; </span>
                            <div>
                                <label htmlFor="">Price</label><br/>
                                <input type="number" name="price" defaultValue=""  placeholder="price"/>
                            </div>
                        </div>
                        <br/>
                        <div className="d-flex">
                            <div>
                                <label htmlFor="">Wight</label><br/>
                                <input type="text" name="wight" defaultValue="" className="w-100"  placeholder="wight"/>
                            </div>
                            <span>&nbsp; &nbsp; &nbsp; </span>
                            <span>&nbsp; &nbsp; &nbsp; </span>
                            <div>
                                <label htmlFor="">Add Photo</label><br/>
                                <label htmlFor="" for="img" className="uploadPhoto bg-success rounded-3"><i class="fas fa-cloud-upload-alt"></i> Upload photo</label>
                                <input type="file" name="uploadFile" id="img" style={{display: 'none'}}  />
                            </div>
                        </div><br/>
                    </div>
                    <input type="submit" value="Save" className="AddProductButton rounded-3 bg-success text-light" />
                </form>
            </div>
        </div>
    );
};

export default Review;