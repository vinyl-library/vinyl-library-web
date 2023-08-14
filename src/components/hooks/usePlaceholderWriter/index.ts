import { useEffect, useState } from 'react'

export const usePlaceholderWriter = (words: string[]) => {
  const [currentView, setCurrentView] = useState('')

  const [currentParams, setCurrentParams] = useState<{
    viewIndex: number
    wordIndex: number
    ongoing: 'FORWARD' | 'BACKWARD' | 'PAUSE_TO_FORWARD' | 'PAUSE_TO_BACKWARD'
  }>({
    viewIndex: 0,
    wordIndex: 0,
    ongoing: 'FORWARD',
  })
  const PAUSE_MS = 450
  const FORWARD_WRITE_MS = 200
  const BACKWARD_WRITE_MS = 100

  useEffect(() => {
    const { viewIndex, wordIndex, ongoing } = currentParams

    if (ongoing === 'PAUSE_TO_BACKWARD' || ongoing === 'PAUSE_TO_FORWARD') {
      setTimeout(() => {
        const nextOngoing =
          ongoing === 'PAUSE_TO_BACKWARD' ? 'BACKWARD' : 'FORWARD'
        setCurrentParams({
          viewIndex,
          wordIndex,
          ongoing: nextOngoing,
        })
      }, PAUSE_MS)
      return
    }

    setCurrentView(words[wordIndex].slice(0, viewIndex))

    if (ongoing === 'FORWARD') {
      if (viewIndex + 1 <= words[wordIndex].length) {
        setTimeout(() => {
          setCurrentParams({
            viewIndex: viewIndex + 1,
            wordIndex,
            ongoing,
          })
        }, FORWARD_WRITE_MS)
      } else {
        setCurrentParams({
          viewIndex,
          wordIndex,
          ongoing: 'PAUSE_TO_BACKWARD',
        })
      }
    }

    if (ongoing === 'BACKWARD') {
      if (viewIndex - 1 >= 0) {
        setTimeout(() => {
          setCurrentParams({
            viewIndex: viewIndex - 1,
            wordIndex,
            ongoing,
          })
        }, BACKWARD_WRITE_MS)
      } else {
        setCurrentParams({
          viewIndex,
          wordIndex: (wordIndex + 1) % words.length,
          ongoing: 'PAUSE_TO_FORWARD',
        })
      }
    }
  })

  return currentView
}
