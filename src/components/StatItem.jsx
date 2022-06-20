const StatItem = (props) => {
	return <div className = 'flex flex-col justify-center items-center w-[280px] h-[120px] bg-[#ebf3ea]'>
		<p className = 'font-popBold text-[32px] text-[#349927]'>{props.item.count}</p>
		<strong className = 'font-popSBold text-[#73a36d]'>{props.item.title}</strong>
	</div>
}

export default StatItem;