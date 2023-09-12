const remoeHandler = (e) => {
    if (e.target.classList.contains('fa-xmark'))
    {
		e.target.parentElement.parentElement.remove();
	}
}
export default remoeHandler;