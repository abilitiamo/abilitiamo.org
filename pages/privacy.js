import classNames from "classnames";
import { PageTemplate } from "../components/Templates";
import Privacy20220812 from "../components/Privacy/Privacy20220812";

export default function Privacy() {
	return (
		<>
			<PageTemplate title="Informativa sulla Privacy">
				<Privacy20220812/>
			</PageTemplate>
		</>
	);
}

const sideLinks = [
	{ label: "Chi siamo", url: "/chi-siamo" },
	{ label: "Organizzazione", url: "/organizzazione" },
	{ label: "Diventa socio", url: "/diventa-socio" },
];
