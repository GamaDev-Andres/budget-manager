export const dateFormat = (date) => {
  const fecha = date ? new Date(date) : new Date();
  const options = {
    year: 'numeric', month: '2-digit', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false,
  }
  const fechaFormat = new Intl.DateTimeFormat("fr-CA", options).format(fecha);
  return fechaFormat;
};
export const timeFormat = (date) => {
  const fecha = date ? new Date(date) : new Date();
  const options = {
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false
  }
  const fechaFormat = new Intl.DateTimeFormat("es-CO", options).format(fecha);
  return fechaFormat;
};
