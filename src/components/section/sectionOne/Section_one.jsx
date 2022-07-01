import React from 'react';
import '../../../scss/pages/sectionOne/_section_one.scss';
import chairOne from '../../../assets/img/introOne/Rectangle91.svg';
import styled from 'styled-components';
const Section_one = () => {
	return (
		<section className="section_one">
			<SectionOneIntro />
		</section>
	);
};

const ChairMsg = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	height: 500px;
	@media screen and (max-width: 1220px) {
		height: 100%;
		justify-content: center;
		align-items: flex-start;
	}
`;

const ImgContent = styled.div`
	height: 100%;
	object-fit: center;
	@media screen and (max-width: 1220px) {
		display: none;
	}
`;

const ImgContentIntro = styled.img`
	height: 100%;
	@media screen and (max-width: 1220px) {
		width: 100%;
		height: 95%;
		box-shadow: 12px 10px rgba(222, 228, 226, 0.75);
	}
	@media screen and (max-width: 722px) {
		width: 100%;
	}
`;

const ContentDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #154444;
	flex-direction: column;
	max-width: 60%;
	padding: 0px 50px;
	width: 100%;
	height: 100%;
	gap: 30px;
	@media screen and (max-width: 1220px) {
		width: 100%;
		max-width: 100%;
		height: 1000px;
		flex-direction: column;
		gap: 70px;
		position: relative;
		text-align: center;
	}
`;

const TitleDiv = styled.h4`
	color: #ffff;
	font-size: 56px;
	text-align: center;
	line-height: 60px;
	@media screen and (max-width: 1220px) {
		font-size: 1.7rem;
		line-height: 2.3rem;
	}
`;

const ParagraphIntro = styled.p`
	color: #ffff;
	font-size: 16px;
	width: 80%;
	text-align: center;
	line-height: 2.3rem;
	font-size: 20px;
	@media screen and (max-width: 1220px) {
		width: 80%;
	}

	@media screen and (max-width: 480px) {
		width: 100%;
		font-weight: 400;
		font-size: 1.1rem;
	}
`;

const ImgContentNone = styled.div`
	display: none;
	@media screen and (max-width: 1220px) {
		display: block;
	}
`;

const SectionOneIntro = () => (
	<ChairMsg>
		<ImgContent>
			<ImgContentIntro src={chairOne}></ImgContentIntro>
		</ImgContent>
		<ContentDiv>
			<TitleDiv>We Help You Make Modern Furniture</TitleDiv>
			<ParagraphIntro>
				All of our furniture uses the best materials and choices for our
				customers.All of our furniture uses the best materials{' '}
			</ParagraphIntro>
			<ImgContentNone>
				<ImgContentIntro src={chairOne}></ImgContentIntro>
			</ImgContentNone>
		</ContentDiv>
	</ChairMsg>
);

export default Section_one;
