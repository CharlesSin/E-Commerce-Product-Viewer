import { useState } from "react"
import "./App.scss"
import ProductViewer from "./ProductViewer"

function App() {
  const [count, setCount] = useState(0)

  return <ProductViewer />
}

export default App
