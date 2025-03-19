"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Head from "next/head";

import "./globals.css";

import "remixicon/fonts/remixicon.css";

import Header from "@/components/header";
import Subheader from "@/components/subheader";
import Footer from "@/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLessonPage = pathname.startsWith("/lesson"); // Проверяем, это ли страница уроков
  const isCustomLessonPage = pathname.startsWith("/customlesson"); // Проверяем, это ли страница уроков

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

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
          {!isLessonPage && !isCustomLessonPage && <Header toggleMenu={toggleMenu} />}

          <main className={`flex-1 ${isLessonPage ? "min-h-screen bg-gray-50" : ""}`}>
            {!isLessonPage && !isCustomLessonPage && (
              <div ref={menuRef}>
                <Subheader toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
              </div>
            )}
            {children}
          </main>

          {!isLessonPage && !isCustomLessonPage && <Footer />}

          {!isLessonPage && !isCustomLessonPage && <div className={`hidden max-lg:block fixed inset-0 bg-black/50 transition duration-500 ${!isMenuOpen && "invisible opacity-0"}`}></div>}
        </div>
      </body>
    </html>
  );
}
