"use client";

import { useState, useRef, useEffect } from "react";

import Link from "next/link";

const languages = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "kk", label: "Қазақша" },
];

const currentLang = "ru";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-20 bg-white flex items-center shrink-0">
      <div className="container">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 text-blue-600">
            <svg className="size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215.2 173.7" fill="currentColor">
              <path d="M86.3 173.6c22 0 44-.1 66 .1 7.3.1 13.3-2.4 18.2-7.7 13.8-15.1 27.8-30.1 41.3-45.5 2.1-2.5 3.4-7.1 2.8-10.3-1.3-7.6-8.9-9.5-14.2-3.9-10.3 10.9-20.4 21.9-30.4 33.1-4.1 4.6-8.7 6.6-14.9 6.6-31.7-.1-63.3-.4-95 .1-15.1.2-21.3-10-21.2-21.4.1-15.7.1-31.3 0-47-.1-13.5 7.3-22.4 22-22.2 32.2.6 64.3.1 96.5.3 4.4 0 7.5-1.3 10.4-4.6 10.2-11.4 20.6-22.7 31-34 2.9-3.2 4.3-6.6 2.9-10.9-1.4-4.1-4-6.3-8.5-6.3-37.3 0-74.7-.2-112 .3-4.4 0-9.7 2.3-12.9 5.3-20.7 19-41.1 38.5-61.5 57.9C2.4 67.7.1 73 .1 79.2c0 24.8-.1 49.7 0 74.5.1 12.3 8.3 20 20.7 20 21.8-.1 43.7-.1 65.5-.1z" />
              <path d="M115.8 114.4c12 0 24-.1 36 0 7.8 0 14.1-2.6 19.4-8.5 13.1-14.6 26.6-28.9 39.7-43.6 2.2-2.4 4-6 4.3-9.1.4-3.9-2-7.4-6.1-8.8-3.8-1.3-6.7.5-9.3 3.2-9.9 10.8-19.9 21.6-29.6 32.5-4.3 4.8-9.4 7-15.8 7-25.5-.1-51-.1-76.5 0-7.5 0-10.8 3.4-10.8 11v5c.1 7.8 3.3 11.2 11.3 11.3 12.4.1 24.9 0 37.4 0z" />
            </svg>
            <span className="font-bold text-xl uppercase">ekitap</span>
          </Link>

          <nav className="ml-10 mr-6 pl-10 border-l border-zinc-200">
            <ul className="flex gap-2">
              <li>
                <Link href="#" className="text-sm h-8 px-2 flex items-center rounded-md transition border border-transparent hover:border-zinc-200 hover:text-blue-600 aria-[current=page]:border-zinc-200 active:bg-zinc-100 focus:border-zinc-300">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm h-8 px-2 flex items-center rounded-md transition border border-transparent hover:border-zinc-200 hover:text-blue-600 aria-[current=page]:border-zinc-200 active:bg-zinc-100 focus:border-zinc-300">
                  Контакты
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm h-8 px-2 flex items-center rounded-md transition border border-transparent hover:border-zinc-200 hover:text-blue-600 aria-[current=page]:border-zinc-200 active:bg-zinc-100 focus:border-zinc-300">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm h-8 px-2 flex items-center rounded-md transition border border-transparent hover:border-zinc-200 hover:text-blue-600 aria-[current=page]:border-zinc-200 active:bg-zinc-100 focus:border-zinc-300">
                  Отзывы
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-x-2 ml-auto">
            <button type="button" className="cursor-pointer size-10 text-xl flex items-center justify-center shrink-0 rounded-full transition border border-transparent hover:border-zinc-200 active:bg-zinc-100 focus:border-zinc-300 relative">
              <i className="ri-notification-3-line"></i>
              <span className="absolute right-3 top-3 size-1 rounded-full bg-red-500 ring-2 ring-zinc-50"></span>
            </button>

            <div className="relative" ref={dropdownRef}>
              <button type="button" onClick={() => setIsOpen(!isOpen)} className="cursor-pointer size-10 text-xl flex items-center justify-center shrink-0 rounded-full transition border border-transparent hover:border-zinc-200 active:bg-zinc-100 focus:border-zinc-300 relative">
                <i className="ri-earth-line"></i>
                <div className="absolute -top-1 -right-1.5 uppercase text-xs text-white bg-blue-400 px-1 pt-1 pb-0.5 rounded-md rounded-bl-none leading-none">RU</div>
              </button>

              {isOpen && (
                <div className="dropdown-menu dropdown-center absolute top-full mt-2 bg-white border border-zinc-200 p-1 rounded-md text-sm z-50">
                  <ul>
                    {languages.map(({ code, label }) => (
                      <li key={code}>
                        <a href={code} className="block px-5 text-center py-2 rounded-md transition hover:bg-blue-50 aria-[current=true]:bg-blue-50" aria-current={currentLang === code ? "true" : undefined}>
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="relative ml-4">
              <button type="button" className="cursor-pointer">
                <div className="flex items-center gap-x-2">
                  <div className="size-10 rounded-lg flex items-center justify-center shrink-0 bg-sky-500 border border-sky-600">
                    <span className="text-zinc-50 font-medium text-sm tracking-wider">ХД</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="text-sm font-medium">Хасенов Диас</div>
                    <div className="text-xs text-zinc-500">Ученик</div>
                  </div>
                  <i className="text-lg text-zinc-500 ri-arrow-down-s-line"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
