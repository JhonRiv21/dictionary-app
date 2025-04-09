import React from "react"
import { Definition } from "../interfaces/dictionary"

interface MeaningListProps {
  definitions: Definition[];
  partOfSpeech?: string;
}

export const Definitions: React.FC<MeaningListProps> = ({ definitions, partOfSpeech }) => {
  if (!definitions || definitions.length === 0) return null;
  return (
    <div>
      <h5 className="text-lg md:text-xl pt-5 text-[var(--light-gray)] font-semibold">Meaning</h5>
      <ul className="space-y-4 pt-5 ml-6">
        {definitions.map((def, k) => (
          <React.Fragment key={k + 'k'}>
            <li className="flex items-start gap-5 text-sm md:text-base">
              <span className="p-[3px] rounded-full bg-black dark:bg-[var(--light-gray)] mt-2"></span>
              <span>
                {def.definition}
                {partOfSpeech === 'verb' && def.example && (
                  <p className="text-[var(--gray)] font-medium py-1">"{def.example}"</p>
                )}
              </span>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  )
}