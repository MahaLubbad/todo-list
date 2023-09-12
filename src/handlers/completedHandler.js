const completedHandler = (e) => {
    if (e.target.classList.contains('fa-check')) {
		e.target.parentElement.parentElement.classList.toggle('completed');
	}
}

export default completedHandler;