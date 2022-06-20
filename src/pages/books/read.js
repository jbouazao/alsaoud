import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { useState } from 'react';

const Reader = () => {
	const [pageNumber, setPageNumber] = useState(1);

	return <Document file= './assets/sapiens.pdf'>
		<Page pageNumber={pageNumber} />
	</Document>
}

export default Reader;