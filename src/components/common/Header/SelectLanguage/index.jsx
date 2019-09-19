import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Txt } from "rendition";
import { FormattedMessage } from "react-intl";
import ReactCountryFlag from "react-country-flag";

// should NOT do this, but it's 3 langs anyway...
const flagSwitcher = (lang) => {
	switch (lang) {
		case "en":
			return "gb";
		case "fr":
			return "fr";
		case "zh":
			return "cn";
		default:
			return "eu";
	}
};

const SelectLanguage = (props) => {
	const links = props.langs.map(lang => (
		<div key={lang.langKey}>
			<Link to={lang.link} color="text.main" onClick={() => {
				typeof window !== `undefined` && window.localStorage.setItem("selectedLang", lang.langKey);
			}}
			>
				<Txt>
					<ReactCountryFlag code={flagSwitcher(lang.langKey)} />
					<FormattedMessage id={lang.langKey} />
				</Txt>
			</Link>
		</div>
	));
	return (
		<div>
			{links}
		</div>
	);
};

SelectLanguage.propTypes = {
	langs: PropTypes.array
};

export default SelectLanguage;