import NavBar from "./NavBar";
import { CgProfile } from 'react-icons/cg'
import Link from "next/link";


const Header = () => {
	return <div className = 'h-[150px] w-full px-10 py-5 flex items-center justify-between gap-5 border'>
		<div className = 'flex items-center gap-5'>
			<div className = 'flex gap-10 justify-center items-center'>
				<Link href = '/'>
					<img className = 'w-[260px] h-[70px] cursor-pointer' src = {'/assets/media/logo/al-saoud.png'} alt = 'logo'/>
				</Link>
				<div className = 'h-[100px] border border-stone-400'></div>
			</div>
			<NavBar />
		</div>
		<CgProfile className = 'text-sky-900 text-[40px] mr-10'/>
	</div>
}

export default Header;