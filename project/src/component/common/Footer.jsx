import LogoImg from '../../assets/common/camera-logo.png';
import { BodyOne, Caption, Title } from './CustomComponents';
import React from 'react';
import { CustomLink } from './CustomComponents';

export const Footer = () => {
    return (
        <>
            <footer className="py-14">
                <div className="container grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <img src={LogoImg} alt="LogoImg" className="h-12" />
                        <div className="flex flex-col gap-2 mt-5">
                            <Caption>Address : 451 Wall Street, UK, London</Caption>
                            <Caption>Email: example@domain.com</Caption>
                            <Caption>Call: 555-555-1234</Caption>
                        </div>
                        <br/>
                        <BodyOne>Subscribe to Our Newsletter</BodyOne>
                        <input 
                            type="text"
                            className="p-3 w-full border bg-white-100 border-gray-300 rounded-md outline-none"
                            placeholder="Enter your email address"
                        />
                    </div>
                    <div>
                        <Title level={5}>Our Stores</Title>
                        <div className="flex flex-col gap-4">
                            <CustomLink>Normal</CustomLink>
                            <CustomLink>Shop with Sidebar</CustomLink>
                            <CustomLink>Shop with Category</CustomLink>
                            <CustomLink>Shop Filters Top Bar</CustomLink>
                            <CustomLink>Shop Wide</CustomLink>
                            <CustomLink>My Account</CustomLink>
                        </div>
                    </div>
                    <div>
                        <Title level={5}>Useful Links</Title>
                        <div className="flex flex-col gap-4">
                            <CustomLink>Normal</CustomLink>
                            <CustomLink>Shop with Sidebar</CustomLink>
                            <CustomLink>Shop with Category</CustomLink>
                            <CustomLink>Shop Filters Top Bar</CustomLink>
                            <CustomLink>Shop Wide</CustomLink>
                            <CustomLink>My Account</CustomLink>
                        </div>
                    </div>
                    <div>
                        <Title level={5}>Our Blog</Title>
                        <div className="flex flex-col gap-4">
                            <CustomLink>Normal</CustomLink>
                            <CustomLink>Shop with Sidebar</CustomLink>
                            <CustomLink>Shop with Category</CustomLink>
                            <CustomLink>Shop Filters Top Bar</CustomLink>
                            <CustomLink>Shop Wide</CustomLink>
                            <CustomLink>My Account</CustomLink>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}