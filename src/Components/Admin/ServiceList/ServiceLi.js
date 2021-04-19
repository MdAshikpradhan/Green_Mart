import React from 'react';

const ServiceLi = ({serviceOrders}) => {
    console.log('serviceList', serviceOrders)
    return (
        <div>
        <table className="table bg-danger">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  serviceOrders.map((serviceOrder, index) => 
                        
                    <tr>
                        <td>{serviceOrder.name}Ashik</td>
                        <td>{serviceOrder.phone}01944576111</td>
                        <td>{serviceOrder.email}MdashikProdhan</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    );
};

export default ServiceLi;