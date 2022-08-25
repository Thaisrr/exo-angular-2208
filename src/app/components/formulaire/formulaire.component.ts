import { Component, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Task } from 'src/app/utils/models/Task';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent  {

  todo_group: FormGroup;
  categories = [
    {name: 'Travail', value: 'work'},
    {name: 'Loisirs', value: 'hobbies'},
    {name: 'Perso', value: 'home'}
  ];

  @Output() new_todo = new EventEmitter<Task>();

  constructor() {
    this.todo_group = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      description: new FormControl(),
      is_done: new FormControl(false),
      category: new FormControl('', [Validators.required])
    })
  }

  get title() {
    return this.todo_group.controls['title'];
  }

  get category() {
    return this.todo_group.controls['category'];
  }

  saveTodo() {

    if(this.todo_group.valid) {
      const todo: Task = {...this.todo_group.value, id: -1};
      this.new_todo.emit(todo);
      this.todo_group.reset();
    }

  }


}
