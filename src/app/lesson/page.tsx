"use client";

import { useState, useEffect, useRef, useCallback } from "react";

import Link from "next/link";

import Dropdown from "@/components/Dropdown";

import "@/app/globals.css";

const htmlContent = `<p class="lead">Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.</p> <p>By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you <em>really are</em> just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.</p> <p>We get lots of complaints about it actually, with people regularly asking us things like:</p> <blockquote> <p>Why is Tailwind removing the default styles on my <code>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too?</p> </blockquote> <p>We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a <code>p</code> element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look <em>awesome</em>, not awful.</p> <p>The <code>@tailwindcss/typography</code> plugin is our attempt to give you what you <em>actually</em> want, without any of the downsides of doing something stupid like disabling our base styles.</p> <p>It adds a new <code>prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:</p> <p>For more information about how to use the plugin and the features it includes, <a href="https://github.com/tailwindcss/typography/blob/master/README.md">read the documentation</a>.</p> <hr /> <h2>What to expect from here on out</h2> <p>What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em>and even italics</em>.</p> <p>It's important to cover all of these use cases for a few reasons:</p> <ol> <li>We want everything to look good out of the box.</li> <li>Really just the first reason, that's the whole point of the plugin.</li> <li>Here's a third pretend reason though a list with three items looks more realistic than a list with two items.</li> </ol> <p>Now we're going to try out another header style.</p> <h3>Typography should be easy</h3> <p>So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.</p> <p>Something a wise person once told me about typography is:</p> <blockquote><p>Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.</p></blockquote> <p>It's probably important that images look okay here by default as well:</p> <figure> <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt="" /> <figcaption>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</figcaption> </figure> <p>Now I'm going to show you an example of an unordered list to make sure that looks good, too:</p> <ul> <li>So here is the first item in this list.</li> <li>In this example we're keeping the items short.</li> <li>Later, we'll use longer, more complex list items.</li> </ul> <p>And that's the end of this section.</p> <h2>What if we stack headings?</h2> <h3>We should make sure that looks good, too.</h3> <p>Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be.</p> <h3>When a heading comes after a paragraph …</h3> <p>When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like.</p> <ul> <li> <p><strong>I often do this thing where list items have headings.</strong></p> <p>For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right.</p> <p>I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn't write this way.</p> </li> <li> <p><strong>Since this is a list, I need at least two items.</strong></p> <p>I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic. That's why I've added this second list item so I actually have something to look at when writing the styles.</p> </li> <li> <p><strong>It's not a bad idea to add a third item either.</strong></p> <p>I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it.</p> </li> </ul> <p>After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading.</p> <h2>Code should look okay by default.</h2> <p>I think most people are going to use <a href="https://highlightjs.org/">highlight.js</a> or <a href="https://prismjs.com/">Prism</a> or something if they want to style their code blocks but it wouldn't hurt to make them look <em>okay</em> out of the box, even with no syntax highlighting.</p> <p>Here's what a default <code>tailwind.config.js</code> file looks like at the time of writing:</p> <p>Hopefully that looks good enough to you.</p> <h3>What about nested lists?</h3> <p>Nested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work.</p> <ol> <li> <strong>Nested lists are rarely a good idea.</strong> <ul> <li>You might feel like you are being really "organized" or something but you are just creating a gross shape on the screen that is hard to read.</li> <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li> <li>Nesting tons of folders in your source code is also not helpful.</li> </ul> </li> <li> <strong>Since we need to have more items, here's another one.</strong> <ul> <li>I'm not sure if we'll bother styling more than two levels deep.</li> <li>Two is already too much, three is guaranteed to be a bad idea.</li> <li>If you nest four levels deep you belong in prison.</li> </ul> </li> <li> <strong>Two items isn't really a list, three is good though.</strong> <ul> <li>Again please don't nest lists if you want people to actually read your content.</li> <li>Nobody wants to look at this.</li> <li>I'm upset that we even have to bother styling this.</li> </ul> </li> </ol> <p>The most annoying thing about lists in Markdown is that <code>&lt;li&gt;</code> elements aren't given a child <code>&lt;p&gt;</code> tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too.</p> <ul> <li> <p><strong>For example, here's another nested list.</strong></p> <p>But this time with a second paragraph.</p> <ul> <li>These list items won't have <code>&lt;p&gt;</code> tags</li> <li>Because they are only one line each</li> </ul> </li> <li> <p><strong>But in this second top-level list item, they will.</strong></p> <p>This is especially annoying because of the spacing on this paragraph.</p> <ul> <li> <p>As you can see here, because I've added a second line, this list item now has a <code>&lt;p&gt;</code> tag.</p> <p>This is the second line I'm talking about by the way.</p> </li> <li><p>Finally here's another list item so it's more like a list.</p></li> </ul> </li> <li><p>A closing list item, but with no nested list, because why not?</p></li> </ul> <p>And finally a sentence to close off this section.</p> <h2>There are other elements we need to style</h2> <p>I almost forgot to mention links, like <a href="https://tailwindcss.com">this link to the Tailwind CSS website</a>. We almost made them blue but that's so yesterday, so we went with dark gray, feels edgier.</p> <p>We even included table styles, check it out:</p> <table> <thead> <tr> <th>Wrestler</th> <th>Origin</th> <th>Finisher</th> </tr> </thead> <tbody> <tr> <td>Bret "The Hitman" Hart</td> <td>Calgary, AB</td> <td>Sharpshooter</td> </tr> <tr> <td>Stone Cold Steve Austin</td> <td>Austin, TX</td> <td>Stone Cold Stunner</td> </tr> <tr> <td>Randy Savage</td> <td>Sarasota, FL</td> <td>Elbow Drop</td> </tr> <tr> <td>Vader</td> <td>Boulder, CO</td> <td>Vader Bomb</td> </tr> <tr> <td>Razor Ramon</td> <td>Chuluota, FL</td> <td>Razor's Edge</td> </tr> </tbody> </table> <p>We also need to make sure inline code looks good, like if I wanted to talk about <code>&lt;span&gt;</code> elements or tell you the good news about <code>@tailwindcss/typography</code>.</p> <h3>Sometimes I even use <code>code</code> in headings</h3> <p>Even though it's probably a bad idea, and historically I've had a hard time making it look good. This <em>"wrap the code blocks in backticks"</em> trick works pretty well though really.</p> <p> Another thing I've done in the past is put a <code>code</code> tag inside of a link, like if I wanted to tell you about the <a href="https://github.com/tailwindcss/docs"><code>tailwindcss/docs</code></a> repository. I don't love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it. </p> <h4>We haven't used an <code>h4</code> yet</h4> <p>But now we have. Please don't use <code>h5</code> or <code>h6</code> in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a <code>before</code> pseudo-element to scream at you if you use an <code>h5</code> or <code>h6</code>.</p> <p>We don't style them at all out of the box because <code>h4</code> elements are already so small that they are the same size as the body copy. What are we supposed to do with an <code>h5</code>, make it <em>smaller</em> than the body copy? No thanks.</p> <h3>We still need to think about stacked headings though.</h3> <h4>Let's make sure we don't screw that up with <code>h4</code> elements, either.</h4> <p>Phew, with any luck we have styled the headings above this text and they look pretty good.</p> <p>Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document.</p> <p>What I've written here is probably long enough, but adding this final sentence can't hurt.</p>`;

