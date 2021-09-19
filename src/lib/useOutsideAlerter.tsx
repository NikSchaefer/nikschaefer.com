/* eslint-disable @typescript-eslint/ban-types */
import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useOutsideAlerter(
	ref: React.RefObject<HTMLDivElement>,
	handler: Function
) {
	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		function handleClickOutside(event: any) {
			handler(event);
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, handler]);
}

export { useOutsideAlerter };
