import React, { useState, useEffect, useRef } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsives = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 750 },
        items: 3,
    },
    miniscreen: {
        breakpoint: { max: 750, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        classNames: "testing"
    }
};

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 750 },
        items: 1,
    },
    miniscreen: {
        breakpoint: { max: 750, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        classNames: "testing"
    }
};

function Home(props) {
    const [size, setSize] = useState('');
    const carouselRef = useRef()
    const [color, setColor] = useState('')
    const [value, setValues] = useState(55)
    const [opeGallry, setOpenGallry] = useState(false)

    const handleClear = () => {
        setColor('')
        setSize('')
    }


    const CustomDot = ({ onMove, index, onClick, active }) => {
        return (
            <button
                className={active ? "active" : "inactive"}
                onClick={() => onClick()}
            >
                <span></span>
            </button>
        );
    };

    const CustomButtonGroupAsArrows = ({ next, previous, ...rest }) => {
        return (
            <React.Fragment>
                <div className="tns-controls">
                    <button data-controls="prev" onClick={() => previous()} >
                        <i className="fas fa-angle-left" ></i> </button>
                    <button data-controls="next" onClick={() => next()}>
                        <i className="fas fa-angle-right" ></i></button>
                </div>
            </React.Fragment>
        );
    };



    return (
        <React.Fragment >
            <main id="homeControl" style={{backgroundColor:'#051c2c',minHeight:'100vh'}}>
                <div className="container">
                    <div className="row">
                        <div className="box-1 col-12 pl-5 pr-5" style={{paddingLeft:70,paddingRight:70}}>

                            <section className="hero-tns-section">
                                <div className="hero-tns">
                                    <Carousel swipeable={true}
                                        ref={carouselRef}
                                        plugins={['arrows']}
                                        draggable={false}
                                        keyBoardControl={true}
                                        slidesToSlide={1}
                                        responsive={responsive}
                                        // infinite={true}
                                        arrows={false}
                                        // autoPlay={true}
                                        showDots
                                        // renderButtonGroupOutside={true}
                                        customDot={<CustomDot />}
                                        customButtonGroup={<CustomButtonGroupAsArrows />}
                                    >
                                        <div>
                                            <div className="hero-tns-slide hero-tns-slide-1">
                                                <div className="container">
                                                    <div className="row justify-content-end text-center">
                                                        <div className="col-lg-6">
                                                            <div className="hero-tns-content">
                                                                <figure>
                                                                    <img src={require("../images/hero/1.png")} srcSet={require("../images/hero/1.png")} alt="" className="img-fluid" />
                                                                </figure>
                                                                <h6>kk</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="hero-tns-slide hero-tns-slide-2">
                                                <div className="container">
                                                    <div className="row justify-content-center text-center">
                                                        <div className="col-lg-6">
                                                            <div className="hero-tns-content">
                                                                <figure>
                                                                    <img src={require("../images/hero/2.png")} srcSet={require("../images/hero/2.png")} alt="" className="img-fluid" />
                                                                </figure>
                                                                <h6>kkk</h6>
                                                                <div className="d-flex justify-content-center flex-wrap">
                                                                    <a href="#!" className="btn btn-lg-theme btn-dark m-1">kkkk</a>
                                                                    <a href="#!" data-bs-toggle="modal" data-bs-target="#iframeModal" className="btn btn-lg-theme btn-light m-1">d</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="hero-tns-slide hero-tns-slide-3">
                                                <div className="container">
                                                    <div className="row text-center">
                                                        <div className="col-lg-6">
                                                            <div className="hero-tns-content">
                                                                <figure>
                                                                    <img src={require("../images/hero/3.png")} srcSet={require("../images/hero/3.png")} alt="" className="img-fluid" />
                                                                </figure>
                                                                <h6>d</h6>
                                                                {/* <a href="#!" className="btn btn-lg-theme btn-dark">ee</a> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel>
                                </div>
                            </section>
                        </div></div></div>
            </main>
        </React.Fragment>
    )

}

export default Home;
