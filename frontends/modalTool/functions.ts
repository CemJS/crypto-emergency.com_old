export const removeTool = function () {
  this.Ref.modalWindow.classList.remove('activeModal');
  this.Static.body.classList.remove('activeModal');
  this.Static.body.style.overflow = '';
  return
}

