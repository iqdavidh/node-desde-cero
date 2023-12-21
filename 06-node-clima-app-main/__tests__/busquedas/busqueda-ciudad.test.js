require('dotenv').config()
const Busquedas = require('../../models/busquedas');
describe('busqueda-ciudad', function () {
  it('should -return true', async function () {
    const termino = "quereta";
    const busquedas = new Busquedas();
    const lista = await busquedas.ciudad(termino);
    expect(lista).toBeTruthy();
    
    /*
    *
    * {
  "id": "place.21833887",
  "nombre": "Querétaro, Querétaro, México",
  "lng": -100.494445,
  "lat": 20.75973
}
    * */
  });
});