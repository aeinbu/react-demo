import React, { } from 'react'
import './App.css'
import Counter from "./Components/Counter"
import OtherCounter from "./Components/OtherCounter"
import MyFirstContext from "./MyFirstContext"


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<OtherCounter />
				<MyFirstContext.Provider value={{ totalCount: 50 }}>
					{[1, 2, 3, 4, 5].map(x => x % 2 === 0 ? <Counter key={x.toString()} /> : <OtherCounter key={x.toString()} />)}
				</MyFirstContext.Provider>
				<MyFirstContext.Provider value={{ totalCount: 70 }}>
					<Counter />
				</MyFirstContext.Provider>
			</header>
		</div>
	)
}





export default App
