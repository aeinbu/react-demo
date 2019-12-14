import React, { useState, useContext } from "react"
import MyFirstContext from "../MyFirstContext"


export default function Counter() {
	const [count, setCount] = useState(0);
	const ctx = useContext(MyFirstContext)

	return (
		<div>
			<p>The count is {count} and the context's totalcount is {ctx.totalCount}.</p>
			<button onClick={() => setCount(count + 1)}>Click to count</button>
		</div>
	)
}