// Función para normalizar texto (quitar acentos y convertir a minúsculas)
export const normalizeText = (text) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, ''); // Elimina los acentos
};