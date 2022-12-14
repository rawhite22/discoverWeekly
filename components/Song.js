import useAudio from '../hooks/useAudio'
import Image from 'next/image'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/pro-solid-svg-icons'
const SongContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ImgContainer = styled.div`
  max-height: 300px;
  max-width: 300px;
`

function Song({ track }) {
  const [playing, toggle, audio] = useAudio(track.preview_url)
  return (
    <SongContainer>
      <ImgContainer>
        <Image src={track.album.images[1].url} height={300} width={300} />
      </ImgContainer>
      <p>{track.name}</p>
      {track.artists.map((artist) => (
        <p key={artist.id}>{artist.name}</p>
      ))}
      <p onClick={() => toggle()}>
        {playing ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </p>
    </SongContainer>
  )
}
export default Song
