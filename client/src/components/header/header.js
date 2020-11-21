import React from 'react';
import './header.css';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div>
      <header className='main-header'>
        <nav className='navbar'>
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
        <button className='navbar-toggler'>
          <i className='fa fa-bars navbar-toggler-icon'></i>
        </button>
        <div className='logo'>
          <img src={Logo} alt='' />
        </div>

        <div className='dot-icon'>
          <i className='fas fa-ellipsis-v'></i>
        </div>

        <div className='shop-essentials'>
          <div className='shop-essentials-text'>
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
          <div className='shop-essentials-icon'>
            <i className='fas fa-search'></i>
            <i className='fas fa-shopping-cart'></i>
            <i className='far fa-heart'></i>
            <span>log in</span>
          </div>

          {/* Header dropdown minicart  */}
          <div className='header-cart-dropdown'>
            <div className='header-minicart'>
              <div className='header-dropdown-item scroll-style'>
                {/* <!-- item one --> */}
                <div className='header-cart-item'>
                  <div className='header-cart-item-img'>
                    <img src='./img/hover/cart/product1.png' alt='' />
                  </div>
                  <div className='header-cart-item-name'>
                    <a href=''>
                      <p>Slim Wooden Stool</p>
                    </a>
                    <p>2 x 125</p>
                  </div>
                  <div className='header-cart-item-delete'>
                    <i className='far fa-times-circle'></i>
                  </div>
                </div>
                {/* <!-- item two --> */}
                <div className='header-cart-item'>
                  <div className='header-cart-item-img'>
                    <img src='./img/hover/cart/product2.png' alt='' />
                  </div>
                  <div className='header-cart-item-name'>
                    <a href=''>
                      <p>White Comfy Silver</p>
                    </a>
                    <p>2 x 125</p>
                  </div>
                  <div className='header-cart-item-delete'>
                    <i className='far fa-times-circle'></i>
                  </div>
                </div>
                {/* <!-- item three --> */}
                <div className='header-cart-item'>
                  <div className='header-cart-item-img'>
                    <img src='./img/hover/cart/product3.png' alt='' />
                  </div>
                  <div className='header-cart-item-name'>
                    <a href=''>
                      <p>Yellow Comfort</p>
                    </a>
                    <p>2 x 125</p>
                  </div>
                  <div className='header-cart-item-delete'>
                    <i className='far fa-times-circle'></i>
                  </div>
                </div>
              </div>
              <div className='header-cart-total'>
                <p>Total</p>
                <p>$900</p>
              </div>
              <div className='header-view-cart'>
                <a href='#'>
                  <button>View Cart</button>
                </a>
              </div>
              <div className='header-checkout'>
                <a href='#'>
                  {' '}
                  <button>Checkout</button>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- ************ Header Wishlist ********************* --> */}

          <div className='header-wishlist-dropdown'>
            <div className='header-wishlist'>
              <div className='wishlist-items wishlist-scroll-style'>
                {/* <!-- item one --> */}
                <div className='header-wishlist-item'>
                  <div className='header-wishlist-item-img'>
                    <img src='./img/hover/wishlist/product1.png' alt='' />
                  </div>
                  <div className='header-wishlist-item-name'>
                    <a href=''>
                      <p>Slim Wooden Stool</p>
                    </a>
                    <p>Add To Cart</p>
                  </div>
                  <div className='header-wishlist-item-delete'>
                    <i className='far fa-times-circle'></i>
                  </div>
                </div>

                {/* <!-- item two --> */}
                <div className='header-wishlist-item'>
                  <div className='header-wishlist-item-img'>
                    <img src='./img/hover/wishlist/product2.png' alt='' />
                  </div>
                  <div className='header-wishlist-item-name'>
                    <a href=''>
                      <p>White comfy silver</p>
                    </a>
                    <p>Add To Cart</p>
                  </div>
                  <div className='header-wishlist-item-delete'>
                    <i className='far fa-times-circle'></i>
                  </div>
                </div>

                {/* <!-- item three --> */}
                <div className='header-wishlist-item'>
                  <div className='header-wishlist-item-img'>
                    <img src='./img/hover/wishlist/product3.png' alt='' />
                  </div>
                  <div className='header-wishlist-item-name'>
                    <a href=''>
                      <p>Yellow Comfort</p>
                    </a>
                    <p>Add To Cart</p>
                  </div>
                  <div className='header-wishlist-item-delete'>
                    <i className='far fa-times-circle'></i>
                  </div>
                </div>
              </div>

              <div className='header-view-wishlist'>
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
