import { IoArrowForwardCircleOutline } from 'react-icons/io5'

const SearchSide = () => {
	return <div className = 'w-[220px] flex flex-col gap-7'>
		<div className = 'w-[220px] h-[130px] bg-slate-200 px-3 py-1 relative'>
			<h3 className = 'font-popSBold text-indigo-900 mb-1'>Browse</h3>
			<p className = 'font-popReg text-[11px] w-[180px] text-indigo-900'>
				Find titles, authors/creators,
				subjects, call numbers, or standard
				numbers in alphabetical or
				sequential lists, with crossreferences.
			</p>
			<IoArrowForwardCircleOutline className = 'text-[20px] absolute bottom-3 right-3 text-indigo-900'/>
		</div>
		<div className = 'w-[220px] h-[130px] bg-slate-200 px-3 py-1 relative'>
			<h3 className = 'font-popSBold text-indigo-900 mb-1'>Advanced Search</h3>
			<p className = 'font-popReg text-[11px] w-[180px] text-indigo-900'>
				Combine search words using guided menus.
			</p>
			<IoArrowForwardCircleOutline className = 'text-[20px] absolute bottom-3 right-3 text-indigo-900'/>
		</div>
		<div className = 'w-[220px] h-[130px] bg-slate-200 px-3 py-1 relative'>
			<h3 className = 'font-popSBold text-indigo-900 mb-1'>Keyword Search</h3>
			<p className = 'font-popReg text-[11px] w-[180px] text-indigo-900'>
				Find search words anywhere in the catalog record. Includes Keyword (Expert) search.
			</p>
			<IoArrowForwardCircleOutline className = 'text-[20px] absolute bottom-3 right-3 text-indigo-900'/>
		</div>
	</div>
}

export default SearchSide;