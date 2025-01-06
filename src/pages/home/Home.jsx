import React from 'react';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Featured from '../../components/Featured';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className='flex flex-col gap-4 justify-between items-center mb-4'>
                <Featured/>
            </div>
        </div>
    );
};

export default Home;
