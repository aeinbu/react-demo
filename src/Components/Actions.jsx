import React, { useContext } from "react"
import BatchContext from "../Roots/BatchContext"
import { routingRoot } from "../Roots/RoutingRoot"
import { BatchItemSelector } from "./BatchItemSelector"


function sign(identifiers) {
	routingRoot.sign(identifiers, { who: "ole", when: "2019-12-18 10:03:38", what: "sign" })
}


export default function Actions() {
	const { batch } = useContext(BatchContext)
	return <>
		<article>
			<h3>Comment</h3>
			<button>Comment...</button>
		</article>
		<article>
			<h3>Sign</h3>
			<button onClick={() => sign(batch)}>Sign all</button>
		</article>
		<article>
			<h3>Modify batch</h3>
			<BatchItemSelector />
		</article>
	</>
}

