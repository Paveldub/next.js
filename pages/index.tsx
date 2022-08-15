import { Button, Htag } from "../components"

export default function Home() {
  return (
    <div>
      <Htag tag="h1">index page</Htag>
      <Button appearance="primary">test button</Button>
      <Button appearance="ghost">test button</Button>
    </div>
  )
}
