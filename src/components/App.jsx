import './App.css';
import { useState } from 'react';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import Results from './Results';
import ImageDetailsPage from './ImageDetailsPage';

export function App() {
	const [results, setResults] = useState();

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/uitls/api.js
		searchArtworks(query).then((json) => {
			console.log(json.data);
			setResults(json.data);
		});
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			{results?.map((result) => {
				return (
					<Results
						key={result.id}
						name={result.artist_title}
						title={result.title}
					/>
				);
			})}
			<Footer />
		</div>
	);
}
