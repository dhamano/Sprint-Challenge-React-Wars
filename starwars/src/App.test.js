import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import CharacterInfo from './components/CharacterInfo';
import MovieInfo from './components/MovieInfo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
	});
});

describe('<CharacterInfo />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<CharacterInfo />).toJSON();
    expect(tree).toMatchSnapshot();
	});
});

describe('<MovieInfo />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<MovieInfo />).toJSON();
    expect(tree).toMatchSnapshot();
	});
});