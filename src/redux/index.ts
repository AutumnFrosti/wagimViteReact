// index.ts 文件

import { configureStore } from "@reduxjs/toolkit";
import Global from "./modules/global/action";

// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    Global: Global
  },
});

export default store;

