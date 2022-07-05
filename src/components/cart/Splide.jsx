import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styled from 'styled-components';

export function Slider() {
	const [newCart] = useState([
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
		<Splide
			options={{
				rewind: true,
				width: 1200,
				gap: '5rem',
				perPage: 4,
				autoplay: true,
				breakpoints: {
					640: {
						perPage: 2,
						width: 600,
					},
					440: {
						perPage: 1,
						width: 440,
					},
				},
			}}
		>
			<SplideSlide>
				{newCart.map((product) => (
					<div>
						<h1></h1>
					</div>
				))}
			</SplideSlide>
			<SplideSlide>
				<Div>hola</Div>
			</SplideSlide>
			<SplideSlide>
				<Div>hola</Div>
			</SplideSlide>
			<SplideSlide>
				<Div>hola</Div>
			</SplideSlide>
			<SplideSlide>
				<Div>hola</Div>
			</SplideSlide>
			<SplideSlide>
				<Div>hola</Div>
			</SplideSlide>
			<SplideSlide>
				<Div>hola</Div>
			</SplideSlide>
			<SplideSlide>
				<Div>hola</Div>
			</SplideSlide>
			<SplideSlide>
				<Div>hola</Div>
			</SplideSlide>
			<SplideSlide>
				<Div>hola</Div>
			</SplideSlide>
		</Splide>
	);
}

const Div = styled.div`
	background-color: red;
	padding: 50px;
	width: 300px;
	height: 300px;
`;
