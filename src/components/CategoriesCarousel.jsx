import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CarouselItem from './CarouselItem';
import { useRef } from 'react';
import {IoChevronForwardOutline} from 'react-icons/io5'
import {IoChevronBackOutline} from 'react-icons/io5'

export const DUMMY_CATEGORIES = [
	{
		id: 1,
		title: 'All',
		icon: '/assets/media/icons/category-icons/all.svg'
	},
	{
		id: 2,
		title: 'Art',
		icon: '/assets/media/icons/category-icons/art.svg'
	},
	{
		id: 3,
		title: 'Economy',
		icon: '/assets/media/icons/category-icons/economy.svg'
	},
	{
		id: 4,
		title: 'Education',
		icon: '/assets/media/icons/category-icons/education.svg'
	},
	{
		id: 5,
		title: 'General',
		icon: '/assets/media/icons/category-icons/general.svg'
	},
	{
		id: 6,
		title: 'Geography',
		icon: '/assets/media/icons/category-icons/geography.svg'
	},
	{
		id: 7,
		title: 'History',
		icon: '/assets/media/icons/category-icons/history.svg'
	},
	{
		id: 8,
		title: 'Islam',
		icon: '/assets/media/icons/category-icons/islam.svg'
	},
	{
		id: 9,
		title: 'Law',
		icon: '/assets/media/icons/category-icons/law.svg'
	},
	{
		id: 10,
		title: 'Linguistics',
		icon: '/assets/media/icons/category-icons/linguistics.svg'
	},
	{
		id: 11,
		title: 'Literature',
		icon: '/assets/media/icons/category-icons/literature.svg'
	},
	{
		id: 12,
		title: 'Management',
		icon: '/assets/media/icons/category-icons/management.svg'
	},
]

const CategoriesCarousel = () => {
	const sliderRef = useRef();
	// const [activeSlide, setActiveSlide] = useState(0)

	return <div className = 'relative'>
		<div className = 'absolute top-[-50px] right-[40px] flex gap-4'>
			<button className = 'border-2 border-green-800' onClick = {() => sliderRef.current.swiper.slidePrev()}><IoChevronBackOutline className = 'text-[36px] text-green-800'/></button>
			<button className = 'border-2 border-green-800' onClick = {() => sliderRef.current.swiper.slideNext()}><IoChevronForwardOutline className = 'text-[36px] text-green-800'/></button>
		</div>
		<Swiper
			ref = {sliderRef}
			slidesPerView={7}
			className = 'my-10'>
			{DUMMY_CATEGORIES.map(item => <SwiperSlide key = {item.id}>
				<CarouselItem item = {item}/>
			</SwiperSlide>)}
		</Swiper>
	</div>
}

export default CategoriesCarousel;