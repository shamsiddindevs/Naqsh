import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center px-8">
        {/* Logo and Address */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <img
            src="/src/assets/img/logo.webp"
            alt="MICASA Logo"
            className=" w-20 mx-auto md:mx-0 mb-4"
          />
          <p className="text-gray-800">MICASA</p>
          <p className="text-sm text-gray-500">Design & Architecture</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 justify-center items-center  text-gray-500 font-semibold">
          {/* Address and Contact Information */}
          <div className="flex flex-col  gap-3 md:gap-5  text-center md:text-left">
            <div>
              <p>Al Barsha 1</p>
              <p>Rania Business Tower</p>
              <p>405 Dubai UAE</p>
            </div>
            <div>
              <p>Taras Shevchenko str 32</p>
              <p>Tashkent, Uzbekistan</p>
              <p>100015</p>
            </div>
            <div>
              <p>Лётная улица 99 стр. 1 "Loft River"</p>
              <p>Москва, Россия</p>
              <p>125424</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col  gap-3 md:gap-5   text-center md:text-left">
            <div>
              <p>Contact UAE</p>
              <p className="text-gray-800">+971 58 6891771</p>
              <p className="text-gray-800">info@micasa-design.com</p>
            </div>
            <div>
              <p>Contact UZB</p>
              <p className="text-gray-800">+998 95 4755000</p>
              <p className="text-gray-800">info@micasa-design.com</p>
            </div>
            <div>
              <p>Contact RU</p>
              <p className="text-gray-800">+7 909 9400097</p>
              <p className="text-gray-800">info@micasa-design.ru</p>
            </div>
          </div>
        </div>

        <div className="last text-md">
          {/* Social Media Icons */}
          <div className="flex justify-center mt-8 space-x-4">
            <a
              href="#"
              className="text-gray-600  hover:text-gray-900">
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900">
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900">
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900">
              <FaBehance />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900">
              <FaTelegram />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900">
              <FaWhatsapp />
            </a>
          </div>
          {/* Copyright */}
          <div className="text-center text-gray-500  mt-6">
            © 2024 MICASA - Design & Architecture
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
