export class User {
  id: number;
  email: string;
  password: string;
  roles: string;

  constructor(id: number, name: string, password: string, roles: string) {
    this.id = id;
    this.email = name;
    this.password = password;
    this.roles = roles;
  }
}
