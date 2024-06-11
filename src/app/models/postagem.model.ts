interface IPostagem {
    id: string;
    title: string;
    seller: string;
    price: string;
    description: string;
    group: string;
    shippingFee: string;
    imageUrl: string;
    status: string;
};
function createIPostagem() {
    return {
        id: '',
        title: '',
        seller: '',
        price: '',
        description: '',
        group: '',
        shippingFee: '',
        imageUrl: '',
        status: ''
    };
}
export { IPostagem, createIPostagem };  

