import { getProductsRequested, getProductsError, getProductsSuccess} from "./productsAction";


export const productsFetch = () => {
    return function(dispatch){
        dispatch(getProductsRequested())
         fetch("./flowers.json")
         .then(response => response.json())
         .then(json => dispatch(getProductsSuccess(json)))
         .catch(err => dispatch(getProductsError(err.message)))
    }
}