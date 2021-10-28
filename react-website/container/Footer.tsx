import { IconButton } from "@mui/material";
import Router from "next/router";
import React from "react";
import Img from "../components/Img";

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer p-2 container">
                <div className="col-12 py-5 row footer footer_container d-flex justify-content-between">
                    <div className="col-md-4 footer__part1">
                        <div className="logo">
                            <Img
                                src="/logo_footer.png"
                                style={{
                                    height: "auto",
                                    width: "100%",
                                }}
                                height="auto"
                                width="100%"
                                alt="SpicyDeli"
                                loading="lazy"
                            />
                            <br />
                            <br />
                        </div>
                        <p className="description">
                            Wood fired Neapolitan pizzas prepared with the purest respect for traditions, fresh hand-made pasta (do not miss our pasta
                            with the truffles) and over a hundred different wines from the most renowned winemakers.
                            <br />
                            Ah, and one last trick: delicious Italian Gelato for dessert!
                        </p>
                    </div>
                    <div className="col-md-4 footer__part2 px-5">
                        <h3 className="title">We are on Instagram</h3>
                        <div className="line__1"></div>
                        <div className="line__2"></div>
                        <div className="grid_list col-12 row m-0 mt-5 mb-4">
                            <div className="col-4 p-2">
                                <Img src="/images/pizza.jpg" className="object-fit-cover" height="100%" width="100%" loading="lazy" />
                            </div>
                            <div className="col-4 p-2">
                                <Img src="/images/banana_bread.jpg" className="object-fit-cover" height="100%" width="100%" loading="lazy" />
                            </div>
                            <div className="col-4 p-2">
                                <Img src="/images/burger.jpg" className="object-fit-cover" height="100%" width="100%" loading="lazy" />
                            </div>
                            <div className="col-4 p-2">
                                <Img src="/images/chicken_leg.jpg" className="object-fit-cover" height="100%" width="100%" loading="lazy" />
                            </div>
                            <div className="col-4 p-2">
                                <Img src="/images/egg.jpg" className="object-fit-cover" height="100%" width="100%" loading="lazy" />
                            </div>
                            <div className="col-4 p-2">
                                <Img src="/images/prawns.jpg" className="object-fit-cover" height="100%" width="100%" loading="lazy" />
                            </div>
                        </div>
                        <h4 className="follow__us position-relative">
                            <img style={{ marginRight: "10px" }} src="/app-icons/instagram.png" height="18px" width="18px" />
                            <span className="ml-2">Follow Us</span>
                        </h4>
                        <div className="my-5">
                            <span>CopyRight </span>
                            <span className="copy_right_text">© 2021. All Rights Reserved.</span>
                        </div>
                    </div>
                    <div className="col-md-4 footer__part3">
                        <h3 className="title">Get In Touch</h3>
                        <div className="line__1"></div>
                        <div className="line__2"></div>
                        <p className="primary_text py-5 pb-3">Stay Tuned with Our Updates!</p>
                        <div className="social_media_icons">
                            <span className="px-2">
                                <IconButton className="icon_bg">
                                    <img className="social_icon" src="/app-icons/facebook.png" height="14px" width="14px" />
                                </IconButton>
                            </span>
                            <span className="px-2">
                                <IconButton className="icon_bg">
                                    <img className="social_icon" src="/app-icons/twitter.png" height="14px" width="14px" />
                                </IconButton>
                            </span>
                            <span className="px-2">
                                <IconButton className="icon_bg">
                                    <img className="social_icon" src="/app-icons/instagram.png" height="14px" width="14px" />
                                </IconButton>
                            </span>
                            {/* <span className="px-2">
                                <IconButton className="icon_bg">
                                    <img className="social_icon" src="/app-icons/youtube.png" height="14px" width="14px" />
                                </IconButton>
                            </span> */}
                            <span className="px-2">
                                <IconButton className="icon_bg">
                                    <img className="social_icon" src="/app-icons/pinterest.png" height="14px" width="14px" />
                                </IconButton>
                            </span>
                        </div>
                        <div className="my-3">
                            <input className="email_input" type="email" name="email" id="email" placeholder="example@gmail.com" />
                            <button className="btn btn-link primary_text">
                                <h3 className="primary_text text-underline">Subscribe</h3>
                            </button>
                        </div>
                        <div className=" d-flex">
                            <span>
                                <input name="policy_check" type="checkbox" id="footer-policy" />
                            </span>
                            <span>
                                <label className="pl-2" htmlFor="footer-policy">
                                    <span  className="primary_text">I have read and agree to the</span> <b>Privacy Policy</b>
                                </label>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .active{
                    font-weight: bold;
                    font-size: 28px;
                }
            `}</style>
        </React.Fragment>
    );
};

export default Footer;
