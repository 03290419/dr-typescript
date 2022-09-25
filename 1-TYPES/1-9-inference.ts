/**
 * Type Inference
 */

let text = 'hello'; // 타입 추론 발생
text = 1;
function print(message: string) {
    console.log(message);
}
print('hello');
print(2);

function add(x: number, y: number) {
    return x + y;
}
const result = add(1, 2);
