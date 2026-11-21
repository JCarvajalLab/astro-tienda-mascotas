/**
 * Utilidades puras para limpieza, formateo y validación matemática (Módulo 11)
 * del RUT chileno, sin dependencias ni APIs externas.
 */

/**
 * Elimina caracteres no válidos del RUT, normaliza a mayúsculas y limita a 9 caracteres.
 * @param {string} value
 * @returns {string}
 */
export function cleanRut(value) {
  return String(value ?? '')
    .replace(/[^0-9kK]/g, '')
    .toUpperCase()
    .slice(0, 9);
}

/**
 * Formatea un RUT chileno con puntos de miles y guion antes del dígito verificador.
 * @param {string} value
 * @returns {string}
 */
export function formatRut(value) {
  const cleaned = cleanRut(value);
  if (cleaned.length <= 1) return cleaned;

  const body = cleaned.slice(0, -1).replace(/[^0-9]/g, '');
  const dv = cleaned.slice(-1);

  if (!body) return dv;

  const formattedBody = body.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${formattedBody}-${dv}`;
}

/**
 * Calcula el dígito verificador oficial de un cuerpo numérico usando Módulo 11.
 * @param {string} body
 * @returns {string}
 */
export function calculateRutDv(body) {
  let sum = 0;
  let multiplier = 2;

  for (let i = body.length - 1; i >= 0; i--) {
    sum += Number(body[i]) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }

  const remainder = 11 - (sum % 11);
  if (remainder === 11) return '0';
  if (remainder === 10) return 'K';
  return String(remainder);
}

/**
 * Valida estructural y matemáticamente un RUT chileno (Módulo 11).
 * Rechaza cuerpos menores a 100.000 o compuestos por dígitos repetidos.
 * @param {string} value
 * @returns {boolean}
 */
export function validateRut(value) {
  const cleaned = cleanRut(value);
  if (cleaned.length < 7 || cleaned.length > 9) return false;

  const body = cleaned.slice(0, -1);
  const dv = cleaned.slice(-1);

  if (!/^[1-9]\d{5,7}$/.test(body) || !/^[0-9K]$/.test(dv)) return false;
  if (/^(\d)\1+$/.test(body) || Number(body) < 100000) return false;

  return calculateRutDv(body) === dv;
}
