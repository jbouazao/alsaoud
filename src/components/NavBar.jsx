import Link from "next/link";

const NavBar = () => {
	return <ul className = 'pl-20 flex gap-10 items-center'>
		<li key = '1' className = 'cursor-pointer font-popSBold text-sky-900 text-md'>
			<Link href = '/' ><a>Library Catalog</a></Link>
		</li>
		<li key = '2' className = 'cursor-pointer font-popSBold text-sky-900 text-md'>
			<Link href = '/' ><a>New Acquisitions</a></Link>
		</li>
		<li key = '3' className = 'cursor-pointer font-popSBold text-sky-900 text-md'>
			<Link href = '/' ><a>Find it Fast!</a></Link>
		</li>
		<li key = '4' className = 'cursor-pointer font-popSBold text-sky-900 text-md'>
			<Link href = '/' ><a>Request Material</a></Link>
		</li>
		<li key = '5' className = 'cursor-pointer font-popSBold text-sky-900 text-md'>
			<Link href = '/' ><a>Library Info</a></Link>
		</li>
		<li key = '6' className = 'cursor-pointer font-popSBold text-sky-900 text-md'>
			<Link href = '/contact' ><a>Contact</a></Link>
		</li>
	</ul>
}

export default NavBar;