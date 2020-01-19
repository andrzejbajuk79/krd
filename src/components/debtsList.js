import React, { Component, Fragment } from 'react';
import { DebtSingle } from './debtSingle';

class DebtsList extends Component {
	state = {
		openedUser: null,
		toggleOpen: false
	};
	toggleOpen = id => {
		if (id === this.state.openedUser) {
			this.setState({ toggleOpen: !this.state.toggleOpen });
		} else {
			this.setState({ toggleOpen: true });
		}
	};
	openUser = id => () => {
		this.toggleOpen(id);
		this.setState({ openedUser: id });
	};

	renderUser = debt => {
		// console.log(debt);
		return (
			<DebtSingle
				key={debt.Id}
				{...debt}
				toggleOpen={this.state.toggleOpen}
				isOpened={this.state.openedUser === debt.Id}
				openUser={this.openUser(debt.Id)}
			/>
		);
	};

	render() {
		return (
			<div className="content-container ">
				<div className="show-for-desktop">
					<div className='list-header__frame'>
						<div className="list-header">
							<span>Nazwisko</span>
							<span>Numer</span>
							<span>Kwota</span>
						</div>
					</div>
				</div>

				{this.props.debtsList.length === 0 ? (
					<h1>Nic nie znaleziono</h1>
				) : (
					this.props.debtsList.map(this.renderUser)
				)}
			</div>
		);
	}
}

export default DebtsList;
