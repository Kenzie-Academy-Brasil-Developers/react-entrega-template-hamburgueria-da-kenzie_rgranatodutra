import { StyledHeader } from "./style";
import { InputSearch } from "../InputSearch";

import logo from "../../assets/img/logo.svg"

export const Header = ({ products, setFilteredProducts, setCurrentSearching }) => {
    return (
        <StyledHeader>
            <div>
                <img src={logo} alt="logo" />
                <InputSearch
                    products={products}
                    setFilteredProducts={setFilteredProducts}
                    setCurrentSearching={setCurrentSearching}
                />
            </div>
        </StyledHeader>
    );
};