import React, { useState, useEffect } from 'react';
import { getParts } from '../../api/partsAPI';
import { createMaintenance } from '../../api/maintenanceAPI';
import { Part, Maintenance } from '../../types';

interface MaintenanceFormProps {
  onAdd: (newMaintenance: Maintenance) => void;
}

const MaintenanceForm: React.FC<MaintenanceFormProps> = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    clientId: '',
    motorcycleId: '',
    problem: '',
    status: 'En Attente',
    startDate: '',
    endDate: '',
    cost: '',
  });
  const [selectedParts, setSelectedParts] = useState<{ part: Part; quantity: number }[]>([]);
  const [parts, setParts] = useState<Part[]>([]);

  useEffect(() => {
    getParts().then(data => setParts(data));
  }, []);

  const handlePartSelection = (part: Part, isSelected: boolean) => {
    setSelectedParts(prevSelected => {
      if (isSelected) {
        return [...prevSelected, { part, quantity: 1 }];
      } else {
        return prevSelected.filter(p => p.part.id !== part.id);
      }
    });
  };

  const handleQuantityChange = (part: Part, quantity: number) => {
    setSelectedParts(prevSelected => 
      prevSelected.map(p => p.part.id === part.id ? { ...p, quantity } : p)
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientId || !formData.motorcycleId || !formData.problem || !formData.startDate || !formData.endDate || !formData.cost) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    const partsCost = selectedParts.reduce((total, p) => total + p.part.price * p.quantity, 0);
    const maintenanceData: Maintenance = {
      ...formData,
      clientId: Number(formData.clientId),
      motorcycleId: Number(formData.motorcycleId),
      entryDate: new Date(formData.startDate),
      exitDate: new Date(formData.endDate),
      cost: Number(formData.cost),
      costTotal: Number(formData.cost) + partsCost,
      parts: selectedParts.map(p => ({ ...p.part, quantity: p.quantity })),
    };
    console.log('Maintenance Data:', maintenanceData); // Ajout du console.log pour vérifier les données
    createMaintenance(maintenanceData)
      .then(response => {
        onAdd(response.data);
        alert('Maintenance créée avec succès.');
        setFormData({
          clientId: '',
          motorcycleId: '',
          problem: '',
          status: 'En Attente',
          startDate: '',
          endDate: '',
          cost: '',
        });
        setSelectedParts([]);
      })
      .catch(error => console.error('Erreur lors de la création de la maintenance:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 mt-4 bg-white text-[#222831] rounded-lg shadow-md">
      <label className="block mb-2">
        ID Client:
        <input 
          type="text" 
          name="clientId"
          value={formData.clientId} 
          onChange={handleChange} 
          className="border p-2 w-full rounded bg-[#EEEEEE] text-[#222831] focus:outline-none focus:border-[#00ADB5]"
          required
        />
      </label>
      <label className="block mb-2">
        ID Moto:
        <input 
          type="text" 
          name="motorcycleId"
          value={formData.motorcycleId} 
          onChange={handleChange} 
          className="border p-2 w-full rounded bg-[#EEEEEE] text-[#222831] focus:outline-none focus:border-[#00ADB5]"
          required
        />
      </label>
      <label className="block mb-2">
        Problème:
        <input 
          type="text" 
          name="problem"
          value={formData.problem} 
          onChange={handleChange} 
          className="border p-2 w-full rounded bg-[#EEEEEE] text-[#222831] focus:outline-none focus:border-[#00ADB5]"
          required
        />
      </label>
      <label className="block mb-2">
        Statut:
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-2 w-full rounded bg-[#EEEEEE] text-[#222831] focus:outline-none focus:border-[#00ADB5]"
          required
        >
          <option value="En Attente">En Attente</option>
          <option value="En Cours">En Cours</option>
          <option value="Terminé">Terminé</option>
        </select>
      </label>
      <label className="block mb-2">
        Date de Début:
        <input 
          type="date" 
          name="startDate"
          value={formData.startDate} 
          onChange={handleChange} 
          className="border p-2 w-full rounded bg-[#EEEEEE] text-[#222831] focus:outline-none focus:border-[#00ADB5]"
          required
        />
      </label>
      <label className="block mb-2">
        Date de Fin:
        <input 
          type="date" 
          name="endDate"
          value={formData.endDate} 
          onChange={handleChange} 
          className="border p-2 w-full rounded bg-[#EEEEEE] text-[#222831] focus:outline-none focus:border-[#00ADB5]"
          required
        />
      </label>
      <label className="block mb-2">
        Coût:
        <input 
          type="number" 
          name="cost"
          value={formData.cost} 
          onChange={handleChange} 
          className="border p-2 w-full rounded bg-[#EEEEEE] text-[#222831] focus:outline-none focus:border-[#00ADB5]"
          required
        />
      </label>
      <label className="block mb-2">
        Pièces:
        <div className="space-y-2">
          {parts.map(part => (
            <div key={part.id} className="flex items-center border-b pb-2 mb-2">
              <input 
                type="checkbox" 
                value={part.id} 
                onChange={(e) => handlePartSelection(part, e.target.checked)} 
                className="mr-2"
              />
              <span className="flex-1">{part.name} - {part.price}€ (Disponible: {part.quantity})</span>
              {selectedParts.find(p => p.part.id === part.id) && (
                <input 
                  type="number" 
                  min="1" 
                  max={part.quantity}
                  value={selectedParts.find(p => p.part.id === part.id)?.quantity || 1}
                  onChange={(e) => {
                    const quantity = Number(e.target.value);
                    if (quantity <= part.quantity) {
                      handleQuantityChange(part, quantity);
                    }
                  }}
                  className="ml-2 border p-1 w-16 rounded bg-[#EEEEEE] text-[#222831] focus:outline-none focus:border-[#00ADB5]"
                />
              )}
            </div>
          ))}
        </div>
      </label>
      <button type="submit" className="bg-[#00ADB5] text-white p-2 w-full rounded mt-4 hover:bg-[#0098A5]">Soumettre</button>
    </form>
  );
};

export default MaintenanceForm;
