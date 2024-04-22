import config from "./src/configs/db-config.js";
import pkg from "pg";
const { Client } = pkg;

/* https://node-postgres.com/apis/client
const client = new Client(config);
await client.connect();
let sql = `SELECT * from provinces`; // `... limit 5`
let result = await client.query(sql);
await client.end();
// 'rows' tiene un array con el resultado. rows[0] el 1ºer registro.
console.log(result.rows);
*/

let id=42;
const client = new Client(config);
await client.connect();
const sql = "SELECT * from provinces WHERE id=$1";
// Array con los valores.
const values = [id];
const result = await client.query(sql, values);
await client.end();
// En 'result.rows.length' tenemos un 1.
// En 'rows[0]' tenemos el resultado de la consulta (un objeto)
console.log("Resultados: length", result.rows.length);
console.log("result.rows[0]", result.rows[0]);



const client = new Client(config); 
await client.connect(); 
const sql = `INSERT INTO provinces               
                (name, full_name, latitude, longitude, 
                  display_order)            
                               VALUES                
                               ($1, $2, $3, $4, $5)`;
// Array con los valores. 
const values = 
      ['Jujuy', 'Provincia de Jujuy', -23.319974, -65.764427, 3]; 
const result = await client.query(sql, values); 
await client.end(); 
// En 'rowCount' tenemos el número de registros
//  procesados por el último comando. En este caso 1. 
console.log('rowCount: ', result.rowCount);

*/
