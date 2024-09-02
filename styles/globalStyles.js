import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
	${variables};

  /* Home: Headings */
	.heading {
		font-size: var(--fs-heading);
		color: var(--eggplant);
		font-family: var(--font-mono);
	}

	.heading-contact {
		font-size: var(--fs-heading);
		color: var(--eggplant);
		font-family: var(--font-mono);
	}

  /* Home: Links and Icons */
  .darken:hover {
		transition-delay: 0s, 0.5s, 0.5s;
		filter: brightness(50%);
		z-index: 11;
	}

  /* Home: Top-level Navbar */
	.hamburger-animation {
		color: var(--pink);
		font-size: var(--fs-sm);
		font-family: var(--font-mono);
		text-decoration: none;
		position: relative;
		display: inline-block;
	}

	.nav-animation {
		color: var(--eggplant);
		font-size: var(--fs-sm);
		font-family: var(--font-mono);
		text-decoration: none;
		position: relative;
		display: inline-block;
	}

	.nav-animation:after {
		content: "";
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: var(--eggplant);
	}

	.nav-animation:hover:after {
		transform: scaleX(1);
		transform-origin: bottom left;
    transition: transform 0.25s ease-out;
	}

	.nav-animation:focus:after {
		transform: scaleX(1);
		transform-origin: bottom left;
    transition: transform 0.25s ease-out;
	}

	/* Resume: Top-level Header */
	.full-name-text {
		display: grid;
		align-content: center;
		color: white;
		margin-left: 1.2rem;
		font-size: var(--fs-xl);
	}

	/* Resume: Images */
	.profile-image-small {
		border-radius: 50%;
	}

	.company-logo {
		margin-bottom: 0.3rem;
		display: inline-block;
		margin-left: 0rem;
	}
`;

export default GlobalStyle;
