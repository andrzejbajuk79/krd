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

	<div>
		<div className="debt" {...props}>
			<div>
				<span>{Name}</span> <span>{NIP}</span>
				<span>{Value}</span>
				
			</div>
			<hr/>
			{isOpened &&toggleOpen && (
				<Fragment>
					<div>
						<span>{Address}</span> <span>{DocumentType}</span>
						<span>{Price} -- {Number}</span>
						
					</div>
				</Fragment>
			)}
		</div>

		<button className="button" onClick={openUser}>
			{isOpened && toggleOpen ? 'Ukryj' : 'Pokaz'}
		</button>
	
	</div>
);
