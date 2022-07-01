import React from 'react';
import styled from 'styled-components';
import {
	FaCcMastercard,
	FaCcVisa,
	FaCcPaypal,
	FaCcStripe,
	FaAirbnb,
} from 'react-icons/fa';
import { SiUber } from 'react-icons/si';
const Section_Two = () => {
	return (
		<Section>
			<ContentTitle>
				<Title>Trusted by 20,000+ companies</Title>
			</ContentTitle>

			<ContentIcons>
				<Icons>
					<FaCcMastercard />
				</Icons>
				<Icons>
					<FaCcVisa />
				</Icons>
				<Icons>
					<FaCcPaypal />
				</Icons>
				<Icons>
					<FaCcStripe />
				</Icons>
				<Icons>
					<FaAirbnb />
				</Icons>
				<Icons>
					<SiUber />
				</Icons>
			</ContentIcons>
		</Section>
	);
};

const Section = styled.section`
	width: 1200px;
	height: 100%;
	min-height: 100%;
	max-height: 100%;
	margin: 0 auto;
	max-width: calc(100% - 20px);
	padding: 50px 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 3.6rem;
`;

const ContentTitle = styled.div`
	padding: 10px 5px;
	width: 100%;
	max-width: 100%;
`;

const Title = styled.h4`
	font-size: 2.4rem;
	line-height: 48px;
	text-align: center;
	color: #244d4d;
	@media screen and (max-width: 722px) {
		text-align: center;
		font-size: 1.2rem;
	}
`;

const ContentIcons = styled.div`
	padding: 10px 5px;
	width: 100%;
	max-width: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	gap: 6rem;
`;

const Icons = styled.a`
	font-size: 3.6rem;
	color: #244d4d;

	@media screen and (max-width: 722px) {
		text-align: center;
		font-size: 2.4rem;
	}
`;
export default Section_Two;
