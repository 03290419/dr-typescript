{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    class CoffeeMaker {
        // BEANS_GRAM_PER_SHOT = 7; // 상수이자 멤버 변수 오브젝트를 만들 때마다 중복생성이 되므로 메모리 leak 이슈가 생긴다. -> instance level
        static BEANS_GRAM_PER_SHOT = 7; // class level
        coffeeBeans: number = 0;
        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        } // class를 이용하여 object를 만들 때 항상 실행되는 함수
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }
        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            };
        }
    }

    const maker = new CoffeeMaker(32);
    CoffeeMaker.makeMachine(3); // 위와 동일 Class level의 호출
    console.log(maker);
}
