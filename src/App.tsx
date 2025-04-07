
function App() {

  return (
    <>
      <main className='mx-auto flex flex-col justify-center items-center px-5 py-10 space-y-10'>

        <div className="w-full">
          <div className="relative">
            <input className="bg-gray-100 w-full py-3 px-3 rounded-xl "/>
            <span className="absolute right-4 top-3.5 pointer-events-none">
              <svg width="20" height="20" viewBox="0 0 24 24"><path fill="none" className="stroke-(--light-gray)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.553 15.553a7.06 7.06 0 1 0-9.985-9.985a7.06 7.06 0 0 0 9.985 9.985m0 0L20 20"/></svg>
            </span>
          </div>
        </div>

        <div className="flex flex-row justify-between w-full items-center">
          <div>
            <h1 className="text-5xl font-bold">keyboard</h1>
            <p className="text-(--purple) text-xl pt-2 font-medium">/ki:b:c:d/</p>
          </div>

          <button className="bg-(--light-purple) p-4 rounded-full flex hover:bg-(--light-purple)/80 transition duration-500">
            <svg width="20" height="20" viewBox="0 0 512 512"><path className="fill-(--purple) hover:bg-(--purple)/80" d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"/></svg>
          </button>
        </div>

        <div className="flex flex-row items-center w-full gap-5">
          <p className="text-2xl font-semibold">noun</p>
          <div className="bg-gray-300 w-full h-[0.5px]"></div>
        </div>

        <div className="mr-auto">
            <div>
              <h5 className="text-lg text-gray-400 font-semibold">Meaning</h5>
              <ul className="space-y-4 pt-5">
                <li className="flex items-center gap-5 text-sm">
                  <span className="w-[14px] h-[6px] rounded-full bg-black"></span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem architecto eum iste officiis dolorum, quaerat, eaque deleniti quos, modi sunt voluptas quasi delectus consectetur officia nisi voluptates rerum quia natus!
                </li>
                <li className="flex items-center gap-5 text-sm">
                  <span className="w-[14px] h-[6px] rounded-full bg-black"></span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem architecto eum iste officiis dolorum, quaerat, eaque deleniti quos, modi sunt voluptas quasi delectus consectetur officia nisi voluptates rerum quia natus!
                </li>
              </ul>
            </div>

            <div className="pt-10">
              <h5 className="text-lg text-gray-400 font-semibold">Sinonymous <span className="text-(--purple) font-bold ml-5">electronic keyboard</span></h5>
              
            </div>
        </div>

        <div className="flex flex-row items-center w-full gap-5">
          <p className="text-2xl font-semibold">verb</p>
          <div className="bg-gray-300 w-full h-[0.5px]"></div>
        </div>

        <div className="mr-auto">
          <div>
            <h5 className="text-lg text-gray-400 font-semibold">Meaning</h5>
            <ul className="space-y-2 pt-5">
              <li className="flex items-center gap-5 text-sm">
                <span className="p-[3px] rounded-full bg-black"></span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <span className="ml-6.5 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </ul>
          </div>

          <div className="pt-10">
            <h5 className="text-lg text-gray-400 font-semibold">Sinonymous <span className="text-(--purple) font-bold ml-5">electronic keyboard</span></h5>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
