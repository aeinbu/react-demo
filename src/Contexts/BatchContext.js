import React from "react"


export const BatchContext = React.createContext({
    batch: [],
    modifyBatch: () => console.warn("*** BatchContext::modifyBatch default version does nothing")
})
