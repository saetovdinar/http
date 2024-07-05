import TicketService from "./TicketService";
import {createGetRequest, createPostRequest} from "./api/createRequest";
import TicketView from "./TicketView";
import TicketForm from "./TicketForm";
/**
 *  Основной класс приложения
 * */
export default class HelpDesk {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("This is not HTML element!");
    }

    this.container = container;
    this.ticketService = new TicketService();
    this.ticketForm = new TicketForm();
    
    
}
  init() {
    this.container.innerHTML = `<input  class="add_ticket" type="button" value="Добавить Тикет">`;
    this.renderTickets();
    this.addDecriptionListener();
    this.showModalFormListener();
    this.createTicketListener();
    this.showModalDeleteFormListener();
    this.showModalEditeFormListener();
    this.deleteTicketListener();
    this.editeTicketListener();
    this.closeModalDeleteFormListener();
    this.closeModalFormListener();
    this.closeModalEditFormListener();

  }
  addDecriptionListener() {
    
    this.container.addEventListener("click", (event) => {
    if(event.target.classList.contains('ticket_cont')) {
      if(event.target.classList.contains('ticket_cont_active')) {
        event.target.classList.remove('ticket_cont_active')
        this.container.querySelector('.description').remove()
       return;
      }
      this.ticketService.get(event.target.dataset.id, createGetRequest)
      .then((data) => {
        event.target.classList.add('ticket_cont_active')
        event.target.insertAdjacentHTML("afterend", new TicketView(data).createHTMLDescription()) 
      })
      
   
    }
  })
}
  showModalFormListener() {
    this.container.addEventListener("click", (event) => {
      if(event.target.classList.contains('add_ticket')) {  
        this.container.innerHTML += this.ticketForm.createHTML();

      }
    })
  }
  createTicketListener() {
    this.container.addEventListener("click", (event) => {
      event.preventDefault();
      if(event.target.classList.contains('modal_ok_btn')) {  
        const formName = this.container.querySelector('.modal_name').value;
        const formDescription = this.container.querySelector('.modal_description').value;
        const formObj = {name: formName, description: formDescription};
        this.ticketService.create(JSON.stringify(formObj), createPostRequest)
        .then((data) => {
          this.container.innerHTML += new TicketView(data).createHTML();
          this.container.querySelector('.modal_window').remove(); 
        })
      }
    })
  }
  showModalDeleteFormListener() {
    this.container.addEventListener("click", (event) => {
      if(event.target.classList.contains('ticket_delete')) {  
        this.container.innerHTML += this.ticketForm.createHTMLDeleteForm();
        
        this.ticketId = event.target.closest('.ticket_cont').dataset.id;
      }
    })
  }
  closeModalDeleteFormListener() {
    this.container.addEventListener("click", (event) => {
      if(event.target.classList.contains('modal_delete_cancel')) {  
        this.container.querySelector('.modal_delete_window').remove();
        
      
      }
    })
  }
  closeModalFormListener() {
    this.container.addEventListener("click", (event) => {
      if(event.target.classList.contains('modal_cancel')) {  
        this.container.querySelector('.modal_window').remove();
      }
    })
  }
  closeModalEditFormListener() {
    this.container.addEventListener("click", (event) => {
      if(event.target.classList.contains('edit_modal_cancel')) {  
        this.container.querySelector('.edit_modal_window').remove();
      }
    })
  }
  showModalEditeFormListener() {
    this.container.addEventListener("click", (event) => {
      if(event.target.classList.contains('ticket_pen')) {  
        this.container.innerHTML += this.ticketForm.createEditHTML();
        
        this.ticketId = event.target.closest('.ticket_cont').dataset.id;
      }
    })
  }
  deleteTicketListener() {
    
    this.container.addEventListener("click",  (event) => {
      if(event.target.classList.contains('modal_delete_ok_btn')) {  
       this.ticketService.delete(this.ticketId, createGetRequest)   
      .then(() => {
        this.container.innerHTML = `<input  class="add_ticket" type="button" value="Добавить Тикет">`
        this.renderTickets();
        this.container.querySelector('.modal_delete_window').remove();
      })
      }
    })
  }
  editeTicketListener() {
    this.container.addEventListener("click", (event) => {
      event.preventDefault();
      if(event.target.classList.contains('edit_modal_ok_btn')) {  
        const formName = this.container.querySelector('.edit_modal_name').value;
        const formDescription = this.container.querySelector('.edit_modal_description').value;
        const formObj = {name: formName, description: formDescription};
        this.ticketService.update(this.ticketId, JSON.stringify(formObj), createPostRequest)
        .then((data) => {
          this.container.innerHTML = `<input  class="add_ticket" type="button" value="Добавить Тикет">`
          data.forEach((ticket) => {
            this.container.innerHTML += new TicketView(ticket).createHTML();
          });
          this.container.querySelector('.edit_modal_window').remove(); 
        })
      }
    })
  }
  
  
  renderTickets() {
    this.ticketService.list(createGetRequest)
    .then((data) => {
      data.forEach((ticket) => {
        this.container.innerHTML += new TicketView(ticket).createHTML();
    });
  }
    )}
}

