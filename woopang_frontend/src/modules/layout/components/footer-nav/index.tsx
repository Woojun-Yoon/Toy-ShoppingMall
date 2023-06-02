import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <div>
          <Link href="/">
            <a className="text-xl-semi uppercase">Woopang</a>
          </Link>
            <p className="text-base-semi">This Project is Toy-Project so, you can't buy items</p>
        </div>
        <div className="text-small-regular grid grid-cols-2 gap-x-16">
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Collections</span>
            <ul
              className={clsx("grid grid-cols-1 gap-y-2", {
                "grid-cols-2": (collections?.length || 0) > 4,
              })}
            >
              {collections?.map((c) => (
                <li key={c.id}>
                  <Link href={`/collections/${c.id}`}>
                    <a>{c.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Info</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a
                  href="https://github.com/Woojun-Yoon"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Woojun-Yoon/Toy-ShoppingMall"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source code
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <div className="min-w-[316px] flex xsmall:justify-end">
          <CountrySelect />
        </div>
    </div>
  )
}

export default FooterNav
