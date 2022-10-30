{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new Error("no network");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {
      //dependency injection composition
    }
    login() {
      this.client.tryConnect();
      //login...
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
        if (error instanceof OfflineError) {
          // 🚫 typescript에서 catch의 인자 error 은 any 타입으로 고정이 된다.
        }
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
