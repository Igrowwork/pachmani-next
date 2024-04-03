// Yeh hamari  redux toolkit ki application and next js ki application ko ek saath connect kr deta h

"use client"

import { Store } from "@reduxjs/toolkit"

const { Provider } = require("react-redux")

export function Providers({children}:{children:React.ReactNode}){
    return children
}