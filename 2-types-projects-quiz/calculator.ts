{
    /**
     * Let's make a calculator 🧮
     */
    function calculate2(
        method: string,
        ...numbers: number[]
    ): number | undefined {
        let answer: number;
        switch (method) {
            case 'add':
                answer = numbers.reduce((prev, next) => prev + next);
                return answer;
                break;
            case 'substract':
                answer = numbers.reduce((prev, next) => prev - next);
                return answer;
            case 'multiply':
                answer = numbers.reduce((prev, next) => prev * next);
                return answer;
            case 'divide':
                answer = numbers.reduce((prev, next) => prev / next);
                return answer;
            case 'remainder':
                answer = numbers.reduce((prev, next) => prev % next);
                return answer;
            default:
                break;
        }
    }
    console.log(calculate2('add', 1, 3)); // 4
    console.log(calculate2('substract', 3, 1)); // 2
    console.log(calculate2('multiply', 4, 2)); // 8
    console.log(calculate2('divide', 4, 2)); // 2
    console.log(calculate2('remainder', 5, 2)); // 1
}
