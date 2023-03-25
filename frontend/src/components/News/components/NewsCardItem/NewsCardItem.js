import "./NewsCardItem.scss";
import { Button } from "utils/Button/Button";

export const NewsCardItem = ({ author, title, description }) => {
	return (
		<div className="news-card-item">
			<div className="news-card-item__author">By {author}</div>
			<h4 className="news-card-item__title">{title}</h4>
			<p className="news-card-item__description">{description}</p>
			<Button text="Read More" color="yellow" />
		</div>
	);
};
