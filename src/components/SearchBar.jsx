import { useState } from 'react';
import Link from 'next/link';
import { BsSearch } from 'react-icons/bs'
import cx from 'classnames'

const Menu = [
	{
		id: 0,
		title: 'All',
		placeholder: 'search by All'
	},
	{
		id: 1,
		title: 'Title',
		placeholder: 'search by Title'
	},
	{
		id: 2,
		title: 'Author',
		placeholder: 'search by Author'
	},
	{
		id: 3,
		title: 'ISBN',
		placeholder: 'search by ISBN'
	},
]

const SearchBar = () => {

	const [filterSelection, setFilterSelection] = useState(0)

	return <div className = 'w-full relative'>
		<nav className = 'bg-slate-200 w-[300px] flex justify-items-start'>
			<div key = {Menu[0]} onClick = {() => setFilterSelection(0)} className = {cx(
				'w-[100px] h-[30px] flex items-center justify-center font-popReg cursor-pointer',
				{
					'bg-[#8d86b8]': filterSelection === 0
				}
			)}>{Menu[0].title}</div>
			<div key = {Menu[1]} onClick = {() => setFilterSelection(1)} className = {cx(
				'w-[100px] h-[30px] flex items-center justify-center font-popReg cursor-pointer',
				{
					'bg-[#8d86b8]': filterSelection === 1
				}
			)}>{Menu[1].title}</div>
			<div key = {Menu[2]} onClick = {() => setFilterSelection(2)} className = {cx(
				'w-[100px] h-[30px] flex items-center justify-center font-popReg cursor-pointer',
				{
					'bg-[#8d86b8]': filterSelection === 2
				}
			)}>{Menu[2].title}</div>
			<div key = {Menu[3]} onClick = {() => setFilterSelection(3)} className = {cx(
				'w-[100px] h-[30px] flex items-center justify-center font-popReg cursor-pointer',
				{
					'bg-[#8d86b8]': filterSelection === 3
				}
			)}>{Menu[3].title}</div>
		</nav>
		<div className = 'bg-white flex w-[700px] h-[50px]'>
			<input className = 'outline-none w-full text-lg px-3' placeholder= {Menu[filterSelection].placeholder}/>
			<Link href = '/search'>
				<BsSearch className = 'text-[40px] text-emerald-700 mx-2 my-1 cursor-pointer'/>
			</Link>
		</div>
		<button className = 'absolute right-0 px-2 text-white underline underline-offset-2'>Advanced Search</button>
	</div>
}

export default SearchBar;