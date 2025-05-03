import axios from 'axios';
import fs from 'fs';
import path from 'path';

// URLs de las páginas oficiales
const PALERMO_URL = 'https://pagina-oficial-palermo.com';
const SAN_ISIDRO_URL = 'https://pagina-oficial-san-isidro.com';

// Función para obtener datos de una URL
async function fetchData(url: string): Promise<string> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener datos de ${url}:`, error);
    throw error;
  }
}

// Función para guardar datos en un archivo
function saveDataToFile(data: string, fileName: string): void {
  const filePath = path.join(__dirname, '../data', fileName);
  fs.writeFileSync(filePath, data, 'utf-8');
  console.log(`Datos guardados en ${filePath}`);
}

// Función principal para recopilar datos
export async function updateData(): Promise<void> {
  console.log('Iniciando actualización de datos...');

  try {
    const palermoData = await fetchData(PALERMO_URL);
    saveDataToFile(palermoData, 'palermo-data.json');

    const sanIsidroData = await fetchData(SAN_ISIDRO_URL);
    saveDataToFile(sanIsidroData, 'san-isidro-data.json');

    console.log('Actualización de datos completada.');
  } catch (error) {
    console.error('Error durante la actualización de datos:', error);
  }
}