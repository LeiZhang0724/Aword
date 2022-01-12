import './style/style.scss'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './js/Layout'
import Home from './js/Home'
import Carousel from './js/Carousel'
import MatchGame from './js/MatchGame'
import SpellGame from './js/SpellGame'
import Speak from './js/Speak'
import { mockData, mockSentence } from './server/mockData'
// const handleMenuChange = ({ key }) => {
// 	console.log(key)
// }
function App() {
	return (
		<div className="App">
			<div>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Navigate replace to="/home" />} />
						<Route path="/home" element={<Home />} />
						<Route path="/carousel" element={<Carousel data={mockData} />} />
						<Route path="/matchGame" element={<MatchGame data={mockData} />} />
						<Route path="/spellGame" element={<SpellGame data={mockData} />} />
						<Route path="/speak" element={<Speak data={mockSentence} />} />
					</Route>
				</Routes>
			</div>
		</div>
	)
}

export default App
