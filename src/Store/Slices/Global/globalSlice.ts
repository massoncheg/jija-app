import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

export interface GlobalState {
    language: string;
}

const setLanguage = () => {
    const lang = navigator.language.toLocaleLowerCase();
    if (lang === 'ru-ru') { return 'ru' }
    else { return 'en' }
}

const initialState: GlobalState = {
    language: setLanguage()
}

export const globalSlice = createSlice({
    name: 'global',
    initialState: initialState,
    reducers: {
        handleLanguageSelect: (state, action: PayloadAction<string>) => {
            state.language = action.payload
        },
    }
})
export const { handleLanguageSelect,
} = globalSlice.actions;

export default globalSlice.reducer;
