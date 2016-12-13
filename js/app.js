var my_news = [
{
	author: 'Саша Печкин',
	text: 'В четчерг, четвертого числа...',
	bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
},
{
	author: 'Просто Вася',
	text: 'Считаю, что $ должен стоить 35 рублей!',
	bigText: 'А евро 42!'
},
{
	author: 'Гость',
	text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
	bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
}
];;


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
	propTypes: {
		data: React.PropTypes.array.isRequired
	},
	
	render: function () {
		var data = this.props.data;
		if (data.length > 0) {
			var newsTemplate = data.map(function(item, index) {
				return (
					<div key={index}>
            			<Article data={item} />
					</div>
				);
			});
		} else {
			return (<p>There is no news</p>);
		}
		console.log(newsTemplate);
		return (<div className="news">{newsTemplate}</div>);
	}
});

var Comments = React.createClass({
	render: function(){
		return (<div className="comments">There is nothing to comment</div>);
	}
});

var Article = React.createClass({
	propTypes: {
		data: React.PropTypes.shape({
		author: React.PropTypes.string.isRequired,
		text: React.PropTypes.string.isRequired,
		bigText: React.PropTypes.string.isRequired
		})
	},
	getInitialState: function() {
		return {
			visible: false
		};
	},
	readmoreClick: function(e) {
		e.preventDefault();
		this.setState({visible:true}, function(){
			alert("State was changed");
		});
	},
	render: function() {
	var author = this.props.data.author,
	text = this.props.data.text,
	bigText = this.props.data.bigText,
	visible = this.state.visible;
	return (
		<div className='article'>
			<p className='news__author'>{author}:</p>
			<p className='news__text'>{text}</p>
			<a href="#" onClick={this.readmoreClick} className={'news__readmore ' + (visible ? 'none' : '')}>Подробнее</a>
			<p className={'news__big-text ' + (visible ? '' : 'none')}>{bigText}</p>
		</div>
		)
	}
});

ReactDOM.render(
<App />,
document.getElementById('root')
);