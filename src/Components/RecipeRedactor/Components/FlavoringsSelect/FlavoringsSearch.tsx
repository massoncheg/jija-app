import React, { useState } from "react";

import tpa from "../../../../Common/TpaFlavorsList"


import cls from "../RedactorComponents.module.css"

interface FlavoringSearchItemProps {
    addFlavoring: (id: number, event: React.FormEvent<HTMLButtonElement>) => void;
    key: string;
    id: number;
    engName: string;
    rusName: string

}

const FlavoringSearchItem = ({ addFlavoring, id, engName, rusName }: FlavoringSearchItemProps) => {

    return (

        <button className='block w-full m-0'

            onClick={(e) => addFlavoring(id, e)} title="Нажмите, чтобы добавить">
            <div className='grid grid-cols-1 grid-rows-2 gap-0 justify-center 
            h-min  
            bg-bg3 border-2 border-bg1  rounded-xl'>
                <div className=' justify-self-center self-center text-white w-35 border-b-2 border-bg1'>{engName || ""} </div>
                
                <div className=' justify-self-center self-center text-white w-35 '>{rusName || ""}</div>
            </div>
        </button>


    )
}

export interface DataBaseFlavoring {
    engName: string,
    rusName: string,
    id: number,
    recommendedPercentage?: string,
    recommendedPercentageDrops?: string
}

// Отображает поиск по ароматизаторам и позволяет добавить выбранную аромку к рецепту
interface FlavoringsSearchProps {
    addFlavoring: (id: number, event: React.FormEvent<HTMLButtonElement>) => void;
}

const FlavoringsSearch = ({ addFlavoring, }: FlavoringsSearchProps) => {

    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState<DataBaseFlavoring[]>([]);

    const filterForSearch = (arr: DataBaseFlavoring[], val: string) => {
        let i = 0;
        return arr.filter(function callbackFn(item: DataBaseFlavoring) { return (item.engName.toLowerCase().includes(val.toLowerCase()) || item.rusName.toLowerCase().includes(val.toLowerCase())) }).slice(0, 15)
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

    let searchResultsList = searchResults.map(item => <FlavoringSearchItem addFlavoring={addFlavoring} key={item.id.toString()} id={item.id} engName={item.engName} rusName={item.rusName} />)

    return (
        <div className='grid gap-1 p-2 grid-cols-1 justify-center bg-bg3 rounded-xl border-2 border-bg1'>


            <div className=' h-auto w-full justify-self-center rounded'>
                <input type="text" placeholder="Search" id="fSearch"
                    className='w-full rounded
                    bg-bg2
                    focus:outline-none focus:border-2 focus:border-bg1' 
                    onChange={searchChangeHandler} value={searchText}
                />
            </div>
            <div className={cls.dropdownContent}>{searchResultsList}</div>

        </div>
    )
}

export default FlavoringsSearch