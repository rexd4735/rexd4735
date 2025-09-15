const colorsValue = {
    red: "#fe7fef",
    yellow: "#ffff00",
    green: "#008000",
    blue: "0000ff",
    white: "#f8f8f8",
    brown: "a52a2a",
    clear: "#ffffff",
    "dark brown": "#654321",
    light: "#f5f5dc",
    black: "#000000",
    natural: "#8b4513",
    "light brown": "#deb887",
    dark: "#696969",
    gray: "#808080",
    beige: "#f5f5dc",
};

import React from "react";
import { Title, Caption, BodyOne } from "../../components/common/CustomComponents";
import { useParams } from 'react-router-dom';
import { productlists } from "../../assets/data/data";
import { useState } from "react";
import { RenderRatingStars } from "../../components/product/ProductCard";
import { BiPlus, BiMinus, BiHeart } from "react-icons/bi";
import { FilterDiscover } from "../../components/hero/InstagramPost";
import { ProductSlideCard } from "../../components/product/ProductSlide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ProductDetails = () => {
    const { productId } = useParams();
    console.log('uhhh: ', productId);
    const product = productlists.find(
        product => product.id === parseInt(productId)
    );

    const { title, images, price, description, discount, rating, color } =
        product;


    const [selectedColor, setSelectedColor] = useState(color[0].value);
    const [selectedPrice, setSelectedPrice] = useState(price.find((price) => price.color === color[0].value));
    
    const handleColorClick = color => {
        const newSelectedPrice = price.find((price) => price.color === color);
        setSelectedColor(color);
        setSelectedPrice(newSelectedPrice);
    } 


    if (!product) {
        return <div>Product not found</div>
    }


    const CustomPage = ({index, onClick}) => (
        <div>
            <img src={images[index].image} alt="" onClick={onClick} />
        </div>
    );


    const settings = {
        customPaging: (i) => <CustomPage index={i} />,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <section className="container mt-32 slideproduct">
                <div className="flex justify-between flex-col lg:flex-row" key={productId}>
                    <div className="images lg:w-1/2">
                        <div>
                            <Slider {...settings}>
                                {images.map((image, index) => (
                                    <img
                                        src={image.image}
                                        key={index}
                                        className="w-full h-full"
                                        alt=""
                                        style={(index > 0) ? {display: "none"} : {display: "block"}}
                                    />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="details lg:w-1/2 px-16 pt-16">
                        <button className="feature-btn bg-indigo-600">
                            SALE {discount}% OFF
                        </button>
                        <Title level={2} className="my-2">
                            {title}
                        </Title>
                        <div className="flex items-center gap-2 -mt-5 mb-5">
                            <div className="flex items-center gap-1">
                                {RenderRatingStars(rating)}
                            </div>
                            <p>{product.rating} Review</p>
                        </div>
                        <p className="text-[15px]">{description}</p>
                        <br />
                        <div>
                            <Caption>Colors</Caption>
                            <div className="flex items-center gap-3 mt-5">
                                {color.map((colorOption, index) => (
                                    <div key={index} 
                                    onClick={() => handleColorClick(colorOption.value)}
                                    className={`w-4 h-4 rounded-full -mt-3 cursor-pointer border-gray-30 ${selectedColor === colorOption.value ? "selected" : ""}`}
                                    style={{backgroundColor: colorOption.value}}
                                >

                                </div>))}
                            </div>
                            <div className="mt-5">
                                <Caption>Prices</Caption>
                                <div className="flex items-center gap-3">
                                    <BodyOne className="line-through mt-4">
                                        ${selectedPrice.value}
                                    </BodyOne>
                                    <Title level={4} className="text-primary-green">
                                        ${(selectedPrice.value - (selectedPrice.value * product.discount) / 100).toFixed(2)}
                                    </Title>
                                </div>
                            </div>
                            <br/>
                            <div className="flex items-center gap-3">
                                <button className="w-12 h-12 grid place-items-center bg-gray-100 text-primary border border-gray-300">
                                    <BiPlus size={20} />
                                </button>
                                <input 
                                    type="text"
                                    value="1"
                                    className="w-16 h-12 text-primary outline-none border border-gray-300 px-6"
                                ></input>
                                <button className="w-12 h-12 grid place-items-center bg-gray-100 text-primary border border-gray-300">
                                    <BiMinus size={20} />
                                </button>
                                <button className="primary-btn">
                                    ADD TO CART
                                </button>
                            </div>
                            <div className="flex items-center gap-3 mt-6">
                                <button className="flex items-center gap-2 secondary-btn">
                                    <BiHeart size={20} />
                                    Add to Wishlist
                                </button>
                                <button className="flex items-center gap-2 secondary-btn">
                                    Compare
                                </button>
                            </div>
                            <hr className="my-5" />
                            <label htmlFor="">
                                {/* Make this dynamic for the user data */}
                                <span className="text-primary font-bold">SKU: </span>PRT584E63A
                            </label>
                            <br/>
                            <label htmlFor="">
                                {/* Also make this dynamic */}
                                <span className="text-primary font-bold">Category: </span>Photography
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between flex-col lg:flex-row my-10">
                    <div className="lg:w-1/2">
                        <Title level={3}>Cameras</Title>
                        <br/>
                        <Caption>
                        While phone cameras are convenient, dedicated cameras are generally preferred for superior image quality, more manual controls, better lens options, and a more ergonomic design, especially when taking professional or detailed photographs in challenging lighting conditions or situations requiring specific focal lengths; essentially, a camera offers greater creative flexibility compared to a phone camera. 
                        </Caption>
                        <br/>
                        <Title level={3}>Specifications</Title>
                        <br/>
                        <Caption>High Image Quality: Canon EOS R5 8K digital camera features a stacked, back-side illuminated 45-megapixel full-frame CMOS sensor for phenomenal low-light performance, image clarity and level of detail</Caption>
                        <br/>
                        <Caption>Powerful Image Processor: DIGIC X image processor with an ISO range of 100-51200; expandable to 102400x; powers 8K capture, enhances detail, reduces noise and more with high speed and efficiency</Caption>
                        <br/>
                        <Caption>High-Speed Shooting: High-speed continuous shooting of up to 12 fps with mechanical shutter and up to 20 fps using electronic (silent) shutter — a large step-up in our EOS R-series line of mirrorless cameras</Caption>
                        <br/>
                        <Caption>Superb Autofocus: Dual pixel CMOS AF with 1,053 AF points; covers approximately 100% area; subject tracking of people, animals and vehicles using deep learning technology; features Eye Control AF capability to enable photographers to select focus points simply by looking at them</Caption>
                        <br/>
                        <Caption>High-Resolution Video Capture: 8K RAW, 4K up to 120fps Internal Recording in all Formats, with Auto Focus — stellar 8K camera for video recording</Caption>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-2 gap-5 lg:px-8 mt-5">
                        <ProductDetailsBox title="Camera Types" desc="There are so many different camera types to choose from based on your preference and use case." />
                        <ProductDetailsBox title="Lenses" desc="Camera lenses are huge in enhancing the capability of your device." />
                        <ProductDetailsBox title="Lighting" desc="Lighting can make a major difference in your results. Choose from a variety of indoor and outdoor lights." />
                        <ProductDetailsBox title="Memory Cards" desc="Choose a memory card with the capacity to handle your projects." />
                    </div>
                </div>
                <Title level={3} className="my-5">
                    Related Products
                </Title>
                <ProductSlideCard />
            </section>
            <br/>
            <FilterDiscover />
        </div>
    );
}

export const ProductDetailsBox = ({ title, desc }) => {
    return (
        <>
            <div className="flex items-center justify-center flex-col gap-3 text-center bg-gray-100 p-8 lg:p-0">
                <Title level={5}>{title}</Title>
                <Caption>{desc}</Caption>
            </div>
        </>
    )
}