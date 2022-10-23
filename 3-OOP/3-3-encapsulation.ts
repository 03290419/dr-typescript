{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    class CoffeeMaker {
        // BEANS_GRAM_PER_SHOT = 7; // 상수이자 멤버 변수 오브젝트를 만들 때마다 중복생성이 되므로 메모리 leak 이슈가 생긴다. -> instance level
        private static BEANS_GRAM_PER_SHOT = 7; // class level
        private coffeeBeans: number = 0;
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        } // class를 이용하여 object를 만들 때 항상 실행되는 함수
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than zero');
            }
            this.coffeeBeans += beans;
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

    // const maker = new CoffeeMaker(32);
    CoffeeMaker.makeMachine(32);

    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }

        set age(num: number) {
            this.internalAge = num;
        }
        constructor(private firstName: string, private lastName: string) {}
    }
    const user = new User('HyunJin', 'Lee');
    console.log(user.fullName);
    user.firstName = 'keng';
    console.log(user.fullName);
}
