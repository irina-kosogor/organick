import { useNavigate } from "react-router-dom";
import { Button } from "utils/Button/Button";
import "./NotFound.scss";

export const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className="not-found">
			<div className="container">
				<div className="not-found__wrapper">
					<div className="not-found__content">
						<h3 className="not-found__error-code">404</h3>
						<h4 className="not-found__error-title">
							Page not found
						</h4>
						<h4 className="not-found__error-subtitle">
							The page you are looking for doesn't exist or has
							been moved
						</h4>
						<div>
							<Button
								text="Go to Homepage"
								onClick={() => {
									navigate("/");
								}}
								color="darkBlue"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
