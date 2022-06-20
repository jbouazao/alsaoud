import { useState } from "react";
import cx from "classnames";

const CarouselItem = (props) => {

	const [clicked, setClicked] = useState(false)

	const clickHandler = () => {
		setClicked(true)
	}
	
	return <div onClick = {clickHandler} className = {cx(
		'font-popReg w-[170px] h-[190px] flex flex-col gap-5 justify-center items-center cursor-pointer',
		{
		 'bg-[#dcedda]': clicked === false,
			'bg-[#70a56a]': clicked === true
		})}
	>
		<img className = '' src = {props.item.icon} alt = ''/>
		<strong className = 'text-green-700'>{props.item.title}</strong>
	</div>
}

export default CarouselItem;