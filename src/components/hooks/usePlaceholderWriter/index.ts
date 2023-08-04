import { useEffect, useState } from 'react'

export const usePlaceholderWriter = (words: string[]) => {
  const [currentView, setCurrentView] = useState('')
  const [currentViewIndex, setCurrentViewIndex] = useState(0)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [addition, setAddition] = useState(1)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentView(words[currentWordIndex].slice(0, currentViewIndex))
      if (
        currentViewIndex + addition <= words[currentWordIndex].length &&
        currentViewIndex + addition >= 0
      ) {
        setCurrentViewIndex(currentViewIndex + addition)

        if (currentViewIndex + addition === words[currentWordIndex].length)
          setAddition(-1)
        else if (currentViewIndex + addition === 0) setAddition(1)

        if (currentViewIndex + addition === 0)
          setCurrentWordIndex((currentWordIndex + 1) % words.length)
      }
    }, 150)

    return () => {
      clearInterval(intervalId)
    }
  })

  return currentView
}
