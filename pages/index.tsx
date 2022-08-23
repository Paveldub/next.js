import { GetStaticProps } from "next"
import { useState } from "react"
import { Button, Htag, Paragraph, Rating, Tags } from "../components"
import { withLayout } from "../layout/Layout"
import axios from "axios"
import { MenuItem } from "../interfaces/menu.interface"

function Home({ menu }: HomeProps) {
  const [rating, setRating] = useState<number>(4)

  return (
    <div>
      <Htag tag="h1">index page</Htag>
      <Button appearance="primary">test button</Button>
      <Button appearance="ghost" arrow="down">
        test button
      </Button>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat omnis
        esse asperiores architecto dolore quasi quae praesentium velit quis, ex,
        nisi modi cumque numquam sequi, natus harum incidunt impedit nemo!
      </Paragraph>
      <Tags size="s">small</Tags>
      <Tags size="m">medium</Tags>
      <Tags color="red">color red</Tags>
      <Tags color="green">color green</Tags>
      <Tags color="primary" href="www.google.com">
        link to google
      </Tags>
      <div>-------</div>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </div>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  )

  return {
    props: {
      menu,
      firstCategory,
    },
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
