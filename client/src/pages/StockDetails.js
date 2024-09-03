import React from 'react';
import { useParams } from 'react-router-dom';

const StockDetails = () => {
    const { stockId } = useParams();

    return (
        <div>
            <h2>Stock Details for {stockId}</h2>
            {/* Display stock details here */}
        </div>
    );
};

export default StockDetails;
