interface IPartOfSpeech {
  title: string
}

export const PartOfSpeech: React.FC<IPartOfSpeech> = ({title}) => {
  return (
    <div className="flex flex-row items-center w-full gap-5">
      <p className="text-2xl font-semibold">{title}</p>
      <div className="bg-gray-300 w-full h-[0.5px]"></div>
    </div>
  )
}