export default function ImageDetailsPage({ image, altText, handleGoBack }) {
	return (
		<div className="ImageDetailsPage">
			<button onClick={handleGoBack}>Back</button>
			<img
				alt={altText}
				src={`https://www.artic.edu/iiif/2/${image}/full/843,/0/default.jpg`}
			/>
		</div>
	);
}
