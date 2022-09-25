{
    /**
     * Type Assertions 💩
     */
    function jsStrFunc(): any {
        return 2;
    }
    const result = jsStrFunc();
    console.log((result as string).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); //😱

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2); //!important와 동일
}
