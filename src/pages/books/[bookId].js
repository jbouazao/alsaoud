import { useRouter } from "next/router";
import SearchBar from "../../components/SearchBar";
import { DUMMY_ITEMS } from "../../components/NewAcquisitions";
import BookCardS from "../../components/BookCardS";

const BookPage = (props) => {
	const router = useRouter();

	return <div>
		<div className = 'w-full h-[200px] bg-hero bg-cover bg-center'>
			<div className = 'w-full h-full bg-indigo-900/50'>
				<div className = 'lg:w-[950px] xl:w-[1200px] 2xl:w-[1500px] h-full mx-auto flex justify-between items-center'>
					<div className = 'mx-auto'>
						<SearchBar />
					</div>
				</div>
			</div>
		</div>
		<div className = 'w-[800px] lg:w-[950px] xl:w-[1200px] 2xl:w-[1500px] mx-auto my-10 flex gap-5'>
			<ul className = 'w-[300px] border flex flex-col gap-5 items-center'>
				<h3 className = 'font-popSBold text-[20px] pt-5 text-indigo-900'>Related books:</h3>
				<div className = 'w-[200px] mx-auto border'></div>
				{DUMMY_ITEMS.map(book => <BookCardS key = {book.id} item = {book} styleCard = 'w-[200px] mx-auto' styleTitle = 'text-[16px] w-[200px] mx-auto'/>)}
			</ul>
			<article className = 'flex flex-col flex-1 border gap-10 p-10'>
				<div className = 'flex gap-5 relative'>
					<img src = {props.item.img} className = 'w-[250px]'/>
					<ul className = 'w-full flex flex-col gap-2'>
						<li className = 'font-popReg'><strong className = 'font-popSBold text-[18px]'>Title: </strong>Le temps a l&#39;oeuvre: sure la pensée d&#39;Emmanuel Levinas / Sophie Galabru ; préface</li>
						<li className = 'font-popReg'><strong className = 'font-popSBold text-[18px]'>Author: </strong>Sophie Galabru(1990-...)</li>
						<li className = 'font-popReg'><strong className = 'font-popSBold text-[18px]'>Publisher: </strong>Hermann</li>
						<li className = 'font-popReg'><strong className = 'font-popSBold text-[18px]'>Pub date: </strong>impr. 2020</li>
						<li className = 'font-popReg'><strong className = 'font-popSBold text-[18px]'>Pages: </strong>408</li>
						<li className = 'font-popReg'><strong className = 'font-popSBold text-[18px]'>ISBN: </strong>979-1-0370-0292-1</li>
						<li className = 'font-popReg'><strong className = 'font-popSBold text-[18px]'>Number of items: </strong>2</li>
					</ul>
					<button className = 'absolute bottom-[10%] right-[5%] w-[150px] h-[40px] font-popReg bg-blue-200 rounded-[12px]'>Read the book</button>
				</div>
				<div className = ''>
					<table className = 'font-popReg w-full border'>
						<tr className = 'bg-[#e2e2e2]'>
							<th className = 'h-[50px] font-popBold'>Central Library</th>
							<th className = 'h-[50px] font-popBold'>Number of copies</th>
							<th className = 'h-[50px] font-popBold'>Material</th>
							<th className = 'h-[50px] font-popBold'>Status</th>
							<th className = 'h-[50px] font-popBold'>Location</th>
						</tr>
						<tr className = 'h-[50px]'>
							<td className = 'text-center'>Call number:194/2491</td>
							<td className = 'text-center'>1</td>
							<td className = 'text-center'>Book</td>
							<td className = 'text-center text-[#205a28]'>
								<div className = 'w-[120px] h-[40px] mx-auto bg-[#91c58f] flex justify-center items-center text-center rounded-[10px]'>Available</div>
							</td>
							<td className = 'text-center'>Open Access</td>
						</tr>
						<tr className = 'h-[50px]'>
							<td className = 'text-center'>Call number:194/2491</td>
							<td className = 'text-center'>1</td>
							<td className = 'text-center'>Book</td>
							<td className = 'text-center text-[#205a28]'>
								<div className = 'w-[120px] h-[40px] mx-auto bg-[#91c58f] flex justify-center items-center text-center rounded-[10px]'>Available</div>
							</td>
							<td className = 'text-center'>Open Access</td>
						</tr>
						<tr className = 'h-[50px]'>
							<td className = 'text-center'>Call number:194/2491</td>
							<td className = 'text-center'>1</td>
							<td className = 'text-center'>Book</td>
							<td className = 'text-center text-[#205a28]'>
								<div className = 'w-[120px] h-[40px] mx-auto bg-[#91c58f] flex justify-center items-center text-center rounded-[10px]'>Available</div>
							</td>
							<td className = 'text-center'>Open Access</td>
						</tr>
					</table>
				</div>
			</article>
		</div>
	</div>
}

export default BookPage;

export async function getStaticPaths () {
	return {
		fallback: false,
		paths: [
			{
				params: {
					bookId: '1',
				}
			},
			{
				params: {
					bookId: '2',
				}
			},
			{
				params: {
					bookId: '3',
				}
			},
			{
				params: {
					bookId: '4',
				}
			},
			{
				params: {
					bookId: '5',
				}
			},
		]
	}
}

export async function getStaticProps(context) {
	//fetch the book by id
	console.log(context.params)
  return {
    props: {
			item: {
				id: context.params.bookId,
				title: 'La sociologie française : sociogenèse d\'une tradition nationale',
				img: '/assets/media/books/book-5.jpg'
			}
		},
  }
}