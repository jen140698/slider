import React, { useState, useEffect } from 'react';
import '../scss/main.scss'
import SearchModal from './SearchModal';
function Header(props) {
  const [preHeaderToggler, setPreHeaderToggler] = useState(false)
  const [headerLogo,setHeaderLogo]=useState(false)
  let location = window.location.pathname
  
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  useEffect(() => {
    let header = document.getElementsByClassName("navbar");  
    
      if (offset >= 100) {
        header[0].classList.add("header-fixed");
        setHeaderLogo(true)
      } else {
        header[0].classList.remove("header-fixed");
        setHeaderLogo(false)
      }
  
  }, [offset]);

  console.log(location)
  return (
    <React.Fragment>
      <div className="mask">
        <div id="spinner">
          <div className="double-bounce1" />
          <div className="double-bounce2" />
        </div>
      </div>

      <div className="transparent-header-wrapper">
        <div className={`transparent-header ${(location == '/blog' || location == '/') && 'active'}`} >

          <div className={`position-relative`} >
            <div className="pre-header">
              <div className={`pre-header-inner ${preHeaderToggler && 'd-block'}`}>
                <div className="container">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
                    <div className="col mb-5 mb-lg-0">
                      <div className="footer-title">ABOUT RIGID</div>
                      <p>Rigid is an extremely flexible and powerful WordPress / WooCommerce theme with a modern, pixel perfect design suitable for e-commerce, portfolio or business websites, no matter which business niche they belong.</p>
                      <p>This is a custom, collapsible widget area. Use it like any other sidebar and easily place any number of widgets here.</p>
                    </div>
                    <div className="col mb-5 mb-lg-0">
                      <div className="footer-title">INFORMATION</div>
                      <ul className="list-unstyled">
                        <li><a href="#!" className="footer-link">About Us</a></li>
                        <li><a href="#!" className="footer-link">Delivery Information</a></li>
                        <li><a href="#!" className="footer-link">Returns</a></li>
                        <li><a href="#!" className="footer-link">Terms &amp; Conditions</a></li>
                        <li><a href="#!" className="footer-link">Privacy Policy</a></li>
                      </ul>
                    </div>
                    <div className="col mb-5 mb-lg-0">
                      <div className="footer-title">EXTRAS</div>
                      <ul className="list-unstyled">
                        <li><a href="#!" className="footer-link">Our Brands</a></li>
                        <li><a href="#!" className="footer-link">Special Offers</a></li>
                        <li><a href="#!" className="footer-link">Gift Vouchers</a></li>
                        <li><a href="#!" className="footer-link">Affiliates</a></li>
                        <li><a href="#!" className="footer-link">Contacts</a></li>
                      </ul>
                    </div>
                    <div className="col">
                      <div className="footer-title">CUSTOMER CARE</div>
                      <ul className="list-unstyled">
                        <li className="footer-item"><i className="fas fa-clock" /><span>Monday - Friday: 09:00 - 18:30</span></li>
                        <li className="footer-item"><i className="fas fa-map-marker" /><span>1600 7th Avenue, Seattle, WA 98101</span></li>
                        <li className="footer-item"><i className="fas fa-phone" /><span>+1.888.292.7171</span></li>
                        <li className="footer-item"><i className="fas fa-fax" /><span>+1.888.292.7272</span></li>
                        <li className="footer-item"><i className="fas fa-envelope" /><span><a href="mailto:shop@rigid.con">shop@rigid.con</a></span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`pre-header-toggler ${preHeaderToggler && 'active'}`} onClick={() => setPreHeaderToggler(!preHeaderToggler)} />
            </div>
          </div>

          <header>
            {/* Top Navbar */}
            <div className={`top-navbar d-none ${location != '/' && 'd-lg-block'}`}>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <nav className="nav top-leftnav">
                      <div className="dropdown" data-open="hover">
                        <a className="text-uppercase dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          My Account
                  </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                      <a className="nav-link" href="#">Wishlist</a>
                      <div className="top-rightnav ms-auto">
                        <a className="nav-link " href="#">
                          <span> SHOP ONLINE OR CALL </span>
                        </a><a href="tel:+18882927171"><i className="fas fa-phone" /> +1.888.292.7171 </a>
                        <ul className="top-social-links">
                          <li>
                            <a title="Follow on Facebook" className="facebook" target="_blank" href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a title="Follow on Twitter" className="twitter" target="_blank" href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a title="Follow on Instagram" className="instegram" target="_blank" href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a title="Follow on Pinterest" className="pinterest" target="_blank" href="#">
                              <i className="fab fa-pinterest" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            {/* Main Navbar */}
            <nav id="navBar" className="navbar navbar-expand-lg navbar-light ">
              <div className="container position-relative">
                <a className="navbar-brand" href="#">{(location=='/'||location=='/blog' )?
                <>
                  <img src={require("../images/logo_white_medium.png")} style={{display:headerLogo?'none':'block'}} className="img-fluid logo-white"  alt="" />
                  <img src={require("../images/logo.png")} style={{display:headerLogo?'block':'none'}} className="img-fluid" alt="" /></>
                :  <img src={require("../images/logo.png")} className="img-fluid" alt="" /> }
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="offcanvas offcanvas-start" id="navbarSupportedContent">
                  <div className="offcanvas-header border-bottom shadow-sm">
                    <div className="offcanvas-title h5" id="offcanvasExampleLabel">
                      <h6 className="mb-0">Menu</h6>
                    </div>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item dropdown" data-open="hover">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Home
                  </a>
                        <div className="dropdown-menu dropdown-menu-3-column">
                          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                            <div className="col dropdown-menu-column">
                              <ul className="list-unstyled navbar-list">
                                <li><a href="#!" className="navbar-hover-effect">Home Classic Shop</a></li>
                                <li><a href="#!" className="navbar-hover-effect">Home Classic v.2</a></li>
                                <li><a href="#!" className="navbar-hover-effect">Home Classic v.3</a></li>
                                <li><a href="#!" className="navbar-hover-effect">Home Simple</a></li>
                                <li><a href="#!" className="navbar-hover-effect">Home Category Wall</a></li>
                                <li><a href="#!" className="navbar-hover-effect">Home LookBook</a></li>
                                <li><a href="#!" className="navbar-hover-effect">Home Sections</a></li>
                              </ul>
                              <small>*Change this text to whatever you want and even place images, custom HTML or shortcodes here.</small>
                            </div>
                            <div className="col dropdown-menu-column">
                              <ul className="list-unstyled navbar-list">
                                <li><a href="#!" className="navbar-hover-effect">Home Extended</a></li>
                                <li><a href="#!" className="navbar-hover-effect">Home Left Header</a></li>
                                <li><a href="#!" className="navbar-hover-effect">Home BoxedVIDEO</a></li>
                                <li><a href="#!" className="navbar-hover-effect">Home Collections</a></li>
                                <li><a href="#!" className="navbar-hover-effect">Home Parallax</a></li>
                                <li><a href="#!" className="navbar-hover-effect">Home Banner Wall</a></li>
                                <li><a href="#!" className="navbar-hover-effect">Home Banner Wall – v.2POPULAR</a></li>
                              </ul>
                              <small>*Rigid offers unparalleled power, built-in custom features and unbeatable levels of customization. No plugins needed!</small>
                            </div>
                            <div className="col dropdown-menu-column">
                              <img className="img-fluid" src={require("../images/media/navbar/vendor_demo_menu_banner.jpg")} alt="" />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item dropdown position-static" data-open="hover">
                        <div className="position-relative d-none d-lg-block">
                          <span className="navbar-custom-menu-label">a.k.a. PORTFOLIO</span>
                        </div>
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          The Shop
                  </a>
                        <div className="dropdown-menu dropdown-megamenu w-100">
                          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-5">
                            <div className="col">
                              <div className="navbar-category-name">Categories</div>
                              <ul className="list-unstyled navbar-list">
                                <li>
                                  <a href="#!" className="navbar-hover-effect">Clothes</a>
                                  <ul className="list-unstyled navbar-innerlist">
                                    <li><a href="#!">Blouses</a></li>
                                    <li><a href="#!">Blouses</a></li>
                                    <li><a href="#!">Blouses</a></li>
                                    <li><a href="#!">Blouses</a></li>
                                    <li><a href="#!">Blouses</a></li>
                                  </ul>
                                </li>
                                <li><a href="#!" className="navbar-hover-effect">Clothes</a></li>
                                <li><a href="#!" className="navbar-hover-effect">Clothes</a></li>
                              </ul>
                              <small>*Each category can have it’s own header style, header image and custom options.</small>
                            </div>
                            <div className="col">
                              <div className="navbar-category-name">Categories</div>
                              <ul className="list-unstyled navbar-list">
                                <li>
                                  <a href="#!" className="navbar-hover-effect">Clothes</a>
                                  <ul className="list-unstyled navbar-innerlist">
                                    <li><a href="#!">Blouses</a></li>
                                    <li><a href="#!">Blouses</a></li>
                                    <li><a href="#!">Blouses</a></li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="#!" className="navbar-hover-effect">Clothes</a>
                                  <ul className="list-unstyled navbar-innerlist">
                                    <li><a href="#!">Blouses</a></li>
                                    <li><a href="#!">Blouses</a></li>
                                    <li><a href="#!">Blouses</a></li>
                                  </ul>
                                </li>
                              </ul>
                              <small>*All Trademarks, logos and brands are property of their respective owners!</small>
                            </div>
                            <div className="col">
                              <img src={require("../images/media/navbar/menu_banner_shop.jpg")} className="img-fluid" alt="" />
                            </div>
                            <div className="col">
                              <div className="navbar-category-name">Categories</div>
                              <ul className="list-unstyled navbar-list">
                                <li>
                                  <a href="#!" className="navbar-hover-effect">Clothes</a>
                                  <a href="#!" className="navbar-hover-effect">Clothes</a>
                                  <a href="#!" className="navbar-hover-effect">Clothes</a>
                                  <a href="#!" className="navbar-hover-effect">Clothes</a>
                                  <a href="#!" className="navbar-hover-effect">Clothes</a>
                                  <a href="#!" className="navbar-hover-effect">Clothes</a>
                                </li>
                              </ul>
                              <small>*Simple, variable and digital products, affiliate shops and coupon deals.</small>
                            </div>
                            <div className="col">
                              <div className="navbar-category-name">Categories</div>
                              <ul className="list-unstyled navbar-list">
                                <li>
                                  <a href="#!" className="navbar-hover-effect">Clothes</a>
                                  <a href="#!" className="navbar-hover-effect">Clothes</a>
                                  <a href="#!" className="navbar-hover-effect">Clothes</a>
                                  <a href="#!" className="navbar-hover-effect">Clothes</a>
                                  <a href="#!" className="navbar-hover-effect">Clothes</a>
                                  <a href="#!" className="navbar-hover-effect">Clothes</a>
                                  <a href="#!" className="navbar-hover-effect">Clothes</a>
                                  <a href="#!" className="navbar-hover-effect">Clothes</a>
                                </li>
                              </ul>
                              <small>*Standard, fullwidth, grid or list view, paginated, infinite, load more.</small>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item dropdown position-static" data-open="hover">
                        <div className="position-relative d-none d-lg-block">
                          <span className="navbar-custom-menu-label">a.k.a. PORTFOLIO</span>
                        </div>
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Collections
                  </a>
                        <div className="dropdown-menu dropdown-megamenu w-100">
                          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-5">
                            <div className="col">
                              <div className="navbar-category-name">Categories</div>
                              <img className="img-fluid mb-3" src={require("../images/media/navbar/menu_port_image_list.jpg")} alt="" />
                              <ul className="list-unstyled navbar-list">
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                              </ul>
                            </div>
                            <div className="col">
                              <div className="navbar-category-name">Overlay</div>
                              <img className="img-fluid mb-3" src={require("../images/media/navbar/menu_port_image_masonry.jpg")} alt="" />
                              <ul className="list-unstyled navbar-list">
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                              </ul>
                            </div>
                            <div className="col">
                              <div className="navbar-category-name">Masonary</div>
                              <img className="img-fluid mb-3" src={require("../images/media/navbar/menu_port_image_overlay.jpg")} alt="" />
                              <ul className="list-unstyled navbar-list">
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                              </ul>
                            </div>
                            <div className="col">
                              <div className="navbar-category-name">Other Layouts</div>
                              <img className="img-fluid mb-3" src={require("../images/media/navbar/menu_port_image_single.jpg")} alt="" />
                              <ul className="list-unstyled navbar-list">
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                              </ul>
                            </div>
                            <div className="col">
                              <div className="navbar-category-name">Single Layouts</div>
                              <img className="img-fluid mb-3" src={require("../images/media/navbar/menu_port_image_standard.jpg")} alt="" />
                              <ul className="list-unstyled navbar-list">
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard <sup>CASE STUDY</sup></a></li>
                                <li><a href="#!" className="navbar-hover-effect">2 Col’s. Standard</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item dropdown" data-open="hover">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          The Blog
                  </a>
                        <div className="dropdown-menu dropdown-lg">
                          <ul className="list-unstyled navbar-list">
                            <li><a href="#" className="navbar-hover-effect">Action</a></li>
                            <li><a href="#" className="navbar-hover-effect">Another action</a></li>
                            <li><a href="#" className="navbar-hover-effect">Another action</a></li>
                            <li><a href="#" className="navbar-hover-effect">Another action <sup>NEW</sup></a></li>
                            <li><a href="#" className="navbar-hover-effect">Another action <sup>NEW</sup></a></li>
                            <li><a href="#" className="navbar-hover-effect">Another action</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item dropdown" data-open="hover">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                          Features
                  </a>
                        <div className="dropdown-menu dropdown-lg dropdown-menu-start">
                          <ul className="list-unstyled navbar-list">
                            <li>
                              <div className="dropdown" data-open="hover">
                                <a href="#" className="navbar-hover-effect" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Dropdown
                          </a>
                                <div className="dropdown-menu dropdown-lg dropdown-menu-sub">
                                  <ul className="list-unstyled navbar-list">
                                    <li><a href="#!" className="navbar-hover-effect">Another action</a></li>
                                    <li><a href="#!" className="navbar-hover-effect">Another action</a></li>
                                    <li><a href="#!" className="navbar-hover-effect">Another action</a></li>
                                    <li><a href="#!" className="navbar-hover-effect">Another action</a></li>
                                    <li><a href="#!" className="navbar-hover-effect">Another action</a></li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                            <li>
                              <a className="navbar-hover-effect" href="#">Another action</a>
                            </li>
                            <li>
                              <a className="navbar-hover-effect" href="#">Another action</a>
                            </li>
                            <li>
                              <div className="dropdown" data-open="hover">
                                <a href="#" role="button" className="navbar-hover-effect" data-bs-toggle="dropdown" aria-expanded="false">
                                  Dropdown
                          </a>
                                <div className="dropdown-menu dropdown-lg dropdown-menu-sub">
                                  <ul className="list-unstyled navbar-list">
                                    <li><a href="#!" className="navbar-hover-effect">Another action</a></li>
                                    <li><a href="#!" className="navbar-hover-effect">Another action</a></li>
                                    <li><a href="#!" className="navbar-hover-effect">Another action</a></li>
                                    <li><a href="#!" className="navbar-hover-effect">Another action</a></li>
                                    <li><a href="#!" className="navbar-hover-effect">Another action</a></li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                            <li>
                              <a className="navbar-hover-effect" href="#">Another action</a>
                            </li>
                            <li>
                              <a className="navbar-hover-effect" href="#">Another action</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <div className="navbar-account-menu d-none d-lg-block">
                      <ul className="nav align-items-center">
                        <li className="nav-item">
                          <div className="dropdown">
                            <a className="nav-link nav-link-icon" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                              <i className="fas fa-user" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-authentication dropdown-menu-end">
                              <ul className="nav nav-authentication" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                  <button className="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true">login</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <button className="nav-link" id="register-tab" data-bs-toggle="tab" data-bs-target="#register" type="button" role="tab" aria-controls="register" aria-selected="false">register</button>
                                </li>
                              </ul>
                              <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                  <div className="form-control-theme mb-3">
                                    <label htmlFor="exampleFormControlInput" className="form-label">Username or email address <span className="text-danger"><sup>*</sup></span></label>
                                    <input type="text" className="form-control" id="exampleFormControlInput" placeholder />
                                  </div>
                                  <div className="form-control-theme mb-3">
                                    <label htmlFor="passwordFormControl" className="form-label">Password <span className="text-danger"><sup>*</sup></span></label>
                                    <input type="password" className="form-control" id="passwordFormControl" placeholder />
                                    <i className="fas fa-eye toggle-eye" id="toggleEyeSignin" />
                                  </div>
                                  <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                      REMEMBER ME
                              </label>
                                  </div>
                                  <button type="submit" className="btn btn-alternative mb-3">Log in</button><br />
                                  <a className="forgot-password" href="#!">Lost your password?</a>
                                </div>
                                <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                  <div className="form-control-theme mb-3">
                                    <label htmlFor="registerEmailControl" className="form-label">Username or email address <span className="text-danger"><sup>*</sup></span></label>
                                    <input type="text" className="form-control" id="registerEmailControl" placeholder />
                                  </div>
                                  <div className="form-control-theme mb-3">
                                    <label htmlFor="registerPasswordControl" className="form-label">Password <span className="text-danger"><sup>*</sup></span></label>
                                    <input type="password" className="form-control" id="registerPasswordControl" placeholder />
                                    <i className="fas fa-eye toggle-eye" id="toggleEyeRegister" />
                                  </div>
                                  <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#!" className="privacy-policy-link" target="_blank">privacy policy</a>.</p>
                                  <button type="submit" className="btn btn-alternative">Register</button><br />
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link nav-link-icon position-relative" href="#">
                            <i className="fas fa-heart" />
                            <span className="count-badge">1</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link nav-link-icon position-relative" data-bs-toggle="modal" data-bs-target="#cartModal" href="#">
                            <i className="fas fa-shopping-bag" />
                            <span className="count-badge">0</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link nav-link-icon" data-bs-toggle="modal" data-bs-target="#searchModal">
                            <i className="fas fa-search" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="navbar-account-menu d-lg-none">
                  <ul className="nav align-items-center">
                    <li className="nav-item">
                      <div className="dropdown">
                        <a className="nav-link nav-link-icon" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                          <i className="fas fa-user" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-authentication dropdown-menu-sm-end">
                          <ul className="nav nav-authentication" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true">login</button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="register-tab" data-bs-toggle="tab" data-bs-target="#register" type="button" role="tab" aria-controls="register" aria-selected="false">register</button>
                            </li>
                          </ul>
                          <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                              <div className="form-control-theme mb-3">
                                <label htmlFor="exampleFormControlInput" className="form-label">Username or email address <span className="text-danger"><sup>*</sup></span></label>
                                <input type="text" className="form-control" id="exampleFormControlInput" placeholder />
                              </div>
                              <div className="form-control-theme mb-3">
                                <label htmlFor="passwordFormControl" className="form-label">Password <span className="text-danger"><sup>*</sup></span></label>
                                <input type="password" className="form-control" id="passwordFormControl" placeholder />
                                <i className="fas fa-eye toggle-eye" id="toggleEyeSignin" />
                              </div>
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  REMEMBER ME
                          </label>
                              </div>
                              <button type="submit" className="btn btn-alternative mb-3">Log in</button><br />
                              <a className="forgot-password" href="#!">Lost your password?</a>
                            </div>
                            <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                              <div className="form-control-theme mb-3">
                                <label htmlFor="registerEmailControl" className="form-label">Username or email address <span className="text-danger"><sup>*</sup></span></label>
                                <input type="text" className="form-control" id="registerEmailControl" placeholder />
                              </div>
                              <div className="form-control-theme mb-3">
                                <label htmlFor="registerPasswordControl" className="form-label">Password <span className="text-danger"><sup>*</sup></span></label>
                                <input type="password" className="form-control" id="registerPasswordControl" placeholder />
                                <i className="fas fa-eye toggle-eye" id="toggleEyeRegister" />
                              </div>
                              <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#!" className="privacy-policy-link" target="_blank">privacy policy</a>.</p>
                              <button type="submit" className="btn btn-alternative">Register</button><br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-link-icon position-relative" href="#">
                        <i className="fas fa-heart" />
                        <span className="count-badge">1</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-link-icon position-relative" href="#" data-bs-toggle="modal" data-bs-target="#cartModal">
                        <i className="fas fa-shopping-bag" />
                        <span className="count-badge">0</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-link-icon" data-bs-toggle="modal" data-bs-target="#searchModal" >
                        <i className="fas fa-search" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>

        </div>
      </div>
      <SearchModal/>
    </React.Fragment>
  );
}

export default Header;