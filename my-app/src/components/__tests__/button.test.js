import React from "react";
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Button from "../Button/Button";
import { Basket } from "../../pages/Basket";
import renderer from 'react-test-renderer';
import { useDispatch, useSelector } from "react-redux";
import OrderForm from "../Form/Form";

jest.mock('react-redux');

afterEach(cleanup);

describe("button add to cart", () => {
    test("renders without crashing", () => {
        render(<Button />);
    })

    test("renders add to cart message", () => {
        render(<Button text="Add to cart" />);
        expect(screen.getByText("Add to cart")).toBeInTheDocument();
    })

    test("there is in the document a button", () => {
        render(<Button />);
        expect(screen.getByRole("button")).toBeInTheDocument();
    })

    test('button style color pink', () => {
        const buttonProps = {
            id: 1,
            code: 2,
            color: 'pink',
            text: 'Add to Cart',
            onClick: jest.fn(),
        }
        render(<Button {...buttonProps} />);
        expect(screen.getByTestId('button-element')).toBeInTheDocument();
        expect(screen.getByRole("button")).toHaveStyle("background-color: pink");
    })

    test('snapshot button', () => {
        const buttonProps = {
            id: 1,
            code: 2,
            color: 'pink',
            text: 'Add to Cart',
            onClick: jest.fn(),
        }
        const button = renderer.create(<Button {...buttonProps} />).toJSON();
        expect(button).toMatchSnapshot();
    })

    test("button click", () => {
        const handleChange = jest.fn();
        const { container } = render(<Button onClick={handleChange} />);
        const btn = container.firstChild;
        expect(handleChange).not.toHaveBeenCalled();
        fireEvent.click(btn);
        expect(handleChange).toHaveBeenCalledTimes(1);
    })
})

describe("button in the Basket", () => {
    test("there is in the basket a button delete", () => {
        useSelector.mockReturnValue([]);
        render(<Basket />);
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    test("button schould click", () => {
        const handleChange = jest.fn();
        useSelector.mockReturnValue([]);
        render(<Basket />);
        let btn = screen.getByRole("button");
        btn.onclick = handleChange;
        expect(handleChange).not.toHaveBeenCalled();
        fireEvent.click(btn);
        expect(handleChange).toHaveBeenCalledTimes(1);
    })

})

describe("button in the Form", () => {
    test("there is in the form a button checkout", () => {
        useSelector.mockReturnValue([]);
        render(<OrderForm />);
        expect(screen.getByRole("button")).toBeInTheDocument();
    })

    test("button schould click", () => {
        const handleChange = jest.fn();
        useSelector.mockReturnValue([]);
        render(<OrderForm />);
        let btn = screen.getByRole("button");
        btn.onclick = handleChange;
        expect(handleChange).not.toHaveBeenCalled();
        fireEvent.click(btn);
        expect(handleChange).toHaveBeenCalledTimes(1);
    })
    
})




