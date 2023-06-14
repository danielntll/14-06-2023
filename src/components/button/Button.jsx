
import { useEffect, useState } from "react"
import "./index.css"

const Button = (
  {
    icon = "fi fi-rr-arrow-small-right",
    onClickCallback = () => { console.log("Click") },
    text = "",
    color = "#ff00ff",
    reverse = false,
    active = false,
    ...props
  }
) => {
  // VARIABLES ------------------------
  const [style, setStyle] = useState({});
  // CONDITIONS -----------------------
  useEffect(() => {
    setStyle({
      bg: active ? color : "transparent",
      color: active ? "#242424" : "white"
    })
  }, [active])
  // RETURN ---------------------------
  return (
    <div
      className="Button"
      style={{ backgroundColor: style.bg, color: style.color }}
      onClick={() => onClickCallback()}
      onMouseOver={() => setStyle({ ...style, color: "#242424", bg: color })}
      onMouseOut={() => setStyle({ ...style, color: active ? "#242424" : "white", bg: active ? color : "transparent" })}
    >
      {text ?
        <>
          {reverse ?
            null :
            <>
              <p className="Button__text">{text}</p>
            </>}
          <i className={"display-flex " + icon}></i>
          {reverse ?
            <>
              <p className="Button__text">{text}</p>
            </> : null}
        </>
        :
        <i className={"display-flex " + icon}></i>
      }

    </div>
  )
}

export default Button