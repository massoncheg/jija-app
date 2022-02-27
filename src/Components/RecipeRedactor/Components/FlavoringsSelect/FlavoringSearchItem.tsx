import React, { useState } from "react";

export interface FlavoringSearchItemProps {
    addFlavoring: (id: number, event: React.FormEvent<HTMLButtonElement>) => void;
    key: string;
    id: number;
    engName: string;
    rusName: string
    language: string;
}

const FlavoringSearchItem = ({ addFlavoring, id, engName, rusName, language }: FlavoringSearchItemProps) => {

    return (

        <button className='block w-full m-0 text-sm'

            onClick={(e) => addFlavoring(id, e)} title="Нажмите, чтобы добавить">
            <div className='grid justify-center grid-cols-1 grid-rows-2 gap-0 border-2 h-min bg-bg3 border-bg1 rounded-xl'>
                <div className='self-center text-white border-b-2 justify-self-center w-35 border-bg1'>{engName || ""} </div>

                {language === 'ru' ? <div className='self-center text-white justify-self-center w-35'>{rusName || ""}</div> : <></>}
            </div>
        </button>


    )
}

export default FlavoringSearchItem