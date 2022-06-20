import BookCardS from "./BookCardS";
import CategoriesCarousel from "./CategoriesCarousel";

const DUMMY_ITEMS = [
	{
		id: 1,
		title: 'Maroc en aquarelles : dessins et pastels',
		img: '/assets/media/books/book-1.jpg'
	},
	{
		id: 2,
		title: 'Minorités d\'Orient : les oubliés de l\'histoire',
		img: '/assets/media/books/book-2.jpg'
	},
	{
		id: 3,
		title: 'قاموس الفكر السياسي',
		img: '/assets/media/books/book-3.jpg'
	},
	{
		id: 4,
		title: 'الفلسفة تدخل المدارس',
		img: '/assets/media/books/book-4.jpg'
	},
	{
		id: 5,
		title: 'La sociologie française : sociogenèse d\'une tradition nationale',
		img: '/assets/media/books/book-5.jpg'
	}
]

const FinditFast = () => {
	return <div className = 'w-full bg-[#f0ffee]'>
		<div className = 'py-7 w-[800px] lg:w-[950px] xl:w-[1200px] 2xl:w-[1500px] mx-auto flex flex-col'>
			<h3 className = 'text-indigo-900 font-popSBold text-[36px]'>Find it Fast!</h3>
			<CategoriesCarousel />
			<ul className = 'mt-5 w-full py-5 flex justify-between'>
				{DUMMY_ITEMS.map(item => <BookCardS key = {item.id} item = {item}/>)}
			</ul>
			<button className = 'w-[100px] h-[40px] font-popReg bg-green-200 mx-auto'>See more</button>
		</div>
	</div>
}

export default FinditFast;