export const formattedCurrency = (number) => {
    return `$${number.toLocaleString("es-AR", {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}; 

export const scrollLock = () => {
    document.body.classList.toggle("scrollLock");
    window.scrollTo(0, 0);
}