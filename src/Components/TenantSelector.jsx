import React, { useContext, useState } from "react"
import TenantContext from "../Roots/TenantContext"


const tenants = [
	{ id: 100, name: "Alfa" },
	{ id: 200, name: "Bravo" },
	{ id: 300, name: "Charlie" },
	{ id: 400, name: "Delta" }
]

export default function TenantSelector() {
	const tenantContext = useContext(TenantContext)

	return <>
		Tenant:&nbsp;
		<select size="1" value={tenantContext.tenantId} onChange={(e) => tenantContext.switchTenant(e.target.value)}>
			{tenants.map(tenant => <option key={tenant.id} value={tenant.id}>{tenant.name}</option>)}
		</select>
	</>
} 