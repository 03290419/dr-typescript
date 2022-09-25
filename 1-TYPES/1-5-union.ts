{
    /**
     * Union Types: OR
     */
    type Direction = 'left' | 'right ' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    move('down');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    // function: login ->success, fail
    type SuccessState = {
        response: {
            body: string;
        };
    };
    type FailState = {
        reason: string;
    };
    type LoginState = SuccessState | FailState;
    // function login(id:string, password: string): Promise<LoginState> {
    //     return {
    //         response: {
    //             body: 'logged in',
    //         },
    //     };
    // }
    function login() {
        return {
            response: {
                body: 'logged in',
            },
        };
    }

    // printLoginState(state)
    //  success => body
    //  fail => reason

    function printLoginState(state: LoginState) {
        if ('response' in state) {
            //state 내에서 response 라는 key값을 갖고 있는 값
            console.log(`${state.response.body}`);
        } else {
            console.log(`${state.reason}`);
        }
    }
}
