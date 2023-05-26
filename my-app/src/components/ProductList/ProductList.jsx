import React from "react";
import ProductCard from "../Productсart/Productcard";
import "./cardbox.scss";
import Button from "../Button/Button";
import {useSelector} from 'react-redux';
import { selectError, selectProducts } from "../../redux/selectors";
import { ViewContext } from "../../context/viewContext";


function ProductList(props) {

    let products = useSelector(selectProducts);
    let error = useSelector(selectError);
    

    if (error){
        return(
            <div className="message">Error</div>
        )
    }
 
        return (
        <ViewContext.Consumer>{
            ({theme, setTheme}) => (
                <>
                
                    <div className={theme === "cards" ? "card-box" : "card-table"} onClick={props.click}>
                    
                    {!error && products.length ? products.map((product) => {
                            return ( 
                                <div key={product.code} className="card" id={product.code}>
                                    <ProductCard show = {props.show} code = {product.code} src = {product.src} name = {product.name} color = {product.color} {...product} />
                                    <div className="button-wrapper">
                                    <Button code="3" onClick = {props.onClick} color="pink" text="Add to cart" id={product.code}/>
                                    </div>
                                </div>
                            )
                        }) : <div className="message">Loading</div> }
                    </div>  
                        </>
            )
        }
                
                    </ViewContext.Consumer>
            ); 
                    }

                    export default ProductList;