import { currentProductReducer } from "../reducers/currentProductReducer";
import { currentType } from "../type";
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('currentReducer', () => {
    test('schould return default state when passed an empty action', () => {
        const result = currentProductReducer(undefined, { type: "" });
        expect(result).toEqual({ "currentProduct": [] });
    });

    test("schould add new current with an 'ADD_CURRENT' action", () => {
        const action = {type: currentType.ADD_CURRENT, payload: "1"};
        const result = currentProductReducer({ "currentProduct": []}, action);
        expect(result).toEqual({ "currentProduct": "1"});
    })

    test("schould remove current with an 'REMOVE_CURRENT' action", () => {
        const action = {type: currentType.REMOVE_CURRENT, payload: "1"};
        const result = currentProductReducer({ "currentProduct": []}, action);
        expect(result).toEqual({ "currentProduct": []});
    })
})