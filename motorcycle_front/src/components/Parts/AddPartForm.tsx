import React, { useState } from 'react';
import Select from 'react-select';
import { addPart } from '../../api/partsAPI';
import { Part } from '../../types';

interface AddPartFormProps {
  onAdd: (newPart: Part) => void;
}

const AddPartForm: React.FC<AddPartFormProps> = ({ onAdd }) => {
  const [partName, setPartName] = useState('');
  const [quantity, setQuantity] = useState<number | string>(0);
  const [price, setPrice] = useState<number | string>(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const part = { name: partName, quantity: Number(quantity), price: Number(price) };
    const response = await addPart(part);
    onAdd(response);
    setPartName('');
    setQuantity(0);
    setPrice(0);
  };

  const motorcycleParts = [
    "Réservoir d'essence",
    "Moteur",
    "Siège",
    "Garde-boue",
    "Feu arrière et feu stop",
    "Tige de frein",
    "Silencieux",
    "Amortisseur arrière",
    "Réservoir d'huile",
    "Pédale de démarrage",
    "Repose-pied",
    "Sélecteur de vitesse au pied",
    "Tuyaux d'échappement",
    "Barre de sécurité",
    "Régulateur de tension et générateur",
    "Disjoncteur d'allumage",
    "Pneus ballon",
    "Freins",
    "Câble de frein",
    "Fourches à ressort",
    "Bottes en caoutchouc pour fourche",
    "Phare",
    "Compteur de vitesse",
    "Interrupteur d'allumage",
    "Embrayage à main",
    "Avance à l'allumage",
    "Klaxon",
    "Tableau de bord",
    "Rétroviseurs",
    "Batterie",
    "Feu avant",
    "Clignotants",
    "Pédale de frein arrière",
    "Disques de frein",
    "Poignée d'accélérateur",
    "Levier de frein avant",
    "Levier d'embrayage",
    "Bouchon de réservoir"
  ];

  const partOptions = motorcycleParts.map(part => ({ value: part, label: part }));

  return (
    <form onSubmit={handleSubmit} className="border p-4 mt-4 bg-white text-[#222831] rounded-lg">
      <label className="block mb-2">Nom de la pièce:</label>
      <Select 
        options={partOptions}
        value={partOptions.find(option => option.value === partName)}
        onChange={(selectedOption) => setPartName(selectedOption?.value || '')}
        className="mb-4"
        placeholder="Sélectionnez une pièce"
      />
      <label className="block mb-2">Quantité:</label>
      <input 
        type="number" 
        value={quantity} 
        onChange={(e) => setQuantity(e.target.value === '' ? '' : Number(e.target.value))} 
        onFocus={(e) => e.target.value === '0' && setQuantity('')}
        className="border p-2 w-full rounded bg-[#EEEEEE] text-[#222831]"
        required
      />
      <label className="block mb-2">Prix:</label>
      <input 
        type="number" 
        value={price} 
        onChange={(e) => setPrice(e.target.value === '' ? '' : Number(e.target.value))} 
        onFocus={(e) => e.target.value === '0' && setPrice('')}
        className="border p-2 w-full rounded bg-[#EEEEEE] text-[#222831]"
        required
      />
      <button type="submit" className="bg-[#00ADB5] text-white p-2 w-full rounded mt-4">Ajouter Pièce</button>
    </form>
  );
};

export default AddPartForm;