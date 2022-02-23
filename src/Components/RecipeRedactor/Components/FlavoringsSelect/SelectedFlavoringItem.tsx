import React, { useState } from "react";

import tpa from "../../../../Common/TpaFlavorsList"


import cls from "../RedactorComponents.module.css"

export interface SelectedFlavoringItemProps {
    key: string;
    engName: string
    flavoringPercent: number
    onPercentChange?: any;
    onDelete: (fId: number) => void;
    flavoringId: number
}

const SelectedFlavoringItem = ({ engName, flavoringPercent: flavoringPercent, onPercentChange: onPercentChange, onDelete, flavoringId }: SelectedFlavoringItemProps) => {

    return (
        <div className='
        grid grid-cols-3 grid-rows-1 justify-center content-center
        bg-bg2 border-2 border-bg1 p-2 rounded-xl'>
            <div className='
            text-center self-center'>
                {engName}
            </div>
            <div className='justify-self-end self-center'>
                <input type="number" min="0" max="50"
                    className='text-center bg-bg3 rounded-lg
                    focus:outline-none focus:border-2 focus:border-bg1'
                    value={flavoringPercent}
                    onChange={(event) => onPercentChange(flavoringId, event)}
                /> %
            </div>
            <div className='justify-self-end self-center' >
                <button
                    className='bg-bg3 rounded-lg w-8 h-8'
                    onClick={() => onDelete(flavoringId)}>x</button>
            </div>
        </div>
    )
}

export default SelectedFlavoringItem