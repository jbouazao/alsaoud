import BookCardS from "./BookCardS";

export const DUMMY_ITEMS = [
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

const NewAcquisitions = () => {
	return <section className = 'py-7 mx-auto w-[600px] lg:w-[950px] xl:w-[1200px] 2xl:w-[1500px] h-[600px]'>
		<div className = 'flex justify-between'>
			<h2 className = 'text-indigo-900 font-popSBold text-[36px]'>New Acquisitions</h2>
			<button className = 'w-[100px] font-popReg bg-sky-50 border rounded-full'>See More</button>
		</div>
		<ul className = 'mt-5 w-full py-5 flex justify-between'>
			{DUMMY_ITEMS.map(item => <BookCardS key = {item.id} id = {item.id} item = {item}/>)}
		</ul>
	</section>
}

export default NewAcquisitions;