import "./Content.css"

const Content = (props) => {
  const {
    changeIsOpen
  } = props

  return (
    <div className="content">
      <button
        className="sidebar-toggle"
        onClick={changeIsOpen}
      />
    </div>
  )
}

export default Content