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
          雑談2fdffdfdfdfddfdfdfdfddfddfdfdfdfdfdffddffddfdfdfdfdfsdfsdfsdfssss
        </li>
      </Toggle>
    </div>
  )
}

export default Sidebar