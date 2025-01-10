import { Card, CardContent, Typography } from '@mui/material';
import RecentMaintenance from './RecentMaintenance';

const Dashboard = () => (
  <div className="p-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="bg-[#F5F5F5] p-6 rounded shadow hover:shadow-lg transition-shadow duration-300">
        <CardContent>
          <Typography variant="h5" component="div" className="text-[#424242]">Total Clients</Typography>
          <Typography variant="h3" component="div" className="text-[#229799]">124</Typography>
          <Typography variant="body2" className="text-green-500">+5.2% from last month</Typography>
        </CardContent>
      </Card>
      <Card className="bg-[#F5F5F5] p-6 rounded shadow hover:shadow-lg transition-shadow duration-300">
        <CardContent>
          <Typography variant="h5" component="div" className="text-[#424242]">Active Motorcycles</Typography>
          <Typography variant="h3" component="div" className="text-[#229799]">256</Typography>
          <Typography variant="body2" className="text-green-500">+3.1% from last month</Typography>
        </CardContent>
      </Card>
      <Card className="bg-[#F5F5F5] p-6 rounded shadow hover:shadow-lg transition-shadow duration-300">
        <CardContent>
          <Typography variant="h5" component="div" className="text-[#424242]">Pending Maintenance</Typography>
          <Typography variant="h3" component="div" className="text-[#229799]">18</Typography>
          <Typography variant="body2" className="text-red-500">-2.4% from last month</Typography>
        </CardContent>
      </Card>
      <Card className="bg-[#F5F5F5] p-6 rounded shadow hover:shadow-lg transition-shadow duration-300">
        <CardContent>
          <Typography variant="h5" component="div" className="text-[#424242]">Monthly Revenue</Typography>
          <Typography variant="h3" component="div" className="text-[#229799]">$12,456</Typography>
          <Typography variant="body2" className="text-green-500">+12.5% from last month</Typography>
        </CardContent>
      </Card>
    </div>
    <RecentMaintenance />
  </div>
);

export default Dashboard;