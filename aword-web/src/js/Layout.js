import { Link, Outlet } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'

const { Header, Content, Footer } = Layout

const LayoutComponent = () => {
	return (
		<Layout>
			<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
				<div className="logo" />
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
					<Menu.Item key="home">
						<Link to="/home">Home</Link>
					</Menu.Item>
					<Menu.Item key="carousel">
						<Link to="/carousel">单词卡</Link>
					</Menu.Item>
					<Menu.Item key="spellGame">
						<Link to="/spellGame">拼写</Link>
					</Menu.Item>
					<Menu.Item key="matchGame">
						<Link to="/matchGame">配对</Link>
					</Menu.Item>
					<Menu.Item key="speak">
						<Link to="/speak">读句子</Link>
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
	)
}
export default LayoutComponent
