import cron from 'node-cron';
import { updateData } from './lib/data-fetcher';

// Programar la tarea para ejecutarse todos los miércoles a las 00:00
cron.schedule('0 0 * * 3', async () => {
  console.log('Ejecutando tarea programada: Actualización de datos');
  await updateData();
});

console.log('Tarea programada configurada para ejecutarse todos los miércoles.');