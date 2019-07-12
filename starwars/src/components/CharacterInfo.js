import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import MovieInfo from './MovieInfo';

const CharacterInfo = props => {
	const CharCard = styled.div`
		width: 30%;
		padding: 20px;
		margin: 20px auto;;
		background: rgba(0,0,0,0.5);
		text-align: left;
		border: solid 1px #000;
		border-radius: 8px;

		h1 {
			margin-top: 0;
		}

		dl {
			display: flex;
			flex-flow: row wrap;
		}

		dt, dd {
			width: 50%;
			margin: 0;
		}

		.movies {
			width: 100%;
			margin: 0;

			ul, li {
				margin: 0;
				padding: 0;
				list-style-type: none;
			}
		}
	`

	const LoaderSpinner = styled.div`
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	`
	
	if (!props.charInfo) {
		return (
			<LoaderSpinner>
				<Loader type="Grid" color="#000000" height="100" width="100" />
			</LoaderSpinner>
		)
	}

	return (
		<CharCard>
			<h1>{props.charInfo.name}</h1>
			<dl>
				<dt>birth year:</dt>
				<dd>{props.charInfo.birth_year}</dd>
				<dt>height:</dt>
				<dd>{props.charInfo.height}</dd>
				<dt>weight:</dt>
				<dd>{props.charInfo.mass}{`${props.charInfo.mass === 'unknown' ? '' : ' kg'}`}</dd>
				<dt>hair color:</dt>
				<dd>{props.charInfo.hair_color}</dd>
				<dt>skin color:</dt>
				<dd>{props.charInfo.skin_color}</dd>
				<dt>films:</dt>
				<dd className="movies">
					<ul>
						{
							props.charInfo.films.map( (movieURL, i) => {
								return <MovieInfo movieURL={movieURL} key={'movie'+i} />
							})
						}
					</ul>
				</dd>
      </dl>
		</CharCard>
	)
}

export default CharacterInfo;