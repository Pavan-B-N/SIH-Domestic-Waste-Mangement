import "./Dashboard.css"

function Dashboard() {
  return (
    <div className="dashboard">
      <table>
        <tr>
          <th>UserId</th>
          <th>Complaint Type</th>
          <th>Description</th>
          <th>Location</th>
          <th>Image Proof</th>
          <th>Resolve</th>
        </tr>
      </table>
    </div>
  )
}

export default Dashboard
