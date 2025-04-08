import { useEffect, useState } from "react";

function Header() {
  const [ selectedFont, setSelectedFont ] = useState('playfair')
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    const savedFont = localStorage.getItem('selectedFont') || 'playfair';
    setSelectedFont(savedFont)
    document.documentElement.style.setProperty('--active-font', `var(--font-${savedFont})`);
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const changeFont = (font: string) => {
    document.documentElement.style.setProperty('--active-font', `var(--font-${font})`);
    setSelectedFont(font)
    localStorage.setItem('selectedFont', font);
  }

  const changeTheme = () => {
    setIsChecked(!isChecked)
    const root = document.documentElement;
    const current = root.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }  

  return (
    <>
      <header className='flex flex-row justify-between w-full items-center px-5 md:px-0 py-5'>
        <div className="">
          <svg width="40" height="40" viewBox="0 0 24 24"><path className="fill-(--light-gray)" d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3M5 8V5c0-.805.55-.988 1-1h13v12H5z"/><path className="fill-(--light-gray)" d="M8 6h9v2H8z"/></svg>
        </div>

        <div className="flex flex-row gap-5 items-center justify-center">
          <select value={selectedFont} className="outline-none p-2 rounded" onChange={(e) => changeFont(e.target.value)}>
            <option value="playfair">Playfair Display</option>
            <option value="inter">Inter</option>
            <option value="merriweather">Merriweather</option>
          </select>
          
          {/* <div className="h-5 w-[2px] bg-gray-300"></div> */}
          
          {/* <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={changeTheme}
              className='sr-only'
            />
            <span className='label flex items-center text-sm font-medium text-black'>
              Light
            </span>
            <span
              className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
                isChecked ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
              }`}
            >
              <span
                className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                  isChecked ? 'translate-x-[28px]' : ''
                }`}
              ></span>
            </span>
            <span className='label flex items-center text-sm font-medium text-black'>
              Dark
            </span>
          </label> */}
          {/* 
          <span>
            <svg width="20" height="20" viewBox="0 0 24 24"><path fill="none" className="stroke-(--light-gray)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"/></svg>
          </span> */}
        </div>
      </header>
    </>
  )
}

export default Header
