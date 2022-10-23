{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }
    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT = 7; // class level
        private coffeeBeans: number = 0;
        public constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        } // class를 이용하여 object를 만들 때 항상 실행되는 함수
        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than zero');
            }
            this.coffeeBeans += beans;
        }
        clean() {
            console.log('cleaning the machine...');
        }
        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }
        private preheat(): void {
            console.log('heating up....');
        }
        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots....`);
            return {
                shots,
                hasMilk: false,
            };
        }
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }
    class CaffeLattemachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans);
        }
        //overwriting
        private steamMilk(): void {
            console.log('Steaming some milk... ');
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true,
            };
        }
    }
    class SweetCoffeemaker extends CoffeeMachine {
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return {
                ...coffee,
                hasSugar: true,
            };
        }
    }
    const machines: CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CaffeLattemachine(16, 'saa123123123qasdasdads'),
        new SweetCoffeemaker(16),
        new CoffeeMachine(16),
        new CaffeLattemachine(16, 'saa123123123qasdasdads'),
        new SweetCoffeemaker(16),
    ];
    machines.forEach((machine) => {
        console.log('--------------');
        machine.makeCoffee(1);
    });
}
