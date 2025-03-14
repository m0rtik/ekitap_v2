export default function Filter() {
  return (
    <div className="flex items-center">
      <div className="flex gap-2">
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
      <div className="flex items-center gap-6 w-full">
        <label className="relative ml-auto">
          <span className="cursor-text absolute left-0 top-0 size-9.5 flex items-center justify-center">
            <i className="text-lg ri-search-line"></i>
          </span>
          <input type="search" className="text-sm outline-none h-9.5 pl-9.5 pr-2 w-28 rounded transition-all focus:w-96 focus-within:bg-zinc-100" placeholder="Поиск..." />
        </label>
        <span className="h-5 w-px bg-zinc-200"></span>
        <button type="button" className="flex space-x-1 items-center font-medium cursor-pointer transition hover:text-blue-600 focus:text-blue-500">
          <i className="text-lg ri-filter-2-line"></i>
          <span className="text-sm">Фильтры</span>
        </button>

        <button type="button" className="flex space-x-1 items-center font-medium cursor-pointer transition hover:text-blue-600 focus:text-blue-500">
          <i className="text-lg ri-expand-up-down-line"></i>
          <span className="text-sm">По убыванию</span>
        </button>

        <div className="flex rounded-md overflow-hidden">
          <label>
            <input type="radio" name="view" value="grid" className="peer hidden" defaultChecked={true} />
            <span className="cursor-pointer whitespace-nowrap font-medium flex items-center justify-center size-9 text-zinc-500 bg-zinc-100 transition hover:bg-zinc-200/50 peer-checked:hover:bg-zinc-200 peer-checked:bg-zinc-300 peer-checked:text-zinc-950 select-none">
              <i className="ri-layout-grid-fill"></i>
            </span>
          </label>
          <label>
            <input type="radio" name="view" value="list" className="peer hidden" />
            <span className="cursor-pointer whitespace-nowrap font-medium flex items-center justify-center size-9 text-zinc-500 bg-zinc-100 transition hover:bg-zinc-200/50 peer-checked:hover:bg-zinc-200 peer-checked:bg-zinc-300 peer-checked:text-zinc-950 select-none">
              <i className="ri-list-check"></i>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
