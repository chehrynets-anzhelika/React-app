import { productsReducer } from "../reducers/productsReducer";
import { productsType } from "../type";

import { cleanup } from '@testing-library/react';

afterEach(cleanup);

const mockProducts = [
    {name:"Сarnation", price:"100", url: "./images/carnation.jpg", code:"1", color:"white"},
    {name:"Rose", price:"500", url: "./images/rose.jpg", code:"2", color:"red"},
    {name:"Peony", price:"300", url: "./images/peony.jpg", code:"3", color:"pink"},
]

describe("productsReducerTest", () => {
    test ("schould return default state when passed an empty action", () => {
        const result = productsReducer(undefined, { type: "" });
        expect(result).toEqual({ products:  [], error: null, });
    });

    test ("should handle GET_PRODUCTS_REQUESTED", () => {
        const action = {type: productsType.GET_PRODUCTS_REQUESTED};
        const result = productsReducer({ products:  [], error: null, }, action);
        expect(result).toEqual({ products:  [], error: null, });
    });

    test ("should handle GET_PRODUCTS_SUCCESS", () => {
        const action = {type: productsType.GET_PRODUCTS_SUCCESS, payload: mockProducts};
        const result = productsReducer({ products:  [], error: null, }, action);
        expect(result).toEqual({ products:  [
        {name:"Сarnation", price:"100", url: "./images/carnation.jpg", code:"1", color:"white"},
        {name:"Rose", price:"500", url: "./images/rose.jpg", code:"2", color:"red"},
        {name:"Peony", price:"300", url: "./images/peony.jpg", code:"3", color:"pink"},], 
        error: false, });
    });

    test("should handle GET_PRODUCTS_ERROR", () => {
        const action = { type: productsType.GET_PRODUCTS_ERROR };
        const result  = productsReducer({products:  [], error: true}, action);
        expect(result).toEqual({ products:  [], error: true });
    })
})