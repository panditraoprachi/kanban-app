import { Component } from '@angular/core';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.scss'
})
export class KanbanBoardComponent {
tickets:any[]=[
  {
    ticketId:'Jira-001',
    ticketName:'Create Employee',
    status:'To Do'
},
 {
    ticketId:'Jira-002',
    ticketName:'Department Portal',
    status:'Done'
},
 {
    ticketId:'Jira-003',
    ticketName:'Employee Login',
    status:'In Progress'
},
 {
    ticketId:'Jira-004',
    ticketName:'Employee Password',
    status:'To Do'
},
 {
    ticketId:'Jira-005',
    ticketName:'Employee Details',
    status:'Done'
},
 {
    ticketId:'Jira-006',
    ticketName:'Employee PQNR',
    status:'In Progress'
},
 {
    ticketId:'Jira-007',
    ticketName:'Employee xyz',
    status:'Done'
},
 {
    ticketId:'Jira-008',
    ticketName:'Employee Abc',
    status:'In Progress'
},
]
getFilterData(status:string){
  return this.tickets.filter(m=>m.status==status);
}
currentItem:any;
onDragStart(item:any){
this.currentItem=item;
console.log("on drag");
}
onDrop(event:any,status:string){
  event.preventDefault();
  const record=this.tickets.find(m=>m.ticketId == this.currentItem.ticketId);
  if(record!=undefined){
    record.status=status;
  }
  this.currentItem=null;
console.log("onDrop");
}
onDragOver(event:any){
console.log("onDragOver");
event.preventDefault();
}
}
