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
		fetch(
			DebtsUrlCount
			// , {mode: 'no-cors'}
		)
			.then(response => response.json())
			.then(debtsCount => {
				this.setState({ debtsCount });
			})
			.catch(error => console.log('error', error));

		const initialFetch = fetch(
			DebtsUrlList
			// , { mode: 'no-cors' }
		)
			.then(response => response.json())
			.then(debtsList => {
				this.setState({ debtsList });
				console.log('this.state.debtsList', this.state.debtsList);
			})
			.catch(error => console.log('error', error));
	}
	setFilter = e => {
		this.setState({ query: e.target.value });
		console.log(this.state.query);
	};
	inputVal = this.state.query.length;

	
	onSubmit = e => {
		console.log('inputVal ',this.state.query.length );
		if (this.state.query.length  > 2) {
			e.preventDefault();
			fetch(DebtsUrlFiltered, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(this.state.query)
			})
				.then(res => {
					return res.clone().json();
				})
				.then(data => {
					console.log(data);
					this.setState({ debtsList: data });
					// console.log('nowa lista',this.state.debtsList);
				});
		} else {
			alert('prosze wpisac 3 znaki');
		}
	};

	render() {
		return (
			<div>
				<Header
					setFilter={this.setFilter}
					onSubmit={this.onSubmit}
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
