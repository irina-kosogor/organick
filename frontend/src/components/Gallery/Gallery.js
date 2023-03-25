import { GalleryCard } from "./components/GalleryCard";
import "./Gallery.scss";

export const Gallery = () => {
	const galleryCards = [
		{ title: "Organic Juice" },
		{ title: "Organic Food" },
		{ title: "Nuts Cookies" },
	];
	return (
		<div className="gallery">
			<div className="gallery__wrapper">
				{galleryCards.map((card, index) => (
					<GalleryCard title={card.title} key={index} />
				))}
			</div>
		</div>
	);
};
