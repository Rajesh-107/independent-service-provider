import React from 'react';

const TopShot = ({topShot}) => {
    const {name, img} = topShot;
    return (
        <div className='gx-5 col-sm-12 col-md-6 col-lg-4 align-items-center'>
                 <div class="card" style={{width: "18rem"}}>
        <img src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Expand Photo</a>
        </div>
      </div>
        </div>
       
    );
};

export default TopShot;