import "./header.scss";
import Logo2 from "../../img/star2.svg";
import Home from "../../img/home.svg";
import ShopingCart from "../../img/cart.svg";
import { Link } from "react-router-dom";
import { selectFavorID, selectCartID } from "../../redux/selectors";
import { useSelector } from "react-redux";


export function Header(){
    
let favCount = useSelector(selectFavorID);
let cartCount = useSelector(selectCartID);

    return (
                    <>
                    <div className="header" data-testid="header-element">
                     <Link className="header-link" to="/"><img src={Home} alt="home"></img></Link>
                     <div className="header-container">
                    <Link className="header-link" to="/favorite"> <p className="current-number">{favCount.length}</p>
                        <img alt="favorite" src= {Logo2} num={favCount.length}></img></Link>
                    <Link className="header-link" to="/basket"> <p className="current-number">{cartCount.length}</p>
                        <img alt="cart" src= {ShopingCart} num={cartCount.length}></img></Link>
                     </div>
                        </div>
                    </>
                )
}