import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => (
	<header className="header">
		<div className="content-container">
			<div className="header__content">
				<div className="header-search">
					<span>PODAJ NUMER SPRAWY,NAZWĘ LUB NIP DŁUŻNIKA</span>
					<form onSubmit={props.onSubmit} className="header-form">
						<input
							minLength="3"
							name='search'
							value={props.query}
							onChange={e => props.setFilter(e)}
							className="header-form__input"
							type="text"
							placeholder="Numer sprawy, Nazwa, NIP"
							autoFocus
						/>
						<div className="header-button__action">
							<button type="submit" className="button header-button">
								Szukaj
							</button>
						</div>
					</form>
				</div>
				<div className="total">
					<h2 className="total__header"> Całkowita Ilość spraw: </h2>
					<p className="total__count"> {props.total}</p>
				</div>
			</div>
		</div>
	</header>
);

export default Header;
