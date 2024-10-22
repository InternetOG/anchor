import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import {BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const styles = {color: "#12305b", fontSize: "1.5rem"}
    return(
        // <footer className=''>
        //     <section className='opaqueBackgroundContainer'>
        //         <section className='contourLayer'>
        //             <section className='footerContainer text-white pt-[2.3rem]'>
        //                 <div className='flex justify-center'>
        //                     <img className="w-[6rem]" src="/src/assets/home/sleepstiqq.png" alt="" />
        //                 </div>
        //                 <section className='grid grid-cols-[.5fr_1fr] mt-10 '>
        //                     <section className='flex justify-around '>
        //                         <div>
        //                             <div>
        //                                 <h3 className='font-semibold'>COMPANY</h3>
        //                                 <ul className='grid gap-[.5rem] mt-[1rem] text-[#ABABAB]'>
        //                                     <li><Link>About</Link></li>
        //                                     <li><Link>Blog</Link></li>
        //                                     <li><Link>Contact</Link></li>
        //                                     <li><Link>Jobs</Link></li>
        //                                 </ul>
        //                             </div>
        //                         </div>

        //                         <div>
        //                             <h3 className='font-semibold'>CONTACT</h3>
        //                             <ul className='grid gap-[.5rem] mt-[1rem]'>
        //                                 <li className='text-[#ABABAB]'>Phone</li>
        //                                 <li>+234 708 507 3128</li>
        //                                 <li className='text-[#ABABAB]'>Address</li>
        //                                 <li>16, Ogindipe Close, Upston  Close</li>
        //                             </ul>
        //                         </div>
        //                     </section>
                            

        //                     <section className='flex justify-around'>
        //                         <div className='max-w-[25rem]'>
        //                             <h3 className='font-semibold'>CONSUMER ADVISORY</h3>
        //                             <ul className='grid gap-[.5rem] mt-[1rem]'>
        //                                 <li className='text-left'>
        //                                     These statements have not been evaluated by the Food 
        //                                     and Drug Administration. This product is not intended 
        //                                     to diagnose, treat, cure, or prevent any disease. 
        //                                     This product should be used only as directed on the label. 
        //                                     All trademarks and copyrights are property of their 
        //                                     respective owners and not affiliated with nor do 
        //                                     they endorse this product. Results may vary.
        //                                 </li>
        //                                 <li className='mt-1'>
        //                                         By using our website or product, 
        //                                         you agree to follow our <br/> <span className='text-[#8FE2FF]'>terms of service</span>.
        //                                 </li>
        //                             </ul>
        //                         </div>

        //                         <div>
        //                             <h3 className='font-semibold'>GET IN TOUCH</h3>
        //                             <ul className='grid gap-[1.5rem] mt-[1rem] '>
        //                                 <li className='text-[#ABABAB]'>Feel free to get in touch with us vai email</li>
        //                                 <li className='text-xl font-bold'>hello@sleepstiq.com</li>
        //                                 <li>
        //                                     <ul className='flex gap-4'>
        //                                         <li className="border border-solid border-transparent rounded-full bg-[#8FE2FF] p-1"><a  href="https://www/facebook.com"><BiLogoFacebook style={styles} /></a></li>
        //                                         <li className="border border-solid border-transparent rounded-full bg-[#8fe2ff] p-1"><a href="https://www/twitter.com"><FaTwitter style={styles} /></a></li>
        //                                         <li className="border border-solid border-transparent rounded-full bg-[#8FE2FF] p-1"><a href="https://www/google.com"><FaGooglePlusG style={styles} /></a></li>
        //                                         <li className="border border-solid border-transparent rounded-full bg-[#8FE2FF] p-1"><a href="https://www/linkedin.com"><FaLinkedinIn style={styles} /></a></li>
        //                                     </ul>
        //                                 </li>
        //                                 <li className='text-xs text-[#ABABAB]'>© 2020@sleepstiq. All Rights Reserved.</li>
        //                             </ul>
        //                         </div>
        //                     </section>
        //                 </section>
        //             </section>
        //         </section>
        //     </section>
        // </footer>

        <footer className='py-[2.3rem] px-[2.3rem] text-[#FFFFFF]'>
            <section className='flex justify-center mb-[2.3rem]'>
                <img className="w-[6rem]" src="/src/assets/home/sleepstiqq.png" alt="" />
            </section>
            <section className='flex justify-around custom-footer:gap-2'>
                <section className='flex gap-[4rem] custom-footer:grid'>
                    <section>
                        <div>
                            <h3 className='font-semibold'>COMPANY</h3>
                            <ul className='grid gap-[.5rem] mt-[1rem] text-[#ABABAB]'>
                                <li><Link>About</Link></li>
                                <li><Link>Blog</Link></li>
                                <li><Link>Contact</Link></li>
                                <li><Link>Jobs</Link></li>
                            </ul>
                        </div>
                    </section>

                    <section className='flex'>
                        <div>
                            <h3 className='font-semibold'>CONTACT</h3>
                            <ul className='grid gap-[.5rem] mt-[1rem]'>
                                <li className='text-[#ABABAB]'>Phone</li>
                                <li>+234 708 507 3128</li>
                                <li className='text-[#ABABAB]'>Address</li>
                                <li>16, Ogindipe Close, Upston  Close</li>
                            </ul>
                        </div>
                    </section>
                </section>

                <section className='flex gap-[4rem] custom-footerMini:grid'>
                    <section>
                        <div className='max-w-[25rem]'>
                            <h3 className='font-semibold'>CONSUMER ADVISORY</h3>
                            <ul className='grid  mt-[1rem]'>
                                <li className='text-left'>
                                    These statements have not been evaluated by the Food 
                                    and Drug Administration. This product is not intended 
                                    to diagnose, treat, cure, or prevent any disease. 
                                    This product should be used only as directed on the label. 
                                    All trademarks and copyrights are property of their 
                                    respective owners and not affiliated with nor do 
                                    they endorse this product. Results may vary.
                                </li>
                                <li className='mt-3'>
                                        By using our website or product, 
                                        you agree to follow our <span className='text-[#8FE2FF]'>terms of service</span>.
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className='custom-footer:flex custom-footer:justify-items-start '>
                        <div className='custom-footer:justify-items-start'>
                            <h3 className='font-semibold'>GET IN TOUCH</h3>
                            <ul className='grid gap-[1.5rem] mt-[1rem] '>
                                <li className='text-[#ABABAB]'>Feel free to get in touch with us vai email</li>
                                <li className='text-xl font-bold'>hello@sleepstiq.com</li>
                                <li>
                                    <ul className='flex gap-4'>
                                        <li className="border border-solid border-transparent rounded-full bg-[#8FE2FF] p-1"><a  href="https://www/facebook.com"><BiLogoFacebook style={styles} /></a></li>
                                        <li className="border border-solid border-transparent rounded-full bg-[#8FE2FF] p-1"><a  href="https://www/twitter.com"><FaTwitter style={styles} /></a></li>
                                        <li className="border border-solid border-transparent rounded-full bg-[#8FE2FF] p-1"><a href="https://www/google.com"><FaGooglePlusG style={styles} /></a></li>
                                        <li className="border border-solid border-transparent rounded-full bg-[#8FE2FF] p-1"><a href="https://www/linkedin.com"><FaLinkedinIn style={styles} /></a></li>
                                    </ul>
                                </li>
                                <li className='text-xs text-[#ABABAB]'>© 2020@sleepstiq. All Rights Reserved.</li>
                            </ul>
                        </div>
                    </section>
                </section>
            </section>

        </footer>
    )
}

export default Footer