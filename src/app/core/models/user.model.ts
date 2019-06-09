export class User {
  name: string;
  email: string;
  password: string;
  token: string;

  static fromJson(data: any) {
    const user = new User();
    user.name = data.name;
    user.email = data.email;
    user.password = data.password;
    user.token = data.token;
    return user;
  }
}
