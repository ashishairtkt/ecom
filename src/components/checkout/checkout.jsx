import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
export default function Checkout() {
  return (
    <div className="checkout">
      <Container>
        <Row>
          <Col md={9}>
            <div className="checkoutLeft">
              <div className="titleBar">
                <p>Item in your cart</p>

                <p>(5) items </p>
              </div>

              <div className="details_section">
                <div className="details_card">
                  <div className="details">
                    <div className="details_img">
                      <img src="https://via.placeholder.com/200x200" alt="" />
                    </div>
                    <div className="product_name">
                      <p>Product Name</p>
                    </div>
                  </div>
                  <div className="product_quantity">
                    <p>- 1 +</p>
                  </div>
                  <div className="modify">
                    <div className="product_price">
                      <p>Rs. 1000</p>
                    </div>
                  </div>

                  <p className="remove_item">
                    <MdDelete /> Remove item{" "}
                  </p>
                </div>

                <div className="details_card">
                  <div className="details">
                    <div className="details_img">
                      <img src="https://via.placeholder.com/200x200" alt="" />
                    </div>
                    <div className="product_name">
                      <p>Product Name</p>
                    </div>
                  </div>
                  <div className="product_quantity">
                    <p>- 1 +</p>
                  </div>
                  <div className="modify">
                    <div className="product_price">
                      <p>Rs. 1000</p>
                    </div>
                  </div>

                  <p className="remove_item">
                    <MdDelete /> Remove item{" "}
                  </p>
                </div>
              </div>

              <div className="checkout_bottom">
                <Button variant="light">Continue shopping</Button>
                <Button variant="dark">Checkout</Button>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="checkoutRight">
              <div className="title">Cart Summary</div>
              <div className="price">
                <p>Total Price</p>
                <p> $1000</p>
              </div>
              <div className="price save">
                <p>Total Savings</p>
                <p> $100</p>
              </div>
              <div className="price total">
                <p>Final Price</p>
                <p> $900</p>
              </div>

              <div className="checkout_bottom">
                <Button variant="dark">Checkout</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
