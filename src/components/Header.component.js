import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
	const {onSubmit,updateInputValue,value,total} = props;
	return (
		<header className="header">
			<div className="content-container">
				<div className="header__content">
					<div className="header-search">
						<span>PODAJ NUMER SPRAWY,NAZWĘ LUB NIP DŁUŻNIKA</span>
						<form onSubmit={onSubmit} className="header-form">
							<input
								minLength="3"
								name="search"
								onChange={e => updateInputValue(e)}
								value={value}
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
					<div className="show-for-desktop ">
						<div className="total">
							<h2 className="total__header"> Całkowita Ilość spraw: </h2>
							<p className="total__count"> {total}</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
