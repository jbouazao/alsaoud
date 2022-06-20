import StatItem from "./StatItem";

const DUMMY_STATS = [
	{
		id: 1,
		title: 'People',
		count: '1,021,638'
	},
	{
		id: 2,
		title: 'Books',
		count: '3,101,557'
	},
	{
		id: 3,
		title: 'Manuscripts',
		count: '1,841'
	},
	{
		id: 4,
		title: 'Rare Books',
		count: '104'
	},
]

const Stats = () => {
	return <ul className = 'flex gap-10'>
		{DUMMY_STATS.map(item => <StatItem key = {item.id} item = {item}/>)}
	</ul>
}

export default Stats;