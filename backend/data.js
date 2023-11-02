import bcrypt from 'bcryptjs'
const data = {
  users:[
{
name:'khalil',
email:'fray.khalil.200@gmail.com',
password:bcrypt.hashSync('123456'),
isAdmin:true,
},
{
  name:'khaled',
  email:'fray.khaled.700@gmail.com',
  password:bcrypt.hashSync('123456'),
  isAdmin:false,
},
  ],
    products: [
      {

        name: 'Nike Slim shirt',
        slug: 'nike-slim-shirt',
        category: 'Shirts',
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4214173d-d2c2-4de1-90b1-b780d4152c5b/pro-dri-fit-mens-short-sleeve-top-N0txbH.png", // 679px × 829px
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality shirt',
      },
      {
      
        name: 'Adidas Fit Shirt',
        slug: 'adidas-fit-shirt',
        category: 'Shirts',
        image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/6d2b4aa019314efcb325ac2c0112ed5d_9366/techfit-fitted-tee.jpg',
        price: 250,
        countInStock: 20,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
      
        name: 'Nike Slim Pant',
        slug: 'nike-slim-pant',
        category: 'Pants',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/384a8b88-a881-4e60-8a6b-e36e21296e16/pro-mens-training-drill-pants-T5VMlz.png',
        price: 25,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
      
        name: 'Adidas Fit Pant',
        slug: 'adidas-fit-pant',
        category: 'Pants',
        image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/fb7f88c065a44b238b1dad280128260a_9366/tiro-reflective-track-pants.jpg',
        price: 65,
        countInStock: 0,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
    ],
  };
  export default data;