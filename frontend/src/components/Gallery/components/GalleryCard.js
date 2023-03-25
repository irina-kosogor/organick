import "./GalleryCard.scss";

export const GalleryCard = ({ title }) => {
	return (
		<div className="gallery-card">
			<div className="gallery-card__title">{title}</div>
		</div>
	);
};
