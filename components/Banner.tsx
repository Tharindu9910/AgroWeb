import Image from "next/image"

const Banner = () => {
  return (
    <div className="relative w-full h-48 overflow-hidden">
  {/* The Gradient Overlay */}
  {/* Use z-10 to ensure it stays above the filled image */}
  <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/20 to-black/60" />

  {/* The Image */}
  <Image
    src="/palm-trees.png"
    alt="Palm trees"
    fill
    className="object-cover z-0" 
  />
</div>
  )
}

export default Banner