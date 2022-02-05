const Sidebar = (props) => {
  const {
    isOpen,
    changeIsOpen
  } = props

  return(
    <div className={isOpen ? "sidebar open" : "sidebar close"}>
      <button className="close-toggle" onClick={changeIsOpen}>X</button>
    </div>
  )
}

export default Sidebar