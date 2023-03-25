import { NewsCardItem } from "../NewsCardItem/NewsCardItem";
import "./NewsCard.scss";

export const NewsCard = (props) => {
	const { date, author, title, description } = props;
	const day = date.getDate();
	const month = date.toLocaleString("eng", { month: "short" });

	return (
		<div className="news-card">
			<div className="news-card__date">
				<span className="news-card__day">{day}</span>
				<span className="news-card__month">{month}</span>
			</div>
			<NewsCardItem
				author={author}
				title={title}
				description={description}
			/>
		</div>
	);
};
