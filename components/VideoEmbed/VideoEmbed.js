import classNames from "classnames";
import styles from "./VideoEmbed.module.scss";
import ReactPlayer from "react-player";

import CookieConsent, {
	getCookieConsentValue,
	resetCookieConsentValue,
} from "react-cookie-consent";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function AcceptButton({ onAccept, children }) {
	return <Button variant="secondary">{children}</Button>;
}

export default function VideoEmbed({ url, volume, preview }) {
	const [analytics, setAnalytics] = useState();
	useEffect(() => {
		const initialConsentValue = getCookieConsentValue() + "";
		if (initialConsentValue === "true") {
			setAnalytics(true);
		} else {
			setAnalytics(false);
		}
	});
	return (
		<div className={classNames(styles.videoWrapper)}>
			{!analytics && (
				<div
					className={classNames(styles.cookiesForbidden, "text-center", "p-5")}
				>
					{preview && (
						<div
							className={classNames(styles.videoPreview)}
							style={{ backgroundImage: `url(${preview.src})` }}
						/>
					)}
					<h4>Accetta i cookies per vedere il filmato</h4>
					<p>
						La riproduzione del filmato è stata impedita poichè fa uso di cookie
						di terze parti.
					</p>
					<CookieConsent
						visible="show"
						containerClasses={styles.videoCookiesConsent}
						disableStyles={true}
						buttonClasses={styles.acceptBtn}
						buttonText="Acconsenti"
						sameSite="strict"
						onAccept={() => {
							setAnalytics(true);
							console.log("accepted");
						}}
					/>
				</div>
			)}
			{analytics && (
				<ReactPlayer
					className={styles.reactPlayer}
					url={url}
					width="100%"
					height="100%"
					volume={volume || 1}
					controls
				/>
			)}
		</div>
	);
}
