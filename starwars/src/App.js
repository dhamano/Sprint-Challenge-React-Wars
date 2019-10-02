import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import { getFromStarWarsAPI } from './services/fetchData';

import CharacterInfo from './components/CharacterInfo';

const App = () => {
	const [ baseSWData, setBaseSWData ] = useState(null);

  useEffect( () => {
		getFromStarWarsAPI().then( json => setBaseSWData(json));
	}, []);

	const LoaderSpinner = styled.div`
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	`
	
	if (!baseSWData) {
		return (
			<LoaderSpinner>
				<Loader type="Grid" color="#000000" height="100" width="100" />
			</LoaderSpinner>
		)
	}
	
	console.log('baseSWData',baseSWData);

	const CharList = styled.div`
		width: calc(100vw - 0.875rem);
		margin-top: 50px;
	`

	const CharCardList = styled.div`
		width: calc(100% - 0.875rem);
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	`

  return (
		<CharList className="App">
			<h1 className="Header">React Wars</h1>
			<CharCardList>
				{
					baseSWData.results.map( (charInfo, i) => {
						return <CharacterInfo charInfo={charInfo} key={i} />
					})
				}
			</CharCardList>
		</CharList>
  );
}

export default App;
