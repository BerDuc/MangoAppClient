export function set_bulma_modal(id_modal, openers_elements_ids, closers_elements_ids){
	let modal = document.getElementById(id_modal);
	openers_elements_ids.forEach(element =>
		document.getElementById(element).addEventListener('click', () => {
			modal.classList.add("is-active");
		})
	);
	
	closers_elements_ids.forEach(element =>
		document.getElementById(element).addEventListener('click', () => {
			modal.classList.remove("is-active");		
		})
	);
}

