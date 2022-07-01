import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
const Navbar = () => {
	const [active, setClose] = useState(false);
	return (
		<NavbarMenu>
			<div className="Nav_Bar_Menu">
				<Title>DudeShape</Title>
			</div>
			<NavMenuLink />

			<ContentIcons>
				<IconSearch>
					<FaSearch />
				</IconSearch>

				<IconMenu onClick={() => setClose(!active)}>
					{!active ? <HiOutlineMenuAlt3 /> : <IoMdClose />}
				</IconMenu>
			</ContentIcons>

			{active ? <MenuHamburguer /> : setClose}
		</NavbarMenu>
	);
};

const NavbarMenu = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 5px;
	@media screen and (max-width: 722px) {
		padding: 20px 30px;
	}
`;

const Title = styled.a`
	font-size: 1.5rem;
	color: #244d4d;
	font-weight: 700;
	cursor: pointer;
`;

const SubNav = styled.div`
	display: flex;
	gap: 50px;
	cursor: pointer;

	@media screen and (max-width: 722px) {
		display: none;
	}
`;

const NavLink = styled.a`
	color: #161616;
	font-size: 1rem;
	font-weight: 400;
	:hover {
		color: #244d4d;
		transition: all ease-out 0.8s;
	}
`;

const IconSearch = styled.div`
	font-size: 18px;
	color: #244d4d;
	cursor: pointer;
	padding-right: 15px;
	margin-left: auto;
`;

const IconMenu = styled.div`
	font-size: 26px;
	color: #244d4d;
	cursor: pointer;
`;
const ContentIcons = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
`;

const ContentMenuHamburguer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 100px;
	padding: 50px 50px;
	background-color: #244d4d;
	height: 100vh;
	max-height: 100%;
	width: 40rem;
	max-width: 100%;
	position: absolute;
	top: 73px;
	right: 0;
	z-index: 1;
	text-align: center;

	@keyframes MenuTranslate {
		0% {
			transform: translateX(200px);
		}

		100% {
			transform: translateX(0px);
		}
	}
`;

const TitleTwo = styled.a`
	font-size: 2rem;
	color: #ffff;
	font-weight: 700;
	cursor: pointer;
	animation: MenuTranslateTwo 3s; ;
`;

const SubNavHamburguer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 90px;
	cursor: pointer;
`;

const NavLinkHamburguer = styled.a`
	color: #ffff;
	font-size: 1.7rem;
	font-weight: 400;
	animation: MenuTranslateTwo 2s;

	:hover {
		color: #d6d6d6;
		transition: all ease-out 0.8s;
	}

	@keyframes MenuTranslateTwo {
		0% {
			transform: translateX(-182px);
		}

		100% {
			transform: translateX(0px);
		}
	}

	@media screen and (max-width: 411px) {
		animation: MenuTranslateTree 3s;

		@keyframes MenuTranslateTree {
			0% {
				transform: translateY(-200px);
			}

			100% {
				transform: translateY(0px);
			}
		}
	}
`;

const NavMenuLink = () => (
	<SubNav>
		<NavLink>Home</NavLink>
		<NavLink>About</NavLink>
		<NavLink>Features</NavLink>
		<NavLink>Contact</NavLink>
	</SubNav>
);

const MenuHamburguer = () => (
	<ContentMenuHamburguer>
		<TitleTwo>DudeShape</TitleTwo>
		<SubNavHamburguer>
			<NavLinkHamburguer>Home</NavLinkHamburguer>
			<NavLinkHamburguer>About</NavLinkHamburguer>
			<NavLinkHamburguer>Features</NavLinkHamburguer>
			<NavLinkHamburguer>Contact</NavLinkHamburguer>
		</SubNavHamburguer>
	</ContentMenuHamburguer>
);

export default Navbar;
