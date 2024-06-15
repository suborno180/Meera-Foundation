"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const goDonate = () => {
    router.push("/donate");
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between h-20 px-8 mx-auto max-w-7xl">
        <div className="relative h-16 w-40">
          <Image
            src="/newlogomeera.png"
            layout="fill"
            objectFit="cover"
            alt="Logo"
          />
        </div>
        <nav className="hidden lg:flex lg:items-center lg:space-x-6">
          <Link href="/" className="text-gray-700 hover:text-green-600 font-semibold">Home</Link>
          <Link href="/ourmission" className="text-gray-700 hover:text-green-600 font-semibold">Our Mission</Link>
          <Link href="/whatwedo" className="text-gray-700 hover:text-green-600 font-semibold">What We Do</Link>
          <Link href="/contactus" className="text-gray-700 hover:text-green-600 font-semibold">Contact Us</Link>
          <button
            className="ml-4 bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-lg transition-transform hover:scale-105"
            onClick={goDonate}
          >
            Donate
          </button>
        </nav>
        <div className="lg:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="text-2xl text-gray-700 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center space-y-6">
          <FontAwesomeIcon
            icon={faClose}
            className="text-3xl text-gray-700 cursor-pointer absolute top-6 right-6"
            onClick={toggleMenu}
          />
          <Link
            href="/"
            className="text-gray-700 hover:text-green-600 text-xl font-semibold"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/ourmission"
            className="text-gray-700 hover:text-green-600 text-xl font-semibold"
            onClick={toggleMenu}
          >
            Our Mission
          </Link>
          <Link
            href="/whatwedo"
            className="text-gray-700 hover:text-green-600 text-xl font-semibold"
            onClick={toggleMenu}
          >
            What We Do
          </Link>
          <Link
            href="/contactus"
            className="text-gray-700 hover:text-green-600 text-xl font-semibold"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          <button
            className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-lg transition-transform hover:scale-105"
            onClick={() => {
              toggleMenu();
              goDonate();
            }}
          >
            Donate
          </button>
        </div>
      )}
    </header>
  );
}