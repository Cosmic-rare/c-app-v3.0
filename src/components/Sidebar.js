import Toggle from "./Sidebar-toggle"

const Sidebar = (props) => {
  const {
    isOpen,
    changeIsOpen
  } = props

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

  return (
    <div className={isOpen ? "sidebar open" : "sidebar close"}>
      <button className="close-toggle" onClick={changeIsOpen}>X</button>

      <Toggle message={"Channles"}>
        {channels.map((value) => {
          return (
            <li className="list-item">
              {value}
            </li>
          )
        })}
      </Toggle>

      <Toggle message={"DirectMessages"}>
        {directMessages.map((value) => {
          return (
            <li className="list-item">
              {value}
            </li>
          )
        })}
      </Toggle>

    </div>
  )
}

export default Sidebar