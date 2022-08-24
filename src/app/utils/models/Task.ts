export interface Task {
  id: number;
  title: string;
  description: string;
  is_done: boolean;
  category: Category;
}

export type Category = 'work' | 'hobbies' | 'home';
