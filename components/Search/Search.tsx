import { SearchProps } from "./Search.props"
import styles from "./Search.module.css"
import cn from "classnames"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { useState } from "react"
import { useRouter } from "next/router"

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>("")
  const router = useRouter()

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    })
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      goToSearch()
    }
  }

  return (
    <>
      <div className={cn(className, styles.search)} {...props}>
        <div className={styles.searchWrapper}>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button appearance="primary" onClick={goToSearch}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7719 13.6626L11.0742 9.94962C12.0249 8.85844 12.5459 7.48552 12.5459 6.05624C12.5459 2.71688 9.73177 0 6.27293 0C2.81409 0 0 2.71688 0 6.05624C0 9.3956 2.81409 12.1125 6.27293 12.1125C7.57143 12.1125 8.80883 11.7344 9.86677 11.0166L13.5926 14.7578C13.7484 14.9139 13.9578 15 14.1823 15C14.3947 15 14.5963 14.9218 14.7493 14.7796C15.0744 14.4776 15.0848 13.9768 14.7719 13.6626ZM6.27293 1.57989C8.82956 1.57989 10.9094 3.58793 10.9094 6.05624C10.9094 8.52456 8.82956 10.5326 6.27293 10.5326C3.7163 10.5326 1.63642 8.52456 1.63642 6.05624C1.63642 3.58793 3.7163 1.57989 6.27293 1.57989Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
      </div>
    </>
  )
}
