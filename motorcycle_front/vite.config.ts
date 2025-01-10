import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173, // Port statique
        strictPort: true, // Empêche Vite de changer automatiquement si le port est occupé
        host: "localhost", // Optionnel, définir l'hôte si requis
    }
});