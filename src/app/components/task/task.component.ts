import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Task} from "../../utils/models/Task";

export type MyEvent = {id: number, event: EventName  };
type EventName = 'delete' | 'done';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent  {
  @Input() tache!: Task;

  @Output() event_emitter = new EventEmitter<MyEvent>();

  sendEvent(name: EventName) {
    this.event_emitter.emit({id: this.tache.id, event: name})
  }

  /*
  @Output() done_emitter = new EventEmitter<number>();
  @Output() delete_emitter = new EventEmitter<number>();
  sendDone() {
    this.done_emitter.emit(this.tache.id);
  }

  sendDelete() {
    this.delete_emitter.emit(this.tache.id);
  }
*/
}
