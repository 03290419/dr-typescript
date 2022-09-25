{
    // JavaScript 💩
    function jsAdd(num1, num2) {
        return num1 + num2;
    }
    // TypeScript
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }
    // JavaScript
    function jsFetchNum(id) {
        // code...
        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }
    // TypeScript
    function fetchNum(id: string): Promise<number> {
        // code...
        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    } //return 값은 promise 인데 promise이면서도 숫자를 리턴하는 promise

    // JavaScript => TypeScript
    // Optional Parameter
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('steve', 'jobs');
    printName('keng');
    printName('keng', undefined);

    // Default Parameter
    function printMessage(message: string = 'hi') {
        console.log(message);
    }
    printMessage();

    // Rest Parameter
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((prev, current) => prev + current);
    }
}
