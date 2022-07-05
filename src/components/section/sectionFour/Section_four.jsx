import React, { useState } from 'react';
import styled from 'styled-components';
import { MdFavoriteBorder } from 'react-icons/md';
const Section_four = () => {
	const [carrito] = useState([
		{
			id: 1,
			img: 'https://s3-alpha-sig.figma.com/img/c7b3/5339/a6110ba0489e46ef967f611a965695f5?Expires=1657497600&Signature=hPOlm6Pb2p2lcnwnocaxJQr81z5jJC~-Be4y3ExmjiO8UpYnkEHv6JNU7M5wV~xrAsaAd7FJgs6Sbn0M9b664XkniI-kVpK8tTj9k3RblUxieoX2ZYF0TufE~3VN8f5-fsOYlTCyUpgYXfCmMPQRWVEBFBE1aR1n~Y8CxRdVp2w3KhaHUgKaxy60okUF~mYgkgA6lPABEjeZliboeepVFOxkr33Kgh8ya4HxjGL67b~TAF0ldZAwI2Oh3m9F3bHeOsO-zKc-fGFm9KmCuy1k8fFeOG53KGR6hn3RO77lwqvhe~Kvr13dUpffFpmLrS3uO-fqH~FhC5YOJo0dEKNrCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
			title: 'White Swan Chair',
			price: 40,
			comprar: 'Buy Now',
		},

		{
			id: 2,
			img: 'https://s3-alpha-sig.figma.com/img/a7ed/54f7/84be40ba68e77f3a8875dfbca261692b?Expires=1657497600&Signature=eTLkQl9q-SEvM7Hu-zUPb2HmlunMPWasafMJcrpxaH07nELXYFuDMc6AgMQkTc7RP4thZAw22Mm64Vo87UDDNkCcJVOXfy2qYjWSq1tVc3eqzZD78JSGYEW1Vfp6Z6zm3ofa25XhUZTMBvqY409NJZ82ylihQtt5kuWB~n2DZJf1Cnb392Yir5Mv-rTSpxinOkICHuIXA5-cIvXNmIG4zYjUPX-nHrbFmfzrcwh8W8EmwybZiI8oxtzuATecngfp-JLwHy1y2ie57UgJ4ekh0QqXJLNvFSuQ~GLpB~96n91HNrQS5dAmA95FBTQyL5MkONAzjtlesSssAKCsb3Sdmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
			title: 'White Swan Chair',
			price: 50,
			comprar: 'Buy Now',
		},

		{
			id: 3,
			img: 'https://s3-alpha-sig.figma.com/img/58af/788c/145fdab1f7c3d999d9c424cde7fde47e?Expires=1657497600&Signature=FaN~JPq7r~oavY~eNHZVkljIhGNf01gAyWIiyj4loLQVkMmm4jdI9gt4OM3jmOQRXyF-8Z6v-GxLbodRFbpZ0sZ3UtcEz2YQOotgImKeEBXrFFT0fVPJYN7gmUdlGH-iRvQ9mYWjUAhy4Dc0oOql~~BvG9sEVZsHi-9uWoykWgme0XqjFOQWFQuGKgYI4uyFT4VPCRmk8Uxbfps6yrE3csuTfysv28n9k8Q2nRxZQWPqQEW3nNeBqsNWpDsuJf-YUVdI74sEH-eTMCq1362tCTDKl1Tw3UEDZqSxhRx~jeb0KmhLHyNcfNmN48QUFk07BKDuEOPkMO24tJoLM1RUQg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
			title: 'White Swan Chair',
			price: 60,
			comprar: 'Buy Now',
		},
	]);

	return (
		<Section>
			<ContentOne>
				<ContentTitle>
					<Title>Our Popular Furniture</Title>
				</ContentTitle>
				<ContentParagraph>
					<Paragraph>
						All of our furniture uses the best materials and choices for our
						customers.All of our furniture uses the best materials and choices
						for our customers.
					</Paragraph>
				</ContentParagraph>
			</ContentOne>
			<ContentTwo>
				{carrito.map((product, idx) => (
					<CardContent>
						<ContentImg>
							<Img src={product.img}></Img>
						</ContentImg>
						<ContentElements>
							<CardTitleMg>
								<div>
									<TitleDos>{product.title}</TitleDos>
								</div>
								<div>
									<Icons>
										<MdFavoriteBorder />
									</Icons>
								</div>
							</CardTitleMg>

							<CardPriceButton>
								<div>
									<Price>{product.price}</Price>
								</div>
								<div>
									<Button onClick={() => addToCart(product)}>
										{product.comprar}
									</Button>
								</div>
							</CardPriceButton>
						</ContentElements>
					</CardContent>
				))}
			</ContentTwo>
		</Section>
	);
};

export default Section_four;

const Section = styled.section`
	width: 1200px;
	height: 100%;
	min-height: 100%;
	max-height: 100%;
	margin: 0 auto;
	max-width: calc(100% - 20px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const ContentOne = styled.div`
	width: 100%;
	max-width: 100%;
	height: 100%;
	height: 100%;
	padding: 20px 10px;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;
const ContentTitle = styled.div`
	width: 100%;
	max-width: 100%;
`;

const Title = styled.h4`
	font-size: 2.2rem;
	color: #242424;

	@media screen and (max-width: 722px) {
		font-size: 1.6rem;
	}

	@media screen and (max-width: 440px) {
		font-size: 1.312rem;
	}
`;

const ContentParagraph = styled.div`
	width: 100%;
	max-width: 100%;
`;

const Paragraph = styled.p`
	color: #383738;
	font-size: 1.25rem;
	line-height: 1.688rem;
	@media screen and (max-width: 722px) {
		font-size: 1.2rem;
	}
	@media screen and (max-width: 440px) {
		font-size: 1rem;
	}
`;

const ContentTwo = styled.div`
	width: 100%;
	max-width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	flex-wrap: wrap;
	padding: 30px 0px;
	margin: 0 auto;
`;

const CardContent = styled.div`
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 24rem;
	max-width: 100%;
	height: 500px;
	max-height: 100%;

	@media screen and (max-width: 724px) {
		width: 48%;
	}

	@media screen and (max-width: 500px) {
		width: 350px;
		max-width: 100%;
	}

	@media screen and (max-width: 411px) {
		height: 400px;
	}
`;

const CardTitleMg = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0px 10px;
`;

const TitleDos = styled.p`
	color: #242424;
	font-size: 1.25rem;

	@media screen and (max-width: 411px) {
		font-size: 1rem;
	}
`;

const Icons = styled.a`
	color: #242424;
	font-size: 1.5rem;

	@media screen and (max-width: 722px) {
		font-size: 1.2rem;
	}
`;

const CardPriceButton = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0px 10px;
`;

const Price = styled.p`
	color: #242424;
	font-size: 1.5rem;

	@media screen and (max-width: 411px) {
		font-size: 1.3rem;
	}
`;

const Button = styled.a`
	color: #ffff;
	background-color: #244d4d;
	padding: 10px 20px;
	@media screen and (max-width: 411px) {
		font-size: 0.8rem;
	}
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
`;

const ContentImg = styled.div`
	width: 100%;
	height: 60%;

	@media screen and (max-width: 411px) {
		height: 56%;
	}
`;

const ContentElements = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5rem;
	padding: 10px;
`;
