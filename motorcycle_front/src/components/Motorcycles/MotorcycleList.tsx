import React from 'react';
import { Motorcycle } from '../../types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

interface MotorcycleListProps {
    motorcycles: Motorcycle[];
    onDelete: (id: number) => void;
    onEdit: (motorcycle: Motorcycle) => void;
}

const MotorcycleList: React.FC<MotorcycleListProps> = ({ motorcycles, onDelete, onEdit }) => {
    return (
        <TableContainer component={Paper} className="mt-4">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Client ID</TableCell>
                        <TableCell>Brand</TableCell>
                        <TableCell>Model</TableCell>
                        <TableCell>Color</TableCell>
                        <TableCell>Mileage</TableCell>
                        <TableCell>Condition</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {motorcycles.map(motorcycle => (
                        <TableRow key={motorcycle.id} className="hover:bg-[#F5F5F5] transition-colors duration-300">
                            <TableCell>{motorcycle.clientId}</TableCell>
                            <TableCell>{motorcycle.brand}</TableCell>
                            <TableCell>{motorcycle.model}</TableCell>
                            <TableCell>{motorcycle.color}</TableCell>
                            <TableCell>{motorcycle.mileage}</TableCell>
                            <TableCell>{motorcycle.condition}</TableCell>
                            <TableCell>
                                <IconButton color="primary" onClick={() => onEdit(motorcycle)}>
                                    <Edit />
                                </IconButton>
                                <IconButton color="secondary" onClick={() => motorcycle.id !== undefined && onDelete(motorcycle.id)}>
                                    <Delete />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MotorcycleList;