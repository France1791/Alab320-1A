import React from 'react';


function ListItem({ name, title, image, index }) {
    // console.log(image)
    return (
       <>
       <div className='single-ctn'>
        <div className='img'>
        <img className="w-10 rounded-full" src={image}  />
        </div>
        <div className='content'>
        <h2>{name}</h2>
        <p>{title}</p>
        </div>

      
       
       </div>
       </>
    );
}

export default ListItem;