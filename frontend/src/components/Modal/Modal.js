import "./Modal.scss";

export const Modal = ({ onClose, children }) => {
	document.body.style.overflow = "hidden";
	return (
		<div className="modal" onClick={onClose}>
			<div
				className="modal__wrapper"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className="container">
					<div className="modal__content">
						<button
							onClick={onClose}
							className="modal__close-button"
						>
							&#10006;
						</button>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};
