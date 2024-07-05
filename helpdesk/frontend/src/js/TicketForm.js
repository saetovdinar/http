/**
 *  Класс для создания формы создания нового тикета
 * */
export default class TicketForm {
  constructor() {
   
  }

  createHTML() {
    return `
    <form class="modal_window" >
      <div class="short_description">Краткое описание</div>
      <input class="modal_name" type="text"></input>
      <div class="full_description">Подробное описание</div>
      <input class="modal_description" type="text"></input>
      <input type="submit"  value="ok" class="modal_ok_btn"></input>
      <input type="button" value="cancel" class="modal_cancel"></input>
    </form>
    `;
  }
  createEditHTML() {
    return `
    <form class="edit_modal_window" >
      <div class="edit_short_description">Краткое описание</div>
      <input class="edit_modal_name" type="text"></input>
      <div class="edit_full_description">Подробное описание</div>
      <input class="edit_modal_description" type="text"></input>
      <input type="submit"  value="ok" class="edit_modal_ok_btn"></input>
      <input type="button" value="cancel" class="edit_modal_cancel"></input>
    </form>
    `;
  }
  createHTMLDeleteForm() {
    return `
    <div class="modal_delete_window" >
      <div class="modal_delete_description">Вы действительлно хотите удалить тикет?</div>
      <input type="submit"  value="ok" class="modal_delete_ok_btn"></input>
      <input type="button" value="cancel" class="modal_delete_cancel"></input>
    </div>
    `;
  }
}
