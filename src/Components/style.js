import styled from "styled-components";

export const Container = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	min-height: ${(props) => props.minHeight};
	background-color: ${(props) => props.bgColor};
	border: ${(props) => props.bdr};
	border-radius: ${(props) => props.radius};
	padding: ${(props) => props.pad};
	display: ${(props) => props.display};
	justify-content: ${(props) => props.jstCnt};
	align-items: ${(props) => props.alItm};
	flex-direction: ${(props) => props.direction};
`;

export const Button = styled.button`
	background-color: ${(props) => props.bgColor};
	border-radius: 5px;
	border: none;
	padding: 10px;
	font-weight: 700;
	font-size: medium;
	cursor: pointer;
	margin: 10px 0 10px 0;
	font-family: "Roboto", sans-serif;
`;
