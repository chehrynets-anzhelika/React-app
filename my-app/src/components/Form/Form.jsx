import React from 'react';
import "./form.scss";
import * as Yup from 'yup';
import { Formik, Form, useField } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { removedAllCart } from '../../redux/actions/cart';
import { selectCartID, selectProducts } from '../../redux/selectors';
import { getOrderList } from '../../hooks/getOrderList';
import { PatternFormat } from 'react-number-format';

export const MyTextInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input  {...field} {...props} className='input' />
            {meta.touched && meta.error ? (
                <div className='form-error'>{meta.error}</div>
            ) : null}
        </>
    )
};

const MyMobile = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <PatternFormat format="+380 (##) ### ## ##" allowEmptyFormatting mask="_" {...field} {...props} className='input' />
            {meta.touched && meta.error ? (
                <div className='form-error'>{meta.error}</div>
            ) : null}
        </>
    )
}

const OrderForm = () => {
    const dispatch = useDispatch();

    let cart = useSelector(selectCartID);
    let products = useSelector(selectProducts);


    return (
        <Formik
            initialValues={{
                name: "",
                lastName: "",
                age: "",
                address: "",
                mobile: "",

            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(2, 'Must be 2 characters or more')
                    .matches(/^[a-zA-Z]+$/, "Must be only letters")
                    .required('Required'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .matches(/^[a-zA-Z_/-]+$/, "Must be only letters")
                    .required('Required'),
                age: Yup.number()
                    .min(18, 'Must be 18 years old or more')
                    .max(99, "Too old age")
                    .integer("Must be number")
                    .required('Required'),
                address: Yup.string()
                    .min(20, 'Must be 20 characters or more')
                    .required('Required'),
                mobile: Yup.string()
                    .required('Required'),
            })}
            onSubmit={(values, { resetForm }) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    console.log(getOrderList(cart, products));
                    localStorage.clear();
                    dispatch(removedAllCart());
                    resetForm();
                }, 400);
            }}
        >
            <Form className='form'>
                <div>
                    <h3 className='form-title'>give info about yourself to order</h3>
                </div>

                <MyTextInput
                    label="Name"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane"
                />

                <MyTextInput
                    label="Last Name"
                    id="astName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                />

                <MyTextInput
                    label="Age"
                    id="age"
                    name="age"
                    type="text"
                    placeholder="21"
                />

                <MyTextInput
                    label="Address"
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Input your address"
                />

                <MyMobile 
                name="mobile" 
                id="mobile" 
                label="Mobile" />

                <button data-testid="form-button-element" type="submit" className='button form-button'>Checkout</button>
            </Form>
        </Formik>
    )
}

export default OrderForm;