import { render, cleanup } from '@testing-library/react';
import OrderForm from "../Form/Form";
import { useDispatch, useSelector } from 'react-redux';

afterEach(cleanup);

jest.mock('react-redux');


test("snapshot form", () => {
    useDispatch.mockReturnValue([]);
    useSelector.mockReturnValue([])
    const component = render(<OrderForm />);
    expect(component).toMatchSnapshot();
})