//action.ts文件

import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
    address: string;
    ChainID: number
    language: string
}
const initialState: CounterState = {
    address: '',
    ChainID: 10,
    language: 'en'
};

// 创建一个 Slice 
export const Global = createSlice({
    name: 'Global',
    initialState,
    // 定义 reducers 并生成关联的操作
    reducers: {
        // 定义一个加的方法
        addUser: (state, { payload }) => {
            state.address = payload.address;
            state.ChainID = payload.ChainID
        },
        // 定义一个减的方法

        UpdateUser: (state, { payload }) => {
            state.address = payload.address;
            state.ChainID = payload.ChainID
        },
        SetLanguage: (state, { payload }: { payload: { language: string } }) => {
            state.language = payload.language
        }
    },
});
// 导出加减的方法
export const { addUser, UpdateUser, SetLanguage } = Global.actions;

// 默认导出
export default Global.reducer;
