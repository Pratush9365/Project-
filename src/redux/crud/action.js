export const ADD_DATA = 'ADD_DATA';
export const DELETE_DATA = 'DELETE_DATA';
export const EDIT_DATA = 'EDIT_DATA';
export const FETCH_DATA ='FETCH_DATA';

export const addData = (payload) => ({ type: ADD_DATA, payload });
export const deleteData = (index) => ({ type: DELETE_DATA, payload: index });
export const editData = (payload) => ({ type: EDIT_DATA, payload });
export const fetchData =(payload)=>({type:FETCH_DATA,payload})