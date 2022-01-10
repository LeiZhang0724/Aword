import './style/style.scss'
import { Link, Outlet } from 'react-router-dom'

import { Layout, Menu, Breadcrumb } from 'antd'
import Carousel from './js/Carousel'
import MatchGame from './js/MatchGame'
import SpellGame from './js/SpellGame'
import Speak from './js/Speak'
import { mockData, mockSentence } from './server/mockData'
const { Header, Content, Footer } = Layout
// const handleMenuChange = ({ key }) => {
// 	console.log(key)
// }
function App() {
	return (
		<div className="App">
			<Layout>
				<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
					<div className="logo" />
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
						<Menu.Item key="carousel">
							<Link to="/carousel">单词卡</Link>
						</Menu.Item>
						<Menu.Item key="spellGame">
							<Link to="/spellGame">拼写</Link>
						</Menu.Item>
					</Menu>
				</Header>
				<Content
					className="site-layout"
					style={{ padding: '0 50px', marginTop: 64 }}
				>
					{/* <Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb> */}
					<div
						className="site-layout-background"
						style={{ padding: 24, minHeight: 380 }}
					>
						<Outlet />
						{/* <Carousel data={mockData}></Carousel>
						<MatchGame data={mockData}></MatchGame>
						<SpellGame data={mockData}></SpellGame>
						<Speak></Speak> */}
					</div>
				</Content>
				{/* <Footer style={{ textAlign: 'center' }}>
					Ant Design ©2018 Created by Ant UED
				</Footer> */}
			</Layout>
		</div>
	)
}

export default App
