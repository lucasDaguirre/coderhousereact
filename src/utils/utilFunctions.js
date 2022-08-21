export const formattedCurrency = (number) => {
    return `$${number.toLocaleString("es-AR", {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}; 