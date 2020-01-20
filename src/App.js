import React, { Component, Fragment } from 'react';

import './styles/styles.scss';
import DebtsList from './components/debtsList.component';
import Header from './components/Header.component';
import LoadingSpinner from './components/LoadingSpinner.component';

import {
	DebtsUrlCount,
	DebtsUrlFiltered,
	DebtsUrlList
} from './components/rootsUrlComponent.jcomponent';

class App extends Component {
	state = {
		value: '',
		loading: 'true',
		debtsList: [],
		debtsCount: null
	};

	updateInputValue = e => {
		const value = e.target.value;
		if (!value.match(/^\s+|\s+$/g, '')) {
			this.setState({ value: e.target.value });
		}
	};

	onSubmit = e => {
		e.preventDefault();
		this.setState(
			{
				loading: false
			},
			() => {
				fetch(DebtsUrlFiltered, {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(this.state.value)
					// body: JSON.stringify(this.state.query)
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
							loading: true
						});
						console.log('error3', error);
					});
			}
		);
	};
	componentDidMount() {
		fetch(DebtsUrlCount)
			.then(response => response.json())
			.then(debtsCount => {
				this.setState({ debtsCount });
			})
			.catch(error => console.log('error1', error));

		fetch(DebtsUrlList)
			.then(response => response.json())
			.then(debtsList => {
				this.setState({ debtsList });
			})
			.catch(error => console.log('error2', error));
	}
	componentDidUpdate(prevState) {
		if (prevState.debtsList !== this.state.debtsList) {
			const json = JSON.stringify(this.state.debtsList);
			localStorage.setItem('debtsList', json);
		}
	}
	render() {
		const { debtsCount, loading } = this.state;

		return (
			<Fragment>
				<Header
					value={this.state.value}
					updateInputValue={this.updateInputValue}
					// setFilter={this.setFilter}
					onSubmit={this.onSubmit}
					total={debtsCount}
				/>
				<div>{this.state.errorMessage}</div>
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
