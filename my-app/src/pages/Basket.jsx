import ProductCard from "../components/Productсart/Productcard";
import Modal from "../components/Modal/Modal";
import "../components/Button/button.scss";
import { useProductList } from "../hooks/useProductList";
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from "../redux/actions/openModal";
import { addCurrentProduct } from "../redux/actions/current";
import { removeCart } from "../redux/actions/cart";
import { selectCartID, selectOpen, selectProducts } from "../redux/selectors";
import OrderForm from "../components/Form/Form";
import { addFavorite, removeFavorite } from "../redux/actions/favorites";



export function Basket(props) {
const dispatch = useDispatch();

let open = useSelector(selectOpen);
let products = useSelector(selectProducts);
let cart = useSelector(selectCartID);

let arrcart = useProductList(cart, products);

    const showModalCart = (e) => {
       
        let modalData = e.target.getAttribute("data-num");
        dispatch(addCurrentProduct(modalData));
        dispatch(openModal({
            header: "Removing an Item from the cart", 
            text: "Are you sure you want to remove an item from your shopping cart?", 
            actions: ["Ok", "Cancel"], 
            closeButton: false}));
        }

        let currentproduct = useSelector(state => state.current.currentProduct);


        const removedCart = () => {
                dispatch(removeCart(currentproduct));
                dispatch(closeModal());
                            }

                            const addFavorites = (e, id) => {
                                if (e.target.tagName !== "IMG") return false;
                                id = e.target.id;
                                e.target.className === "add-to-favorite" ? dispatch(addFavorite(id)) : dispatch(removeFavorite(id))
                        
                            }

    return (
        <>
            <div className="card-box" onClick={addFavorites}>
             {!arrcart.length ? "There are no products in the cart" : arrcart.map((item) => {
                     return (
                         <div style={{display:"flex", gap: "5px"}} key={item.code}>
                         <div className="card" >
                                 <ProductCard show={props.show} id={item.code} src={item.url} name={item.name} price={item.price} code={item.code} color={item.color} {...item} />
                                
                                 <Modal className={open ? "modal-wrapper active" : "modal-wrapper"}
                                        save={removedCart}
                                        close={() => {dispatch(closeModal())}}
                                        /> 
                         </div>
                         <button data-testid="basket-button-element" className="delete-btn" data-num={item.code} data-modal-id={2} onClick={showModalCart}>X</button>
                
                         </div>
                     )
                 })}
             </div>
             <div>
                <OrderForm/>
             </div>
        </>
    )

}


