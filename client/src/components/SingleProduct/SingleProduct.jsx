import { useContext, useState } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import prod from "../../assets/products/earbuds-prod-1.webp"
import "./SingleProduct.scss";

const SingleProduct = () => {
    return ( <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={prod} alt="" />
                </div>
                <div className="right">
                    <span className="name">Product name</span>
                    <span className="price">Price</span>
                    <span className="desc">Description</span>

                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span>-</span>
                            <span>5</span>
                            <span>+</span>
                        </div>
                        <button className="add-to-cart-button">
                            <FaCartPlus size={20} />
                            Add To Cart
                        </button>
                    </div>

                    <span className="divider" />
                    <div className="info-item">
                        <span className="text-bold">
                            Category:
                            <span>Headphones</span>
                        </span>
                        <span className="text-bold">
                            Share:
                            <span className="social-icons">
                                <FaFacebookF />
                                <FaInstagram />
                                <FaLinkedinIn />
                                <FaPinterest />
                                <FaTwitter />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <RelatedProducts />
        </div>
    </div>
    );
};

export default SingleProduct;
