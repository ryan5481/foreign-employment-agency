import PDFViewer from "../../components/utils/pdfViewer";



const Brochure = () => {
    const pdfUrl = "https://download.brother.com/pub/com/en/corporate/pdf/2023/brother-profile-en.pdf";

    return (
        <>
            <div>
                <header className="App-header">
                    <PDFViewer pdfUrl={pdfUrl} />
                </header>
            </div>
        </>
    )
}

export default Brochure