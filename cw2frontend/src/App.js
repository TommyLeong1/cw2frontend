import './App.css';
import { Layout, Space } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './screen/Home';
import Employee from './screen/Employee'

const { Header, Content, Footer } = Layout;
function App() {
 
	return (
		<Layout>
			<Router>
				<Header> 
					<nav>
            <Space>
						<Link to="/">Home</Link>
            </Space>
					</nav>          
				</Header>
				<Content style={{ padding: '0 50px', height: '90%' }}>
					<Routes>
						<Route exact path="/" element={<Home />} />
					</Routes>
				</Content>
				<Footer>
					<p style={{ color: 'green' }}>VT6003CEM Demo</p>
				</Footer>
			</Router>
		</Layout>
	);
}

export default App;