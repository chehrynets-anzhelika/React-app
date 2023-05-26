import { favoriteReducer } from "../reducers/favoriteReducer";
import { favoriteType } from "../type";
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe("favoriteReducerTest", () => {

    test('schould return default state when passed an empty action', () => {
        const result = favoriteReducer(undefined, { type: "" });
        expect(result).toEqual({ "favorId": [] });
    });

    test("schould add new favorite with an 'ADD_FAVORITE' action", () => {
    const action = {type: favoriteType.ADD_FAVORITE, payload: "1"};
    const result = favoriteReducer({ "favorId": []}, action);
    expect(result).toEqual({ "favorId": ["1"]});
    })

    test("schould remove favorite with an 'REMOVE_FAVORITE' action", () => {
    const action = {type: favoriteType.REMOVE_FAVORITE, payload: "1"};
    const result = favoriteReducer({ "favorId": ["2", "1", "4"]}, action);
    expect(result).toEqual({ "favorId": ["2", "4"]});
    })

})