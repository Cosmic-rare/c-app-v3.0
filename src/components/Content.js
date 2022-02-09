const Content = (props) => {
  const {
    changeIsOpen,
    selected
  } = props

  return (
    <div className="content">
      <button
        className="openButton"
        onClick={changeIsOpen}
      />
      <p>{selected}</p>
    </div>
  )
}

export default Content