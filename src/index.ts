import {DecodificadorCesar} from './ejercicio-3/DecodificarCesar';

const cifrado1: DecodificadorCesar = new DecodificadorCesar('KAMWQUNDO',
    'CLAVE', 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');

console.log(cifrado1.decodificar());
