import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router"
import { Layout } from "./ui"

const Home = lazy(() => import("@/pages/Home"))
const Projects = lazy(() => import("@/pages/Projects"))
const Orders = lazy(() => import("@/pages/Orders"))
const Profile = lazy(() => import("@/pages/Profile"))
const Download = lazy(() => import("@/pages/Download"))
const Companies = lazy(() => import("@/pages/Companies"))
const Messages = lazy(() => import("@/pages/Messages"))
const Contacts = lazy(() => import("@/pages/Contacts"))

function App() {
	const basename = import.meta.env.VITE_APP_BASENAME

	return (
		<BrowserRouter basename={basename}>
			<Suspense fallback={<div>Загружаем страницу...</div>}>
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
			</Suspense>
		</BrowserRouter>
	)
}

export default App
