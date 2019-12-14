import React, { useState, useContext } from "react"
import MyFirstContext from "../MyFirstContext"


export default function OtherCounter() {
	const [otherCount, setOtherCount] = useState(100)
	const ctx = useContext(MyFirstContext)

	return (
		<div>
			<p>The othercount is {otherCount} and the context's totalcount is {ctx.totalCount}.</p>
			<button onClick={() => setOtherCount(otherCount - 1)}>Click to othercount</button>
			<button onClick={() => ctx.totalCount++}>Change the context</button>

		</div>
	)
}