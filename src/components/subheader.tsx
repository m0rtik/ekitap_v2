"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation"; // Если Next.js 13+ (app router)

import Dropdown from "@/components/Dropdown";

const languages = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "kk", label: "Қазақша" },
];

const currentLang = "ru";

const menuItems = [
  { title: "Главная", href: "/" },
  { title: "Моё обучение", href: "/learn" },
  { title: "Каталог", href: "/catalog", badge: 27 },
  { title: "Рекомендовано МОН", href: "/recomended" },
  { title: "Закладки", href: "/favorites", badge: 3 },
];

interface SubheaderProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export default function Subheader({ toggleMenu, isMenuOpen }: SubheaderProps) {
  const pathname = usePathname(); // Получаем текущий путь
  const [active, setActive] = useState(pathname);
  const [isIndicatorReady, setIsIndicatorReady] = useState(false);
  const indicatorRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setActive(pathname); // Обновляем active при смене маршрута
  }, [pathname]);

  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = document.querySelector('.sub-menu a[aria-current="page"]');
      if (!activeEl || !indicatorRef.current) return;

      const { left, width } = activeEl.getBoundingClientRect();
      const menuLeft = document.querySelector(".sub-menu")?.getBoundingClientRect().left || 0;
      const badgeEl = activeEl.querySelector(".badge");
      const badgeWidth = badgeEl ? badgeEl.getBoundingClientRect().width : 0;

      setTimeout(() => {
        Object.assign(indicatorRef.current!.style, {
          left: `${left - menuLeft + width / 2 - 16 - badgeWidth / 2 - 4}px`,
          width: `${Math.min(width, 32)}px`,
          opacity: "1",
        });
      }, 50);

      setIsIndicatorReady(true);
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [active]);

  return (
    <div className={`flex max-lg:flex-col items-center max-lg:items-start bg-zinc-100 max-lg:bg-white max-lg:border-r max-lg:border-zinc-200 max-lg:fixed max-lg:inset-0 max-lg:max-w-96 max-sm:max-w-full max-lg:z-50 max-lg:transition ${isMenuOpen ? "" : "max-lg:-translate-x-full"}`}>
      <div className="hidden h-20 w-full max-lg:flex items-center shrink-0 border-b border-zinc-200">
        <div className="container">
          <div className="flex items-center justify-between">
            <button type="button" onClick={toggleMenu} className="hidden mr-4 cursor-pointer size-10 max-lg:flex items-center justify-center shrink-0 rounded-full transition border border-zinc-200 active:bg-zinc-100 focus:border-zinc-300">
              <i className="text-xl ri-close-line"></i>
            </button>

            <Dropdown
              renderDropdown={({ isOpen, setIsOpen }) => (
                <>
                  <div className="relative">
                    <button type="button" onClick={() => setIsOpen(!isOpen)} className="cursor-pointer size-10 text-xl flex items-center justify-center shrink-0 rounded-full transition border border-transparent hover:border-zinc-200 active:bg-zinc-100 focus:border-zinc-300 relative">
                      <i className="ri-earth-line"></i>
                      <div className="absolute -top-1 -right-1.5 uppercase text-xs text-white bg-blue-400 px-1 pt-1 pb-0.5 rounded-md rounded-bl-none leading-none">RU</div>
                    </button>
                    {isOpen && (
                      <div className="dropdown-menu dropdown-right absolute top-full mt-2 bg-white border border-zinc-200 p-1 rounded-md text-sm z-50">
                        <ul>
                          {languages.map(({ code, label }) => (
                            <li key={code}>
                              <Link href={code} className="block px-5 text-center py-2 rounded-md transition hover:bg-blue-50 aria-[current=true]:bg-blue-50" aria-current={currentLang === code ? "true" : undefined}>
                                {label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </>
              )}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full overflow-y-auto">
        <div className="container">
          <ul className="sub-menu flex max-lg:flex-col gap-2 text-sm font-medium relative max-lg:w-full max-lg:py-2.5">
            <li
              ref={indicatorRef}
              className="current-page h-0.5 w-6 absolute bg-zinc-950 bottom-0 transition-all max-lg:hidden"
              style={{
                opacity: isIndicatorReady ? 1 : 0,
                visibility: isIndicatorReady ? "visible" : "hidden",
              }}
            ></li>
            {menuItems.map(({ title, href, badge }) => (
              <li key={href}>
                <Link href={href} className={`h-14 max-lg:h-10 px-2 max-lg:px-0 flex items-center justify-center max-lg:justify-normal transition ${active === href ? "text-zinc-950" : "text-zinc-500 hover:text-blue-600"}`} aria-current={active === href ? "page" : undefined}>
                  {title}
                  {badge && <span className="badge text-xs font-medium ml-2 text-zinc-950 h-5 px-1.5 rounded bg-zinc-200 flex items-center justify-center">{badge}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden max-lg:block container border-t border-zinc-200">
          <ul className="flex flex-col gap-2 text-sm font-medium w-full py-2.5">
            <li>
              <a href="#" className="h-10 flex items-center w-full">
                О нас
              </a>
            </li>
            <li>
              <a href="#" className="h-10 flex items-center w-full">
                Контакты
              </a>
            </li>
            <li>
              <a href="#" className="h-10 flex items-center w-full">
                Условия использования
              </a>
            </li>
            <li>
              <a href="#" className="h-10 flex items-center w-full">
                Отзывы
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
