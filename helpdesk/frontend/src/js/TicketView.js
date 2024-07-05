/**
 *  Класс для отображения тикетов на странице.
 *  Он содержит методы для генерации разметки тикета.
 * */



export default class TicketView {
  constructor(ticket) {
    this.ticket = ticket;

  }
  createHTML() {
    return `
    <div class="ticket_cont"  data-id="${this.ticket.id}">
      <input type="checkbox"  />
      <div class="ticket_name">${this.ticket.name}</div>
      <div class="ticket_created">${new Date().toLocaleString(this.ticket.created)}</div>
      <button class="ticket_pen">edit</button>
      <button class="ticket_delete">delete</button>
    </div>
    `;
  }

  createHTMLDescription() {
    return `
    <div class="description">
      ${this.ticket.description}
    </div>
    `;
  }
 
}
