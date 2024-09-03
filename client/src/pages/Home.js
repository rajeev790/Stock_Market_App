import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <main>
                <h1>Welcome to the Stock Market App</h1>
                <p>Track and manage your stocks in real-time.</p>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
