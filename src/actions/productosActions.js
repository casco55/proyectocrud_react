import { MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTO, AGREGAR_PRODUCTO, MOSTRAR_PRODUCTO, EDITAR_PRODUCTO } from './types';

import axios from 'axios';

export const mostrarProductos = () => async dispatch => {
     const respuesta = await axios.get('https://apis.jrdesarrollos.cl/react_php/prods');
     dispatch({
          type: MOSTRAR_PRODUCTOS,
          payload: respuesta.data
     })
}
export const mostrarProducto = id => async dispatch => {
     const respuesta = await axios.get(`https://apis.jrdesarrollos.cl/react_php/prod?id=${id}`);
     dispatch({
          type: MOSTRAR_PRODUCTO,
          payload: respuesta.data
     })
}

export const borrarProducto = id => async dispatch => {
     await axios.delete(`https://apis.jrdesarrollos.cl/react_php/prod_del?id=${id}`);

     dispatch({
          type: ELIMINAR_PRODUCTO,
          payload: id
     })
}

export const agregarProducto = infoProducto => async dispatch => {
     const respuesta = await axios.post('https://apis.jrdesarrollos.cl/react_php/prod_add', infoProducto);
     dispatch({
          type: AGREGAR_PRODUCTO,
          payload: respuesta.data
     })
}
export const editarProducto = producto => async dispatch => {
     const respuesta = await axios.put(`https://apis.jrdesarrollos.cl/react_php/prod_update`, producto);
     dispatch({
          type: EDITAR_PRODUCTO,
          payload: respuesta.data
     })
}