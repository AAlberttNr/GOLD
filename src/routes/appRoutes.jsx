// Componets
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import HomePage from '../pages/homePage/HomePage'

/// ------------------------------------------------------
// Router DOM
import { Routes, Route, Outlet } from 'react-router-dom'


/// ------------------------------------------------------
const Root = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

/// ------------------------------------------------------

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Root />}>
				<Route index element={<HomePage />} />
				<Route path='catalog' element={<p>CatalogPage</p>} />
				<Route path='product:id' element={<p>ProductPage</p>} />
				<Route path='about' element={<p>AboutPage</p>} />
				<Route path='contacts' element={<p>ContactsPage</p>} />
				<Route path='cart' element={<p>CartPage</p>} />
			</Route>
		</Routes>
	)
}

export default AppRoutes
