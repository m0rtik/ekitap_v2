"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Filter from "@/app/learn/components/filter";

interface Course {
  id: number;
  title: string;
  cover: string;
  poster: string;
  grade: string;
  progress: number | null;
  materials: number;
}

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const progressRefs = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    setCourses([
      {
        id: 1,
        title: "Русский язык. Общественно-гуманитарное направление",
        cover: "https://skillbox.kz/landing-assets/c4/7e/4b50fbee74e8d5be2ec2fceeeee8.webp",
        poster: "https://cdn.stepik.net/media/cache/images/courses/63054/cover_foIuz1t/6bc976a3abd69e9e3e5163a5973a8ccf.jpg",
        grade: "10 класс",
        progress: 40,
        materials: 12,
      },
      {
        id: 2,
        title: "Математика. Профильное обучение",
        cover: "https://skillbox.kz/landing-assets/55/f2/b1069e3743f27d501ca515b24ea6.webp",
        poster: "https://cdn.stepik.net/media/cache/images/courses/5482/cover/a3debb6072c4e93374428fd41821601c.png",
        grade: "11 класс",
        progress: 60,
        materials: 20,
      },
      {
        id: 3,
        title: "Физика. Основы механики",
        cover: "https://skillbox.kz/landing-assets/e1/2d/c4deeffa1fe1732d3a89f3cde96b.webp",
        poster: "https://cdn.stepik.net/media/cache/images/courses/100707/cover_K4JOB7c/6c361261be53b501e6ba814dcc659222.png",
        grade: "9 класс",
        progress: 86,
        materials: 10,
      },
      {
        id: 4,
        title: "История Казахстана",
        cover: "https://skillbox.kz/landing-assets/bf/33/5825b808b2bdd5d16742ba2097ad.webp",
        poster: "https://cdn.stepik.net/media/cache/images/courses/76/cover_6b82dH3/72cf178b90f7b2daf7ecd67d6c430d19.jpg",
        grade: "10 класс",
        progress: null,
        materials: 15,
      },
      {
        id: 5,
        title: "Биология. Генетика и эволюция",
        cover: "https://skillbox.kz/landing-assets/b5/fb/fdd26dc379336d168a59863cbdc5.webp",
        poster: "https://cdn.stepik.net/media/cache/images/courses/158385/cover_SPaHBeA/76ef14008f9f02b0fbd97cd39c6f4e34.png",
        grade: "11 класс",
        progress: 20,
        materials: 18,
      },
      {
        id: 6,
        title: "Химия. Органическая химия",
        cover: "https://skillbox.kz/landing-assets/30/e7/9dbaf9c2a95207def3c86fee3fe7.webp",
        poster: "https://cdn.stepik.net/media/cache/images/courses/116411/cover_wdkTnL7/23cf42965b1d2c47d6f305292a4ff707.jpg",
        grade: "10 класс",
        progress: null,
        materials: 22,
      },
    ]);
  }, []);

  useEffect(() => {
    progressRefs.current.forEach((el, index) => {
      if (!el || courses[index]?.progress === null) return;
      const r = el.r.baseVal.value;
      const c = 2 * Math.PI * r;
      el.style.strokeDasharray = `${c} ${c}`;
      el.style.strokeDashoffset = `${c}`;

      const setProgress = (p: number) => {
        el.style.strokeDashoffset = `${c - (p / 100) * c}`;
        el.style.stroke = p > 85 ? "#00BC7D" : p < 45 ? "#FB2C36" : "#FDC700";
      };

      setProgress(courses[index].progress || 0);
    });
  }, [courses]);

  return (
    <section>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center">
          Все материалы <span className="text-xs font-medium ml-2 h-5 px-1.5 rounded bg-zinc-200 text-zinc-500 inline-flex items-center justify-center">{courses.length}</span>
        </h2>

        <Filter />

        <div className="grid grid-cols-[repeat(auto-fill,_minmax(min(260px,100%),_1fr))] gap-6 py-2">
          {courses.map((course, index) => (
            <article key={course.id} className="bg-white border border-zinc-200 rounded-xl p-2 pb-4">
              <div className="flex flex-col space-y-4 h-full">
                <Link href="#" className="aspect-3/2 w-full relative">
                  <Image src={course.cover} alt={course.title} fill className="rounded-lg object-cover" />
                  <div className="absolute top-2 left-2">
                    <span className="flex items-center gap-x-1 bg-zinc-950/75 rounded text-xs text-zinc-50 font-medium h-5 px-1.5">{course.materials} материалов</span>
                  </div>
                  <div className="absolute size-14 -bottom-4 right-4 ring-3 bg-white ring-white flex items-center justify-center rounded-md overflow-hidden">
                    <Image src={course.poster} alt={course.title} fill className="object-cover" />
                  </div>
                </Link>

                <div className="flex flex-col px-2 w-full">
                  <span className="text-zinc-500 text-sm font-medium">{course.grade}</span>
                  <Link href="#" className="line-clamp-2 font-semibold text-sm transition hover:text-blue-600">
                    {course.title}
                  </Link>
                </div>

                <div className="px-2 flex items-center space-x-1 text-sm font-medium text-zinc-500 mt-auto">
                  {course.progress === null ? (
                    <>
                      <span>Не начато</span>
                      <button className="cursor-pointer ml-auto text-sm h-9 px-2 flex items-center rounded-md border border-zinc-200 hover:text-blue-600 hover:bg-zinc-50">Начать обучение</button>
                    </>
                  ) : course.progress < 100 ? (
                    <>
                      <span>Прогресс:</span>
                      <svg className="progress-ring -rotate-90" width="20" height="20">
                        <circle stroke="#e5e7eb" strokeWidth="1" fill="transparent" r="8" cx="10" cy="10"></circle>
                        <circle
                          ref={(el) => {
                            if (el) progressRefs.current[index] = el;
                          }}
                          data-progress={course.progress}
                          strokeLinecap="round"
                          className="progress-ring__circle"
                          strokeWidth="2"
                          fill="transparent"
                          r="8"
                          cx="10"
                          cy="10"
                        ></circle>
                      </svg>
                      <span className="text-zinc-950">{course.progress}%</span>
                      <button className="cursor-pointer ml-auto text-sm h-9 px-2 flex items-center rounded-md border border-zinc-200 hover:text-blue-600 hover:bg-zinc-50">Продолжить</button>
                    </>
                  ) : (
                    <>
                      <span>Завершен:</span>
                      <Link href="#" className="h-9 flex items-center text-blue-600 transition hover:underline">
                        Получить сертификат
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
