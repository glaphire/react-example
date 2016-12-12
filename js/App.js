var App = React.createClass({
	render: function () {
		return (
			<div className="app"> Hello everyone, I*m App Component</div>
			);
	}
});

ReactDOM.render(
<App />,
document.getElementById('root')
);