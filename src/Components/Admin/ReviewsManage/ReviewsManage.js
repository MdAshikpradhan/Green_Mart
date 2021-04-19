import React, { useState, useEffect } from 'react';


const ReviewsManage = () => {
    const [reviews, setReviews] = useState([])
    console.log(reviews)

    useEffect(() => {
        fetch('https://lit-shore-85433.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [reviews])


    const deleteService = (id) => {
        console.log(id)
        fetch(`https://lit-shore-85433.herokuapp.com/delete/ids/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    }
    return (
        <div>
            {
                    reviews.map(reviews => <div reviews={reviews}>
                        <div className="d-flex justify-content-between align-items-center p-1 bg-light rounded mt-3">
                            <h6>{reviews.service}</h6>
                            <h6>{reviews.wight}</h6>
                            <h6>{reviews.price}</h6>
                            <span>
                            <button className="bg-success text-light  rounded"><i className="fas fa-pen"></i></button><span>&nbsp;</span>
                            <button type="button" onClick={() => deleteService(`${reviews._id}`)} className="bg-danger text-light  rounded"><i className="far fa-trash-alt "></i></button>
                            </span>
                        </div>
                    </div>)
                }
        </div>
    );
};

export default ReviewsManage;