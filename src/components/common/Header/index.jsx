import React, { useState } from "react";
import Headroom from "react-headroom";
import { Box } from "rendition";
import Navbar from "./Navbar";
import Hamburger from "./Hamburger";
import Sidebar from "./Sidebar";
import { Overlay, Wrapper } from "./styles";

export const Header = ({ getDarkMode, setDarkMode, langs, home }) => {
	const [sidebar, toggle] = useState(false);
	return (
		<Headroom>
			<Wrapper>
				<Box bg='background.light'>
					<Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
					<Navbar getDarkMode={getDarkMode} setDarkMode={setDarkMode} langs={langs} home={home} />
					<Hamburger sidebar={sidebar} toggle={toggle} />
					<Sidebar sidebar={sidebar} toggle={toggle} getDarkMode={getDarkMode} setDarkMode={setDarkMode}
									 langs={langs}
					/>
				</Box>
			</Wrapper>
		</Headroom>
	);
};
