import { useRouter } from "next/router";
import SearchBar from "../components/SearchBar";
import { DUMMY_CATEGORIES } from "../components/CategoriesCarousel";

const Search = (props) => {
	return <>
		<div className = 'w-full h-[200px] bg-hero bg-cover bg-center'>
			<div className = 'w-full h-full bg-indigo-900/50'>
				<div className = 'lg:w-[950px] xl:w-[1200px] 2xl:w-[1500px] h-full mx-auto flex justify-between items-center'>
					<div className = 'mx-auto'>
						<SearchBar />
					</div>
				</div>
			</div>
		</div>
		<div className = 'w-[800px] lg:w-[950px] xl:w-[1200px] 2xl:w-[1500px] mx-auto my-10 flex gap-5'>
			<div className = 'p-3 w-[300px] flex flex-col gap-2 bg-[#f0f0f1]'>
				<div className = 'flex justify-between'>
					<h3 className = 'font-popSBold text-[20px] text-indigo-900'>Filter by</h3>
					<button className = 'font-popSBold cursor-pointer'>Clear</button>
				</div>
				<div className = 'w-[200px] mx-auto'></div>
				<span className = 'text-neutral-500'>Category:</span>
				<ul className = 'py-2 w-[300px] flex flex-col gap-5 items-center'>
					{DUMMY_CATEGORIES.map(filter => {
						return <div key = {filter.id} className = 'w-full flex items-center gap-2 px-4'>
							<input type = 'checkbox'/>
							<p>{filter.title}</p>
						</div>
					})}
				</ul>
			</div>
			<div className = 'p-3'>
				<p className = 'font-popReg text-[20px]'>Found <span>0</span> items for search term <span>"maroc"</span></p>
				<div className = 'border w-full mx-1 my-2'></div>
			</div>
		</div>
	</>
}

export default Search;

export async function getStaticProps (context) {
	return {
		props: {

		}
	}	
}