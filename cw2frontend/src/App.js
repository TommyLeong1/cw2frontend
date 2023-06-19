import './App.css';
import { Layout, Space } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './screen/Home';
import Login from './screen/Login';
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
              <Link to="./screen/Login">Sign in/Sign up</Link>
              <Link to="/">Profile</Link>
              <Link to="/">Favourites</Link>
              <Link to="/">Message board</Link>
            </Space>
					</nav>          
				</Header>
				<Content style={{ padding: '0 50px', height: '90%' }}>
					<Routes>
						<Route exact path="/" element={<Home />} />
            <Route path="./screen/Login" element={<Login />}  /> 
					</Routes>
				</Content>
				<Footer>
					<p style={{ color: 'green' }}>The Pet Shelter</p>
				</Footer>
			</Router>
		</Layout>
	);
}

export default App;