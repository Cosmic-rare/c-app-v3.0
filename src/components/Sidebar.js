import Toggle from "./Sidebar-toggle"

const Sidebar = (props) => {
  const {
    isOpen,
    changeIsOpen
  } = props

  return(
    <div className={isOpen ? "sidebar open" : "sidebar close"}>
      <button className="close-toggle" onClick={changeIsOpen}>X</button>

      <Toggle message={"Channles"}>
        <li className="list-item">
          雑談1
        </li>
        <li className="list-item">
          雑談2
        </li>
        <li className="list-item">
          音ゲーマー
        </li>
        <li className="list-item">
          アンケート
        </li>
        <li className="list-item">
          プロセカ
        </li>
        <li className="list-item">
          勉強の相談
        </li>
      </Toggle>
      <Toggle message={"DirectMessage"}>
        <li className="list-item">
          谷さん１号
        </li>
        <li className="list-item">
          谷さん２号
        </li>
        <li className="list-item">
          谷さん３号
        </li>
      </Toggle>

    </div>
  )
}

export default Sidebar