import React from "react";
import en_messages from "I18n/en";
import { BaseLayout } from "./baseLayout";

export const LayoutEn = (props) => (
	<BaseLayout
		{...props}
		i18nMessages={en_messages}
	/>
);