const languages = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "kk", label: "Қазақша" },
];

const currentLang = "ru";

const courseContent = [
  {
    title: "Введение в программирование",
    lessons: [
      { title: "Что такое программирование?", status: "completed" },
      { title: "Алгоритмы и их виды", status: "in-progress" },
      { title: "Среды разработки", status: "not-started" },
    ],
  },
  {
    title: "Основы синтаксиса",
    lessons: [
      { title: "Переменные и типы данных", status: "not-started" },
      { title: "Операторы и выражения", status: "not-started" },
      { title: "Ввод и вывод данных", status: "not-started" },
      { title: "Комментарии в коде", status: "not-started" },
    ],
  },
  {
    title: "Условия и циклы",
    lessons: [
      { title: "Условные операторы", status: "not-started" },
      { title: "Циклы: for и while", status: "not-started" },
      { title: "Прерывание циклов", status: "not-started" },
      { title: "Задачи на циклы", status: "not-started" },
    ],
  },
];

type LessonStatus = "completed" | "in-progress" | "not-started";

const statusClasses: Record<LessonStatus, string> = {
  completed: "border-green-500 bg-green-500",
  "in-progress": "border-yellow-400 bg-yellow-400",
  "not-started": "border-zinc-400",
};

export default function Lesson() {
  //ContentMenu
  const [isPinned, setIsPinned] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPinned = localStorage.getItem("isPinned");
      const savedOpen = localStorage.getItem("isOpen");

      const isPinnedValue = savedPinned !== null ? savedPinned === "true" : true;
      const isOpenValue = savedOpen !== null ? savedOpen === "true" : true;

      setIsPinned(isPinnedValue);
      setIsOpen(isPinnedValue ? isOpenValue : false);
    }
  }, []);

  // Отслеживание ширины экрана и изменение isPinned + способа открытия
  useEffect(() => {
    const media = window.matchMedia("(max-width: 1024px)");
    const update = () => {
      const mobile = media.matches;
      setIsMobile(mobile);
      setIsPinned(!mobile);
      setIsOpen(!mobile); // Закрываем меню на мобилке
    };

    update(); // Устанавливаем начальное значение
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  // Сохраняем изменения в localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isPinned", String(isPinned));
      if (isPinned) {
        localStorage.setItem("isOpen", String(isOpen));
      }
    }
  }, [isPinned, isOpen]);

  // Открытие/закрытие меню
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  // Только для десктопа: открытие по наведению
  const handleMouseEnter = () => {
    if (!isMobile && !isPinned) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && !isPinned) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }
  };
  //ContentMenu

  type MenuItem = {
    label: string;
    icon: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  };
  const menuItems: MenuItem[] = [
    {
      icon: !isOpen ? "ri-gallery-view-2" : "ri-layout-grid-fill",
      label: "Содержание",
    },
    {
      icon: "ri-question-answer-line",
      label: "Чат с учениками",
    },
    {
      icon: "ri-attachment-2",
      label: "Материалы",
    },
    {
      icon: "ri-translate",
      label: "Личный словарь",
    },
    {
      icon: "ri-text-block",
      label: "Интерактивная доска",
    },
    {
      icon: "ri-settings-2-line",
      label: "Настройки урока",
    },
  ];

  // ASIDE
  const asideRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const [visibleAsideItems, setVisibleAsideItems] = useState<MenuItem[]>(menuItems);
  const [submenuAsideItems, setSubmenuAsideItems] = useState<MenuItem[]>([]);
  const [isAsideSubmenuVisible, setIsAsideSubmenuVisible] = useState(false);

  const [visibleFooterItems, setVisibleFooterItems] = useState<MenuItem[]>(menuItems);
  const [submenuFooterItems, setSubmenuFooterItems] = useState<MenuItem[]>([]);
  const [isFooterSubmenuVisible, setIsFooterSubmenuVisible] = useState(false);

  // Функция для проверки переполнения aside
  const checkAsideOverflow = useCallback(() => {
    if (!asideRef.current) return;

    const maxHeight = asideRef.current.clientHeight - 32; // Учитываем padding
    const itemHeight = 56; // Примерная высота кнопки
    const maxVisibleItems = Math.floor(maxHeight / itemHeight) - 2; // Минус кнопки "Вверх" и "Вниз"

    if (menuItems.length > maxVisibleItems) {
      setVisibleAsideItems(menuItems.slice(0, maxVisibleItems));
      setSubmenuAsideItems(menuItems.slice(maxVisibleItems));
      setIsAsideSubmenuVisible(true);
    } else {
      setVisibleAsideItems(menuItems);
      setSubmenuAsideItems([]);
      setIsAsideSubmenuVisible(false);
    }
  }, []);

  // Функция для проверки переполнения footer
  const checkFooterOverflow = useCallback(() => {
    if (!footerRef.current) return;

    const maxWidth = footerRef.current.clientWidth - 32; // Учитываем padding
    const itemWidth = 50; // Примерная ширина кнопки + отступы
    const maxVisibleItems = Math.floor(maxWidth / itemWidth) - 2; // Минус кнопки "Вверх" и "Вниз"

    if (menuItems.length > maxVisibleItems) {
      setVisibleFooterItems(menuItems.slice(0, maxVisibleItems));
      setSubmenuFooterItems(menuItems.slice(maxVisibleItems));
      setIsFooterSubmenuVisible(true);
    } else {
      setVisibleFooterItems(menuItems);
      setSubmenuFooterItems([]);
      setIsFooterSubmenuVisible(false);
    }
  }, []);

  // Добавляем ResizeObserver для aside и footer
  useEffect(() => {
    const asideObserver = new ResizeObserver(checkAsideOverflow);
    const footerObserver = new ResizeObserver(checkFooterOverflow);

    if (asideRef.current) asideObserver.observe(asideRef.current);
    if (footerRef.current) footerObserver.observe(footerRef.current);

    return () => {
      asideObserver.disconnect();
      footerObserver.disconnect();
    };
  }, [checkAsideOverflow, checkFooterOverflow]);
  // ASIDE

  // SUBHEADER
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastScrollTop = container.scrollTop;

    const handleScroll = () => {
      const currentScrollTop = container.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else if (currentScrollTop < lastScrollTop) {
        setScrollDirection("up");
      }

      lastScrollTop = currentScrollTop;
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);
  // SUBHEADER

  // TEXTAREA AI
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "43px"; // Сброс высоты перед пересчётом
      textarea.style.height = `${textarea.scrollHeight}px`; // Устанавливаем новую высоту
    }
  };

  useEffect(() => {
    adjustHeight(); // Подстройка при первом рендере
  }, []);
  // TEXTAREA AI

  // CHAT AI
  const [isOpenAI, setIsOpenAI] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isFullSizeAI, setIsFullSizeAI] = useState(false);

  const [getQuestion, setGetQuestion] = useState(false);

  const [width, setWidth] = useState<number>(432); // Минимальная ширина 432px

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = width;

    const onMouseMove = (event: MouseEvent) => {
      const newWidth = startWidth - (event.clientX - startX);
      setWidth(Math.max(432, Math.min(newWidth, window.innerWidth - 50))); // Минимум 432px
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };
  // CHAT AI

  return (
    <>
      <div className="size-full bg-white flex flex-col overflow-hidden">
        <header className="fixed top-0 inset-x-0 h-16 flex items-center shrink-0 bg-white border-b border-zinc-200 z-50">
          <div className="px-6 flex relative w-full">
            <div className="flex items-center space-x-6">
              <Link href="/" className="flex items-center space-x-2 text-blue-600">
                <svg className="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215.2 173.7" fill="currentColor">
                  <path d="M86.3 173.6c22 0 44-.1 66 .1 7.3.1 13.3-2.4 18.2-7.7 13.8-15.1 27.8-30.1 41.3-45.5 2.1-2.5 3.4-7.1 2.8-10.3-1.3-7.6-8.9-9.5-14.2-3.9-10.3 10.9-20.4 21.9-30.4 33.1-4.1 4.6-8.7 6.6-14.9 6.6-31.7-.1-63.3-.4-95 .1-15.1.2-21.3-10-21.2-21.4.1-15.7.1-31.3 0-47-.1-13.5 7.3-22.4 22-22.2 32.2.6 64.3.1 96.5.3 4.4 0 7.5-1.3 10.4-4.6 10.2-11.4 20.6-22.7 31-34 2.9-3.2 4.3-6.6 2.9-10.9-1.4-4.1-4-6.3-8.5-6.3-37.3 0-74.7-.2-112 .3-4.4 0-9.7 2.3-12.9 5.3-20.7 19-41.1 38.5-61.5 57.9C2.4 67.7.1 73 .1 79.2c0 24.8-.1 49.7 0 74.5.1 12.3 8.3 20 20.7 20 21.8-.1 43.7-.1 65.5-.1z" />
                  <path d="M115.8 114.4c12 0 24-.1 36 0 7.8 0 14.1-2.6 19.4-8.5 13.1-14.6 26.6-28.9 39.7-43.6 2.2-2.4 4-6 4.3-9.1.4-3.9-2-7.4-6.1-8.8-3.8-1.3-6.7.5-9.3 3.2-9.9 10.8-19.9 21.6-29.6 32.5-4.3 4.8-9.4 7-15.8 7-25.5-.1-51-.1-76.5 0-7.5 0-10.8 3.4-10.8 11v5c.1 7.8 3.3 11.2 11.3 11.3 12.4.1 24.9 0 37.4 0z" />
                </svg>
                <span className="hidden max-sm:block font-bold uppercase">ekitap</span>
              </Link>
              <nav className="max-lg:hidden">
                <ul className="flex items-center space-x-6 [&_li]:relative [&_li:not(:first-child)]:before:content-['/'] [&_li:not(:first-child)]:before:absolute [&_li:not(:first-child)]:before:top-1/2 [&_li:not(:first-child)]:before:-translate-y-1/2 [&_li:not(:first-child)]:before:-left-4 [&_li:not(:first-child)]:before:text-sm [&_li:not(:first-child)]:before:text-zinc-200">
                  <li>
                    <span className="group relative">
                      <Link href="/learn" className="size-7 rounded-md flex items-center justify-center bg-zinc-100 transition hover:bg-zinc-200">
                        <i className="text-lg ri-arrow-left-s-line"></i>
                      </Link>
                      <span className="transition invisible opacity-0 group-hover:visible group-hover:opacity-100 w-max max-w-md absolute bg-zinc-800 text-zinc-50 px-4 py-2.5 rounded-md left-1/2 -translate-x-1/2 mt-3 before:size-2.25 before:bg-zinc-800 before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-[4.5px] before:rotate-45 before:rounded-tl-xs">
                        <span className="text-sm font-medium">Моё обучение</span>
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="group relative">
                      <span className="h-7 px-2 rounded-md flex items-center justify-center bg-zinc-100 transition hover:bg-zinc-200">
                        <span className="max-w-[190px] truncate text-sm">Основы программирования</span>
                      </span>
                      <span className="transition invisible opacity-0 group-hover:visible group-hover:opacity-100 w-max max-w-md absolute bg-zinc-800 text-zinc-50 px-4 py-2.5 rounded-md left-1/2 -translate-x-1/2 mt-3 before:size-2.25 before:bg-zinc-800 before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-[4.5px] before:rotate-45 before:rounded-tl-xs">
                        <span className="text-sm font-medium">Основы программирования</span>
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="group relative">
                      <span className="h-7 px-2 rounded-md flex items-center justify-center">
                        <span className="max-w-[190px] truncate text-sm">Что такое программирование?</span>
                      </span>
                      <span className="transition invisible opacity-0 group-hover:visible group-hover:opacity-100 w-max max-w-md absolute bg-zinc-800 text-zinc-50 px-4 py-2.5 rounded-md left-1/2 -translate-x-1/2 mt-3 before:size-2.25 before:bg-zinc-800 before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-[4.5px] before:rotate-45 before:rounded-tl-xs">
                        <span className="text-sm font-medium">Что такое программирование?</span>
                      </span>
                    </span>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-x-2 ml-auto">
              <button type="button" className="cursor-pointer size-10 text-xl flex items-center justify-center shrink-0 rounded-full transition border border-transparent hover:border-zinc-200 active:bg-zinc-100 focus:border-zinc-300 relative">
                <i className="ri-notification-3-line"></i>
                <span className="absolute right-3 top-3 size-1 rounded-full bg-red-500 ring-2 ring-zinc-50"></span>
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
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-zinc-200 p-1 rounded-md text-sm z-50 before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-[5.5px] before:size-2.5 before:rounded-tl-sm before:rounded-br-2xl before:rotate-45 before:bg-white before:border-t before:border-l before:border-zinc-200">
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

              <Dropdown
                renderDropdown={({ isOpen, setIsOpen }) => (
                  <>
                    <div className="relative ml-4">
                      <button type="button" onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                        <div className="flex items-center gap-x-2">
                          <div className="size-10 rounded-lg flex items-center justify-center shrink-0 bg-sky-500 border border-sky-600">
                            <span className="text-zinc-50 font-medium text-sm tracking-wider">ХД</span>
                          </div>
                          <div className="flex flex-col items-start max-lg:hidden">
                            <div className="text-sm font-medium">Хасенов Диас</div>
                            <div className="text-xs text-zinc-500">Ученик</div>
                          </div>
                          <i className="text-lg text-zinc-500 ri-arrow-down-s-line max-lg:hidden"></i>
                        </div>
                      </button>
                      {isOpen && (
                        <div className="absolute top-full right-0 min-w-48 mt-2 bg-white border border-zinc-200 p-1 rounded-md text-sm z-50 before:absolute before:right-4 before:-top-[5.5px] before:size-2.5 before:rounded-tl-sm before:rounded-br-2xl before:rotate-45 before:bg-white before:border-t before:border-l before:border-zinc-200">
                          <ul>
                            <li>
                              <Link href="#" className="flex items-center space-x-2 pl-3 pr-5 py-2.5 whitespace-nowrap leading-0 rounded-md transition hover:bg-blue-50">
                                <i className="text-lg leading-none text-zinc-500 ri-equalizer-2-line"></i>
                                <span>Панель управления</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="#" className="flex items-center space-x-2 pl-3 pr-5 py-2.5 whitespace-nowrap leading-0 rounded-md transition hover:bg-blue-50">
                                <i className="text-lg leading-none text-zinc-500 ri-bookmark-line"></i>
                                <span>Мои курсы</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="#" className="flex items-center space-x-2 pl-3 pr-5 py-2.5 whitespace-nowrap leading-0 rounded-md transition hover:bg-blue-50">
                                <i className="text-lg leading-none text-zinc-500 ri-wallet-line"></i>
                                <span>Пополнить кошелёк</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="#" className="flex items-center space-x-2 pl-3 pr-5 py-2.5 whitespace-nowrap leading-0 rounded-md transition hover:bg-blue-50">
                                <i className="text-lg leading-none text-zinc-500 ri-settings-3-line"></i>
                                <span>Настройки</span>
                              </Link>
                            </li>
                            <li className="h-px w-full bg-zinc-200 my-0.5"></li>
                            <li>
                              <Link href="#" className="flex items-center space-x-2 pl-3 pr-5 py-2.5 whitespace-nowrap leading-0 rounded-md transition text-red-500 hover:bg-blue-50">
                                <i className="text-lg leading-none text-zinc-500 ri-login-box-line"></i>
                                <span>Выход</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </>
                )}
              />
            </div>
          </div>
        </header>

        <div className="flex-1 flex ml-16 max-md:ml-0 mt-16 overflow-hidden  max-md:mb-14">
          <aside ref={asideRef} className="w-16 shrink-0 bg-white border-r border-zinc-200 z-40 fixed top-16 bottom-0 left-0 max-md:hidden">
            <div className="flex flex-col items-center h-full">
              <div className="flex flex-col items-center space-y-4 py-3.5 w-full">
                {visibleAsideItems.map((item, index) => {
                  return (
                    <button key={index} type="button" className="relative cursor-pointer group flex items-center justify-center w-full" onClick={toggleSidebar} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <div className="size-9 flex items-center justify-center rounded-md transition hover:bg-zinc-100">
                        <i className={`text-lg ${index === 0 ? (isOpen ? "ri-layout-grid-fill" : "ri-gallery-view-2") : item.icon}`}></i>
                      </div>
                      <div className="absolute left-full top-1/2 ml-2 -translate-y-1/2 opacity-0 invisible transition-opacity group-hover:visible group-hover:opacity-100 w-max max-w-xs px-4 py-2.5 rounded-md bg-zinc-800 text-zinc-50 before:absolute before:size-2.5 before:bg-zinc-800 before:top-1/2 before:-translate-y-1/2 before:-left-[5px] before:-rotate-45 before:rounded-tl-xs">
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                    </button>
                  );
                })}

                {isAsideSubmenuVisible && submenuAsideItems.length > 0 && (
                  <Dropdown
                    renderDropdown={({ isOpen, setIsOpen }) => (
                      <div className="relative">
                        <button type="button" onClick={() => setIsOpen(!isOpen)} className="cursor-pointer size-9 rounded-md flex items-center justify-center transition hover:bg-zinc-100">
                          <i className="text-lg ri-more-line"></i>
                        </button>
                        {isOpen && (
                          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-white border border-zinc-200 p-1 rounded-md text-sm z-50 before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-1.25 before:size-2.5 before:rounded-tl-xs before:-rotate-45 before:bg-white before:border-t before:border-l before:border-zinc-200">
                            <ul>
                              {submenuAsideItems.map((item, index) => (
                                <li key={index}>
                                  <button type="button" className="cursor-pointer whitespace-nowrap px-4 py-2 w-full text-left max-w-xs rounded-md transition hover:bg-blue-50">
                                    <span className="truncate">{item.label}</span>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  />
                )}
              </div>

              <div className="flex flex-col items-center space-y-4 mb-4 mt-auto w-full">
                <button type="button" className="relative cursor-pointer group flex items-center justify-center w-full">
                  <div className="size-9 flex items-center justify-center rounded-md transition hover:bg-zinc-100">
                    <i className="text-lg ri-arrow-up-line"></i>
                  </div>
                  <div className="absolute left-full top-1/2 ml-2 -translate-y-1/2 opacity-0 invisible transition-opacity group-hover:visible group-hover:opacity-100 w-max max-w-xs px-4 py-2.5 rounded-md bg-zinc-800 text-zinc-50 before:absolute before:size-2.5 before:bg-zinc-800 before:top-1/2 before:-translate-y-1/2 before:-left-[5px] before:-rotate-45 before:rounded-tl-xs">
                    <span className="text-sm font-medium">Вверх</span>
                  </div>
                </button>
                <button type="button" className="relative cursor-pointer group flex items-center justify-center w-full">
                  <div className="size-9 flex items-center justify-center rounded-md transition hover:bg-zinc-100">
                    <i className="text-lg ri-arrow-down-line"></i>
                  </div>
                  <div className="absolute left-full top-1/2 ml-2 -translate-y-1/2 opacity-0 invisible transition-opacity group-hover:visible group-hover:opacity-100 w-max max-w-xs px-4 py-2.5 rounded-md bg-zinc-800 text-zinc-50 before:absolute before:size-2.5 before:bg-zinc-800 before:top-1/2 before:-translate-y-1/2 before:-left-[5px] before:-rotate-45 before:rounded-tl-xs">
                    <span className="text-sm font-medium">Вниз</span>
                  </div>
                </button>
              </div>
            </div>
          </aside>

          <footer ref={footerRef} className="h-14 fixed bottom-0 inset-x-0 shrink-0 bg-white border-t border-zinc-200 z-40 hidden max-md:block">
            <div className="flex items-center size-full">
              <div className="flex items-center space-x-2 px-3.5">
                {visibleFooterItems.map((item, index) => {
                  return (
                    <button key={index} type="button" className="size-9 flex items-center justify-center rounded-md transition hover:bg-zinc-100" onClick={toggleSidebar} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <i className={`text-lg ${index === 0 ? (isOpen ? "ri-layout-grid-fill" : "ri-gallery-view-2") : item.icon}`}></i>
                    </button>
                  );
                })}

                {isFooterSubmenuVisible && submenuFooterItems.length > 0 && (
                  <Dropdown
                    renderDropdown={({ isOpen, setIsOpen }) => (
                      <div className="relative">
                        <button type="button" onClick={() => setIsOpen(!isOpen)} className="cursor-pointer size-9 rounded-md flex items-center justify-center transition hover:bg-zinc-100">
                          <i className="text-lg ri-more-line"></i>
                        </button>
                        {isOpen && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white border border-zinc-200 p-1 rounded-md text-sm z-50 before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-1.25 before:size-2.5 before:rounded-tl-xs before:-rotate-135 before:bg-white before:border-t before:border-l before:border-zinc-200">
                            <ul>
                              {submenuFooterItems.map((item, index) => (
                                <li key={index}>
                                  <button type="button" className="cursor-pointer whitespace-nowrap px-4 py-2 w-full text-left max-w-xs rounded-md transition hover:bg-blue-50">
                                    <span className="truncate">{item.label}</span>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  />
                )}
              </div>

              <div className="flex items-center space-x-2 mr-3.5 ml-auto">
                <button type="button" className="size-9 flex items-center justify-center rounded-md transition hover:bg-zinc-100">
                  <i className="text-lg ri-arrow-down-line"></i>
                </button>
                <button type="button" className="size-9 flex items-center justify-center rounded-md transition hover:bg-zinc-100">
                  <i className="text-lg ri-arrow-up-line"></i>
                </button>
              </div>
            </div>
          </footer>

          <div
            className={`shrink-0 bg-zinc-50 flex flex-col transition-[width] overflow-hidden ${isPinned ? `sticky top-0 h-full ${isOpen ? "w-80 border-r border-zinc-200" : "w-0"}` : `fixed left-16 max-md:left-0 top-16 h-[calc(100%_-_4rem)] ${isOpen ? "w-80 border-r border-zinc-200 z-30" : "w-0"}`}`}
            onMouseEnter={() => {
              if (!isPinned) {
                if (timeoutRef.current) clearTimeout(timeoutRef.current); // Отменяем скрытие
                setIsOpen(true);
              }
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="h-16 shrink-0 border-b border-zinc-200 flex items-center">
              <div className="flex items-center justify-between w-full px-4">
                <div className="font-semibold truncate">Содержание курса</div>
                <span className="group relative max-lg:hidden">
                  <button
                    type="button"
                    onClick={() => {
                      setIsPinned((prev) => !prev);
                      console.log(isPinned);
                    }}
                    className="cursor-pointer size-8 rounded-md flex items-center justify-center justify-self-center transition hover:bg-zinc-200"
                  >
                    <i className={`ri-pushpin-2-fill transition ${!isPinned && "rotate-45"}`}></i>
                  </button>
                  <span className="transition invisible opacity-0 group-hover:visible group-hover:opacity-100 w-max max-w-md absolute bg-zinc-800 text-zinc-50 px-4 py-2.5 rounded-md top-full mt-3 -right-2 before:size-2.5 before:bg-zinc-800 before:absolute before:-top-[5px] before:right-4.5 before:rotate-45 before:rounded-tl-xs">
                    <span className="text-sm font-medium">{isPinned ? "Открепить" : "Закрепить"}</span>
                  </span>
                </span>
              </div>
            </div>

            <div className="h-16 shrink-0 flex flex-col justify-center px-4">
              <div className="text-zinc-500 text-sm font-medium mb-1 truncate">Прогресс по курсу: 1/17</div>
              <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden relative">
                <div className="absolute h-full rounded-full bg-emerald-500" style={{ width: `30%` }}></div>
              </div>
            </div>

            <ul className="overflow-auto small-scrollbar h-full max-md:mb-14">
              {courseContent.map((section, index) => (
                <li key={index}>
                  <div className="px-4 text-sm border-y border-zinc-200 font-medium h-12 flex items-center hover:bg-zinc-100">
                    <span className="truncate">
                      {index + 1}. {section.title}
                    </span>
                  </div>
                  <ul>
                    {section.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex}>
                        <Link href="#" className="text-sm pl-8 pr-6 h-10 transition hover:bg-zinc-100 flex items-center justify-between relative before:hidden before:absolute before:w-1 before:left-0 before:inset-y-0 before:bg-blue-500 aria-[current=true]:before:block aria-[current=true]:bg-zinc-100 aria-[current=true]:text-blue-500 aria-[current=true]:hover:bg-zinc-200/50" aria-current={index === 0 && lessonIndex === 1 ? "true" : undefined}>
                          <span className="truncate">
                            {index + 1}.{lessonIndex + 1} {lesson.title}
                          </span>
                          <span className={`size-2 rounded-full border shrink-0 ${statusClasses[lesson.status as LessonStatus]}`}></span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div ref={containerRef} className="h-full w-full overflow-auto transition-[width] relative">
            <div className={`h-16 flex items-center shrink-0 bg-zinc-50 border-b border-zinc-200 sticky top-0 left-0 right-2 transition duration-300 ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}`}>
              <div className="container">
                <div className="flex items-center">
                  <span className="group relative mr-10">
                    <Link href="#prev" className="size-10 rounded-md flex items-center justify-center bg-zinc-50 border border-zinc-200 transition hover:bg-white hover:text-blue-500">
                      <i className="text-xl ri-arrow-left-s-line"></i>
                    </Link>
                    <span className="transition invisible opacity-0 group-hover:visible group-hover:opacity-100 w-max max-w-md absolute bg-zinc-800 text-zinc-50 px-4 py-2.5 rounded-md left-0 mt-2 before:size-2.25 before:bg-zinc-800 before:absolute before:left-4 before:-top-1 before:rotate-45 before:rounded-tl-xs">
                      <span className="text-sm font-medium">Что такое программирование?</span>
                    </span>
                  </span>

                  <h1 className="font-medium mr-10 whitespace-nowrap truncate">1.2 Алгоритмы и их виды</h1>

                  <span className="group relative ml-auto">
                    <Link href="#next" className="flex items-center space-x-4 max-md:space-x-0 transition hover:text-blue-500 group">
                      <span className="text-sm font-medium whitespace-nowrap max-md:hidden">Следующйи урок</span>
                      <span className="size-10 rounded-md flex items-center justify-center bg-zinc-50 border border-zinc-200 group-hover:bg-white">
                        <i className="text-xl ri-arrow-right-s-line"></i>
                      </span>
                    </Link>
                    <span className="transition invisible opacity-0 group-hover:visible group-hover:opacity-100 w-max max-w-md absolute bg-zinc-800 text-zinc-50 px-4 py-2.5 rounded-md right-0 mt-2 before:size-2.25 before:bg-zinc-800 before:absolute before:right-4 before:-top-1 before:rotate-45 before:rounded-tl-xs">
                      <span className="text-sm font-medium">Среды разработки</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="prose mx-auto prose-zinc max-w-4xl max-sm:prose-sm">
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-50">
        <div onClick={() => setIsOpenAI(!isOpenAI)} className={`absolute inset-0 bg-black/25 transition ${isOpenAI ? "opacity-100 pointer-events-auto" : "opacity-0"}`}></div>

        <div className="fixed right-6 bottom-6 max-md:bottom-18 max-md:right-4 pointer-events-auto">
          <div className="relative group">
            <button type="button" onClick={() => setIsOpenAI(!isOpenAI)} className="cursor-pointer size-10 flex items-center justify-center shrink-0 rounded-full text-zinc-50 bg-zinc-950 relative after:absolute after:inset-0 after:transition after:scale-105 hover:after:scale-110 after:bg-amber-300 after:rounded-full after:bg-conic/decreasing after:from-violet-700 after:via-yellow-300 after:to-violet-700 after:-z-1 after:animate-[spin_3s_ease-in-out_infinite]">
              <i className="ri-chat-ai-fill"></i>
            </button>
            {!isOpenAI && (
              <span className="transition invisible opacity-0 group-hover:visible group-hover:opacity-100 w-max max-w-md absolute bg-zinc-800 text-zinc-50 px-4 py-2.5 rounded-md right-0 bottom-full mb-2.5 before:size-2.25 before:bg-zinc-800 before:absolute before:right-4 before:-bottom-1 before:rotate-225 before:rounded-tl-xs">
                <span className="text-sm font-medium">Спросить у АйТичер</span>
              </span>
            )}
          </div>
        </div>

        <div
          className={`absolute bg-white overflow-hidden transition-opacity ${isOpenAI ? "opacity-100" : "opacity-0 pointer-events-none"} ${!isFullSizeAI ? "rounded-xl max-md:rounded-none right-6 max-md:inset-0 inset-y-18" : "inset-0"}`}
          style={{
            width: isFullSizeAI ? "100%" : `${width}px`,
          }}
        >
          <div className="absolute left-0 top-0 h-full w-2 cursor-ew-resize pointer-events-auto z-10" onMouseDown={handleMouseDown} />

          <div className={`absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-indigo-200 to-transparent transition-opacity ${getQuestion ? "opacity-50" : "opacity-100"}`}>
            <div className="absolute inset-y-0 w-1/2 bg-linear-150 from-sky-200 from-5% to-transparent to-25%"></div>
            <div className="absolute size-20 bg-pink-200 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full blur-xl"></div>
          </div>

          <div className={`flex flex-col relative h-full z-1 ${isOpenAI && "pointer-events-auto"}`}>
            <div className="flex items-center justify-between py-4 container">
              <button type="button" onClick={() => setIsShown(!isShown)} className="cursor-pointer size-8 flex items-center justify-center rounded-md transition bg-white shadow border border-zinc-200 hover:text-blue-600 hover:bg-zinc-50 active:bg-zinc-100 focus:border-zinc-300">
                <i className="ri-menu-line"></i>
              </button>
              <div className="flex items-center space-x-2">
                <button type="button" onClick={() => setGetQuestion(!getQuestion)} className="cursor-pointer h-8 px-2 flex items-center justify-center rounded-md transition bg-white shadow border border-zinc-200 hover:text-blue-600 hover:bg-zinc-50 active:bg-zinc-100 focus:border-zinc-300">
                  <span className="text-sm font-medium">Очистить</span>
                </button>
                <button type="button" onClick={() => setIsFullSizeAI(!isFullSizeAI)} className="cursor-pointer size-8 flex items-center justify-center rounded-md transition bg-white shadow border border-zinc-200 hover:text-blue-600 hover:bg-zinc-50 active:bg-zinc-100 focus:border-zinc-300 max-md:hidden">
                  <i className={!isFullSizeAI ? "ri-fullscreen-line" : "ri-fullscreen-exit-line"}></i>
                </button>
                <button type="button" onClick={() => setIsOpenAI(!isOpenAI)} className="cursor-pointer size-8 flex items-center justify-center rounded-md transition bg-white shadow border border-zinc-200 hover:text-blue-600 hover:bg-zinc-50 active:bg-zinc-100 focus:border-zinc-300">
                  <i className="text-lg ri-close-line"></i>
                </button>
              </div>
            </div>

            {!getQuestion ? (
              <div className="flex flex-col overflow-auto small-scrollbar">
                <div className="flex flex-col items-center py-4 container">
                  <div className="mb-2.5 size-12 bg-white rounded-xl shadow border border-zinc-200 flex items-center justify-center">
                    <i className="text-2xl text-indigo-500 ri-robot-2-fill"></i>
                  </div>
                  <div className="mb-1 font-medium text-center">Привет! Я LogiQ, твой помощник в обучении!</div>
                  <div className="text-sm text-zinc-500 text-center">Помогу разобраться с учебником. Задавайте вопросы!</div>
                </div>

                <div className="py-4 container">
                  <div className="space-y-4">
                    <a href="#" onClick={() => setGetQuestion(!getQuestion)} className="block border border-zinc-200 bg-white rounded-md p-2.5 text-sm transition hover:shadow">
                      <div className="font-medium">Коротко о главном</div>
                      <div className="text-zinc-500">LogiQ передаст суть в нескольких предложениях.</div>
                    </a>
                    <a href="#" onClick={() => setGetQuestion(!getQuestion)} className="block border border-zinc-200 bg-white rounded-md p-2.5 text-sm transition hover:shadow">
                      <div className="font-medium">Можешь объяснить этот материал проще?</div>
                      <div className="text-zinc-500">Если что-то кажется сложным, LogiQ может переформулировать.</div>
                    </a>
                    <a href="#" onClick={() => setGetQuestion(!getQuestion)} className="block border border-zinc-200 bg-white rounded-md p-2.5 text-sm transition hover:shadow">
                      <div className="font-medium">Как это применить на практике?</div>
                      <div className="text-zinc-500">Чтобы понять, как использовать знания в реальной жизни.</div>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col overflow-auto bg-white border-t border-zinc-200 small-scrollbar h-full">
                <div className="py-4 space-y-4 container">
                  <div className="flex w-full justify-end">
                    <div className="border border-zinc-200 bg-white shadow rounded-md max-w-3/4 relative pr-4">
                      <div className="absolute -right-1 translate-x-[0.5px] top-1.75 size-2 rotate-45 bg-white border-r border-t border-zinc-200 rounded-tr-xs"></div>
                      <div className="p-2.5 text-sm">Расскажи коротко о главном</div>
                    </div>
                  </div>

                  <div className="prose-sm break-words">
                    <p>
                      <strong>Основы программирования — кратко о главном</strong>
                    </p>
                    <p>Программирование — это процесс написания инструкций для компьютера, чтобы он выполнял определённые задачи.</p>
                    <p>
                      🔹 <strong>Алгоритмы</strong> – это последовательность шагов для решения задачи.
                      <br />
                      🔹 <strong>Переменные</strong> – хранят данные, с которыми работает программа.
                      <br />
                      🔹 <strong>Условные операторы</strong> – помогают программе принимать решения.
                      <br />
                      🔹 <strong>Циклы</strong> – позволяют повторять действия без лишнего кода.
                      <br />
                      🔹 <strong>Функции</strong> – объединяют код в удобные блоки, чтобы его можно было переиспользовать.
                    </p>
                    <p>Чем больше практики, тем лучше ты поймёшь программирование! 🚀</p>
                  </div>

                  <div className="flex w-full justify-end">
                    <div className="border border-zinc-200 bg-white shadow rounded-md max-w-3/4 relative pr-4">
                      <div className="absolute -right-1 translate-x-[0.5px] top-1.75 size-2 rotate-45 bg-white border-r border-t border-zinc-200 rounded-tr-xs"></div>
                      <div className="p-2.5 text-sm">Можешь объяснить этот материал проще?</div>
                    </div>
                  </div>

                  <div className="prose-sm break-words">
                    <p>
                      <strong>Конечно! Давай объясню проще.</strong>
                    </p>

                    <p>Программирование — это как давать компьютеру чёткие инструкции, чтобы он выполнял нужные тебе действия. Представь, что ты объясняешь другу, как приготовить чай:</p>

                    <p>
                      1️⃣ <strong>Алгоритмы</strong> — это рецепт. Нужно следовать шагам в правильном порядке.
                      <br />
                      2️⃣ <strong>Переменные</strong> — это кружка, вода и чайный пакетик. Мы храним данные, чтобы использовать их позже.
                      <br />
                      3️⃣ <strong>Условные операторы</strong> — если вода горячая, завариваем чай. Если холодная — греем.
                      <br />
                      4️⃣ <strong>Циклы</strong> — если нужно приготовить чай для 5 человек, мы повторяем действия 5 раз.
                      <br />
                      5️⃣ <strong>Функции</strong> — если мы часто завариваем чай, можно записать рецепт один раз и просто говорить: &quot;Сделай чай!&quot;.
                    </p>

                    <p>Так работает программирование: мы даём компьютеру понятные шаги, чтобы он мог делать задачи за нас! 🚀</p>
                  </div>

                  <div className="flex space-x-1 px-0.5">
                    <span className="size-2 rounded-full bg-zinc-400 animate-[pulse_1s_infinite_ease-in-out]"></span>
                    <span className="size-2 rounded-full bg-zinc-400 animate-[pulse_1s_infinite_ease-in-out] [animation-delay:0.2s]"></span>
                    <span className="size-2 rounded-full bg-zinc-400 animate-[pulse_1s_infinite_ease-in-out] [animation-delay:0.4s]"></span>
                  </div>
                </div>
              </div>
            )}

            <div className="py-4 border-t border-zinc-200 mt-auto container">
              <div className="flex items-end space-x-4">
                <textarea ref={textareaRef} onInput={adjustHeight} className="w-full bg-zinc-50 border-2 border-zinc-200 outline-none resize-none rounded-md text-sm p-2 h-10 max-h-32 hidden-scrollbar" placeholder="Задай мне свой вопрос здесь..."></textarea>
                <button type="button" className="cursor-pointer size-10 flex items-center justify-center shrink-0 rounded-lg border-2 border-indigo-700 shadow bg-indigo-600 text-white transition hover:brightness-125">
                  <i className="ri-send-plane-2-fill"></i>
                </button>
              </div>
            </div>
          </div>

          <div className={`absolute inset-0 group ${isShown && "show"} z-10`}>
            <div onClick={() => setIsShown(!isShown)} className="absolute inset-0 bg-black/75 opacity-0 transition duration-500 group-[.show]:opacity-100 group-[.show]:pointer-events-auto"></div>

            <div className={`absolute inset-y-2 px-2 w-full ${!isFullSizeAI ? "max-w-80" : "max-w-108"} overflow-hidden transition -translate-x-full duration-500 delay-75 group-[.show]:translate-x-0 group-[.show]:pointer-events-auto`}>
              <div className="bg-white rounded-lg size-full py-2">
                <div className="size-full overflow-y-auto overflow-x-hidden small-scrollbar">
                  <div className="bg-white px-4 py-2 flex items-center justify-between sticky top-0">
                    <div className="font-semibold">Недавние запросы</div>
                    <button type="button" onClick={() => setIsShown(!isShown)} className="cursor-pointer size-7 rounded-md flex items-center justify-center bg-zinc-100 transition hover:bg-zinc-200">
                      <i className="text-lg ri-expand-left-line"></i>
                    </button>
                  </div>

                  <ul className="text-sm space-y-6 py-4">
                    <li>
                      <div className="px-4 text-zinc-500">Сегодня</div>
                      <ul>
                        <li>
                          <a href="#" className="block w-full mx-1.5 pl-2.5 pr-8 py-2 rounded-lg transition hover:bg-zinc-100 truncate">
                            Что самое главное в этой теме?
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block w-full mx-1.5 pl-2.5 pr-8 py-2 rounded-lg transition hover:bg-zinc-100 truncate">
                            Объясни это проще, как будто мне 10 лет.
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block w-full mx-1.5 pl-2.5 pr-8 py-2 rounded-lg transition hover:bg-zinc-100 truncate">
                            В чём самая распространённая ошибка при изучении этого материала?
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="px-4 text-zinc-500">Вчера</div>
                      <ul>
                        <li>
                          <a href="#" className="block w-full mx-1.5 pl-2.5 pr-8 py-2 rounded-lg transition hover:bg-zinc-100 truncate">
                            Как это знание можно применить в реальной жизни?
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block w-full mx-1.5 pl-2.5 pr-8 py-2 rounded-lg transition hover:bg-zinc-100 truncate">
                            Есть ли примеры из истории, где это было важно?
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block w-full mx-1.5 pl-2.5 pr-8 py-2 rounded-lg transition hover:bg-zinc-100 truncate">
                            Какие профессии используют этот навык?
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
