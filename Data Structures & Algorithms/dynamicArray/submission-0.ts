class DynamicArray {
    private atualCapacity: number;
    private size: number;
    private arr: number[];

    constructor(capacity: number) {
        this.atualCapacity = capacity;
        this.size = 0;
        this.arr = new Array(capacity);
    }

    get(i: number): number {
        return this.arr[i];
    }

    set(i: number, n: number): void {
        this.arr[i] = n;
    }

    pushback(n: number): void {
        if (this.size === this.atualCapacity) {
            this.resize(); 
        }
        this.arr[this.size] = n;
        this.size++;
    }

    popback(): number {
        this.size--;
        return this.arr[this.size];
    }

    resize(): void {
        this.atualCapacity = this.atualCapacity * 2;
        const newArr = new Array(this.atualCapacity);
        for (let i = 0; i < this.size; i++) {
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
    }

    getSize(): number {
        return this.size;
    }

    getCapacity(): number {
        return this.atualCapacity;
    }
}


// testes

const meuArray = new DynamicArray(2);
meuArray.pushback(10)
meuArray.pushback(20)


console.log(meuArray.get(1))
console.log(meuArray.getCapacity())