var App = React.createClass({
	render: function () {
		return (
			<div className="app"> Hello everyone, I*m App Component. I can render News.
				<News />
			</div>
			);
	}
});

var News = React.createClass({
	render: function () {
		return (<div className="news">It's pity, but there are no news.</div>
		);
	}
});

ReactDOM.render(
<App />,
document.getElementById('root')
);