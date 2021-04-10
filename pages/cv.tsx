import React from 'react'
import { useRouter } from 'next/router'

// import { Container } from './styles';

const Cv: React.FC = () => {
  const router = useRouter()

  if (typeof window !== 'undefined') {
    router.push(
      'https://drive.google.com/file/d/1ltNHcTUv51_qQLBXrouxBVDe2Aaa7oYD/view?usp=sharing'
    )
  }
  return null
}

export default Cv
