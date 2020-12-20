export class User {
  id: number;
  username: string;
  password: string;
  role: string;
  order_counter: number;

  constructor() {
    this.id = null;
    this.username = null;
    this.password = null;
    this.role = null;
    this.order_count = null;
  }
}
