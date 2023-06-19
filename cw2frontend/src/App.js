import './App.css';
import { Layout, Space } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './screen/Home';
import Login from './screen/Login';
import Register from './screen/Register';
import Admin from './screen/Admin'
import Employee from './screen/Employee'
import User from './screen/User'
import EditCat from './screen/EditCat'
import EditFavCat from './screen/EditFavCat'
import FavCatPost from './screen/FavCatPost'
import MASboard from './screen/MASboard'

const { Header, Content, Footer } = Layout;
function App() {
 
	return (
		<Layout>
			<Router>
				<Header> 
					<nav>
            <Space>
						<Link to="/">Home</Link>
              <Link to="/Register">Sign up</Link>
              <Link to="/Login">Sign in</Link>
              <Link to="/Admin">Edit Admin</Link>
              <Link to="/Employee">Edit Employee</Link>
              <Link to="/User">Edit User</Link>
              <Link to="/EditCat">Edit Cat post</Link>
              <Link to="/EditFavCat">Edit Favourites Cat post</Link>
              <Link to="/FavCatPost">Favourites Cat</Link>
              <Link to="/MASboard">Message board</Link>
            </Space>
					</nav>          
				</Header>
				<Content style={{ padding: '0 50px', height: '90%' }}>
					<Routes>
						<Route exact path="/" element={<Home />} />
            <Route path="/Register" element={<Register />}  /> 
            <Route path="/Login" element={<Login />}  /> 
            <Route path="/Admin" element={<Admin />}  /> 
            <Route path="/Employee" element={<Employee />}  /> 
            <Route path="/User" element={<User />}  /> 
            <Route path="/EditCat" element={<EditCat />}  /> 
            <Route path="/EditFavCat" element={<EditFavCat />}  /> 
            <Route path="/FavCatPost" element={<FavCatPost />}  />
            <Route path="/MASboard" element={<MASboard />}  />
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