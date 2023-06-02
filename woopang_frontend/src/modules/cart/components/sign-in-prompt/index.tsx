import Button from "@modules/common/components/button"
import Link from "next/link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-start justify-between">
      <div>
        <h2 className="text-xl-semi">이미 계정이 존재하시나요?</h2>
        <p className="text-base-regular text-gray-700 mt-2">
          로그인하여 WooPang의 모든 서비스를 이용해보세요.
        </p>
      </div>
      <div>
        <Link href="/account/login">
          <a>
            <Button variant="secondary">Sign in</Button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SignInPrompt
