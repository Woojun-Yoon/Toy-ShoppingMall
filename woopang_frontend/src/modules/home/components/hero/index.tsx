import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          WooPang은 소비자 친화적 전자제품 쇼핑몰입니다.
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          WooPang에서 효율적으로 원하는 전자제품을 찾아보세요. &nbsp;
          Woopang은 번거로운 상품 비교를 대신하고,
          광고 상품을 제외하여, 가장 상단에 최적의 제품을 제공합니다.
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
      <Image
        src="/hero.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="Hero image"
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
