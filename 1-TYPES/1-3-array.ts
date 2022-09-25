{
    // Array
    const fruits: string[] = ['a', 'b'];
    const numbers: number[] = [1, 2];
    const scores: Array<number> = [1, 3, 4]; //Array라는 object 타입에 숫자를 가지고있는 배열 (generics)
    function printArray(fruits: string[]) {}
    function printArray2(fruits: readonly Array<string>) {} //이런식의 작성은 불가능
    function printArray3(fruits: readonly string[]) {
        fruits.push;
    } //주어진 데이터를 변경하거나 업데이트 할 수 없을 수 있음

    //Tuple - 사용하는 걸 권장하지 않음 사용해야 한다면 interface, type alias, class 등으로 교체 요망
    // 예시 => useState()
    // 배열이지만 서로 다른 타입을 함께 가질 수 있는 배열
    let student: [string, number];
    student = ['name', 123];
    student[0];
    student[1];
    const [name, age] = student;
}
