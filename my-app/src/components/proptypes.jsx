import PropTypes from 'prop-types';
import Button from "./Button/Button";
import Modal from './Modal/Modal';
import ProductList from './ProductList/ProductList';
import ProductCard from './Productсart/Productcard';

Button.propTypes = {
    text: PropTypes.string,
    code: PropTypes.string,
    id: PropTypes.string,
    "data-modal-id": PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.string,
    onClick: PropTypes.func,

}

ProductCard.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    code: PropTypes.string,
    color: PropTypes.string,
    price: PropTypes.string,
}

Modal.propTypes = {
    className: PropTypes.string,
    close: PropTypes.func,
    header: PropTypes.string,
    closeButton: PropTypes.bool,
    text: PropTypes.string,
    save: PropTypes.func,
    actions: PropTypes.array,
}

ProductList.propTypes = {
    click: PropTypes.func,
    show: PropTypes.func,
    products: PropTypes.array,
}

