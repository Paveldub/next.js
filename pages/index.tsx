import { Button, Htag, Paragraph } from "../components"

export default function Home() {
  return (
    <div>
      <Htag tag="h1">index page</Htag>
      <Button appearance="primary" arrow="right">
        test button
      </Button>
      <Button appearance="ghost" arrow="down">
        test button
      </Button>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat omnis
        esse asperiores architecto dolore quasi quae praesentium velit quis, ex,
        nisi modi cumque numquam sequi, natus harum incidunt impedit nemo!
      </Paragraph>
    </div>
  )
}
