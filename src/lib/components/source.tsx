
interface ISource {
  url: string
}

export const Source: React.FC<ISource> = ({url}) => {
  return (
    <div className="pt-10 mr-auto">
      <p className="text-gray-500 font-medium text-lg sm:inline-flex dark:text-gray-200">Source: 
        <a href={url} target="_blank" className="flex flex-row break-all items-center gap-2 text-sm sm:text-base sm:ml-6 underline text-black dark:text-gray-200">{url}
          <span>
            <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>  
          </span>
        </a>
      </p>
    </div>
  )
}