import { StyledInputSearch } from "./style";
import { Button } from "../../styles/Button";
import { useEffect, useState } from "react";

export const InputSearch = ({ products, setFilteredProducts, setCurrentSearching }) => {

    const [search, setSearch] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setFilteredProducts(products.filter(item => {
            return item.name.toUpperCase().includes(search.toUpperCase()) ||
                item.category.toUpperCase().includes(search.toUpperCase());
        }));
        setCurrentSearching(search)
    }

    return (
        <StyledInputSearch onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Digitar Pesquisa"
                className="font_body"
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button
                type="submit"
                size="medium"
            >
                Pesquisar
            </Button>
        </StyledInputSearch>
    );
};