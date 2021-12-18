import React, { useState } from 'react';

import './AddProduct.css'
import { Col, Form, Row, Button } from "react-bootstrap";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const AddProduct = () => {

    const [image, setImage] = useState(null)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [desc, setDesc] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return
        }
        const formData = new FormData();
        formData.append("img", image);
        formData.append("price", price);
        formData.append("name", name);
        formData.append("desc", desc);
        console.log(formData)
        fetch('https://radiant-cove-29383.herokuapp.com/services', {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire("service added successfully");

                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }




    return (
        <div className="add-service">

            <Form className="booking-container" onSubmit={handleSubmit}>
                <div
                    className="form-main py-5 my-5 shadow-lg"
                    style={{ borderRadius: "15px", maxWidth: "85rem" }}
                >
                    <Row>
                        <h3 className="text-center mb-4 fw-bold">Add new service</h3>
                        <Col md={8} xs={12} className="pr-md-4">
                            <Form.Group>
                                <Form.Label style={{ fontWeight: "bold" }}>
                                    Name
                                </Form.Label>
                                <Form.Control
                                    style={{ height: "50px" }}
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter title"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4} xs={12} className="pr-md-4">
                            <Form.Group>
                                <Form.Label style={{ fontWeight: "bold" }}>Image</Form.Label>
                                <Button
                                    as={"label"}
                                    htmlFor="upload"
                                    variant="outline-primary"
                                    className="d-block p-2 upload-btn"
                                >
                                    <i className="fas fa-cloud-upload-alt mx-1"></i>
                                    Upload Image
                                </Button>
                                <Form.Control
                                    hidden="hidden"
                                    id="upload"
                                    type="file"
                                    placeholder="Upload photo"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={12} xs={12} className="pr-md-4">
                            <Form.Group className="mt-2">
                                <Form.Label style={{ fontWeight: "bold" }}>Price</Form.Label>
                                <Form.Control
                                    style={{ height: "50px" }}
                                    type="text"
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder="Enter Price"
                                />
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label style={{ fontWeight: "bold" }}>
                                    Description
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    style={{ height: "150px" }}
                                    type="text"
                                    onChange={(e) => setDesc(e.target.value)}
                                    placeholder="Say something"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="text-center mt-5">
                        <button variant="info" type="submit" className="main-button">
                            {" "}
                            Submit{" "}
                        </button>
                    </div>
                </div>
            </Form>
            <div>
                <Link to='/dashboards'><button className='upload-btn'>Go Dashboard</button></Link>

            </div>
        </div>
    );
};

export default AddProduct;