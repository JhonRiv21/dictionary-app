import { ChangeEventHandler } from "react"

interface ISearcher {
  val: string
  change: ChangeEventHandler<HTMLInputElement>
}

export const Searcher: React.FC<ISearcher> = ({val, change}) => {
  return (
    <div className="w-full">
      <div className="relative">
        <input value={val} onChange={change} className="bg-gray-100 border border-gray-300 dark:text-black w-full py-3 px-3 rounded-xl "/>
        <span className="absolute right-4 top-3.5 pointer-events-none">
          <svg width="20" height="20" viewBox="0 0 24 24"><path fill="none" className="stroke-(--light-gray)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.553 15.553a7.06 7.06 0 1 0-9.985-9.985a7.06 7.06 0 0 0 9.985 9.985m0 0L20 20"/></svg>
        </span>
      </div>
    </div>
  )
}