import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";
import { render, screen, cleanup, fireEvent} from '@testing-library/react';

afterEach(cleanup);

jest.mock('react-redux');

const content = 
    {
        header: "React",
        closebutton: true,
        text: "Learn React",
        actions: ["1", "2"],
    }

const propsModal = {
    className: "test-modal",
    close: jest.fn(),
    save: jest.fn(),
}


test("snapshot modal", () => {
    useSelector.mockReturnValue(content);
    const component = render(<Modal {...propsModal}/>);
    expect(component).toMatchSnapshot();
})

test("content in the document", () => {
    useSelector.mockReturnValue(content);
    render(<Modal {...propsModal}/>);
    expect(screen.getByTestId('modal-first-button-element')).toBeInTheDocument();
    expect(screen.getByTestId('modal-second-button-element')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByTestId('modal-element')).toHaveClass('test-modal');
})

test('click on save', () => {
    useSelector.mockReturnValue(content);
    render(<Modal {...propsModal}/>);
    fireEvent.click(screen.getByTestId('modal-first-button-element'));
    expect(propsModal.save).toHaveBeenCalled();
})

test('click on close', () => {
    useSelector.mockReturnValue(content);
    render(<Modal {...propsModal}/>);
    fireEvent.click(screen.getByTestId('modal-second-button-element'));
    expect(propsModal.close).toHaveBeenCalled();
})

test('click on closedbutton', () => {
    useSelector.mockReturnValue(content);
    render(<Modal {...propsModal}/>);
    fireEvent.click(screen.getByTestId('closed-button-element'));
    expect(propsModal.close).toHaveBeenCalled();
})

