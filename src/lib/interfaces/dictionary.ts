export interface IPhonetics {
  text: string
  sourceUrl?: string
  audio?: string
}

export interface IMeanings {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[];
  antonyms: string[];
}

export interface Definition {
  definition: string
  example?: string
}

export interface DictionaryEntry {
  word: string
  phonetic?: string
  phonetics: IPhonetics[]
  meanings: IMeanings[]
  sourceUrls?: string
}
