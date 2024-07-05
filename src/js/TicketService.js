/**
 *  Класс для связи с сервером.
 *  Содержит методы для отправки запросов на сервер и получения ответов
 * */
export default class TicketService {
  static URL = "http://localhost:7070/";
  
  constructor() {}
  list(callback) {
    return callback({
      url: TicketService.URL,
      method: "?method=allTickets"
    });
  }

  get(id, callback) {
    return callback({
      url: TicketService.URL,
      method: `?method=ticketById&id=${id}`
    });
  }

  create(data, callback) {
    return callback({
      url: TicketService.URL,
      method: `?method=createTicket`,
      body: data,
    });
  }

  update(id, data, callback) {
    return callback({
      url: TicketService.URL,
      method: `?method=updateById&id=${id}`,
      body: data,
    });
  }

  delete(id, callback) {
    return callback({
      url: TicketService.URL,
      method: `?method=deleteById&id=${id}`,
    });
  }

}
