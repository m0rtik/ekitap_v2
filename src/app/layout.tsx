"use client";

import { useState, useEffect, useRef } from "react";
import Head from "next/head";

import "./globals.css";

import "remixicon/fonts/remixicon.css";

import Header from "@/components/header";
import Subheader from "@/components/subheader";
import Footer from "@/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const metaViewport = document.querySelector("meta[name='viewport']");
    if (metaViewport) {
      metaViewport.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0");
    } else {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0";
      document.head.appendChild(meta);
    }
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  // Закрываем меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <html lang="ru">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </Head>
      <body className={`${isMenuOpen && "overflow-hidden"}`}>
        <div className="wrapper">
          <Header toggleMenu={toggleMenu} />

          <main>
            <div ref={menuRef}>
              <Subheader toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            </div>
            {children}
          </main>

          <Footer />

          <div className={`hidden max-lg:block fixed inset-0 bg-black/50 transition duration-500 ${!isMenuOpen && "invisible opacity-0"}`}></div>
        </div>
      </body>
    </html>
  );
}
