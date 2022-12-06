export default function Results({ name, title, image, altText, showImage }) {
	return (
		<li className="Results">
			<p>Title: {title}</p>
			<p>Artist: {name}</p>
			<button
				onClick={() => {
					showImage({ image, altText });
				}}
			>
				Show details
			</button>
		</li>
	);
}
