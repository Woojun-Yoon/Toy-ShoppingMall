import UnderlineLink from "@modules/common/components/underline-link"

const EmptyCartMessage = () => {
  return (
    <div className="bg-amber-100 px-8 py-24 flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl-semi">장바구니가 비어있습니다.</h1>
      <p className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        장바구니에 어떠한 물품도 담겨있지 않습니다.
        아래 링크를 통해서 상품을 탐색해보세요.
      </p>
      <div>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
