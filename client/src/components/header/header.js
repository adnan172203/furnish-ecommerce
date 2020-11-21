import React from 'react';

const Header = () => {
  return (
    <div>
      <header class='main-header'>
        <nav class='navbar'>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#home'>Shop</a>
            </li>
            <li>
              <a href='#home'>Contact</a>
            </li>
          </ul>
        </nav>
        <button class='navbar-toggler'>
          <i class='fa fa-bars navbar-toggler-icon'></i>
        </button>
        <div class='logo'>
          <img src='./img/logo.png' alt='' />
        </div>

        <div class='dot-icon'>
          <i class='fas fa-ellipsis-v'></i>
        </div>

        <div class='shop-essentials'>
          <div class='shop-essentials-text'>
            <ul>
              <li>
                <a href='#home'>Cart(3)</a>
              </li>
              <li>
                <a href='#home'>Wishlist(3)</a>
              </li>
              <li>
                <a href='#home'>Login</a>
              </li>
            </ul>
          </div>
          <div class='shop-essentials-icon'>
            <i class='fas fa-search'></i>
            <i class='fas fa-shopping-cart'></i>
            <i class='far fa-heart'></i>
            <span>log in</span>
          </div>

          {/* Header dropdown minicart  */}
          <div class='header-cart-dropdown'>
            <div class='header-minicart'>
              <div class='header-dropdown-item scroll-style'>
                {/* <!-- item one --> */}
                <div class='header-cart-item'>
                  <div class='header-cart-item-img'>
                    <img src='./img/hover/cart/product1.png' alt='' />
                  </div>
                  <div class='header-cart-item-name'>
                    <a href=''>
                      <p>Slim Wooden Stool</p>
                    </a>
                    <p>2 x 125</p>
                  </div>
                  <div class='header-cart-item-delete'>
                    <i class='far fa-times-circle'></i>
                  </div>
                </div>
                {/* <!-- item two --> */}
                <div class='header-cart-item'>
                  <div class='header-cart-item-img'>
                    <img src='./img/hover/cart/product2.png' alt='' />
                  </div>
                  <div class='header-cart-item-name'>
                    <a href=''>
                      <p>White Comfy Silver</p>
                    </a>
                    <p>2 x 125</p>
                  </div>
                  <div class='header-cart-item-delete'>
                    <i class='far fa-times-circle'></i>
                  </div>
                </div>
                {/* <!-- item three --> */}
                <div class='header-cart-item'>
                  <div class='header-cart-item-img'>
                    <img src='./img/hover/cart/product3.png' alt='' />
                  </div>
                  <div class='header-cart-item-name'>
                    <a href=''>
                      <p>Yellow Comfort</p>
                    </a>
                    <p>2 x 125</p>
                  </div>
                  <div class='header-cart-item-delete'>
                    <i class='far fa-times-circle'></i>
                  </div>
                </div>
              </div>
              <div class='header-cart-total'>
                <p>Total</p>
                <p>$900</p>
              </div>
              <div class='header-view-cart'>
                <a href='#'>
                  <button>View Cart</button>
                </a>
              </div>
              <div class='header-checkout'>
                <a href='#'>
                  {' '}
                  <button>Checkout</button>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- ************ Header Wishlist ********************* --> */}

          <div class='header-wishlist-dropdown'>
            <div class='header-wishlist'>
              <div class='wishlist-items wishlist-scroll-style'>
                {/* <!-- item one --> */}
                <div class='header-wishlist-item'>
                  <div class='header-wishlist-item-img'>
                    <img src='./img/hover/wishlist/product1.png' alt='' />
                  </div>
                  <div class='header-wishlist-item-name'>
                    <a href=''>
                      <p>Slim Wooden Stool</p>
                    </a>
                    <p>Add To Cart</p>
                  </div>
                  <div class='header-wishlist-item-delete'>
                    <i class='far fa-times-circle'></i>
                  </div>
                </div>

                {/* <!-- item two --> */}
                <div class='header-wishlist-item'>
                  <div class='header-wishlist-item-img'>
                    <img src='./img/hover/wishlist/product2.png' alt='' />
                  </div>
                  <div class='header-wishlist-item-name'>
                    <a href=''>
                      <p>White comfy silver</p>
                    </a>
                    <p>Add To Cart</p>
                  </div>
                  <div class='header-wishlist-item-delete'>
                    <i class='far fa-times-circle'></i>
                  </div>
                </div>

                {/* <!-- item three --> */}
                <div class='header-wishlist-item'>
                  <div class='header-wishlist-item-img'>
                    <img src='./img/hover/wishlist/product3.png' alt='' />
                  </div>
                  <div class='header-wishlist-item-name'>
                    <a href=''>
                      <p>Yellow Comfort</p>
                    </a>
                    <p>Add To Cart</p>
                  </div>
                  <div class='header-wishlist-item-delete'>
                    <i class='far fa-times-circle'></i>
                  </div>
                </div>
              </div>

              <div class='header-view-wishlist'>
                <a href='#'>
                  <button>Go to wishlist</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
