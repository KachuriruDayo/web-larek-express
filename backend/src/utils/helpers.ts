import Product from '../models/productModel';

const validateTotal = async (products: string[], total: number) => Product.find({ _id: { $in: products } })
  .then((res) => {
    let sum = 0;
    const foundProductsId = [];
    res.forEach((product) => {
      foundProductsId.push(product.id);
      if (product.price !== null) {
        if (sum !== 0) {
          sum += product.price;
        } else {
          sum = product.price;
        }
      }
    });
    if (foundProductsId.length !== products.length) {
      return { error: true, message: 'Неверное колличество товаров' };
    }
    if (sum !== total) {
      return { error: true, message: 'Неверная сумма корзины' };
    }
    return { error: false, message: '' };
  });

export default validateTotal;
