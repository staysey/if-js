const colors = {
    arr: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    [Symbol.iterator]() {
        return this;
    },
    next(c) {
        let j = c[id];
        this.color = this.arr[j];
        j++;
        if (j === this.arr.length) j = 0;
        c[id] = j;
        return {
            done: false,
            value: this.color
        };

    }
}


const changeStyle = (counter) => e => {
    e.target.style.color = colors.next(counter).value;
};

let id = Symbol();
let firstCounter = {
    [id]: 0
}
let secondCounter = {
    [id]: 0
}
let thirdCounter = {
    [id]: 0
}

const firstText = document.getElementById('text1');
const secText = document.getElementById('text2');
const thirdText = document.getElementById('text3');

firstText.addEventListener('click', changeStyle(firstCounter));
secText.addEventListener('click', changeStyle(secondCounter));
thirdText.addEventListener('click', changeStyle(thirdCounter));
