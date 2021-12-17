import React, { useState, useEffect } from 'react';

function TopControl(elementRef) {
    return (
        <React.Fragment>
            <div id="topcontrol" title="Scroll Back to Top">
                {/* <span  href="#home" className="scroltopcontrol" /> */}
                <a className="scroltopcontrol" href="#homeControl" />

            </div>            
        </React.Fragment>
    )
}

export default TopControl;
