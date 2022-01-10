import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Carousel from './js/Carousel'
import MatchGame from './js/MatchGame'
import SpellGame from './js/SpellGame'

import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { mockData, mockSentence } from './server/mockData'

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="carousel" element={<Carousel data={mockData} />} />
					<Route path="matchgame" element={<MatchGame data={mockData} />} />
					<Route path="spellgame" element={<SpellGame data={mockData} />} />
				</Route>
			</Routes>
		</Router>
		{/* <App /> */}
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
