var my_news = [
	{
		author: 'Саша Печкин',
		text: 'В четверг, четвертого числа...'
	},
	{
		author: 'Просто Вася',
		text: 'Считаю, что $ должен стоить 35 рублей!'
	},
	{
		author: 'Гость',
	text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
	}
];


var App = React.createClass({
	render: function () {
		return (
			<div className="app"> Hello everyone, I*m App Component. I can render News.
				<News data={my_news} />
				<Comments />
			</div>
			);
	}
});

var News = React.createClass({
	render: function () {
		var data = this.props.data;
		var newsTemplate = data.map(function(item, index) {
			return (
				<div key={index}>
					<p className="news__author">{item.author}:</p>
					<p className="news__text">{item.text}</p>
				</div>
			);
		});
		return (<div className="news">{newsTemplate}</div>
		);
	}
});

var Comments = React.createClass({
	render: function(){
		return (<div className="comments">There is nothing to comment</div>);
	}
});

ReactDOM.render(
<App />,
document.getElementById('root')
);