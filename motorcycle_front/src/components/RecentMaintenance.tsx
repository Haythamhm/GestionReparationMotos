const RecentMaintenance = () => (
  <div className="bg-white p-6 rounded shadow mt-6">
    <h3 className="text-lg font-bold">Recent Maintenance</h3>
    <table className="table-auto w-full mt-4">
      <thead>
        <tr>
          <th>Client</th>
          <th>Motorcycle</th>
          <th>Status</th>
          <th>Date</th>
          <th>Technician</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>Honda CBR600RR</td>
          <td><span className="bg-yellow-200 px-2 rounded">IN_PROGRESS</span></td>
          <td>2024-02-20</td>
          <td>Mike Smith</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default RecentMaintenance;