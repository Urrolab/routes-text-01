import { useState, useEffect } from 'react'

const BackgroundImage = ({ imageUrl, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setImageLoaded(true)
    }
    img.src = imageUrl
  }, [imageUrl])

  return (
    <div
      className={`transform -scale-x-100 h-screen w-full object bg-cover bg-no-repeat hidden sm:block ${className}`}
      style={{
        backgroundImage: imageLoaded ? `url(${imageUrl})` : 'none',
      }}
    />
  )
}

export default BackgroundImage
