export const calculateGains = (purchasePrice, currentPrice, quantity) => {
    return ((currentPrice - purchasePrice) * quantity).toFixed(2);
};
