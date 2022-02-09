import { useState } from "react"
import "./Toggle-sidebar.css"

const Toggle = (props) => {
  const [isOpen, setIsOpen] = useState(true)
  const {
    message
  } = props

  return (
    <div className="sidebarToggle">
      <div className="sidebarToggle-flex" onClick={() => setIsOpen(!isOpen)}>
        <span className="toggle-title">{message}</span>
        <span className="right-text">
          {isOpen ?
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M6.028 0v6.425l5.549 5.575-5.549 5.575v6.425l11.944-12z" /></svg>
          }
        </span>
      </div>

      <div className={isOpen ? "sidebarToggle-children open" : "sidebarToggle-children close"}>
        {props.children}
      </div>
    </div>
  )
}

export default Toggle