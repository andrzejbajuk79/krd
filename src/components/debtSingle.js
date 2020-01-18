import React, { Fragment } from 'react';
export const DebtSingle = ({
	Id,
	Number,
	Name,
	Value,
	sex,
	NIP,
	DocumentType,
	Price,
	Address,
	openUser,
	toggleOpen,
	isOpened,
	...props
}) => (
	// <Fragment {...props}>
	// 	<tr>
	// 		<th scope="row">{Id}</th>
	// 		<td>{Name} </td>
	// 		<td>{Price}</td>
	// 		<td>{Number}</td>
	// 		<td
	// 		onClick={openUser}
	// 		className='button'>{isOpened && open ? 'Ukryj' : 'Pokaz'}</td>
	// 	</tr>
	// 	{isOpened && open && (

	// 			<p>
	// 				adress: {Address} {Price}
	// 				<hr></hr>
	// 			</p>

	// 	)}

	// </Fragment>

	<div className="list">
		<div className="list-items" {...props}>
			<div className="list-items_row">
				<span className="list-item">{Name}</span>
				<span className="list-item">{NIP}</span>
				<span className="list-item">{Value}</span>
			</div>

			{isOpened && toggleOpen && (
				<div className="list-items_row">
					<span className="list-item">{Address}</span>
					<span className="list-item">{DocumentType}</span>
					<span className="list-item">
						{Price}        <span className="list-item__number"> {Number}</span>
					</span>
					
				</div>
			)}
		</div>

		<span className="button button--list" onClick={openUser}>
			{isOpened && toggleOpen ? 'Mniej' : 'Wiecej'}
		</span>
	</div>
);
