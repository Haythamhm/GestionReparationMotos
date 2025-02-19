import  { useState, useEffect } from 'react';
import AddPartForm from '../components/Parts/AddPartForm';
import PartsList from '../components/Parts/PartsList';
import { Part } from '../types';
import { getParts } from '../api/partsAPI';

const PartsPage = () => {
  const [parts, setParts] = useState<Part[]>([]);

  useEffect(() => {
    getParts()
      .then(response => setParts(response))
      .catch(error => console.error('Error fetching parts:', error));
  }, []);

  const handleAddPart = (newPart: Part) => {
    setParts([...parts, newPart]);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl">Gestion des Pièces</h1>
      <AddPartForm onAdd={handleAddPart} />
      <PartsList parts={parts} onDelete={(id: number) => {
        setParts(parts.filter(part => part.id !== id));
      }} />
    </div>
  );
};

export default PartsPage;