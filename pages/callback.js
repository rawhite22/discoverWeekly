import { useRouter } from 'next/router'
import { getCookies, setCookie, deleteCookie } from 'cookies-next'
import { useEffect } from 'react'

function Callback() {
  const router = useRouter()
  const tokenPath = router.asPath
  const spotifyAuthObj = tokenPath
    .slice(tokenPath.indexOf('#') + 1)
    .split('&')
    .reduce((prev, curr) => {
      const [title, value] = curr.split('=')
      prev[title] = value
      return prev
    }, {})

  useEffect(() => {
    const cookies = getCookies()
    if (cookies.spotify_token) {
      deleteCookie('spotify_token')
    }
    setCookie('spotify_token', spotifyAuthObj.access_token, {
      sameSite: 'Lax',
    })
    router.push('/home')
  }, [])
  return <div>Callback</div>
}
export default Callback
