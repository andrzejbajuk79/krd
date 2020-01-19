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
			<div className=" show-for-desktop">
				<div id="first_row" className=" list-items_row">
					<span id='name'  className="list-item">{Name}</span>
					<span  id='nip' className="list-item">{NIP}</span>
					<span id='value' className="list-item">{Value}</span>
				</div>
			</div>
			<div className=" show-for-mobile">
				<div className="list-items_row">
					<span className="list-item">
						<b>Nazwisko </b>: {Name}
					</span>
					<span className="list-item">
						<b>NIP</b>: {NIP}
					</span>
					<span className="list-item">
						<b>Kwota</b>: {Value}
					</span>
				</div>
			</div>
			{isOpened && toggleOpen && (
				<Fragment>
					<div className=" show-for-desktop">
						<div className="list-items_row">
							<span id='address' className="list-item">{Address}</span>
							<span  id='docType' className="list-item">{DocumentType}</span>
							<span id='price' className="list-item">{Price} </span>	
							<span id='number' className="list-item">{Number}</span>				
						</div>
					</div>
					<div className=" show-for-mobile">
						<div className="list-items_row">
							<span className="list-item"><b>Adres</b>: {Address}</span>
							<span  className="list-item"><b>Rodzaj/Typ dokumentu</b>: {DocumentType}</span>
							<span  className="list-item"><b>Kwota zadłużenia</b>: {Price}</span>
							<span  className="list-item"><b>Number</b>: {Number}</span>
						</div>
					</div>
				</Fragment>
			)}
		</div>

		<span className="button button--list">
			{isOpened && toggleOpen ? 'Mniej' : 'Wiecej'}
		</span>
	</div>
);
