import { productsType } from "../type";

export const getProductsSuccess = (payload) => 
( { type: productsType.GET_PRODUCTS_SUCCESS, payload } );

export const getProductsRequested = (payload) => 
( {type: productsType.GET_PRODUCTS_REQUESTED, payload} );

export const getProductsError = (payload) => 
( {type: productsType.GET_PRODUCTS_ERROR, payload} );