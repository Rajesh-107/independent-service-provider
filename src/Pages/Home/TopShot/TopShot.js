import React from 'react';

const TopShot = ({topShot}) => {
    const {name, img,Description} = topShot;
    return (
        <div className='gx-5 col-sm-12 col-md-6 col-lg-4 align-items-center'>
                 <div className="card" style={{width: "18rem"}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{Description}</p>
        </div>
      </div>
        </div>
       
    );
};

export default TopShot;