import React, { useState } from "react";

import tpa from "../../../../Common/TpaFlavorsList"


import cls from "../RedactorComponents.module.css"

interface FlavoringSearchItemProps {
    addFlavoring: (id: number, event: React.FormEvent<HTMLButtonElement>) => void;

    id: number;
    engName: string;
    rusName: string

}

const FlavoringSearchItem = ({ addFlavoring, id, engName, rusName }: FlavoringSearchItemProps) => {

    return (
        <div className={cls.flavoringSearchItem}>


            <button onClick={(e) => addFlavoring(id, e)} title="Нажмите, чтобы добавить" className= {cls.flavoringSearchItembutton}>
                <span className={cls.flavoringName}>{engName || ""}</span>
                <span className={cls.flavoringName}>{rusName || ""}</span>
            </button>

        </div>
    )
}

export interface iDBFlavoring {
    engName: string,
    rusName: string,
    id: number,
    recommendedPercentage?: string,
    recommendedPercentageDrops?: string
}

// Отображает поиск по аромотизаторам и позволяет добавить выбранную аромку к рецепту
interface FlavoringsSearchProps {
    addFlavoring: (id: number, event: React.FormEvent<HTMLButtonElement>) => void;
}

const FlavoringsSearch = ({ addFlavoring, }: FlavoringsSearchProps) => {

    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState<iDBFlavoring[]>([]);

    const filterForSearch = (arr: iDBFlavoring[], val: string) => {

        return arr.filter((item: iDBFlavoring) => item.engName.toLowerCase().includes(val.toLowerCase())).slice(0, 5)
    }

    const searchChangeHandler = (event: React.FormEvent<HTMLInputElement>): void => {

        setSearchText(event.currentTarget.value)

        if (event.currentTarget.value === '' || event.currentTarget.value === ' ') {
            setSearchResults([]);
        }
        else {
            setSearchResults(filterForSearch(tpa, event.currentTarget.value));
        };
    }

    let searchResultsList = searchResults.map(item => <FlavoringSearchItem addFlavoring={addFlavoring} id={item.id} engName={item.engName} rusName={item.rusName} />)

    return (
        <div className={cls.flavoringSearchWrapper}>

            <input type="text" placeholder="Search.." id="fSearch" onChange={searchChangeHandler} value={searchText} className={cls.flavoringSearchInput} />
            <div className={cls.dropdownContent}>{searchResultsList}</div>

        </div>
    )
}

export default FlavoringsSearch