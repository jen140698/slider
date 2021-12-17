import React, { useState, useEffect } from 'react';

function CartModal(elementRef) {
  let content = {
    English: {
      product: " No products in the cart.",
    },
  };
  var language = content.English
  return (
    <React.Fragment>
      <div>
        {/* Cart Modal */}
        <div className="modal fade" id="cartModal" tabIndex={-1} aria-labelledby="cartModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-right modal-sm modal-dialog-scrollable">
            <div className="modal-content">
              <div className="text-end m-3">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className="empty-message">
                  {language.product}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </React.Fragment>
  )
}

export default CartModal;
