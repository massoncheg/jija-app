import React, { useState } from "react";
import BaseSelect from "./Components/BaseSelect/BaseSelect";
import FlavoringsSelect from "./Components/FlavoringsSelect/FlavoringsSelect";
import { iDBFlavoring } from "./Components/FlavoringsSelect/FlavoringsSearch";
import RecipeDescription from "./Components/RecipeDescription/RecipeDescription";
import cls from "./RecipeRedactor.module.css"

import tpa from "../../Common/TpaFlavorsList.js"
import { BaseSelectState } from "../../Store/Slices/RecipeRedactor/baseSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { FlavoringsSelectState } from "../../Store/Slices/RecipeRedactor/flavoringsSlice";

interface iSelectedFlavoring {
    flavoring: iDBFlavoring | {
        engName: string,
        rusName: string,
        id: number,
        recommendedPercentage: string,
        recommendedPercentageDrops: string
    },
    flavoringPrecent: number
}



const RecipeRedactor = () => {
    const basestate: BaseSelectState = useSelector((state: RootState) => state.base)
    const flavoringsState: FlavoringsSelectState = useSelector((state: RootState) => state.flavorings)
    const deState: FlavoringsSelectState = useSelector((state: RootState) => state.flavorings)


    // const [flavoringsSelectState, setFlavoringsSelectState] = useState({
    //     selectedFlavors: [],
    // } as { selectedFlavors: iSelectedFlavoring[] });

    // const [descriptionState, setDescriptionState] = useState({
    //     liquidVolume: 0,
    //     pgVolume: 0,
    //     vgVolume: 0,
    //     nicotineVolume: 0,
    //     overallFlavorsVolume: 0,
    //     selectedFlavorsVolumes: []
    // } as {
    //     liquidVolume: number,
    //     pgVolume: number,
    //     vgVolume: number,
    //     nicotineVolume: number,
    //     overallFlavorsVolume: number,
    //     selectedFlavorsVolumes: iCalculatedFlavoring[]
    // });


    // const flavoringsSelectReducer = {

    //     handleFlavoringSelect: (id: number) => {
    //         if (/* Здесь проверяем есть ли вообще аромки в списке, что бы не было ошибок при проверке на повторы */
    //             flavoringsSelectState.selectedFlavors.length === 0
    //             /* Здесь проверяем есть ли уже эта аромка в списке*/
    //             || flavoringsSelectState.selectedFlavors.findIndex((item: iSelectedFlavoring) => item.flavoring.id === id) === -1) {


    //             let flavoring: iDBFlavoring | undefined = tpa.find((i: iDBFlavoring) => i.id === id);
    //             if (flavoring) {
    //                 setFlavoringsSelectState({
    //                     selectedFlavors: flavoringsSelectState.selectedFlavors.concat(
    //                         {
    //                             flavoring: flavoring,
    //                             flavoringPrecent: 1

    //                         }
    //                     )
    //                 })
    //             }
    //         }
    //     },

    //     handlePrecentageChange: (id: number, event: React.FormEvent<HTMLInputElement>) => {

    //         let selectedFlavors = [...flavoringsSelectState.selectedFlavors];
    //         let indexPrecentToChange = selectedFlavors.findIndex((item: iSelectedFlavoring) => item.flavoring.id === Number(id));
    //         selectedFlavors[indexPrecentToChange] = { ...selectedFlavors[indexPrecentToChange], flavoringPrecent: +event.currentTarget.value };

    //         setFlavoringsSelectState({
    //             selectedFlavors: [...selectedFlavors]
    //         })

    //     },

    //     handleFlavoringDelete: (id: number) => {
    //         let selectedFlavors = [...flavoringsSelectState.selectedFlavors];
    //         let indexFlavoringToDelete = selectedFlavors.findIndex((item: iSelectedFlavoring) => item.flavoring.id === Number(id));
    //         selectedFlavors.splice(indexFlavoringToDelete, 1);

    //         setFlavoringsSelectState({
    //             selectedFlavors: [...selectedFlavors]

    //         })
    //     }
    // }

    // const descriptionReducer = {
    //     handleSubmit: () => {

            

    //         let liquidVolume = basestate.liquidVolume;
    //         let vgVolume = calculator.calculateVgVolume(liquidVolume, basestate.vgPropotion);
    //         let nicotineVolume = calculator.calculateNicotineVolume(liquidVolume, basestate.nicotineTipe, basestate.nicotinePercentage);
    //         let selectedFlavorsVolumes = calculator.calculateFlavorsVolumes(liquidVolume, flavoringsState.selectedFlavors);
    //         let overallFlavorsVolume = calculator.calculateOverallFlavorsVolume(selectedFlavorsVolumes);
    //         let pgVolume = calculator.calculatePgVolume(liquidVolume, basestate.pgPropotion, nicotineVolume, overallFlavorsVolume);


    //         setDescriptionState({
    //             liquidVolume: liquidVolume,
    //             pgVolume: pgVolume,
    //             vgVolume: vgVolume,
    //             nicotineVolume: nicotineVolume,
    //             overallFlavorsVolume: overallFlavorsVolume,
    //             selectedFlavorsVolumes: selectedFlavorsVolumes
    //         });

    //     }

    // }
    // /* Функции для расчета объемов компонентов */
    // const calculator = {
    //     calculateVgVolume: (liquidVolume: number, vgPropotion: number) => { return liquidVolume * (vgPropotion / 100) },
    //     calculateNicotineVolume: (liquidVolume: number, nicotineTipe: string, nicotinePercentage: number) => {
    //         if (nicotineTipe === "Standart") { return liquidVolume * (nicotinePercentage / 100) }
    //         else if (nicotineTipe === "Salt") { return liquidVolume * (nicotinePercentage / 200) }
    //         else { return 0 }
    //     },
    //     calculateFlavorsVolumes: (liquidVolume: number, flavoringsList: iSelectedFlavoring[]) => {
    //         return flavoringsList.map(f => {
    //             return {
    //                 engName: f.flavoring.engName,
    //                 flavoringPrecent: f.flavoringPrecent,
    //                 flavoringVolume: (liquidVolume * (f.flavoringPrecent / 100)),
    //                 flavoringVolumeDrops: ((liquidVolume * (f.flavoringPrecent / 100)) * 33)
    //             }
    //         })
    //     },
    //     calculateOverallFlavorsVolume: (flavoringsList: iCalculatedFlavoring[]) => {

    //         let overallVolume = 0;
    //         for (let i = 0; i < flavoringsList.length; ++i) {
    //             overallVolume += flavoringsList[i]["flavoringVolume"];
    //         }

    //         return overallVolume
    //     },
    //     calculatePgVolume: (liquidVolume: number, pgPropotion: number, NicotineVolume: number, overallFlavorsVolume: number) => { return liquidVolume * (pgPropotion / 100) - NicotineVolume - overallFlavorsVolume }
    // }

    return (
        <div className={cls.redactorWrapper}>
            <BaseSelect />
            <FlavoringsSelect />
            <RecipeDescription />
        </div>
    )

}
export default RecipeRedactor