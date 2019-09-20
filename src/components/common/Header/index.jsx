import React, { useState } from "react";
import Headroom from "react-headroom";
import { Box } from "rendition";
import Navbar from "./Navbar";
import Hamburger from "./Hamburger";
import Sidebar from "./Sidebar";
import { Overlay, Wrapper } from "./styles";

export const Header = ({ getDarkMode, setDarkMode, langs, home, isHome }) => {
	const [sidebar, toggle] = useState(false);
	return (
		<div>
			<Headroom>
				<Wrapper>
					<Box bg='background.light'>
						<Navbar getDarkMode={getDarkMode} setDarkMode={setDarkMode} langs={langs} home={home} isHome={isHome} />
						<Hamburger sidebar={sidebar} toggle={toggle} />
					</Box>
				</Wrapper>
			</Headroom>
			<Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
			<Sidebar sidebar={sidebar} toggle={toggle} getDarkMode={getDarkMode} setDarkMode={setDarkMode}
							 langs={langs} isHome={isHome}
			/>
		</div>
	);
};
