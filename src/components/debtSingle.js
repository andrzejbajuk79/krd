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
	<div className="list" onClick={openUser}>
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
						<span className="list-item__price">{Price} {Number} </span>
					</span>
				</div>
			)}
		</div>

		<span className="button button--list">
			{isOpened && toggleOpen ? 'Mniej' : 'Wiecej'}
		</span>
	</div>
);
