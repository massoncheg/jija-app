import { DescriptionState, CalculatedFlavoring } from "../Store/Slices/RecipeRedactor/redactorSlice"
import { SelectedFlavoring } from "../Store/Slices/RecipeRedactor/redactorSlice"
import { BaseSelectState, FlavoringsSelectState } from "../Store/Slices/RecipeRedactor/redactorSlice"

const calculateDescription = (baseState: BaseSelectState, flavoringsState: FlavoringsSelectState) => {

    const result = {} as DescriptionState;

    result.liquidVolume = baseState.liquidVolume;
    result.vgVolume = calculator.calculateVgVolume(result.liquidVolume, baseState.vgProportion);
    result.nicotineVolume = calculator.calculateNicotineVolume(result.liquidVolume, baseState.nicotineType, baseState.nicotinePercentage);
    result.selectedFlavorsVolumes = calculator.calculateFlavorsVolumes(result.liquidVolume, flavoringsState.selectedFlavors);
    result.overallFlavorsVolume = calculator.calculateOverallFlavorsVolume(result.selectedFlavorsVolumes);
    result.pgVolume = calculator.calculatePgVolume(result.liquidVolume, baseState.pgProportion, result.nicotineVolume, result.overallFlavorsVolume);
    return result
}

const calculator = {
    calculateVgVolume: (liquidVolume: number, vgProportion: number) => { return liquidVolume * (vgProportion / 100) },
    calculateNicotineVolume: (liquidVolume: number, nicotineType: string, nicotinePercentage: number) => {
        if (nicotineType === "Standard") { return liquidVolume * (nicotinePercentage / 100) }
        else if (nicotineType === "Salt") { return liquidVolume * (nicotinePercentage / 200) }
        else { return 0 }
    },
    calculateFlavorsVolumes: (liquidVolume: number, flavoringsList: SelectedFlavoring[]) => {
        return flavoringsList.map(f => {
            return {
                engName: f.flavoring.engName,
                flavoringPercent: f.flavoringPercent,
                flavoringVolume: (liquidVolume * (f.flavoringPercent / 100)),
                flavoringVolumeDrops: ((liquidVolume * (f.flavoringPercent / 100)) * 33)
            }
        })
    },
    calculateOverallFlavorsVolume: (flavoringsList: CalculatedFlavoring[]) => {

        let overallVolume = flavoringsList.reduce((sum, item) => sum + item.flavoringVolume, 0);

        return overallVolume
    },
    calculatePgVolume: (liquidVolume: number, pgProportion: number, NicotineVolume: number, overallFlavorsVolume: number) => { return liquidVolume * (pgProportion / 100) - NicotineVolume - overallFlavorsVolume }
}
export { calculator, calculateDescription }