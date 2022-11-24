import { StyledHeader } from "./style";
import { InputSearch } from "../InputSearch";

import logo from "../../assets/img/logo.svg"

export const Header = () => {
    return (
        <StyledHeader>
            <div>
                <img src={logo} alt="logo" />
                <InputSearch />
            </div>
        </StyledHeader>
    );
};