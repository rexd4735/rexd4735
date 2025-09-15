import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout, Home, Shop, ProductDetails, CartPage } from "./router";

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element = {
                            <Layout>
                                <Home/>
                            </Layout>
                        }
                    />
                </Routes>
                <Routes>
                    <Route
                        path="/shop"
                        element = {
                            <Layout>
                                <Shop/>
                            </Layout>
                        }
                    />
                </Routes>
                <Routes>
                    <Route
                        path="/product-details/:productId"
                        element = {
                            <Layout>
                                <ProductDetails />
                            </Layout>
                        }
                    />
                </Routes>
                <Routes>
                    <Route
                        path="/cart"
                        element = {
                            <Layout>
                                <CartPage />
                            </Layout>
                        }
                    />
                </Routes>
            </BrowserRouter>      
        </>
    );
};