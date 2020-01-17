const users = [
	{
		id: 1,
		name: 'Test',
		age: 25,
		sex: 'm',
		isEmployed: true,
		comment: 'test'
	},
	{
		id: 2,
		name: 'Testina',
		age: 25,
		sex: 'f',
		isEmployed: true,
		comment: 'asd'
	},
	{
		id: 3,
		name: 'Senior',
		age: 27,
		sex: 'm',
		isEmployed: true,
		comment: 'wtf'
	}
];

const User = ({
	id,
	name,
	age,
	sex,
	isEmployed,
	comment,
	isOpened,
	...props
}) => (
	<div className="user" {...props}>
		<p>ID: {id}</p>
		<p>Name: {name}</p>
		<p>Age: {age}</p>
		<p>Opened: {isOpened ? 'yup' : 'nope'}</p>
		{isOpened && (
			<Fragment>
				<p>Sex: {sex}</p>
				<p>isEmployed: {isEmployed}</p>
				<p>Comment: {comment}</p>
			</Fragment>
		)}
	</div>
);

class UserList extends Component {
	state = {
		openedUser: null
	};

	openUser = id => () => {
		this.setState({ openedUser: id });
	};

	renderUser = user => {
		return (
			<User
				{...user}
				isOpened={this.state.openedUser === user.id}
				onClick={this.openUser(user.id)}
			/>
		);
	};

	render() {
		return <div className="list">{this.props.users.map(this.renderUser)}</div>;
	}
}

export default function App() {
	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<UserList users={users} />
		</div>
	);
}
