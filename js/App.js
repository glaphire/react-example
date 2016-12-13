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
				<h3>News:</h3>
				<Add />
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
	getInitialState: function() {
		return {counter:0};
	},
	onTotalNewsClick: function(){
		this.setState({counter: ++this.state.counter});
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
		return (
			<div className='news'>{newsTemplate}
			<strong
				className={'news__count ' + (data.length > 0 ? '' : 'none')}
				onClick={this.onTotalNewsClick}
			>
			News count: {data.length}</strong>
				<strong>Clicks: {this.state.counter}</strong>
			</div>
		);
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
			visible: false,
			counter: 0
		};
	},
	readmoreClick: function(e){
		e.preventDefault();
		this.setState({visible:true});
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

var Add = React.createClass({
	componentDidMount: function() {
		ReactDOM.findDOMNode(this.refs.author).focus();
	},
	onBtnClickHandler: function(e) {
		e.preventDefault();
	},
	getInitialState: function(){
		return {
			agreeNotChecked: true,
			authorIsEmpty:true,
			textIsEmpty: true
		};
	},
	componentDidMount: function() {
		ReactDOM.findDOMNode(this.refs.author).focus();
	},
	onBtnClickHandler: function(e) {
		e.preventDefault();
		var author = ReactDOM.findDOMNode(this.refs.author).value;
		var text = ReactDOM.findDOMNode(this.refs.text).value;
		alert(author + '\n' + text);
	},
	onCheckRuleClick: function(e) {
		this.setState({agreeNotChecked: !this.state.agreeNotChecked}); //устанавливаем значение в state
	},
	onAuthorChange: function(e) {
		if(e.target.value.trim().length > 0 ) {
			this.setState({authorIsEmpty: false})
		}else{
			this.setState({authorIsEmpty: true})
		}
	},
	onTextChange: function(e) {
		if (e.target.value.trim().length > 0) {
			this.setState({textIsEmpty: false})
		} else {
			this.setState({textIsEmpty: true})
		}
	},
	render: function() {
		var agreeNotChecked = this.state.agreeNotChecked;
		var authorIsEmpty = this.state.authorIsEmpty;
		var textIsEmpty = this.state.textIsEmpty;
		return (
			<form className="add cf">
				<input type="text"
					   className="add_author"
					   defaultValue=""
					   placeholder="Your name"
					   onChange={this.onAuthorChange}
					   ref="author"/>
				<textarea
					className="add__text"
					defaultValue=""
					placeholder="News content"
					ref="text"
					onChange={this.onTextChange}
					cols="30"
					rows="10">
				</textarea>
				<label className="add__checkrule">
					<input
						type="checkbox"
						defaultChecked={false}
						ref="checkrule"
						onChange={this.onCheckRuleClick}
					/> I agree with rules
				</label>
				<button
					className="add__btn"
					onClick={this.onBtnClickHandler}
					ref="alert_button"
					disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}
				>
					Show alert message
				</button>
			</form>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);