(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-mobnav]'),
    closeModalBtn: document.querySelector('[data-clos-mod]'),
    modal: document.querySelector('[data-modal-mobnav]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', onBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle('isopen');
  }

  function onBackdropClick(event) {
  
    if (event.target === refs.modal) {
      toggleModal();
    }
  }
})();
