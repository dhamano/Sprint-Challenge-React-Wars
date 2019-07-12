import React, { useState, useEffect } from 'react';
import { getFromStarWarsAPI } from '../services/fetchData';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const MovieInfo = props => {
	const [ charFilms, setCharFilms ] = useState('');

  useEffect( () => {
		getFromStarWarsAPI(props.movieURL).then( json => setCharFilms(json));
	}, []);

	const MovieList = styled.li`
		dt {
			font-weight: bold;
		}

		.full {
			width: 100%;
		}
	`

	const LoaderSpinner = styled.div`
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	`
	
	if (!charFilms) {
		return (
			<LoaderSpinner>
				<Loader type="Grid" color="#000000" height="100" width="100" />
			</LoaderSpinner>
		)
	}

	return(
		<MovieList>
			<h3>{charFilms.title}</h3>
			<dl>
				<dt>release date:</dt>
				<dd>{charFilms.release_date}</dd>
				<dt>director:</dt>
				<dd>{charFilms.director}</dd>
				<dt className="full">synopsis:</dt>
				<dd className="full">{charFilms.opening_crawl}</dd>
			</dl>
		</MovieList>
	)
}

export default MovieInfo;