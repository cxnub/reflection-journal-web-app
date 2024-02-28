export default class UserAccount {
    id: number;
    email: string;
    hashed_password: string;
    salt: string;
    constructor(id, email, hashed_password, salt) {
      this.id = id;
      this.email = email;
      this.hashed_password = hashed_password;
      this.salt = salt;
    }
  }
  