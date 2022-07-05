import React, { useState } from 'react';
import styled from 'styled-components';
import ImgFive from '../../../assets/img/introFive/RectangleFive.png';
import { MdLiving } from 'react-icons/md';
const Seciton_five = () => {
	return (
		<Section>
			<ContentOne>
				<Title>All Furniture</Title>
				<List>
					<ContentLink>
						<Link>Shop By Room</Link>
					</ContentLink>
					<ContentLink>
						<Link>Shop By Room</Link>
					</ContentLink>
					<ContentLink>
						<Link>Shop By Room</Link>
					</ContentLink>
				</List>
			</ContentOne>
			<ContentOneTwo>
				<ContentTWoImg>
					<DivCaja />
					<ImgTwoImg src={ImgFive}></ImgTwoImg>
					<DivCajaDos />
				</ContentTWoImg>

				<ContentTwoDivs>
					<ContentLinks>
						<LinksIconsTitle>
							<MdLiving style={{ fontSize: '1.8rem' }} />
							<h1 style={{ fontSize: '1.25rem' }}>Living Room</h1>
						</LinksIconsTitle>

						<LinksIconsTitle>
							<MdLiving style={{ fontSize: '1.8rem' }} />
							<h1 style={{ fontSize: '1.25rem' }}>Kitchen </h1>
						</LinksIconsTitle>
					</ContentLinks>

					<ContentLinks>
						<LinksIconsTitle>
							<MdLiving style={{ fontSize: '1.8rem' }} />
							<h1 style={{ fontSize: '1.25rem' }}>Living Room</h1>
						</LinksIconsTitle>

						<LinksIconsTitle>
							<MdLiving style={{ fontSize: '1.8rem' }} />
							<h1 style={{ fontSize: '1.25rem' }}>Living Room</h1>
						</LinksIconsTitle>
					</ContentLinks>

					<ContentLinks>
						<LinksIconsTitle>
							<MdLiving style={{ fontSize: '1.8rem' }} />
							<h1 style={{ fontSize: '1.25rem' }}>Living Room</h1>
						</LinksIconsTitle>

						<LinksIconsTitle>
							<MdLiving style={{ fontSize: '1.8rem' }} />
							<h1 style={{ fontSize: '1.25rem' }}>Living Room</h1>
						</LinksIconsTitle>
					</ContentLinks>
				</ContentTwoDivs>
			</ContentOneTwo>
		</Section>
	);
};

export default Seciton_five;

const Section = styled.section`
	width: 1200px;
	height: 100%;
	min-height: 100%;
	max-height: 100%;
	margin: 0 auto;
	max-width: calc(100% - 20px);
	height: 100%;
	padding: 50px 0px;
	gap: 2.5rem;
	display: flex;
	flex-direction: column;
`;

const ContentOne = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.6rem;
	margin: 0 auto;
`;

const ContentOneTwo = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 6fr);
	align-self: center;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
	@media screen and (max-width: 1000px) {
		grid-template-columns: repeat(1, 6fr);
	}
`;

const Title = styled.h4`
	color: #242424;
	font-size: 2rem;
	@media screen and (max-width: 440px) {
		font-size: 1.312rem;
	}
`;

const List = styled.ul`
	display: flex;
	gap: 6rem;
	align-items: center;
	@media screen and (max-width: 440px) {
		gap: 1rem;
	}
`;

const ContentLink = styled.li`
	width: 100%;
	max-width: 100%;
	text-align: center;
`;

const Link = styled.a`
	color: #154444;
	width: 100%;
	display: inline;
	::after {
		content: '';
		display: block;
		width: 0;
		height: 2px;
		background: #154444;
		transition: width 0.3s;
	}
	:hover::after {
		width: 100%;
		transition: width 0.3s;
	}

	@media screen and (max-width: 440px) {
		font-size: 1rem;
		::after {
			display: none;
		}
	}
`;

const ContentTWoImg = styled.div`
	width: 100%;
	max-width: 100%;
	height: 100%;
	max-height: 100%;
	position: relative;
	z-index: 100;
`;

const ImgTwoImg = styled.img`
	width: 100%;
	max-width: 100%;
	height: 100%;
	max-height: 100%;
	z-index: 1;
`;

const DivCaja = styled.div`
	background-color: #154444;
	max-width: 100%;
	width: 200px;
	position: absolute;
	height: 100px;
	top: -20px;
	left: -15px;
	z-index: -1;

	@media screen and (max-width: 600px) {
		display: none;
	}
`;

const DivCajaDos = styled.div`
	background-color: #154444;
	max-width: 100%;
	width: 200px;
	position: absolute;
	height: 100px;
	bottom: -20px;
	right: -15px;
	z-index: -1;

	@media screen and (max-width: 600px) {
		display: none;
	}
`;

const ContentTwoDivs = styled.div`
	width: 100%;
	max-width: 100%;
	height: 100%;
	max-height: 100%;
	padding: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	gap: 2.3rem;
`;

const ContentLinks = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 5rem;
	border-radius: 6px;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 600px) {
		flex-wrap: nowrap;
		padding: 0px 3px;
		gap: 1.6rem;
	}
	@media screen and (max-width: 440px) {
		justify-content: center;
		width: 100%;
	}
`;

const LinksIconsTitle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	color: #154444;
	padding: 20px 20px;
	border: 4px solid #154444;
	width: 180px;
	:hover {
		background-color: #154444;
		color: #ffff;
		transition: all ease-in 0.7s;
	}
	@media screen and (max-width: 440px) {
		width: 100%;
		height: 100%;
	}
`;
