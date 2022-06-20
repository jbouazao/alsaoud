import { useRouter } from "next/router";
import cx from 'classnames'

const BookCardS = (props) => {
	const router = useRouter();

	const bookDetailsHandler = () => {
		router.push('/books/' + props.item.id)
	}

	return <div onClick = {() => bookDetailsHandler()} className = 'w-[250px] flex flex-col gap-2 cursor-pointer'>
			<img className = {cx(
				props.styleCard,
				'max-h-[360px]')}
				src = {props.item.img}/>
			<h3 className = {cx(
				props.styleTitle,
				'font-popSBold text-sky-900 text-lg'
				)}>{props.item.title}</h3>
		</div>
}

export default BookCardS;
