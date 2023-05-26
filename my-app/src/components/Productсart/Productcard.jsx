import React, { useState, useEffect } from "react";
import "./productcard.scss";
import Logo1 from "../../img/star1.svg";
import Logo2 from "../../img/star2.svg";
import { useSelector } from 'react-redux';
import { selectFavorID, selectProducts } from "../../redux/selectors";
import { ViewContext } from "../../context/viewContext";


function ProductCard(props){

    let product = useSelector(selectProducts);
    let favor = useSelector(selectFavorID);
  
    const [fill, setFill] = useState(false);
    
    const addFavorits = () => {
                 fill === true ? setFill(false) : setFill(true);
             }


    useEffect(() => {
        let currentItem = favor.find(item => item === props.code);
        currentItem ? setFill(true) : setFill(false);
    }, [fill, props.code])

    return(
        <ViewContext.Consumer>
            {({theme, setTheme}) => (
            <> 
            <div id={product.code} className={theme === "cards" ? "product-card-card": "product-card-table"}>
                     <img alt="photo_flower" className="product-card-img" src={props.url}  width={350} height={230}></img>
                     <div className="product-card-content">
                     <h4 className="product-card-name">Name: {props.name}</h4>
                     <p className="product-card-price">Price: {props.price} ₴</p>
                     <p className="product-card-code">Code: {props.code}</p>
                     <p className="product-card-color">Color: {props.color}</p>
                     <img className = {fill === true ? "removed-from-favorite" : "add-to-favorite"} id={props.code} alt="logo" src={fill === true ? Logo1 : Logo2 } onClick={addFavorits}></img>
                     </div>
                 </div>     
            </>     
            )

            }
        </ViewContext.Consumer>
        
    )
}

export default ProductCard;