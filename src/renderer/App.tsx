import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import BlueprintEditor from './pages/BlueprintEditor';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/editor" element={<BlueprintEditor />} />
			</Routes>
		</Router>
	);
}
