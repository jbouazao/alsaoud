import SearchBar from "./SearchBar";
import SearchSide from "./SearchSide";

const Hero = () => {
	return <div className = 'w-full h-[600px] bg-hero bg-cover bg-center'>
		<div className = 'w-full h-full bg-indigo-900/50'>
			<div className = 'lg:w-[1000px] 2xl:w-[1500px] h-full mx-auto flex justify-between items-center'>
				<div className = 'flex flex-col gap-20'>
					<h1 className = 'text-[36px] font-popBold w-[400px] text-white'>
						King Abdul-Aziz Al Saoud Foundation for Islamic Studies and Human Sciences
					</h1>
					<SearchBar />
				</div>
				<SearchSide />
			</div>
		</div>
	</div>
}

export default Hero;