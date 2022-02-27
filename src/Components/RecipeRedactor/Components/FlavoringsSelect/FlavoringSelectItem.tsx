import React, { useState } from "react";

import tpa from "../../../../Common/TpaFlavorsList"


import cls from "../RedactorComponents.module.css"
import can from "./../Icons/trash.svg"

export interface SelectedFlavoringItemProps {
    key: string;
    engName: string
    flavoringPercent: number
    onPercentChange?: any;
    onDelete: (fId: number) => void;
    flavoringId: number
}

const FlavoringSelectItem = ({ engName, flavoringPercent: flavoringPercent, onPercentChange: onPercentChange, onDelete, flavoringId }: SelectedFlavoringItemProps) => {

    return (
        <div className='grid content-center justify-center grid-cols-3 grid-rows-1 px-2 mb-1 text-sm border-2 bg-bg2 border-bg1 rounded-xl'>
            <div className='self-center text-center '>
                {engName}
            </div>
            <div className='self-center justify-self-end'>
                <input type="number" min="0" max="50"
                    className='text-center rounded-lg bg-bg3 focus:outline-none focus:bg-bg1 hover:bg-bg1'
                    value={flavoringPercent}
                    onChange={(event) => onPercentChange(flavoringId, event)}
                /> %
            </div>

            <div className='self-center justify-self-end' >
                <button
                    className='flex content-center justify-center p-0 m-1 text-xl rounded-lg w-7 h-7 bg-bg3 focus:outline-none focus:bg-bg1 hover:bg-bg1'
                    onClick={() => onDelete(flavoringId)}
                >
                    <div className="w-min h-min">&times;</div>
                </button>
            </div>
        </div>
    )
}

export default FlavoringSelectItem