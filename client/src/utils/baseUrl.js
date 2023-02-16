const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://furnish-ecommerce.vercel.app'
    : 'http://localhost:5000';

export default baseUrl;
