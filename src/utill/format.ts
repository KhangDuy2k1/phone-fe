export const formatNumber = (number: number) => {
  
        return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    
};
export  const pricePromotional = (price: number, promotion: number): number => {
    return Math.floor((100 -promotion)/100*price)
}  