
interface ISource {
  url: string
}

export const Source: React.FC<ISource> = ({url}) => {
  return (
    <div className="pt-10">
      <p className="text-gray-500 sm:inline-flex">Source: 
        <a href={url} target="_blank" className="flex flex-row items-center gap-2 sm:ml-6 underline text-black">{url}
          <span>
            <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>  
          </span>
        </a>
      </p>
    </div>
  )
}