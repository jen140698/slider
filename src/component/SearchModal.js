import React, { useState, useEffect } from 'react';

function searchModal(elementRef) {
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
            <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="searchModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-right modal-sm modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="text-end">
                            <button type="button" className="btn-close close-search-button" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="p-lg-4">
                                <input type="text" className="theme-form-control" value="" placeholder="Search Products" />
                                <a className="btn btn-dark btn-lg-theme w-100 mt-4">Search Products</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </React.Fragment>
    )
}

export default searchModal;
