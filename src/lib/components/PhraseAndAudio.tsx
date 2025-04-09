interface IPhraseAndAudio {
  word: string
  phonetic: string
  audioUrl: string
}

export const PhraseAndAudio: React.FC<IPhraseAndAudio> = ({word, phonetic, audioUrl}) => {
  const playAudio = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl)
      audio.play()
    }
  }

  return (
    <div className="flex flex-wrap gap-4 flex-row justify-between w-full items-center -mb-1">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold">{word}</h1>   
          {phonetic && (
            <p className="text-(--purple) text-2xl md:text-3xl pt-2 font-bold">
              {phonetic}
            </p>
          )}
      </div>

      {audioUrl && (
        <button
          onClick={playAudio}
          className="bg-(--light-purple) cursor-pointer p-4 rounded-full flex hover:bg-(--light-purple)/80 transition duration-500"
        >
          <svg width="20" height="20" viewBox="0 0 512 512">
            <path className="fill-(--purple)" d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"/>
          </svg>
        </button>
      )}
    </div>
  )
}