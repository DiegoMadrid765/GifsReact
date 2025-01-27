import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.find(category => category.toLowerCase() === newCategory.toLowerCase())) return;
        setCategories([newCategory.toLowerCase(), ...categories]);
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={value => onAddCategory(value)}/>
            {
                categories.map(category => <GifGrid category={category} key={category} />
                )}
        </>
    )
}


