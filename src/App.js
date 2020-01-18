import React, { Component, Fragment } from 'react';
// import './App.css';
import './styles/styles.scss';
import DebtsList from './components/debtsList';
import Header from './components//Header';
import LoadingSpinner from './components/LoadingSpinner';

import {
	DebtsUrlCount,
	DebtsUrlFiltered,
	DebtsUrlList
} from './components/rootsUrlComponent';

class App extends Component {
	state = {
		loading: 'true',
		query: '',
		debtsList: [],
		initialDebtsList: [],
		debtsCount: null,
		data: []
	};

	componentDidMount() {
		const initial = fetch(DebtsUrlCount)
			.then(response => response.json())
			.then(debtsCount => {
				this.setState({ debtsCount });
			})
			.catch(error => console.log('error1', error));

		fetch(DebtsUrlList)
			.then(response => response.json())
			.then(debtsList => {
				this.setState({ debtsList, initialDebtsList: debtsList });
			})
			.catch(error => console.log('error2', error));
	}
	setFilter = e => {
		console.log(e.target.value);

		this.setState({
			query: e.target.value
		});
	};

	onSubmit = e => {
		e.preventDefault();
		this.setState(
			{
				loading: false
			},
			() => {
				// if (this.state.query.length > 2) {
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
						this.setState({
							loading: true,
							debtsList: data
						});
					})
					.catch(error => {
						this.setState({
							loading: true,
							debtsList:this.state.initialDebtsList
						});
						console.log('error3', this.state.initialDebtsList)
						
					});
			}
		);
	};
	render() {
		const { debtsCount, loading } = this.state;
		return (
			<Fragment>
				<Header
					query={this.query}
					setFilter={this.setFilter}
					onSubmit={this.onSubmit}
					total={debtsCount}
				/>
				{!loading ? (
					<LoadingSpinner />
				) : (
					<div className="container ">
						<DebtsList
							debtsCount={this.state.debtsCount}
							key={this.state.debtsList.length}
							debtsList={this.state.debtsList}
						/>
					</div>
				)}
			</Fragment>
		);
	}
}

export default App;
