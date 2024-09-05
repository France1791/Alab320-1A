import React from 'react';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import EmployeeList from '../Components/EmployeeList';
import EmployeePage from '../Components/EmployeePage';

function Home(){
    
    return(
        <>
        <div className='test'>
        <div className='home'>
        < Header />
        < SearchBar />
        < EmployeeList />
        </div>
        <div>
            < EmployeePage />
        </div>
        </div>
        </>
        
       
    )
}
export default Home;