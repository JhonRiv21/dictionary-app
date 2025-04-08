const api = "https://api.dictionaryapi.dev/api/v2/entries/en"

export const searchInDictionary = async (word: string) => {
  try {
    const res = await fetch(`${api}/${word}`)
    const data = await res.json()
    if (res.ok) {
      return data;
    } else {
      throw new Error(data?.message || 'Fetch error')
    }
  } catch (e) {
    throw new Error(`Error ${e}`)
  }
}