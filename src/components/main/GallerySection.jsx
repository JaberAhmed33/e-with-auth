import { useState } from "react"

export default function GallerySection({ imgs }) {
  const [currentImg, setCurrentImg] = useState(imgs[0]);

  return (
    <div className="flex flex-col gap-4 p-4 flex-1">
      <div className="w-full h-96">
        <img
          src={currentImg}
          alt="img"
          loading="lazy"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex gap-4 p-4 overflow-x-auto">
        {imgs.map((img, index) => (
          <div
            key={index}
            className={`size-24 cursor-pointer rounded-lg shadow-md overflow-hidden ${currentImg === img ? 'border-2 border-blue-500' : ''}`}
            onClick={() => setCurrentImg(img)}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              srcset="
                image-400.jpg 400w,
                image-800.jpg 800w,
                image-1200.jpg 1200w
              "
              sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"

            />
          </div>
        ))}
      </div>
    </div>
  )
}
