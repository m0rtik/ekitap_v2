import Image from "next/image";

export default function Home() {
  return (
    <div className="container py-10">
      <section className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">Диас, рады тебя видеть!</h1>
            <div className="text-zinc-500">С возвращением в Ekitap! Посмотри, какие занятия у тебя сегодня в расписании.</div>
          </div>

          <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-4">
            <div className="border-2 border-zinc-200 rounded-md p-2 min-w-40">
              <div className="flex space-x-2">
                <i className="text-xl text-yellow-400 ri-coins-line"></i>
                <div className="flex flex-col">
                  <span className="font-medium">100</span>
                  <span className="text-sm text-zinc-500">Баллов</span>
                </div>
              </div>
            </div>
            <div className="border-2 border-zinc-200 rounded-md p-2 min-w-40">
              <div className="flex space-x-2">
                <i className="text-xl text-yellow-400 ri-medal-line"></i>
                <div className="flex flex-col">
                  <span className="font-medium">32</span>
                  <span className="text-sm text-zinc-500">Награды</span>
                </div>
              </div>
            </div>
            <div className="border-2 border-zinc-200 rounded-md p-2 min-w-40">
              <div className="flex space-x-2">
                <i className="text-xl text-yellow-400 ri-verified-badge-line"></i>
                <div className="flex flex-col">
                  <span className="font-medium">12</span>
                  <span className="text-sm text-zinc-500">Сертификатов</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-md relative">
          <div className="flex items-center">
            <Image className="rotate-180 relative -top-2 pr-4" src="https://optim.tildacdn.com/tild6532-3761-4235-b930-383538656333/-/resize/200x/-/format/webp/9.png.webp" alt="cat" layout="intrinsic" width={100} height={109} />
            <div className="flex flex-col px-4">
              <div className="text-lg font-semibold">Feature Discussion</div>
              <div className="mt-1">The learning content are a new feature in Feature Discussion can be explain the material problem chat. Go to detail →</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
