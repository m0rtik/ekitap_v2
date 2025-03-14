"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation"; // Если Next.js 13+ (app router)

const menuItems = [
  { title: "Главная", href: "/" },
  { title: "Моё обучение", href: "/learn" },
  { title: "Каталог", href: "/catalog", badge: 27 },
  { title: "Рекомендовано МОН", href: "/recomended" },
  { title: "Закладки", href: "/favorites", badge: 3 },
];

export default function Subheader() {
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
    <div className="flex items-center bg-zinc-100">
      <div className="container">
        <ul className="sub-menu flex gap-2 text-sm font-medium relative">
          <li
            ref={indicatorRef}
            className="current-page h-0.5 w-6 absolute bg-zinc-950 bottom-0 transition-all"
            style={{
              opacity: isIndicatorReady ? 1 : 0,
              visibility: isIndicatorReady ? "visible" : "hidden",
            }}
          ></li>
          {menuItems.map(({ title, href, badge }) => (
            <li key={href}>
              <Link href={href} className={`h-14 px-2 flex items-center justify-center transition ${active === href ? "text-zinc-950" : "text-zinc-500 hover:text-blue-600"}`} aria-current={active === href ? "page" : undefined}>
                {title}
                {badge && <span className="badge text-xs font-medium ml-2 text-zinc-950 h-5 px-1.5 rounded bg-zinc-200 flex items-center justify-center">{badge}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
