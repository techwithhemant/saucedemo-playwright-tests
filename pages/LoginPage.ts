export class LoginPage {
  constructor(private page) {}

  async login(username = 'standard_user', password = 'secret_sauce') {
    await this.page.goto('/');
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }
}
