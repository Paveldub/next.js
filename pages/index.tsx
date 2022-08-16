import { useState } from "react"
import { Button, Htag, Paragraph, Rating, Tags } from "../components"
import { withLayout } from "../layout/Layout"

function Home() {
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
