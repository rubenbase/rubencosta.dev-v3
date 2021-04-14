import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Container from 'components/container'

const timeToWait = 3
const vcUrl =
  'https://drive.google.com/file/d/1ltNHcTUv51_qQLBXrouxBVDe2Aaa7oYD/view?usp=sharing'

const Cv: React.FC = () => {
  const router = useRouter()
  const [countDown, setCountDown] = useState(timeToWait)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountDown((prevCount) => {
        if (prevCount == 0) return 0
        return prevCount - 1
      })

      if (countDown == 0) {
        router.push(vcUrl)
      }
    }, 1000)
    return () => clearTimeout(timer)
  })

  return (
    <Container>
      <div className="px-4 text-2xl my-36 text-center">
        You will be redirected automatically in <strong>{countDown} </strong>
        seconds
        <div className="mt-5">
          If you don't, please click{' '}
          <a href={vcUrl} className="text-blue-600">
            here{' '}
          </a>
          to get to the page.
        </div>
      </div>
    </Container>
  )
}

export default Cv
