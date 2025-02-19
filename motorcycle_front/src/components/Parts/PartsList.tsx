import React from 'react';
import { Part } from '../../types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

interface PartsListProps {
  parts: Part[];
  onDelete: (id: number) => void;
}

const PartsList: React.FC<PartsListProps> = ({ parts, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nom</TableCell>
            <TableCell>Quantité</TableCell>
            <TableCell>Prix</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {parts.map(part => (
            <TableRow key={part.id}>
              <TableCell>{part.id}</TableCell>
              <TableCell>{part.name}</TableCell>
              <TableCell>{part.quantity}</TableCell>
              <TableCell>{part.price}€</TableCell>
              <TableCell>
                <IconButton onClick={() => onDelete(part.id!)}>
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

export default PartsList;