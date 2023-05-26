import { cartReducer } from "../reducers/cartReducer";
import { cartType } from "../type";
import { cleanup } from '@testing-library/react';

afterEach(cleanup);


describe("cartreducer", () => {
    test('schould return default state when passed an empty action', () => {
        const result = cartReducer(undefined, { type: "" });
        expect(result).toEqual({ "cartId": [] });
    });

    test("schould return new cart with 'ADD_CART' action", () => {
        const action = {type: cartType.ADD_CART, payload: "2"};
        const result = cartReducer({ "cartId": []}, action);
        expect(result).toEqual({ "cartId": ["2"]});
    })

    test("schould delete cart with 'REMOVE_CART' action", () => {
        const action = {type: cartType.REMOVE_CART, payload: "3"};
        const result = cartReducer({ "cartId": ["2", "3", "1"]}, action);
        expect(result).toEqual({ "cartId": ["2", "1"]});
    })

    test("schould delete all cart with 'REMOVED_ALL_CARTS' action", () => {
        const action = {type: cartType.REMOVED_ALL_CARTS};
        const result = cartReducer({ "cartId": []}, action);
        expect(result).toEqual({ "cartId": []});
    })
})