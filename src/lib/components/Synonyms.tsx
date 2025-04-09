interface ISynonyms {
  synonyms: string[];
  partOfSpeech?: string;
}

export const Synonyms: React.FC<ISynonyms> = ({ synonyms, partOfSpeech }) => {
  if (synonyms.length === 0 || partOfSpeech !== 'noun') return null;

  return (
    <div className="flex flex-row flex-wrap items-center pt-10">
      <h5 className="text-lg text-[var(--light-gray)] font-semibold">Synonyms</h5>
      <ul className="flex flex-row flex-wrap">
        {synonyms.map((sin, idx) => (
          <li key={idx + 'idx'} className="text-(--purple) text-lg font-bold ml-5">
            {sin}
          </li>
        ))}
      </ul>
    </div>
  )
}