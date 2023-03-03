import axios from 'axios';
import React ,{useEffect, useState} from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { useParams } from 'react-router-dom';

const BookPdf = () => {
    const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	const [data,setData]=useState('')
    const Id = useParams()
	console.log(Id.id);
    const getBookById = async()=>{
     await axios.get(`http://localhost:5008/admin/list/${Id.id}`)
	.then((response)=>{
		setData(response.data.getBook.bookPdf);
	}).catch((err)=>{
		console.log(err);
	})


    }

	useEffect(()=>{
getBookById()
	},[])
	
	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
		);

	return (
		<div>
			<nav>
				<button onClick={goToPrevPage}>Prev</button>
				<button onClick={goToNextPage}>Next</button>
				<p>
					Page {pageNumber} of {numPages}
				</p>
			</nav>

			<Document
				file={`/Public/books/${data}`}
				onLoadSuccess={onDocumentLoadSuccess}
			>
				<Page pageNumber={pageNumber} />
			</Document>
		</div>
	);


}

export default BookPdf