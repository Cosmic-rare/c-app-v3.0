import "./App.css"

import Content from "./components/Content"
import Sidebar from "./components/Sidebar"

import { useState } from "react"

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const changeIsOpen = () => setIsOpen(!isOpen)

  return (
    <div className="app">
      <Sidebar isOpen={isOpen} changeIsOpen={changeIsOpen} />
      <Content changeIsOpen={changeIsOpen} />
    </div>
  );
}

export default App
