import React from 'react';
import { Link } from 'react-router-dom';
import '../style/mainPage.scss';

const MainPage = () => (
    <div className='mainPage'>
        <Link to='/login'><button>LOGIN</button></Link>
        <Link to='/register'><button>REGISTER</button></Link>
    </div>
);

export default MainPage;