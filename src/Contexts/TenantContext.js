import React from "react"

export const TenantContext = React.createContext({
    tenantId: undefined,
    switchTenant: () => console.warn("*** TenantContext::switchTenant default version does nothing"),
    routingRoot: undefined
})
