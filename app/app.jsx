/** @jsx React.DOM */
var React = require('react');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {value: 'Hello!'};
    },
    handleChange: function (event) {
        this.setState({value: event.target.value});
    },
    render: function () {
        var value = this.state.value;
        return (
            <main class="container">
                <h1>{value}</h1>
                <input type="text" value={value} onChange={this.handleChange} />
            </main>
        );
    }
});

React.render(
    <TodoApp/>,
    document.body
);

