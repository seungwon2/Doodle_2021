/** @format */
import React from "react";
import App from "next/app";
import Head from "next/head";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
@media (max-width: 262px) {
  html {
    font-size: 7px;
  }
}
@media (min-width: 263px) and (max-width: 300px) {
  html {
    font-size: 8px;
  }
}
@media (min-width: 301px) and (max-width: 337px) {
  html {
    font-size: 9px;
  }
}
@media (min-width: 338px) and (max-width: 375px) {
  html {
    font-size: 10px;
  }
}
@media (min-width: 376px) and (max-width: 412px) {
  html {
    font-size: 11px;
  }
}
@media (min-width: 413px) and (max-width: 450px) {
  html {
    font-size: 12px;
  }
}
@media (min-width: 451px){
  html {
    font-size: 13px;
  }
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.1rem;
  background-color:#ccc;
}
::-webkit-scrollbar {
  display: none;
}
input {
  -webkit-appearance: none;
  -webkit-border-radius: 0;
}
html,
          body,
          body > div:first-child{
            height: 100%;
          }
`;

export default function Doodle({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Head>
				<title>Doodle</title>
			</Head>
			<Wrapper>
				<Blank />
				<Contents>
					<Component {...pageProps} />
				</Contents>
				<Blank />
			</Wrapper>
		</>
	);
}

const Contents = styled.div`
	width: 100%;
	max-width: 37.5rem;
	min-height: 100%;
	background-color: white;
	position: relatvie;
`;

const Blank = styled.div`
	flex: 1;
	background-color: grey;
	z-index: 100;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	min-height: 100%;
`;
