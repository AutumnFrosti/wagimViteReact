
import { ConfigProvider } from "antd";
import { HashRouter } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";
import Router from '@/route';




function App() {
  const [i18nLocale, setI18nLocale] = useState(enUS);

  return <div className="App">

    <HashRouter>
      <ConfigProvider locale={i18nLocale} >

        <Router />

      </ConfigProvider>
    </HashRouter>

  </div>
}

export default App
