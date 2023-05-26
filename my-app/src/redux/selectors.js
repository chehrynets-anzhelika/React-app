import { createSelector } from "reselect";

const selectFavorites = state => state.favorites.favorId;
export const selectFavorID = createSelector(
    selectFavorites,
    favorId => favorId
  );

const selectCart = state => state.cart.cartId;
  export const selectCartID = createSelector(
    selectCart,
      cartId => cartId
    );

const selectContentModal = state => state.open.content;
export const selectContent = createSelector(
    selectContentModal,
    content => content
)

const selectopenModal = state => state.open.open;
export const selectOpen = createSelector(
    selectopenModal,
    open => open
)

const selectCurrentProduct = state => state.current.currentProduct;
export const selectCurrent = createSelector(
    selectCurrentProduct,
    currentProduct => currentProduct
)

const selectProductsList = state => state.products.products;
export const selectProducts = createSelector(
    selectProductsList,
    products => products
)

const selectErrorState = state => state.products.error;
export const selectError = createSelector(
    selectErrorState,
    error => error
)