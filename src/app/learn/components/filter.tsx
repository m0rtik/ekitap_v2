export default function Filter() {
  return (
    <div className="flex items-center max-lg:flex-col-reverse max-lg:items-start">
      <div className="flex gap-2 flex-wrap mr-4 max-lg:mr-0 max-lg:mt-4">
        <label>
          <input type="radio" name="status" value="all" className="hidden peer" defaultChecked={true} />
          <span className="cursor-pointer whitespace-nowrap text-sm font-medium flex items-center justify-center h-9.5 px-4 rounded-full text-zinc-500 bg-zinc-100 transition hover:bg-zinc-200/50 peer-checked:hover:bg-zinc-200 peer-checked:bg-zinc-300 peer-checked:text-zinc-950 select-none">Все</span>
        </label>
        <label>
          <input type="radio" name="status" value="not_started" className="hidden peer" />
          <span className="cursor-pointer whitespace-nowrap text-sm font-medium flex items-center justify-center h-9.5 px-4 rounded-full text-zinc-500 bg-zinc-100 transition hover:bg-zinc-200/50 peer-checked:hover:bg-zinc-200 peer-checked:bg-zinc-300 peer-checked:text-zinc-950 select-none">Не начато</span>
        </label>
        <label>
          <input type="radio" name="status" value="in_progress" className="hidden peer" />
          <span className="cursor-pointer whitespace-nowrap text-sm font-medium flex items-center justify-center h-9.5 px-4 rounded-full text-zinc-500 bg-zinc-100 transition hover:bg-zinc-200/50 peer-checked:hover:bg-zinc-200 peer-checked:bg-zinc-300 peer-checked:text-zinc-950 select-none">В процессе</span>
        </label>
        <label>
          <input type="radio" name="status" value="completed" className="hidden peer" />
          <span className="cursor-pointer whitespace-nowrap text-sm font-medium flex items-center justify-center h-9.5 px-4 rounded-full text-zinc-500 bg-zinc-100 transition hover:bg-zinc-200/50 peer-checked:hover:bg-zinc-200 peer-checked:bg-zinc-300 peer-checked:text-zinc-950 select-none">Завершено</span>
        </label>
      </div>
      <div className="flex items-center gap-6 relative ml-auto overflow-auto max-lg:ml-0 max-lg:w-full">
        <label className="relative">
          <span className="cursor-text absolute left-0 top-0 size-9.5 flex items-center justify-center">
            <i className="text-lg ri-search-line"></i>
          </span>
          <input type="search" className="text-sm outline-none h-9.5 pl-9.5 pr-2 w-28 max-sm:w-24 rounded-md transition-all focus:w-96 max-sm:focus:w-72 focus:bg-zinc-100" placeholder="Поиск..." />
        </label>

        <span className="h-5 w-px bg-zinc-200 max-lg:ml-auto"></span>

        <button type="button" className="flex items-center font-medium cursor-pointer transition hover:text-blue-600 focus:text-blue-500">
          <i className="text-lg ri-filter-2-line"></i>
          <span className="ml-1 text-sm whitespace-nowrap max-sm:hidden">Фильтры</span>
        </button>

        <button type="button" className="flex items-center font-medium cursor-pointer transition hover:text-blue-600 focus:text-blue-500">
          <i className="text-lg ri-sort-desc"></i>
          <span className="ml-1 text-sm whitespace-nowrap max-sm:hidden">По убыванию</span>
        </button>

        <div className="flex">
          <label>
            <input type="radio" name="view" value="grid" className="peer hidden" defaultChecked={true} />
            <span className="rounded-l-md cursor-pointer whitespace-nowrap font-medium flex items-center justify-center size-9 text-zinc-500 bg-zinc-100 transition hover:bg-zinc-200/50 peer-checked:hover:bg-zinc-200 peer-checked:bg-zinc-300 peer-checked:text-zinc-950 select-none">
              <i className="ri-layout-grid-fill"></i>
            </span>
          </label>
          <label>
            <input type="radio" name="view" value="list" className="peer hidden" />
            <span className="rounded-r-md cursor-pointer whitespace-nowrap font-medium flex items-center justify-center size-9 text-zinc-500 bg-zinc-100 transition hover:bg-zinc-200/50 peer-checked:hover:bg-zinc-200 peer-checked:bg-zinc-300 peer-checked:text-zinc-950 select-none">
              <i className="ri-list-check"></i>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
