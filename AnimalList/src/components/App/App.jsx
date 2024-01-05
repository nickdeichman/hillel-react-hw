import Table from "../List/Table"
const App = () => {
  const animals = [
    {type: `turtle`, icon: `🐢`},
    {type: `octopus`, icon: `🐙`},
    {type: `fish`, icon: `🐠`},
    {type: `flamingo`, icon: `🦩`},
    {type: `penguin`, icon: `🐧`}
]
  return (
    <Table list={animals}/>
  )
}

export default App