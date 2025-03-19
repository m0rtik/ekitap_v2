"use client";

import { useState } from "react";
import clsx from "clsx";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Learn() {
  const accordionItems = [
    {
      title: "Step by Step Usability Principles",
      chapters: [
        {
          id: 1,
          icon: "ri-archive-stack-line",
          text: "Introduction: Navigating User-Centric Waters - A Step-by-Step Guide to Usability Principles",
        },
        {
          id: 2,
          icon: "ri-file-list-2-line",
          text: "Chapter 1: Clarity in Navigation",
        },
      ],
    },
    {
      title: "Advanced UI/UX Techniques",
      chapters: [
        {
          id: 3,
          icon: "ri-archive-stack-line",
          text: "Designing with Accessibility in Mind",
        },
        {
          id: 4,
          icon: "ri-file-list-2-line",
          text: "Chapter 2: Microinteractions",
        },
      ],
    },
    {
      title: "Interactive Prototyping Essentials",
      chapters: [
        {
          id: 5,
          icon: "ri-archive-stack-line",
          text: "Building Clickable Prototypes for Usability Testing",
        },
        {
          id: 6,
          icon: "ri-file-list-2-line",
          text: "Chapter 3: High-Fidelity vs Low-Fidelity Prototypes",
        },
      ],
    },
  ];

  const params = useParams();
  const courseId = params?.id ? Number(params.id) : NaN;

  const [openIndexes, setOpenIndexes] = useState(accordionItems.map((_, i) => i));

  if (Number.isNaN(courseId)) return <p>Ошибка: неверный ID курса</p>;

  const courses = [
    {
      id: 1,
      title: "Русский язык. Общественно-гуманитарное направление",
      cover: "https://optim.tildacdn.com/stor3236-3831-4936-b037-623936306663/-/resize/720x/-/format/webp/12239265.png.webp",
      poster: "https://cdn.stepik.net/media/cache/images/courses/63054/cover_foIuz1t/6bc976a3abd69e9e3e5163a5973a8ccf.jpg",
      grade: "10 класс",
      progress: 40,
      materials: 12,
      teacher: "Райхан Фикри",
      tags: ["Риторика", "Орфография", "Стили речи", "Синтаксис"],
    },
    {
      id: 2,
      title: "Математика. Профильное обучение",
      cover: "https://optim.tildacdn.com/stor6561-3331-4236-b439-643162666661/-/resize/720x/-/format/webp/19481846.png.webp",
      poster: "https://cdn.stepik.net/media/cache/images/courses/5482/cover/a3debb6072c4e93374428fd41821601c.png",
      grade: "11 класс",
      progress: 60,
      materials: 20,
      teacher: "Алексей Иванов",
      tags: ["Алгебра", "Геометрия", "Тригонометрия"],
    },
    {
      id: 3,
      title: "Физика. Основы механики",
      cover: "https://optim.tildacdn.com/stor3561-3538-4363-b063-346534333839/-/resize/720x/-/format/webp/43421970.png.webp",
      poster: "https://cdn.stepik.net/media/cache/images/courses/100707/cover_K4JOB7c/6c361261be53b501e6ba814dcc659222.png",
      grade: "9 класс",
      progress: 86,
      materials: 10,
    },
    {
      id: 4,
      title: "История Казахстана",
      cover: "https://optim.tildacdn.com/stor3366-6138-4233-a237-613235363533/-/resize/720x/-/format/webp/90570496.png.webp",
      poster: "https://cdn.stepik.net/media/cache/images/courses/76/cover_6b82dH3/72cf178b90f7b2daf7ecd67d6c430d19.jpg",
      grade: "10 класс",
      progress: null,
      materials: 15,
    },
    {
      id: 5,
      title: "Биология. Генетика и эволюция",
      cover: "https://optim.tildacdn.com/stor6334-3837-4530-b431-633765316136/-/resize/720x/-/format/webp/22154545.png.webp",
      poster: "https://cdn.stepik.net/media/cache/images/courses/158385/cover_SPaHBeA/76ef14008f9f02b0fbd97cd39c6f4e34.png",
      grade: "11 класс",
      progress: 20,
      materials: 18,
    },
    {
      id: 6,
      title: "Химия. Органическая химия",
      cover: "https://optim.tildacdn.com/stor3461-6230-4766-b639-656566343063/-/resize/720x/-/format/webp/25279357.png.webp",
      poster: "https://cdn.stepik.net/media/cache/images/courses/116411/cover_wdkTnL7/23cf42965b1d2c47d6f305292a4ff707.jpg",
      grade: "10 класс",
      progress: null,
      materials: 22,
    },
  ];

  const course = courses.find((c) => c.id === courseId);
  if (!course) return notFound();

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return (
    <>
      <section className="bg-gradient-to-tr from-blue-25 to-blue-50 border-y border-blue-100 py-10">
        <div className="container">
          <ul className="max-lg:mb-6 flex items-center [&_li:not(:first-child)]:before:content-['/'] [&_li:not(:first-child)]:before:text-zinc-400 [&_li:not(:first-child)]:before:text-sm [&_li:not(:first-child)]:before:mx-2 *:text-sm *:whitespace-nowrap *:last:truncate [&_a]:text-zinc-500 [&_a]:transition [&_a:hover]:text-zinc-950">
            <li>
              <Link href="/">Главная</Link>
            </li>
            <li>
              <Link href="/learn">Моё обучение</Link>
            </li>
            <li>
              <span>{course.title}</span>
            </li>
          </ul>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10">
            <div className="flex flex-col justify-center space-y-8 max-lg:order-2">
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-1 mb-1.5">
                  <span className="size-4.5 bg-sky-500 rounded flex items-center justify-center shrink-0 text-zinc-50 text-xs">
                    <i className="ri-bill-line"></i>
                  </span>
                  <span className="text-zinc-500 text-sm font-medium">{course.grade}</span>
                </div>
                <h1 className="text-2xl font-semibold">{course.title}</h1>

                {/* Блок с тегами */}
                {course.tags && course.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 *:whitespace-nowrap *:text-sm *:font-medium *:h-8 *:px-3 *:rounded-full *:text-zinc-500 *:bg-zinc-100 *:transition *:duration-500 *:hover:bg-zinc-200 *:flex *:items-center">
                    {course.tags.map((tag, index) => (
                      <Link key={index} href="#">
                        {tag}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Преподаватель */}
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1 text-zinc-500">
                  <i className="text-lg ri-presentation-line"></i>
                  <span className="font-medium">Преподаватель</span>
                </div>

                <Link href="#" className="flex items-center space-x-1">
                  <div className="size-8 rounded-full shrink-0 overflow-hidden relative">
                    <Image src={course.poster} alt={course.title} fill />
                  </div>
                  <span className="border-b border-zinc-300">{course.teacher}</span>
                </Link>
              </div>

              <div className="flex items-center flex-wrap gap-x-4 gap-y-2">
                <button type="button" className="max-sm:w-full max-sm:justify-center whitespace-nowrap flex items-center cursor-pointer h-9.5 px-4 rounded-lg border-2 border-indigo-700 shadow bg-indigo-600 text-white transition hover:brightness-125">
                  Продолжить
                </button>
                <button type="button" className="max-sm:w-full max-sm:justify-center whitespace-nowrap flex items-center cursor-pointer h-9.5 px-4 rounded-lg border-2 border-zinc-50 shadow bg-white transition hover:bg-zinc-50">
                  Добавить в закладки
                  <i className="ml-1 text-lg ri-bookmark-line"></i>
                </button>
              </div>
            </div>

            <div className="p-10 max-lg:order-1 max-lg:p-0">
              <div
                className="aspect-3/2 rounded-xl overflow-hidden relative"
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const { left, top, width, height } = card.getBoundingClientRect();
                  const x = e.clientX - left;
                  const y = e.clientY - top;
                  const rotateY = (x / width - 0.5) * 20; // Наклон влево-вправо
                  const rotateX = -(y / height - 0.5) * 20; // Наклон вверх-вниз

                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transition = "transform 0.3s ease-out";
                  e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
                }}
              >
                <Image src={course.cover} alt={course.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-10">
          <div className="flex max-lg:flex-col gap-x-10 gap-y-6">
            <div className="w-full">
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat quae doloribus placeat ea? Quasi iusto ipsum repellendus accusamus minus culpa, incidunt porro labore, sed ab assumenda rerum maxime esse?</div>

              <div className="bg-white border-2 border-zinc-100 rounded-lg shadow-sm shadow-zinc-100 my-10">
                <div className="flex items-center pr-10">
                  <div className="flex flex-col space-y-2 py-4 px-6">
                    <div className="font-medium">Obtain a Career Certificate.</div>
                    <div className="text-sm">Add these credentials to your Linkedin profile, resume, or CV. Share them on social media and in your performance reviews.</div>
                  </div>
                  <div className="max-sm:hidden aspect-3/2 w-48 h-full flex rounded bg-white border border-zinc-200 shadow-xl shadow-zinc-200 scale-130">
                    <div className="flex w-full">
                      <div className="flex flex-col items-center justify-center w-full px-4 scale-125">
                        <span className="h-0.5 w-4 bg-zinc-400 mb-1"></span>
                        <span className="h-0.5 w-10 bg-zinc-200 mb-0.5"></span>
                        <span className="h-0.5 w-8 bg-zinc-200 mb-0.5"></span>
                        <span className="h-0.5 w-6 bg-zinc-200 mb-0.5"></span>
                        <div className="flex space-x-4 mt-4">
                          <span className="h-0.5 w-4 bg-indigo-500"></span>
                          <span className="h-0.5 w-4 bg-indigo-500"></span>
                        </div>
                      </div>
                      <div className="w-5 h-full shrink-0 bg-purple-100 ml-auto mr-2 relative">
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 size-6 rounded-full flex items-center justify-center bg-zinc-950 text-white ring-2 ring-white">C</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mb-4 space-y-1">
                <div className="text-xl font-semibold">Course content</div>
                <div className="flex text-sm text-zinc-500">3 section • 14 chapters</div>
              </div>
              <ul className="w-full divide-y divide-zinc-200 border border-zinc-200 rounded-lg overflow-hidden">
                {accordionItems.map((item, index) => {
                  const isOpen = openIndexes.includes(index);
                  return (
                    <li key={index} className="overflow-hidden">
                      <button type="button" className="cursor-pointer outline-none bg-zinc-100 w-full p-4 flex items-center justify-between transition hover:bg-zinc-200/50" onClick={() => toggleItem(index)}>
                        <span className="font-medium text-left">{item.title}</span>
                        <div className="ml-auto flex items-center">
                          <span className="text-sm font-medium whitespace-nowrap max-sm:hidden">{item.chapters.length} chapters</span>
                          <span className="ml-3 w-10 h-5 flex items-center justify-center border-l border-zinc-200">
                            <i className={clsx("text-lg transition-transform duration-300 ease-in-out ri-arrow-down-s-line", { "rotate-180": isOpen })} />
                          </span>
                        </div>
                      </button>
                      <ul className={clsx("grid transition-[grid-template-rows] duration-300 ease-in-out", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] invisible")}>
                        <div className="overflow-hidden">
                          {item.chapters.map((chapter, idx) => (
                            <li key={idx}>
                              <Link href="/customlesson" className="flex items-baseline space-x-4 p-4 bg-white border-t border-zinc-200 transition hover:bg-zinc-50">
                                <i className={`text-lg text-zinc-500 ${chapter.icon}`}></i>
                                <span className="text-sm">{chapter.text}</span>
                              </Link>
                            </li>
                          ))}
                        </div>
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-96 max-lg:w-full shrink-0">
              <div className="p-6 border-2 border-zinc-100 bg-zinc-50 rounded-md sticky top-4">
                <div className="grid max-lg:grid-cols-2 max-md:grid-cols-1 gap-y-6">
                  <div className="flex flex-col space-y-4">
                    <div className="font-semibold">Содержание</div>
                    <ul className="space-y-1">
                      <li>
                        <div className="flex items-baseline space-x-3">
                          <i className="text-lg ri-time-line"></i>
                          <span className="text-sm">Оценочное время – 3 часа</span>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-baseline space-x-3">
                          <i className="text-lg text-yellow-400 ri-copper-coin-fill"></i>
                          <span className="text-sm">100 очков</span>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-baseline space-x-3">
                          <i className="text-lg ri-translate"></i>
                          <span className="text-sm">Русский</span>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-baseline space-x-3">
                          <i className="text-lg ri-verified-badge-line"></i>
                          <span className="text-sm">Сертификат об окончании обучения</span>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-baseline space-x-3">
                          <i className="text-lg ri-calendar-line"></i>
                          <span className="text-sm">Ограничений по сроку изучения нет</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <div className="font-semibold">Преподаватель</div>
                    <Link href="#" className="flex items-center space-x-4">
                      <div className="size-10 rounded-full shrink-0 overflow-hidden relative">
                        <Image src={course.poster} alt={course.title} fill />
                      </div>
                      <div className="flex flex-col text-sm">
                        <div className="font-medium">{course.teacher}</div>
                        <div className="text-zinc-500">Автор контента</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
