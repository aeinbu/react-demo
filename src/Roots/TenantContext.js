import React from "react"


export default React.createContext({
    tenantId: undefined,
    switchTenant: () => console.warn("*** TenantContext::switchTenant default version does nothing")
})
