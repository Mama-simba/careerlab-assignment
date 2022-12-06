export default function ImageDetailsPage({ image, altText }) {
	return (
		<div className="ImageDetailsPage">
			<img
				alt={altText}
				src={`https://www.artic.edu/iiif/2/${image}/full/843,/0/default.jpg`}
			/>
		</div>
	);
}
