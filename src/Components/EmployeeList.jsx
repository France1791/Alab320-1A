import React from 'react';
import { useState } from 'react';
import ListItem from './ListItem';


function EmployeeList() {
    const [items, setItems] = useState([
      {name: "Jamee King", title: "President and CEO", image:"https://shorturl.at/DP8xl"}, 
      {name: "Julie Taylor", title: "VP of Marketing", image:"https://shorturl.at/DP8xl"}, 
      {name: "Eugene Lee", title: "CFO", image:"https://shorturl.at/DP8xl"}, 
      {name: "Ray Moore", title: "VP of Sales", image:"https://shorturl.at/DP8xl"}, 
      {name: "Paul Jones", title: "QA Manager", image:"https://shorturl.at/DP8xl"},
    ]);

    return  (
        <div className='list-item'>
          {
             items.map(({name, title, image}, index) =>
                 (<ListItem name={name} title={title} image={image} key={index} />))
             
          }
        </div>
      );
        
}

export default EmployeeList;