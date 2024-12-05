import {createContext, useContext, useState} from 'react';
import PropTypes from "prop-types";

const ProductContext = createContext();

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context)
        throw new Error('useAuth debe estar dentro de un contexto');
    return context;
}

function ProductsProvider({children}) {
    const [products, setProducts] = useState([]);
    return (
        <ProductContext.Provider value={{
            products
        }}>
            {children}
        </ProductContext.Provider>
    );
}

ProductsProvider.propTypes = {
    children: PropTypes.any,
}

export default ProductsProvider;