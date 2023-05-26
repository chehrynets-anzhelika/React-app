import ProductCard from "../components/Productсart/Productcard";
import { useProductList } from "../hooks/useProductList";
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from "../redux/actions/favorites";
import { selectFavorID, selectProducts } from "../redux/selectors";



export function Favorite(){

const dispatch = useDispatch();

    const removeFavor = (e, id) => {
        if(e.target.tagName !== "IMG") return false;
        id = e.target.id;
        dispatch(removeFavorite(id));
    }

let favorId = useSelector(selectFavorID);
let products = useSelector(selectProducts);
let arrfavor = useProductList(favorId, products);


    return(
        <>
        <div className="card-box">
             {!arrfavor.length ? "There are no products in the favorites": arrfavor.map((item) => {
                     return (
                         <div key={item.code} className="card" id={item.code} onClick={removeFavor}>
                                 <ProductCard id={item.code} src={item.url} name={item.name} price={item.price} code={item.code} color={item.color} {...item} />
                         </div>
                     )
                 })}
            </div>
        </>
    ) 
}