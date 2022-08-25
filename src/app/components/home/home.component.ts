import { Component } from '@angular/core';
import {Task} from "../../utils/models/Task";
import {MyEvent} from "../task/task.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  tasks : Task[] = [
    {
      id: 1,
      title: `Corriger l'exercice`,
      description: 'lorem Lemon drops oat cake pudding dragée carrot cake bonbon. Candy toffee jujubes gummies apple pie brownie halvah chocolate bar.',
      category: 'work',
      is_done: true,
    },
    {
      id: 2,
      title: `Boire du café`,
      description: 'lorem Lemon drops oat cake pudding dragée carrot cake bonbon. Candy toffee jujubes gummies apple pie brownie halvah chocolate bar.',
      category: 'hobbies',
      is_done: false,
    },
    {
      id: 3,
      title: `Prendre la pause`,
      description: 'lorem Lemon drops oat cake pudding dragée carrot cake bonbon. Candy toffee jujubes gummies apple pie brownie halvah chocolate bar.',
      category: 'work',
      is_done: false,
    },
  ];


  updateTask(id: number) {
    const task = this.tasks.find(tache => tache.id === id);
    if(task) {
      task.is_done = !task.is_done;
    }
  }

  deleteTask(id: number) {
    const index = this.tasks.findIndex(tache => tache.id === id);
    if(index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  handleEvent({id, event}: MyEvent) {
    switch (event) {
      case "delete":
        this.deleteTask(id);
        break;
      case "done":
        this.updateTask(id);
        break;
    }
  }

  addTask(task: Task) {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
  }

}
