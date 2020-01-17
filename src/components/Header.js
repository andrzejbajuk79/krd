import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
	<div className="header">
		<div className='header-search'>	<h2 className="header__title">szukaj</h2>
			<input onChange={e=>props.setFilter(e)} className="header-input" type="text" />
		</div>
		<button onClick={props.fetchFiltered}>szukaj</button>

		<h2 className='total'> Total : { props.total} </h2>
	
	</div>
);

export default Header;
