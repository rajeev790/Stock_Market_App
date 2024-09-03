import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Portfolio = () => {
    return (
        <div>
            <Navbar />
            <main>
                <h1>My Portfolio</h1>
                {/* Display user's portfolio details here */}
            </main>
            <Footer />
        </div>
    );
};

export default Portfolio;
