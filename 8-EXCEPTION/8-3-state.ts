{
  type NetWorkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };
  type SuccessState = {
    result: "success";
  };
  //typescript 에서 error 를 다룰 때 throw Error 을 남발하는 것 보다,  예상할 수 있는 상태를 type을 정의해 사용하는 것이 좋다.
  type ResultState = SuccessState | NetWorkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {}
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
