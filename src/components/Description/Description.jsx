import "./Description.css"

function Description({description,title}) {
  return (
    <div className="description">
      <div className="title">{title}</div>
      <div className="message">{description}</div>
    </div>
  )
}

export default Description
