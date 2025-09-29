import { BrowserRouter, Routes, Route } from "react-router";
import { Home, Projects, Orders, Download, Companies, Profile, Messages } from '@/pages'
import { Layout } from "./ui";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="projects" element={<Projects />} />
					<Route path="orders" element={<Orders />} />
					<Route path="profile" element={<Profile />} />
					<Route path="download" element={<Download />} />
					<Route path="companies" element={<Companies />} />
					<Route path="messages" element={<Messages />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App