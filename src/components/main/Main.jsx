import React from 'react';
import Header from '../header/Header';
import '../../scss/pages/main.scss';
import Section_one from '../section/sectionOne/Section_one';
import styled from 'styled-components';
import Section_Two from '../section/sectionTwo/Section_two';
import Section_tree from '../section/sectionTree/Section_tree';
import Section_four from '../section/sectionFour/Section_four';

const Main = () => {
	return (
		<MainContent>
			<Header />
			<Section_one />
			<Section_Two />
			<Section_tree />
			<Section_four />
		</MainContent>
	);
};

export default Main;

const MainContent = styled.main`
	padding: 0px 0px;
`;
