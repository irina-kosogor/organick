import { NewsCard } from "./components/NewsCard/NewsCard";
import { Button } from "utils/Button/Button";
import "./News.scss";

export const News = () => {
	const cardsData = [
		{
			date: new Date("2022-11-25"),
			author: "Rachi Card",
			title: "The Benefits of Vitamin D & How to Get It",
			description:
				"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
		},
		{
			date: new Date("2022-09-12"),
			author: "Rachi Card",
			title: "Our Favourite Summertime Tomato",
			description:
				"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
		},
	];
	return (
		<div className="news" id="news">
			<div className="container">
				<div className="news__header">
					<div className="news__titles">
						<h4 className="news__subtitle">News</h4>
						<h3 className="news__title">
							Discover weekly content about organic food, & more
						</h3>
					</div>
					<div className="news__button-wrapper">
						<Button text="More News" color="white" />
					</div>
				</div>
				<div className="news-cards__wrapper">
					{cardsData.map((card, index) => (
						<NewsCard
							key={index}
							date={card.date}
							author={card.author}
							title={card.title}
							description={card.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
