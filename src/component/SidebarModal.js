import React, { useState, useEffect } from 'react';

function SidebarModal(elementRef) {
    let content = {
        English: {
            home: " WELCOME TO RIGID",
            desc: 'Place any number of widgets and custom content here, including custom HTML and even shortcodes. Oh, yes – you can also change them on per-page basis. ',
            product: 'PRODUCTS',
            bulk:'Burke Silk Blouse',
            price:'49.99',
        },
    };
    var language = content.English
    return (
        <React.Fragment>
            {/* Sidebar Modal */}
            <div className="modal fade" id="sidebarModal" tabIndex={-1} aria-labelledby="sidebarModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-right modal-sm modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="text-end m-3">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="navbar-category-name text-uppercase">{language.home}</div>
                            <p>{language.desc}</p>
                            {/* <div className="navbar-category-name text-uppercase mt-4">RECENTLY VIEWED PRODUCTS</div>
                            <ul className="list-unstyled product-list-widget">
                                <li>
                                    <div className="d-flex">
                                        <img className="product-widget-img" src={require("../images/media/product/small/1.jpg")} alt="" />
                                        <div className="product-widget-details">
                                            <div className="product-name-widget"> Burke Silk Blouse
                                       <div className="price-widget">49.99</div>
                                            </div>
                                        </div>
                                        <a href="#!" className="stretched-link" />
                                    </div></li>
                                <li>
                                    <div className="d-flex">
                                        <img className="product-widget-img" src={require("../images/media/product/small/1.jpg")} alt="" />
                                        <div className="product-widget-details">
                                            <div className="product-name-widget"> Burke Silk Blouse
                    <div className="price-widget">49.99</div>
                                            </div>
                                        </div>
                                        <a href="#!" className="stretched-link" />
                                    </div></li>
                                <li>
                                    <div className="d-flex">
                                        <img className="product-widget-img" src={require("../images/media/product/small/1.jpg")} alt="" />
                                        <div className="product-widget-details">
                                            <div className="product-name-widget"> Burke Silk Blouse
                    <div className="price-widget">49.99</div>
                                            </div>
                                        </div>
                                        <a href="#!" className="stretched-link" />
                                    </div></li>
                            </ul> */}
                            <img src={require("../images/media/navbar/menu_banner_shop.jpg")} className="w-100" alt="" />
                            <div className="navbar-category-name text-uppercase mt-4">{language.product}</div>
                            <ul className="list-unstyled product-list-widget">
                                <li>
                                    <div className="d-flex">
                                        <img className="product-widget-img" src={require("../images/media/product/small/1.jpg")} alt="" />
                                       <div className="product-widget-details">
                                            <div className="product-name-widget"> {language.bulk}
                    <div className="price-widget">{language.price}</div>
                                            </div>
                                        </div>
                                        <a href="#!" className="stretched-link" />
                                    </div></li>
                                <li>
                                    <div className="d-flex">
                                        <img className="product-widget-img" src={require("../images/media/product/small/1.jpg")} alt="" />
                                        <div className="product-widget-details">
                                            <div className="product-name-widget"> {language.bulk}
                    <div className="price-widget">{language.price}</div>
                                            </div>
                                        </div>
                                        <a href="#!" className="stretched-link" />
                                    </div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



        </React.Fragment>
    )
}

export default SidebarModal;
