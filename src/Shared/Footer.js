import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-area">
            <Container>
                <Row xs={1} md={4} className="w-100 mx-auto">
                    <Col className="mt-5">
                        <div>
                            <div>
                                <h2 className="fw-bold">Car Repair</h2>
                            </div>
                            <div className="mt-4">
                                <p>
                                    The Car Repair which is important for us and we do our job happily
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="fw-bold">Follow Us:</h3>
                            <div className="d-flex icon">
                                <div>
                                    <i class="fab fa-facebook-f"></i>
                                </div>
                                <div>
                                    <i class="fab fa-instagram"></i>
                                </div>
                                <div>
                                    <i class="fab fa-twitter"></i>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="mt-5">
                        <div>
                            <div>
                                <h3 className="fw-bold">Contact Us</h3>
                            </div>
                            <div className="icons">
                                <div className="mt-4 d-flex align-items-center">
                                    <div>
                                        <i class="fas fa-phone-alt"></i>
                                    </div>
                                    <div className="mx-3">
                                        <p className="m-0">+01811137386</p>
                                        <p className="m-0">+01811137386</p>
                                    </div>
                                </div>
                                <div className="mt-4 d-flex align-items-center">
                                    <div>
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div className="mx-3">
                                        <p className="m-0">arpita@moon.com</p>
                                        <p className="m-0">abc@df.com</p>
                                    </div>
                                </div>
                                <div className="mt-4 d-flex align-items-center">
                                    <div>
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="mx-3">
                                        <p className="m-0">100 New York</p>
                                        <p className="m-0">United State of America</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="mt-5">
                        <div>
                            <h3 className="fw-bold">Support</h3>
                            <div>
                                <p>Contact</p>
                                <p>About</p>
                                <p>Destinations</p>
                                <p>Our blog</p>
                                <p>Services</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="mt-5">
                        {/* <div>
                            <div>
                                <h3 className="fw-bold mb-3">We Accept</h3>
                                <div className="footer-payment">
                                    <div>
                                        <img
                                            src="https://th.bing.com/th/id/R.ed1600cd84e67a305cee49bfa0b78e64?rik=1dgfwp3p5AV76g&pid=ImgRaw&r=0&sres=1&sresct=1"
                                            className="d-inline-block align-top"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src='https://th.bing.com/th/id/R.1175aa6e5c9ca9cf9ad529bb434aad8d?rik=5wr%2bRYXoc1iV6w&pid=ImgRaw&r=0'
                                            className="d-inline-block align-top"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="https://th.bing.com/th/id/OIP.K45Wtqfexf4vv3iAKGx1-AHaHa?pid=ImgDet&rs=1"
                                            className="d-inline-block align-top"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="https://th.bing.com/th/id/R.14e43e8f3b109dd04ddaed4deb9d055b?rik=Jkedq5CaR457Cw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_98691.png&ehk=0Heby01IB89eT9cFNm6iNWX52aGwglm7s1%2bCFgJqOQw%3d&risl=&pid=ImgRaw&r=0"
                                            className="d-inline-block align-top"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="https://th.bing.com/th/id/R.6285328f726e1db067952f1363edc6ef?rik=wS2gMfdz4jjhlg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-paDGMjcO-M8%2fTbmrryL0iBI%2fAAAAAAAAAJg%2fV1-cESw9PTo%2fs1600%2fdiscover.jpg&ehk=3WPDHmup8yS27MP%2bDCzD4uuc0RWzQjASu9AFZWF8Hcc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
                                            className="d-inline-block align-top"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div> */}
                        {/* </div> */}
                    </Col>
                </Row>
                <hr />
                <p className="text-center">Copyright 2021 Car Repair | Design By Arpita</p>
            </Container>
        </div>
    );
};

export default Footer;
