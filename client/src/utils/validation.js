export const valid = ({ name, email, password, confirmPassword }) => {
  const err = {};
  if (!name) {
    err.name = 'Please add your full name.';
  } else if (name.length > 25) {
    err.name = 'Full name is up to 25 characters long.';
  }

  if (!email) {
    err.email = 'Please add your email.';
  } else if (!validateEmail(email)) {
    err.email = 'Email format is incorrect.';
  }

  if (!password) {
    err.password = 'Please add your password.';
  } else if (password.length < 6) {
    err.password = 'Password must be at least 6 characters.';
  }

  if (password !== confirmPassword) {
    err.confirmPassword = 'Confirm password did not match.';
  }

  return {
    errMsg: err,
    errLength: Object.keys(err).length,
  };
};

function validateEmail(email) {
  // eslint-disable-next-line
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const productValidation = ({
  name,
  description,
  price,
  category,
  quantity,
  sku,
  sold,
  image,
  stock,
}) => {
  const productFormError = {};

  if (!name) {
    productFormError.name = 'Please write a name.';
  } else if (name.length > 25) {
    productFormError.name = 'Full name is up to 25 characters long.';
  }

  if (!description) {
    productFormError.description = 'Please add product details.';
  }

  if (!price) {
    productFormError.price = 'Please add price for this product.';
  } else if (price.length < 0) {
    productFormError.price = 'Price must be at least 1 character.';
  }

  if (!category) {
    productFormError.category = 'Please add category';
  }

  // if (!quantity) {
  //   productFormError.quantity = 'Please add quantity';
  // }

  if (!sku) {
    productFormError.sku = 'Please add sku';
  }

  if (!sold) {
    productFormError.sold = 'Please add total sold';
  }

  if (!image) {
    productFormError.image = 'Please upload image';
  }
  if (!stock) {
    productFormError.stock = 'Please add the stock';
  }

  return {
    errMsg: productFormError,
    errLength: Object.keys(productFormError).length,
  };
};
