import { useState, useEffect } from 'react'

const useAudio = (url) => {
  const [audio, setAudio] = useState(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    setAudio(new Audio(url))
  }, [])
  useEffect(() => {
    if (audio) {
      playing ? audio.play() : audio.pause()
    }
  }, [playing])

  useEffect(() => {
    if (audio) {
      audio.addEventListener('ended', () => setPlaying(false))
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false))
      }
    }
  }, [])

  return [playing, toggle, audio]
}

export default useAudio
