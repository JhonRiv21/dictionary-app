function Header() {
  return (
    <>
      <header className='flex flex-row justify-between w-full items-center py-5'>
        <div className="">
          <svg width="40" height="40" viewBox="0 0 24 24"><path className="fill-(--light-gray)" d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3M5 8V5c0-.805.55-.988 1-1h13v12H5z"/><path className="fill-(--light-gray)" d="M8 6h9v2H8z"/></svg>
        </div>

        {/* <div className="flex flex-row gap-5 items-center justify-center">
          <div className="text-(--light-gray)">Serif</div>
          <div className="h-5 w-[2px] bg-gray-300"></div>
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider"></span>
          </label>
          <span>
            <svg width="20" height="20" viewBox="0 0 24 24"><path fill="none" className="stroke-(--light-gray)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"/></svg>
          </span>
        </div> */}
      </header>
    </>
  )
}

export default Header
