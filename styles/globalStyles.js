import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
	${variables};

	.heading {
		font-size: var(--fs-heading);
		color: var(--navy-blue);
		font-family: var(--font-mono);
	}

	.heading::after {
		content: "";
		display: inline-block;
		position: relative;
		top: -5px;
		width: 80%;
		height: 1px;
		background-color: rgb(148 163 184);
		margin-left: 1.2rem;
    margin-right: 1.2rem;
		@media (min-width: 640px) {
      margin-left: 1rem;
      margin-right: 1rem;
      width: 55%;
    }
		@media (min-width: 768px) {
      margin-left: 1rem;
      margin-right: 0rem;
      width: 60%;
    }
	}

	.writings-link-animation {
		color: var(--zinc-950);
    font-weight: normal;
		text-decoration: none;
		position: relative;
		display: inline-block;
	}

	.writings-link-animation:hover {
		color: var(--medium-blue);
    font-weight: normal;
		text-decoration: none;
		position: relative;
		display: inline-block;
	}

	.hamburger-animation {
		color: var(--pink);
		font-size: var(--fs-sm);
		font-family: var(--font-mono);
		text-decoration: none;
		position: relative;
		display: inline-block;
	}

	.nav-animation {
		color: var(--pink);
		font-size: var(--fs-sm);
		font-family: var(--font-mono);
		text-decoration: none;
		position: relative;
		display: inline-block;
    &.active {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
	}

	.nav-animation:after {
		content: "";
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: var(--pink);
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	.nav-animation:hover:after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}

	.social-media-icons:hover {
		transition-delay: 0s, 0.5s, 0.5s;
		transform: translateY(-2px);
		z-index: 11;
	}

	/* resume: top-level header */
	.full-name-text {
		display: grid;
		align-content: center;
		color: white;
		margin-left: 1.2rem;
		font-size: var(--fs-xl);
	}

	/* resume: avatar */
	.profile-image-small {
		border-radius: 50%;
	}

	.company-logo {
		margin-bottom: 0.3rem;
		display: inline-block;
		border-radius: 50%;
		margin-left: 0rem;
	}
`;

export default GlobalStyle;
