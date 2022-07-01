import React from 'react';
import styled from 'styled-components';
import IntroImg from '../../../assets/img/introTree/Rectangle94.svg';
import { BsPatchCheckFill, BsFillBagCheckFill } from 'react-icons/bs';
import { MdLocalShipping } from 'react-icons/md';
const Section_tree = () => {
	return (
		<Section>
			<ContentImg>
				<ImgContent src={IntroImg} />
			</ContentImg>
			<AboutUs>
				<ContentAbout>
					<Title>About Us</Title>
					<Paragraph>
						All of our furniture uses the best materials and choices for our
						customers.All of our furniture uses the best materials
					</Paragraph>
				</ContentAbout>
				<CardContent>
					<ContentAboutCards>
						<CardIcons>
							<BsPatchCheckFill />
						</CardIcons>
						<CardTitleParagraph>
							<CardTitle>Free Shpping</CardTitle>
							<CardParagraph>
								All of our furniture uses the best materials and choices
							</CardParagraph>
						</CardTitleParagraph>
					</ContentAboutCards>

					<ContentAboutCards>
						<CardIcons>
							<BsFillBagCheckFill />
						</CardIcons>
						<CardTitleParagraph>
							<CardTitle>Best Quality</CardTitle>
							<CardParagraph>
								All of our furniture uses the best materials and choices
							</CardParagraph>
						</CardTitleParagraph>
					</ContentAboutCards>

					<ContentAboutCards>
						<CardIcons>
							<BsPatchCheckFill />
						</CardIcons>
						<CardTitleParagraph>
							<CardTitle>MdLocalShipping</CardTitle>
							<CardParagraph>
								All of our furniture uses the best materials and choices
							</CardParagraph>
						</CardTitleParagraph>
					</ContentAboutCards>
				</CardContent>
			</AboutUs>
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
	display: grid;
	grid-template-columns: repeat(2, 6fr);
	grid-template-rows: auto;
	grid-column: auto;
	gap: 150px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: repeat(2, 6fr);
		justify-content: center;
		justify-items: center;
		align-items: center;
		gap: 100px;
	}

	@media screen and (max-width: 722px) {
		grid-template-columns: repeat(1, 6fr);
		padding: 30px 30px;
		gap: 50px;
	}
`;

const ContentImg = styled.div`
	width: 100%;
	height: 100%;
	max-height: 100%;
	min-height: 100%;
`;

const ImgContent = styled.img`
	width: 100%;
	max-width: 100%;
	min-width: 100%;
	box-shadow: 29px 30px 0px 0px rgba(222, 228, 226, 0.95);
`;

const AboutUs = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	min-height: 100%;
	max-height: 100%;
`;

const ContentAbout = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	gap: 2.3rem;
	padding: 20px 5px;
	width: 100%;
	max-width: 100%;
`;

const Title = styled.h4`
	color: #244d4d;
	font-size: 2rem;
	@media screen and (max-width: 722px) {
		font-size: 1.6rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 1.312rem;
	}
`;

const Paragraph = styled.p`
	color: #444444;
	font-size: 1.25rem;
	line-height: 1.6rem;
	width: 97%;
`;

const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;

const ContentAboutCards = styled.div`
	display: flex;
	gap: 1.8rem;

	@media screen and (max-width: 722px) {
		gap: 1.3rem;
	}

	@media screen and (max-width: 480px) {
		gap: 1rem;
	}
`;

const CardTitle = styled.h5`
	color: #244d4d;
	font-size: 1.7rem;

	@media screen and (max-width: 722px) {
		font-size: 1.5rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 1.3rem;
	}
`;

const CardParagraph = styled.p`
	color: #383738;
	font-size: 1.5rem;
	@media screen and (max-width: 722px) {
		font-size: 1.09rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 1rem;
	}
`;

const CardTitleParagraph = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.4rem;
`;

const CardIcons = styled.div`
	font-size: 1.8rem;
	color: #244d4d;

	@media screen and (max-width: 722px) {
		font-size: 2rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 1.3rem;
	}
`;
export default Section_tree;
