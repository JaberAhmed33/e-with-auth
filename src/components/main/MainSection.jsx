import ErrorBoundary from "../error/ErrorBoundary";
import GallerySection from "./GallerySection"
import TextSection from "./TextSection";
import img1 from "/product/1.webp";
import img2 from "/product/2.webp";
import img3 from "/product/3.webp";
import img4 from "/product/4.webp";

export default function MainSection() {
  const productImgs = [
    img1,
    img2,
    img3,
    img4,
  ]

  return (
    <div className="flex justify-between w-full gap-8 p-4 dark:bg-slate-800 dark:text-white">
      <ErrorBoundary>

        <GallerySection imgs={productImgs} />
      </ErrorBoundary>
      <TextSection />
    </div>
  )
}
