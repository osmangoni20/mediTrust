import Link from "next/link";
import React from "react";


const Footer = () => {
  return (
 
  <footer className="px-10 lg:grid sm:grid-cols-1 md:flex md:flex-wrap md:justify-between 
  lg:grid-cols-5    p-6 bg-[#514F4D] text-white">
      {/* Company Info */}
      <nav className="mb-6 lg:mb-0 md:min-w-full ">
        <h6 className="uppercase text-[#FFFFF4] font-montserrat font-semibold">
          Medi Trust
        </h6>
        <p>Medi Trust Bangladesh Limited. Providing reliable Medical Service since 2023</p>
        <ul className="md:mt-4 text-gray-200">
        <li className="flex items-center gap-2 mb-2">
            <p className="text-sm font-bold font-montserrat">Address: </p>
            <p className="text-sm lg:text-base text-gray-200">
              House 10, Road 12, Academy Road, Feni Sodor, Chittagong,
              Bangladesh
            </p>
          </li>
          <li className="flex items-center justify-start gap-2">
           <p className="text-sm font-bold font-montserrat">Hotline:</p>

            <p className="text-sm lg:text-base text-gray-200">7722</p>
          </li>
          <li className="flex items-center  gap-2 mb-2">
            <p className="text-sm font-bold font-montserrat">Phone: </p>

            <p className="text-sm lg:text-base text-gray-200">+8801878473789</p>
          </li>
          <li className="flex items-center justify-start gap-2">
           <p className="text-sm font-bold font-montserrat">Email:</p>

            <p className="text-sm lg:text-base text-gray-300">meditrust@gmail.com</p>
          </li>
          
        </ul>
      </nav>
      {/* SErvice */}
      <nav className="mb-6 lg:mb-0 lg:mx-auto text-gray-200">
      <h6 className="footer-title text-white">Service</h6>
      <Link href="/doctor" className="link link-hover block mb-2">
            Doctor
          </Link>
          <Link href="/medicine" className="link link-hover block mb-2">
           Medicine
          </Link>
          <Link href="/ambulance" className="link link-hover block mb-2">
           Ambulance
          </Link>
          <Link href="/blood" className="link link-hover block mb-2">
           Find Blood
          </Link>
         </nav>
      {/* Company Links */}
      <nav className="mb-6 lg:mb-0 lg:mx-auto text-gray-200">
        <h6 className="footer-title text-white">Company</h6>
        <Link href="/about" className="link link-hover block mb-2">
          About Us
        </Link>
        <Link href="/contact" className="link link-hover block mb-2">
          Contact
        </Link>
        <Link href="/privacy_policy" className="link link-hover block mb-2">
          Privacy Policy
        </Link>
        <Link href="/cookie_policy" className="link link-hover block mb-2">
          Cookie Policy
        </Link>
        <Link href="/terms_condition" className="link link-hover block mb-2">
          Terms & Conditions
        </Link>
      </nav>

      {/* Help Links */}
      <nav className="mb-6 lg:mb-0 lg:mx-auto text-gray-200">
        <h6 className="footer-title text-white">Help</h6>
        <Link href="/payment_service" className="link link-hover block mb-2">
          Payment
        </Link>
        <Link href="/shipping_service" className="link link-hover block mb-2">
          Shipping
        </Link>
        <Link href="/return_replacement" className="link link-hover block mb-2">
          Return and Replacement
        </Link>
        <Link href="/contact" className="link link-hover block mb-2">
          Chat With Us
        </Link>
      </nav>

      {/* Social Links */}
      <nav className="mb-6 lg:mb-0 lg:mx-auto text-gray-200">
        <h6 className="footer-title text-white">Social</h6>
        <Link
          target="_blank"
          href="https://facebook.com"
          className="link link-hover block mb-2"
        >
          Facebook
        </Link>
        <Link
          target="_blank"
          href="https://linkedin.com"
          className="link link-hover block mb-2"
        >
          LinkedIn
        </Link>
        <Link
          target="_blank"
          href="https://youtube.com"
          className="link link-hover block mb-2"
        >
          YouTube
        </Link>
        <Link
          target="_blank"
          href="https://instagram.com"
          className="link link-hover block mb-2"
        >
          Instagram
        </Link>
        <Link
          target="_blank"
          href="https://twitter.com"
          className="link link-hover block mb-2"
        >
          Twitter
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
