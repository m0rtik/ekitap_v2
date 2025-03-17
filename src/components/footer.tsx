import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 py-6 text-zinc-200 mt-auto">
      <div className="container">
        <div className="grid grid-cols-5 max-lg:grid-cols-3 gap-6 py-6">
          <div className="flex flex-col space-y-3 col-span-2 max-lg:col-span-full">
            <Link href="#" className="flex items-center space-x-2 text-zinc-50">
              <svg className="size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215.2 173.7" fill="currentColor">
                <path d="M86.3 173.6c22 0 44-.1 66 .1 7.3.1 13.3-2.4 18.2-7.7 13.8-15.1 27.8-30.1 41.3-45.5 2.1-2.5 3.4-7.1 2.8-10.3-1.3-7.6-8.9-9.5-14.2-3.9-10.3 10.9-20.4 21.9-30.4 33.1-4.1 4.6-8.7 6.6-14.9 6.6-31.7-.1-63.3-.4-95 .1-15.1.2-21.3-10-21.2-21.4.1-15.7.1-31.3 0-47-.1-13.5 7.3-22.4 22-22.2 32.2.6 64.3.1 96.5.3 4.4 0 7.5-1.3 10.4-4.6 10.2-11.4 20.6-22.7 31-34 2.9-3.2 4.3-6.6 2.9-10.9-1.4-4.1-4-6.3-8.5-6.3-37.3 0-74.7-.2-112 .3-4.4 0-9.7 2.3-12.9 5.3-20.7 19-41.1 38.5-61.5 57.9C2.4 67.7.1 73 .1 79.2c0 24.8-.1 49.7 0 74.5.1 12.3 8.3 20 20.7 20 21.8-.1 43.7-.1 65.5-.1z" />
                <path d="M115.8 114.4c12 0 24-.1 36 0 7.8 0 14.1-2.6 19.4-8.5 13.1-14.6 26.6-28.9 39.7-43.6 2.2-2.4 4-6 4.3-9.1.4-3.9-2-7.4-6.1-8.8-3.8-1.3-6.7.5-9.3 3.2-9.9 10.8-19.9 21.6-29.6 32.5-4.3 4.8-9.4 7-15.8 7-25.5-.1-51-.1-76.5 0-7.5 0-10.8 3.4-10.8 11v5c.1 7.8 3.3 11.2 11.3 11.3 12.4.1 24.9 0 37.4 0z" />
              </svg>
              <span className="font-bold text-xl uppercase">ekitap</span>
            </Link>

            <div className="pr-20 text-zinc-400 text-sm h-full">Ekitap.kz – Платформа, которая делает обучение доступным и увлекательным для всех. Присоединяйтесь к нашему сообществу и откройте новые горизонты знаний вместе с нами!</div>
          </div>

          <div className="flex flex-col max-sm:col-span-full">
            <div className="font-semibold mb-4">О компании</div>
            <ul className="text-sm flex flex-col space-y-3 [&_a]:text-zinc-400 [&_a]:transition [&_a:hover]:text-blue-500">
              <li>
                <Link href="#">О Нас</Link>
              </li>
              <li>
                <Link href="#">Контакты</Link>
              </li>
              <li>
                <Link href="#">Условия использования</Link>
              </li>
              <li>
                <Link href="#">Отзывы</Link>
              </li>
              <li>
                <Link href="#">Вопросы и ответы</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col col-span-2 max-sm:col-span-full">
            <div className="font-semibold mb-4">Служба технической поддержки</div>
            <form className="grid grid-cols-2 max-sm:grid-cols-1 gap-2">
              <input type="text" placeholder="Ваше имя" className="px-4 h-12 w-full bg-zinc-800 rounded-lg outline-none" required />
              <input type="email" placeholder="Ваш email" className="px-4 h-12 w-full bg-zinc-800 rounded-lg outline-none" required />
              <div className="col-span-full relative">
                <textarea className="resize-none h-full w-full p-4 bg-zinc-800 rounded-lg outline-none" placeholder="Ваше сообщение" rows={3} required></textarea>
                <button type="button" className="text-xl cursor-pointer size-12 flex items-center justify-center shrink-0 outline-none rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 absolute right-2 bottom-2 transition hover:brightness-125">
                  <i className="ri-send-plane-fill"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex border-t border-zinc-800 pt-6">© Copyright 2025 ekitap.kz</div>
      </div>
    </footer>
  );
}
