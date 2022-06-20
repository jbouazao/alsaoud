import NewsItem from "./NewsItem";

const DUMMY_ARTICLES = [
	{
		id: '1',
		title: 'تدريب : الفهرسة في صيغة مارك 2',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla velit condimentum.',
		img: '/assets/media/articles/img1.png',
		date: '11/11/2021'
	},
	{
		id: '2',
		title: 'Formation au profit des aides-documentaire',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla velit condimentum.',
		img: '/assets/media/articles/img2.png',
		date: '01/03/2021'
	},
	{
		id: '3',
		title: 'تدريب : الفهرسة في صيغة مارك زيارة الدكتور عبد الرحمن محمد القحطاني',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla velit condimentum.',
		img: '/assets/media/articles/img3.png',
		date: '11/06/2021'
	},
	{
		id: '4',
		title: 'Formation aux techniques de traitement',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla velit condimentum.',
		img: '/assets/media/articles/img4.png',
		date: '04/11/2020'
	},
]

const LatestNews = (props) => {
	return <article className = 'py-7 mx-auto w-[600px] lg:w-[950px] xl:w-[1200px] 2xl:w-[1500px]'>
		<div className = 'flex justify-between'>
			<h2 className = 'font-popSBold text-indigo-900 text-[36px]'>Latest News</h2>
			<button className = 'w-[100px] font-popReg bg-sky-50 border rounded-full'>See More</button>
		</div>
		<div className = 'mt-5 w-full py-5 flex flex-wrap justify-between gap-10 font-popReg'>
			{DUMMY_ARTICLES.map(item => <NewsItem key = {item.id} item = {item}/>)}
		</div>
	</article>
}

export default LatestNews;