import { useEffect, useState } from "react";

function Header() {
  const [ selectedFont, setSelectedFont ] = useState('playfair')
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    const savedFont = localStorage.getItem('selectedFont') || 'playfair';
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedChecked = localStorage.getItem('checked') === 'true';

    setSelectedFont(savedFont)
    setIsChecked(savedChecked);

    document.documentElement.style.setProperty('--active-font', `var(--font-${savedFont})`);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, [])

  const changeFont = (font: string) => {
    setSelectedFont(font)
    localStorage.setItem('selectedFont', font);
    document.documentElement.style.setProperty('--active-font', `var(--font-${font})`);
  }

  const changeTheme = () => {
    const nextChecked = !isChecked;
    const nextTheme = nextChecked ? 'dark' : 'light';

    setIsChecked(nextChecked);
    localStorage.setItem('theme', nextTheme);
    localStorage.setItem('checked', String(nextChecked));
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  return (
    <>
      <header className='flex flex-row  flex-wrap gap-2 justify-between w-full items-center px-5 md:px-0 py-5'>
        <div className="">
          <svg width="40" height="40" viewBox="0 0 24 24"><path className="fill-[var(--light-gray)]" d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3M5 8V5c0-.805.55-.988 1-1h13v12H5z"/><path className="fill-(--light-gray)" d="M8 6h9v2H8z"/></svg>
        </div>

        <div className="flex flex-row flex-wrap gap-5 items-center justify-center">
          <select value={selectedFont} className="outline-none p-2 rounded cursor-pointer" onChange={(e) => changeFont(e.target.value)}>
            <option className="dark:text-black" value="playfair">Playfair Display</option>
            <option className="dark:text-black" value="inter">Inter</option>
            <option className="dark:text-black" value="merriweather">Merriweather</option>
          </select>
          
          <div className="h-5 w-[2px] bg-gray-300"></div>
          
          <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={changeTheme}
              className='sr-only'
            />
           <svg width="20" height="20" viewBox="0 0 24 24"><path className="fill-(--light-gray)" d="M12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17M2 13q-.425 0-.712-.288T1 12t.288-.712T2 11h2q.425 0 .713.288T5 12t-.288.713T4 13zm18 0q-.425 0-.712-.288T19 12t.288-.712T20 11h2q.425 0 .713.288T23 12t-.288.713T22 13zm-8-8q-.425 0-.712-.288T11 4V2q0-.425.288-.712T12 1t.713.288T13 2v2q0 .425-.288.713T12 5m0 18q-.425 0-.712-.288T11 22v-2q0-.425.288-.712T12 19t.713.288T13 20v2q0 .425-.288.713T12 23M5.65 7.05L4.575 6q-.3-.275-.288-.7t.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7t-.275.7t-.687.288t-.713-.288M18 19.425l-1.05-1.075q-.275-.3-.275-.712t.275-.688q.275-.3.688-.287t.712.287L19.425 18q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3M16.95 7.05q-.3-.275-.288-.687t.288-.713L18 4.575q.275-.3.7-.288t.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275t-.7-.275M4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.712-.275t.688.275q.3.275.288.688t-.288.712L6 19.425q-.275.3-.7.288t-.725-.288"/></svg>
            <span
              className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
                isChecked ? 'bg-gray-400' : 'bg-[#CCCCCE]'
              }`}
            >
              <span
                className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                  isChecked ? 'translate-x-[28px]' : ''
                }`}
              ></span>
            </span>
            <span>
              <svg width="20" height="20" viewBox="0 0 24 24"><path fill="none" className="stroke-(--light-gray)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"/></svg>
            </span>
          </label>
          
        </div>
      </header>
    </>
  )
}

export default Header
