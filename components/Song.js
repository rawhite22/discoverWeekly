import useAudio from '../hooks/useAudio'
import Image from 'next/image'
function Song({ track }) {
  const [playing, toggle, audio] = useAudio(track.preview_url)
  return (
    <div>
      <Image src={track.album.images[1].url} height='300px' width='300px' />
      <p>{track.name}</p>
      {track.artists.map((artist) => (
        <p key={artist.id}>{artist.name}</p>
      ))}
      <p onClick={() => toggle()}>play</p>
    </div>
  )
}
export default Song
