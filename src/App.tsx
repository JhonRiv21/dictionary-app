
import { useEffect, useState } from "react"
import { PartOfSpeech } from "./lib/components/PartOfSpeech"
import { Source } from "./lib/components/source"
import { searchInDictionary } from "./lib/services/dictionary";
import { DictionaryEntry } from "./lib/interfaces/dictionary";
import { Searcher } from "./lib/components/Searcher";
import { PhraseAndAudio } from "./lib/components/PhraseAndAudio";
import { Synonyms } from "./lib/components/Synonyms";
import { Definitions } from "./lib/components/Definitions";

function App() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ wordValue, setWordValue ] = useState('word');
  const [ data, setData ] = useState<DictionaryEntry[] | null>(null)

  const phonetic = data?.[0]?.phonetic ?? '';
  const audioUrl = data?.[0]?.phonetics?.find((p) => p.audio)?.audio ?? '';

  const searchData = async (word: string) => {
    setIsLoading(true) 
    try {
      const res = await searchInDictionary(word)
      setData(res)
    } catch (e) {
      console.error(e)
      setData(null)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      searchData(wordValue)
    }, 800)

    return () => {
      clearTimeout(handler)
    }
  }, [wordValue]);

  const renderStatus = () => {
    if (isLoading) return "Loading data...";
    if (!wordValue) return "Insert a word to search...";
    return null;
  };
  
  return (
    <>
      <main className='mx-auto flex flex-col justify-center items-center px-5 md:px-0 py-10 space-y-10'>

        <Searcher val={wordValue} change={(e) => setWordValue(e.target.value)} />

        <PhraseAndAudio word={wordValue}
          phonetic={phonetic}
          audioUrl={audioUrl}
        />

      {renderStatus() ? (
         <h2 className="text-4xl mt-20">{renderStatus()}</h2>
        ) : !data ? (
          <h2 className="text-4xl mt-20">Word not found in the dictionary</h2>
        ) : (
          <div>
            {data.map((item, i) => (
              <div key={i + 'i'}>
                {item.meanings.map((meaning, j) => (
                  <div key={j + 'j'}>
                    <PartOfSpeech title={meaning.partOfSpeech} />

                    <div className="mr-auto w-full">
                      <Definitions 
                        definitions={meaning?.definitions ?? []}
                        partOfSpeech={meaning?.partOfSpeech}
                      />

                      {
                        meaning.synonyms.length > 0 && meaning.partOfSpeech === 'noun' && (
                          <Synonyms 
                            synonyms={meaning?.synonyms}
                            partOfSpeech={meaning?.partOfSpeech}
                          />
                        )
                      }
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <Source url= {data[0]?.sourceUrls ?? ''} />
          </div>
        )}
      </main>
    </>
  )
}

export default App
