import React from "react"


export default React.createContext({
    batch: [],
    modifyBatch: () => console.warn("*** BatchContext::modifyBatch default version does nothing")
})
