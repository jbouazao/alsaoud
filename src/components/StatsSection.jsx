import Stats from "./Stats";

const StatsSection = () => {
	return <div className = 'h-[500px] w-full bg-[#6ebc64] flex flex-col justify-center items-center gap-10'>
		<h3 className = 'font-popSBold text-white text-[46px]'>Our Library by the numbers</h3>
		<p className = 'w-[1000px] text-slate-200 text-[20px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		<Stats />
	</div>
}

export default StatsSection;