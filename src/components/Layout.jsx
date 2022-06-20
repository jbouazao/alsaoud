import Footer from "./Footer"
import Header from "./Header"
import NewsLetter from "./NewsLetter"

const Layout = (props) => {
	return <div className = 'w-full'>
		<Header />
		<main className = ''>
			{props.children}
		</main>
		<NewsLetter />
		<Footer />
	</div>
}

export default Layout