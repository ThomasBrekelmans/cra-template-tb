/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import logo from './logo.svg';

const AppHeader = styled.header`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;

	a {
		color: #61dafb;
	}
`;

const AppLogo = styled.img`
	height: 40vmin;
	pointer-events: none;

	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		animation: App-logo-spin infinite 20s linear;
	}
`;

function App() {
	return (
		<div
			css={css`
				text-align: center;
			`}
		>
			<AppHeader>
				<AppLogo src={logo} alt="logo" />

				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>

				<a
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</AppHeader>
		</div>
	);
}

export default App;
