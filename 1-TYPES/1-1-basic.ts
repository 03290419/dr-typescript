{
    /**
     * Javascript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array
     */
    // number
    const num: number = 1;
    // string
    const str: string = ' hi';
    // boolean
    const boal: boolean = false;
    // undefined 💩
    let name: undefined;
    let age: number | undefined;
    age = undefined;
    age = 5;
    function find(): number | undefined {
        return undefined;
    }
    // null
    let person: null; //💩
    let person2: string | null;
    // unknown 💩
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;
    //any 💩
    let anything: any = 0;
    anything = 'hello';
    //void
    function print(): void {
        console.log('hello');
    }
    let unusable: void = undefined; // 💩
    // never
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message);
        // or while(true){}
    } // never 타입은 절대 아무것도 리턴할 수 없다.
    // object
    let obj: object; //💩
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({ name: 'keng' });
    acceptSomeObject({ animal: 'bat' });
}
