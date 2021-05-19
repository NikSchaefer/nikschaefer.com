import { useEffect } from "react";

export default function FourOhFour(): JSX.Element {
	useEffect(() => {
		window.location.href = "/";
	}, []);
	return <> </>;
}
