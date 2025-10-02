import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "./ui";
import { Home, Projects, Orders, Download,
	Companies, Profile, Messages, Contacts } from '@/pages'

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
					<Route path="contacts" element={<Contacts />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App