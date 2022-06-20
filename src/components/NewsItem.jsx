const NewsItem = (props) => {
	return <div className = 'w-[730px] h-[250px] flex border'>
		<img className = '' src = {props.item.img} alt = ''/>
		<div className = 'flex-2 flex flex-col gap-3 p-5'>
			<time>{props.item.date}</time>
			<h3 className = 'font-popSBold text-[24px]'>{props.item.title}</h3>
			<article>{props.item.desc}</article>
			<button className = 'font-popSBold w-[90px] text-indigo-900'>Read more</button>
		</div>
	</div>
}

export default NewsItem;