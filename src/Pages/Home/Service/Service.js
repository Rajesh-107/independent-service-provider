import React from 'react';
import './Service.css';

const Service = ({photoService}) => {
    const {name, img, description, price} = photoService;
    return (
        <div className='container service'>
           <img className='w-50 h-50 img-fluid' src={img} alt="" srcset="" />
            <h2>Service: {name} </h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>Book Now: {name}</button>
        </div>
        
//             <div class="card mb-3" style="max-width: 540px;">
//   <div class="row g-0">
//     <div class="col-md-4">
//       <img src={img} class="img-fluid rounded-start" alt="..."/>
//     </div>
//     <div class="col-md-8">
//       <div class="card-body">
//         <h5 class="card-title">{name}</h5>
//         <p class="card-text">{description}</p>
//         <p class="card-text"><small class="text-muted">{price}</small></p>
//       </div>
//     </div>
//   </div>
// </div>
        
    );
};

export default Service;