import { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CircularProgress, Grid } from '@mui/material';
import { People, TwoWheeler, Build, AttachMoney } from '@mui/icons-material';
import { fetchMaintenance } from '../api/maintenanceAPI';
import { fetchPayments } from '../api/paymentAPI';
import { fetchClients } from '../api/clientAPI';
import { fetchMotorcycles } from '../api/motorcycleAPI';
import RecentMaintenance from './RecentMaintenance';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const [pendingMaintenance, setPendingMaintenance] = useState<number | null>(null);
    const [monthlyRevenue, setMonthlyRevenue] = useState<number | null>(null);
    const [totalClients, setTotalClients] = useState<number | null>(null);
    const [totalMotorcycles, setTotalMotorcycles] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const [revenueData, setRevenueData] = useState<{ date: string; amount: number }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const maintenanceResponse = await fetchMaintenance();
                const pending = maintenanceResponse.data.filter((m) => m.status === 'PENDING').length;
                setPendingMaintenance(pending);

                const paymentsResponse = await fetchPayments();
                const revenue = paymentsResponse.data.reduce((total, payment) => total + payment.amount, 0);
                setMonthlyRevenue(revenue);

                const clientsResponse = await fetchClients();
                setTotalClients(clientsResponse.data.length);

                const motorcyclesResponse = await fetchMotorcycles();
                setTotalMotorcycles(motorcyclesResponse.data.length);

                // Prepare revenue data for the chart
                const revenueData = paymentsResponse.data.map(payment => ({
                    date: new Date(payment.paymentDate).toLocaleDateString(),
                    amount: payment.amount,
                }));
                setRevenueData(revenueData);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <Typography variant="h4" component="h1" className="text-center mb-8 text-[#424242]">
                Dashboard
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                    <Card className="bg-[#F5F5F5] p-6 rounded shadow hover:shadow-lg transition-shadow duration-300">
                        <CardContent>
                            <Typography variant="h5" component="div" className="text-[#424242]">
                                <People className="mr-2" /> Total Clients
                            </Typography>
                            {loading ? (
                                <CircularProgress />
                            ) : (
                                <Typography variant="h3" component="div" className="text-[#229799]">
                                    {totalClients}
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card className="bg-[#F5F5F5] p-6 rounded shadow hover:shadow-lg transition-shadow duration-300">
                        <CardContent>
                            <Typography variant="h5" component="div" className="text-[#424242]">
                                <TwoWheeler className="mr-2" /> Total Motorcycles
                            </Typography>
                            {loading ? (
                                <CircularProgress />
                            ) : (
                                <Typography variant="h3" component="div" className="text-[#229799]">
                                    {totalMotorcycles}
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card className="bg-[#F5F5F5] p-6 rounded shadow hover:shadow-lg transition-shadow duration-300">
                        <CardContent>
                            <Typography variant="h5" component="div" className="text-[#424242]">
                                <Build className="mr-2" /> Pending Maintenance
                            </Typography>
                            {loading ? (
                                <CircularProgress />
                            ) : (
                                <Typography variant="h3" component="div" className="text-[#229799]">
                                    {pendingMaintenance}
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card className="bg-[#F5F5F5] p-6 rounded shadow hover:shadow-lg transition-shadow duration-300">
                        <CardContent>
                            <Typography variant="h5" component="div" className="text-[#424242]">
                                <AttachMoney className="mr-2" /> Monthly Revenue
                            </Typography>
                            {loading ? (
                                <CircularProgress />
                            ) : (
                                <Typography variant="h3" component="div" className="text-[#229799]">
                                    ${monthlyRevenue?.toLocaleString()}
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <div className="mt-8">
                <Typography variant="h5" component="h2" className="text-center mb-4 text-[#424242]">
                    Revenue Over Time
                </Typography>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="amount" stroke="#229799" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <RecentMaintenance />
        </div>
    );
};

export default Dashboard;