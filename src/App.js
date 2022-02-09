import "./App.css"

import Content from "./components/Content"
import Sidebar from "./components/Sidebar"

import { useState } from "react"

const channels = [
  "雑談1",
  "雑談2",
  "音ゲーマー",
  "アンケート",
  "プロセカ",
  "勉強の相談"
]

const directMessages = [
  "谷さん1号",
  "谷さん2号",
  "谷さん3号"
]

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const changeIsOpen = () => setIsOpen(!isOpen)

  const [selected, setSelected] = useState(channels[1])

  return (
    <div className="app">
      <Sidebar
        isOpen={isOpen}
        changeIsOpen={changeIsOpen}
        setSelected={setSelected}
        channels={channels}
        directMessages={directMessages}
      />
      <Content
        changeIsOpen={changeIsOpen}
        selected={selected}
      />
    </div>
  );
}

export default App
