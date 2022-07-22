import Layout from './components/Layout/Layout';
import OrderRoom from './components/pages/OrderRoom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CheckRoom from './components/pages/CheckRoom';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path='/' element={<OrderRoom />} />
					<Route path='/check' element={<CheckRoom />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
