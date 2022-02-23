import React, { useState } from "react";

export interface FlavoringSearchItemProps {
    addFlavoring: (id: number, event: React.FormEvent<HTMLButtonElement>) => void;
    key: string;
    id: number;
    engName: string;
    rusName: string
    language: string;
}

const FlavoringSearchItem = ({ addFlavoring, id, engName, rusName,language }: FlavoringSearchItemProps) => {

    return (

        <button className='block w-full m-0'

            onClick={(e) => addFlavoring(id, e)} title="Нажмите, чтобы добавить">
            <div className='grid grid-cols-1 grid-rows-2 gap-0 justify-center 
            h-min  
            bg-bg3 border-2 border-bg1  rounded-xl'>
                <div className=' justify-self-center self-center text-white w-35 border-b-2 border-bg1'>{engName || ""} </div>

                {language === 'ru' ? <div className=' justify-self-center self-center text-white w-35 '>{rusName || ""}</div>: <></>}
            </div>
        </button>


    )
}

export default FlavoringSearchItem