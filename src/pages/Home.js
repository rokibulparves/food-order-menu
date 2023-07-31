import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Table1 from './Table1';
import logo from '../assets/logo.png';

const Home = () => {
    const navigate = useNavigate();

    const navigateToTable1=()=>{
        navigate('/table1')
    }

    const navigateToTable2=()=>{
        navigate('/table2')
    }

    const navigateToTable3=()=>{
        navigate('/table3')
    }
    return (
        <>
        <div>
            <div class="welcome-container">
                <img className='logo' src={logo} alt='logo' />
                <h1 id='welcome-heading-id' class="welcome-heading">Welcome to Our Restaurent</h1>
                <p class="welcome-subheading">Explore the world of delicious food</p>
            </div>
        </div>

        <div className='table-row'>
            <button className="table_button" onClick={navigateToTable1}>Table No: 1</button>

            <button className="table_button" onClick={navigateToTable2}>Table No: 2</button>

            <button className="table_button" onClick={navigateToTable3}>Table No: 3</button>

            <button className="table_button" onClick={navigateToTable1}>Table No: 4</button>

            <button className="table_button" onClick={navigateToTable2}>Table No: 5</button>

            <button className="table_button" onClick={navigateToTable3}>Table No: 6</button>

            <button className="table_button" onClick={navigateToTable1}>Table No: 7</button>
            
           <button className="table_button" onClick={navigateToTable2}>Table No: 8</button>
        </div>

        </>
    );
};

export default Home;