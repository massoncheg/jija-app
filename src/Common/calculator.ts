import { iCalculatedFlavoring } from "../Store/Slices/RecipeRedactor/descriptionSlice"
import { iSelectedFlavoring } from "../Store/Slices/RecipeRedactor/flavoringsSlice"

const calculator = {
    calculateVgVolume: (liquidVolume: number, vgProportion: number) => { return liquidVolume * (vgProportion / 100) },
    calculateNicotineVolume: (liquidVolume: number, nicotineType: string, nicotinePercentage: number) => {
        if (nicotineType === "Standard") { return liquidVolume * (nicotinePercentage / 100) }
        else if (nicotineType === "Salt") { return liquidVolume * (nicotinePercentage / 200) }
        else { return 0 }
    },
    calculateFlavorsVolumes: (liquidVolume: number, flavoringsList: iSelectedFlavoring[]) => {
        return flavoringsList.map(f => {
            return {
                engName: f.flavoring.engName,
                flavoringPercent: f.flavoringPercent,
                flavoringVolume: (liquidVolume * (f.flavoringPercent / 100)),
                flavoringVolumeDrops: ((liquidVolume * (f.flavoringPercent / 100)) * 33)
            }
        })
    },
    calculateOverallFlavorsVolume: (flavoringsList: iCalculatedFlavoring[]) => {

        let overallVolume = flavoringsList.reduce((sum, item) => sum + item.flavoringVolume, 0);

        return overallVolume
    },
    calculatePgVolume: (liquidVolume: number, pgProportion: number, NicotineVolume: number, overallFlavorsVolume: number) => { return liquidVolume * (pgProportion / 100) - NicotineVolume - overallFlavorsVolume }
}
export default calculator