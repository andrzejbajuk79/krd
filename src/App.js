import React, { Component, Fragment } from 'react';
// import './App.css';
import './styles/styles.scss';
import DebtsList from './components/debtsList';
import Header from './components//Header';

import {
	DebtsUrlCount,
	DebtsUrlFiltered,
	DebtsUrlList
} from './components/rootsUrlComponent';

class App extends Component {
	state = {
		query: '',
		debtsList: [],
		debtsCount: null,
		data: []
	};

	componentDidMount() {
		fetch(DebtsUrlCount, { mode: 'no-cors' })
			.then(response => response.json())
			.then(debtsCount => {
				this.setState({ debtsCount });
			})
			.catch(error => {
				console.error('Error:', error);
			});

		fetch(DebtsUrlList, { mode: 'no-cors' })
			.then(response => response.json())
			.then(debtsList => {
				this.setState({ debtsList });
				console.log(this.state.debtsList);
			})
			.catch(error => {
				console.error('Error:', error);
			});
	}
	setFilter = e => {
		this.setState({ query: e.target.value });
		console.log(this.state.query);
	};
	inputVal = JSON.stringify(this.state.query);
	fetchFiltered = async () => {
		await fetch(DebtsUrlFiltered, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			mode: 'no-cors',
			body: JSON.stringify(this.state.query)
		})
			.then(res => {
				console.log(res.status);
				return res.clone().json();
			})
			.then(data => {
				console.log(data);
				this.setState({ debtsList: data });
				// console.log('nowa lista',this.state.debtsList);
			});
	};

	render() {
		return (
			<div>
				<Header
					setFilter={this.setFilter}
					fetchFiltered={this.fetchFiltered}
					total={this.state.debtsCount}
				/>

				<div className="container ">
					<DebtsList
						debtsCount={this.state.debtsCount}
						key={this.state.debtsList.length}
						debtsList={this.state.debtsList}
					/>
				</div>
			</div>
		);
	}
}

export default App;
