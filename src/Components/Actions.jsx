import React, { useContext, useState } from "react"
import BatchContext from "../Roots/BatchContext"
import { routingRoot } from "../Roots/RoutingRoot"
import { BatchItemSelector } from "./BatchItemSelector"


function sign(identifiers) {
	routingRoot.sign(identifiers, { who: "ole", when: "2019-12-18 10:03:38", what: "sign" })
}


export default function Actions() {
	return <>
		<article>
			<h3>Comment</h3>
			<button>Comment...</button>
		</article>
		<article>
			<RegisterComponent />
		</article>
		<article>
			<SignOperations />
		</article>
		<article>
			<BatchItemSelector />
		</article>
	</>
}


function RegisterComponent() {
	// const { batch } = useContext(BatchContext)
	const [inputText, setInputText] = useState("")
	const register = () => {
		console.log("*** registering component", inputText)
		setInputText("")
	}
	
	return <>
		<h3>Register component</h3>
		<input type="text" value={inputText} onChange={event => setInputText(event.target.value)} />
		<button onClick={() => register()}>Register</button>
	</>
}



function SignOperations() {
	const { batch } = useContext(BatchContext)
	return <>
		<h3>Sign</h3>
		<button onClick={() => sign(batch)}>Sign all</button>
	</>
}