import React from "react";
import fr_messages from "I18n/fr";
import { BaseLayout } from "./baseLayout";

export const LayoutFr = (props) => (
	<BaseLayout
		{...props}
		i18nMessages={fr_messages}
	/>
);