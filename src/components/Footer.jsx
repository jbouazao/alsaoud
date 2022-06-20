import FooterMenus from "./FooterMenus";

const Footer = () => {
	return <footer className = 'w-full bg-[#ecedf5]'>
		<div className = 'pt-20 lg:w-[950px] xl:w-[1200px] 2xl:w-[1500px] mx-auto flex flex-col gap-10'>
			<div className = 'flex justify-between'>
				<img className = 'w-[260px] h-[70px]' src = {'/assets/media/logo/al-saoud.png'} alt = 'logo'/>
				<FooterMenus />
			</div>
			<div className = 'lg:w-[950px] xl:w-[1200px] 2xl:w-[1500px] mx-auto border border-[#b0b3d6]'></div>
			<div className = 'mx-auto text-[#4b4d6d] font-popSBold text-[14px] pb-10'>© 2021 King Abdul-Aziz Al Saoud Foundation for Islamic Studies and Human Sciences - Casablanca. All rights reserved</div>
		</div>
	</footer>
}

export default Footer;