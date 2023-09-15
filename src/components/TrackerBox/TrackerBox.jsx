import "./TrackerBox.css"

function TrackerBox({Icon,title,record}) {
  return (
    <div className="trackerbox">
        <div className="title">{title}</div>
        <div className="trackerbox-description">
            <div className="trackerbox-icon"><Icon sx={{color:"green",fontSize:"75px"}} /></div>
            <div className="trackbox-record">{record}</div>
        </div>
    </div>
  )
}

export default TrackerBox
