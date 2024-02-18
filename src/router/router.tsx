import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login } from '../pages';

const Router: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	</BrowserRouter>
);

export default Router;