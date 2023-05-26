import { openModalReducer } from "../reducers/openModalReducer";
import { openModalType } from "../type";
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe("openModalReducerTest", () => {
    test('schould return default state when passed an empty action', () => {
        const result = openModalReducer(undefined, { type: "" });
        expect(result).toEqual({
            open: false,
            content: {
                header: "",
                text: "",
                actions: [],
                closeButton: true,
            }
        });
    });

    test("schould open modal with 'OPEN_MODAL' action", () => {
        const action = {type: openModalType.OPEN_MODAL, payload: {header: "Test", text: "This is test", actions: ["first", "second"],closeButton: true,}
        };

        const result = openModalReducer({open: true}, action);
        expect(result).toEqual({open: true, content: {header: "Test", text: "This is test", actions: ["first", "second"], closeButton: true,}})
    })

    test("schould close modal with 'CLOSE_MODAL' action", () => {
        const action = {type: openModalType.CLOSE_MODAL};
        const result = openModalReducer({open: true}, action);
        expect(result).toEqual({open: false});
    })
})