import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[rgb(32,32,148)] text-white py-8">
      <div className="container mx-auto text-center">
        {/* Logo Section */}
        <div className="mb-4">
          <a href="#">
            <img
              src="https://settyl.com/wp-content/uploads/2022/04/settyl.logo_.svg"
              alt="Settyl Logo"
              className="mx-auto h-10"
            />
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-white hover:text-gray-300">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaLinkedinIn size={24} />
          </a>
        </div>

        {/* Footer Links */}
        <div className="mb-4">
          <a href="#" className="text-white hover:underline mx-2">
            Home
          </a>
          <a href="#" className="text-white hover:underline mx-2">
            About
          </a>
          <a href="#" className="text-white hover:underline mx-2">
            Services
          </a>
          <a href="#" className="text-white hover:underline mx-2">
            Contact
          </a>
        </div>

        {/* Copyright Section */}
        <p className="text-sm text-gray-300">
          © 2024 Settyl. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
