import { useEffect, useState } from "react"
import "./Dashboard.css"
import axios_client from "../../APIs/AxiosClient"
function Dashboard() {
  const [complaits,setComplaits]=useState([])
  async function getComplaints() {
    try {
      const { data } = await axios_client.get("/complaints")
      setComplaits(data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getComplaints();
  }, [])
  return (
    <div className="dashboard">
      <table className="dashboard-table" border="2">
        <tr>
          <th>UserId</th>
          <th>Complaint Type</th>
          <th>Description</th>
          <th>Location</th>
          <th>Image Proof</th>
          <th>Resolve</th>
        </tr>

        {
          
          complaits.map(item => {
            return (
              <tr>
                <td>{item.userId}</td>
                <td>{item.complaintType}</td>
                <td>{item.description}</td>
                <td>{item.location}</td>
                <td><a href={item.imageURl} target="_blank">Open Image</a></td>
                <td><button className="resolve-btn">Resolve</button></td>
              </tr>
            );
          })
        }

      </table>
    </div>
  )
}

export default Dashboard
