import axios from 'axios'
import { getCookie } from 'cookies-next'
import Song from '../components/Song'

function Home({ discoverWeekly, tracks }) {
  console.log(discoverWeekly)
  console.log(tracks)
  return (
    <div>
      <p>{discoverWeekly.description}</p>
      {tracks.map((track) => (
        <Song key={track.track.id} track={track.track} />
      ))}
    </div>
  )
}
export default Home

export const getServerSideProps = async ({ req, res }) => {
  const token = getCookie('spotify_token', { req, res })
  const getAllPlaylists = await axios.get(
    'https://api.spotify.com/v1/me/playlists',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  const discoverWeekly = getAllPlaylists.data.items.filter(
    (playlist) => playlist.name === 'Discover Weekly'
  )
  const getDiscoverWeeklytracks = await axios.get(
    discoverWeekly[0].tracks.href,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return {
    props: {
      discoverWeekly: discoverWeekly[0],
      tracks: getDiscoverWeeklytracks.data.items,
    },
  }
}
