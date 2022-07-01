import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Header = () => {
	return (
		<HeaderNav>
			<Navbar />
		</HeaderNav>
	);
};

export default Header;

export const HeaderNav = styled.header`
	width: 1200px;
	max-width: 100%;
	margin: 0 auto;
`;
