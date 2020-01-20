import React, { Component, Fragment } from 'react';
import { DebtSingle } from './debtSingle.component';

class DebtsList extends Component {
	state = {
		openedUser: null,
		toggleOpen: false
	};

	openUser = id => () => {
		const { toggleOpen, openedUser } = this.state;
		if (id === openedUser) {
			this.setState({ openedUser: id, toggleOpen: !toggleOpen });
		} else {
			this.setState({ openedUser: id, toggleOpen: true });
		}
	};

	renderUser = debt => {
		const { toggleOpen, openedUser } = this.state;
		return (
			<DebtSingle
				key={debt.Id}
				{...debt}
				toggleOpen={toggleOpen}
				isOpened={openedUser === debt.Id}
				openUser={this.openUser(debt.Id)}
			/>
		);
	};

	render() {
		const { debtsList } = this.props;
		return (
			<div className="content-container ">
				<div className="show-for-desktop">
					<div className="list-header__frame">
						<div className="list-header">
							<span>Nazwisko</span>
							<span>Numer</span>
							<span>Kwota</span>
						</div>
					</div>
				</div>
				{debtsList.length === 0 ? (
					<h1>Nic nie znaleziono</h1>
				) : (
					debtsList.map(this.renderUser)
				)}
			</div>
		);
	}
}

export default DebtsList;
