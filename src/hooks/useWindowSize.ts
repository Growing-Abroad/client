import { useEffect, useState } from "react"

export function useWindowSize (){
  const [size, setSize] = useState([window.innerWidth, window.innerHeight])

  useEffect(()=> {
    const handleResize = () => setSize([window.innerWidth, window.innerHeight])

    window.addEventListener('resize', handleResize)
  }, [])
  
  return size
}