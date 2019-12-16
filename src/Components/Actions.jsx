import React, { useContext } from "react"
import BatchContext from "../Roots/BatchContext"
import { routingRoot } from "../Roots/RoutingRoot"


function sign(batchItems){
	routingRoot.sign(batchItems, { who: "ole", when: "2019-12-18 10:03:38", what: "sign" })
}

export default function Actions() {
	const batch = useContext(BatchContext)
	return <>
		<article>
			<h3>Comment</h3>
			<button>Comment...</button>
		</article>
		<article>
			<h3>Sign</h3>
			<button onClick={() => sign(batch)}>Sign all</button>
		</article>
	</>
}
