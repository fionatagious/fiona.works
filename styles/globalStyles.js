import { createGlobalStyle } from "styled-components";
// import fonts from "./fonts";
// import variables from "./variables";

// .nav-animation a {
// 	position: relative;
// 	display: inline-block;
// 	color: #fecaca;
// }

// .nav-animation a:focus,
// .nav-animation a:hover {
// 	position: relative;
// 	display: inline-block;
// 	color: #d79eff;
// }

const GlobalStyle = createGlobalStyle`
	.heading {
		font-size: 2rem;
		color: white;
	}

	.heading::after {
		content: "";
		display: inline-block;
		position: relative;
		top: -5px;
		width: 350px;
		height: 1px;
		margin-left: 20px;
		background-color: rgb(148 163 184);
	}

	.photo-container {
		position: relative;
		max-width: 350px;
		max-height: 350px;
	}

	.about-photo-border {
		position: absolute;
		margin-top: -1rem;
		margin-left: 1rem;
		display: inline-block;
		width: 100%;
		height: 100%;
		flex-shrink: 1;
		background-color: transparent;
		border: solid 2px #fecaca;
	}

	.link-animation {
		color: #fecaca;
		text-decoration: none;
		position: relative;
		display: inline-block;
	}

	.link-animation:after {
		content: "";
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #fecaca;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	.link-animation:hover:after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}

	.social-media-icons:hover {
		transition-delay: 0s, 0.5s, 0.5s;
		transform: translateY(-2px);
		z-index: 11;
	}

  /* Fade up */
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  /* Fade down */
  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

	/* resume: top-level header */
	.full-name-text {
		display: grid;
		align-content: center;
		color: white;
		margin-left: 1.2rem;
		font-size: 1.625rem;
	}

	/* resume: overview */
	.email {
		color: #d79eff;
		text-decoration: none;
		font-weight: bold;
	}

	/* resume: experience */
	.position-title {
		color: #d79eff;
		font-size: 20px;
		line-height: 1.4;
	}

	/* resume: icons, avatars */
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
