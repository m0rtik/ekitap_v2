"use client";

import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Русский язык. Общественно-гуманитарное направление",
    grade: "10 класс",
    progress: 80,
    image: "https://skillbox.kz/landing-assets/c4/7e/4b50fbee74e8d5be2ec2fceeeee8.webp",
  },
  {
    id: 2,
    title: "Профессия Художник компьютерной графики",
    grade: "Курс",
    progress: 30,
    image: "https://skillbox.kz/landing-assets/55/f2/b1069e3743f27d501ca515b24ea6.webp",
  },
];

export default function ContinueLearning() {
  return (
    <section>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Продолжить обучение</h2>

        <div className="grid grid-cols-2 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white border border-zinc-200 rounded-xl p-2 pr-4">
              <div className="flex gap-x-4">
                <Link href="#" className="aspect-3/2 w-48 shrink-0 rounded-lg overflow-hidden relative">
                  <Image src={course.image} alt={course.title} layout="fill" objectFit="cover" />
                  <div className="absolute top-2 left-2">
                    <span className="flex items-center gap-x-1 bg-zinc-950/75 rounded text-xs text-zinc-50 font-medium h-5 px-1.5">
                      12 материалов
                      <i className="ri-bill-line"></i>
                    </span>
                  </div>
                </Link>

                <div className="flex flex-col py-2 w-full">
                  <div className="flex space-x-1 mb-1.5">
                    <span className="size-4.5 bg-sky-500 rounded flex items-center justify-center shrink-0 text-zinc-50 text-xs">
                      <i className="ri-bill-line"></i>
                    </span>
                    <span className="text-zinc-500 text-sm font-medium">{course.grade}</span>
                  </div>
                  <Link href="#" className="line-clamp-2 font-semibold text-sm transition hover:text-blue-600">
                    {course.title}
                  </Link>

                  <div className="flex gap-x-4 mt-auto">
                    <div className="flex flex-col space-y-1 w-full">
                      <div className="text-sm font-medium text-zinc-500">
                        Прогресс: <span className="text-zinc-950">{course.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden relative">
                        <div className="absolute h-full rounded-full bg-emerald-500" style={{ width: `${course.progress}%` }}></div>
                      </div>
                    </div>

                    <button type="button" className="text-sm h-9 px-2 flex items-center rounded-md transition-all cursor-pointer shadow shadow-zinc-100 border border-zinc-200 hover:text-blue-600 hover:bg-zinc-50 active:bg-zinc-100 focus:border-zinc-300">
                      Продолжить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
