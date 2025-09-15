import React from 'react';
import { Hero } from '../../components/hero/Hero';
import { InstagramPost } from '../../components/hero/InstagramPost';
import { ShippingInfo } from '../../components/product/ShippingInfo';
import { Banner } from '../../components/product/Banner';
import { ProductSlide } from '../../components/product/ProductSlide';
import { Product } from '../../router';
import { BiChat } from 'react-icons/bi';
import { Testimonials } from '../../components/hero/Testimonials';
import { ProductSlideCard } from '../../components/product/ProductSlide';
import { Title, Caption } from '../../components/common/CustomComponents';

export const Home = () => {
    return (
        <>
            <Hero />
            <Product />
            <ShippingInfo />
            <Banner />
            <ProductSlide />
            <Testimonials />

            <div className="container my-16 slideproduct">
                <Title level={3}>Recent Product</Title>
                <Caption>DISCOVER THE MOST TRENDING PRODUCTS IN MOONCART</Caption>
                <br/>
                <ProductSlideCard />
            </div>

            <InstagramPost />
        </>
    );
}