import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

const ServiceForm = ({modalIsOpen, closeModal, serviceOn}) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.service = serviceOn;
    data.create = new Date();

      fetch('https://lit-shore-85433.herokuapp.com/addServiceOrders', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(success => {
        if(success){
          closeModal();
          alert('Thanks Book For Service.');
        }
      })
  }
    
    return (
        <div className="">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal" >
            <h2 className=" text-center commonColor">{serviceOn}</h2>
            <form className="p-5"  onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                  <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="form-control" />
                  {errors.name && <span className="text-danger">This field is required</span>}
              </div>
              <br/>
              <div className="form-group">
                  <input type="text" {...register("phone", { required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                  {errors.phone && <span className="text-danger">This field is required</span>}
              </div>
              <br/>
              <div className="form-group">
                  <input type="text" {...register("email", { required: true })} name="email" placeholder="Email" className="form-control" />
                  {errors.email && <span className="text-danger">This field is required</span>}
              </div>
              <br/>
              <div className="form-group row">
                  <div className="col-4">

                      <select className="form-control" name="vehicle" {...register("vehicle", { required: true })} >
                          <option disabled={true} value="Not set">Select Vehicle</option>
                          <option value="Car">Car</option>
                          <option value="Minibus">Minibus</option>
                          <option value="Pickup">Pickup</option>
                          <option value="Truck">Truck</option>
                      </select>
                      {errors.gender && <span className="text-danger">This field is required</span>}

                  </div>
                  <div className="col-4">
                      <input {...register("carModel", { required: true })} className="form-control" name="carModel" placeholder="Vehicle Model No" type="text" />
                      {errors.carModel && <span className="text-danger">This field is required</span>}
                  </div>
                  <div className="col-4">
                      <input {...register("vehicleColor", { required: true })} className="form-control" name="vehicleColor" placeholder="Vehicle Color" type="text" />
                      {errors.vehicleColor && <span className="text-danger">This field is required</span>}
                  </div>
              </div>

              <div className="form-group pt-3 d-flex justify-content-end">
                  <button type="submit" className="btn bg-danger text-light">Send</button>
              </div>
            </form>
          </Modal>
        </div>
    );
};

export default ServiceForm;