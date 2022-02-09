import Toggle from "./Toggle-sidebar"

const Sidebar = (props) => {
  const {
    isOpen,
    changeIsOpen,
    setSelected,
    channels,
    directMessages
  } = props

  return (
    <div className={isOpen ? "sidebar open" : "sidebar close"}>
      <button className="closeButton" onClick={changeIsOpen}>X</button>

      <Toggle message={"Channles"} contents={channels} setSelected={setSelected} changeIsOpen={changeIsOpen} />

      <Toggle message={"DirectMessages"} contents={directMessages} setSelected={setSelected} changeIsOpen={changeIsOpen} />

    </div>
  )
}

export default Sidebar