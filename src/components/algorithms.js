
export function bubbleSort(arr) {
    let state = [];

    state.push({
        numbers: arr.slice(),
        active: [0, 0]
    });

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            state.push({
                numbers: arr.slice(),
                active: [i, j]
            });

            if (arr[i] > arr[j]) {
                let temp = arr[i];

                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }


    for (let i=0; i < arr.length; i++) {
        state.push({
            numbers: arr.slice(),
            active: [...Array(i).keys()]
        });
    }

    state.push({
        numbers: arr.slice(),
        active: [-1, -1]
    });

    return state;
}


export function insertionSort(arr) {
    let state = [];

    state.push({
        numbers: arr.slice(),
        active: [0, 0]
    });

    for (let i = 1; i < arr.length; i++) {
        let k = arr[i];

        let j = i - 1;

        while (j >= 0 && arr[j] > k) {
            state.push({
                numbers: arr.slice(),
                active: [j, k]
            });

            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = k;
    }


    for (let i=0; i < arr.length; i++) {
        state.push({
            numbers: arr.slice(),
            active: [...Array(i).keys(), i]
        });
    }
    state.push({
        numbers: arr.slice(),
        active: [...Array(arr.length).keys()]
    });

    state.push({
        numbers: arr.slice(),
        active: []
    });

    state.push({
        numbers: arr.slice(),
        active: [...Array(arr.length).keys()]
    });

    state.push({
        numbers: arr.slice(),
        active: []
    });

    return state;
}

export function quickSort(arr, less = (a, b) => a <b) {
    let state = [];


    function swap(i, j) {
        var t = arr[i];

        arr[i] = arr[j];
        arr[j] = t;

        state.push({
            numbers: arr.slice(),
            active: [i, j]
        });
    }

    function quicksort(left, right) {
        if (left < right) {
            var pivot = arr[left + Math.floor((right - left) / 2)],
                leftNew = left,
                rightNew = right;

            do {
                while (less(arr[leftNew], pivot)) {
                    leftNew += 1;
                }
                while (less(pivot, arr[rightNew])) {
                    rightNew -= 1;
                }
                if (leftNew <= rightNew) {
                    swap(leftNew, rightNew);
                    leftNew += 1;
                    rightNew -= 1;
                }
            } while (leftNew <= rightNew);

            quicksort(left, rightNew);
            quicksort(leftNew, right);
        }
    }

    quicksort(0, arr.length - 1);


    for (let i=0; i < arr.length; i++) {
        state.push({
            numbers: arr.slice(),
            active: [...Array(i).keys(), i]
        });
    }
    state.push({
        numbers: arr.slice(),
        active: []
    });

    return state;
}


export function shellSort(arr) {
    let state = [];

    let increment = arr.length / 2;

    while (increment > 0) {
        for (let i = increment; i < arr.length; i++) {
            let j = i;

            let temp = arr[i];

            while (j >= increment && arr[j-increment] > temp) {
                state.push({
                    numbers: arr.slice(),
                    active: [j, j-increment]
                });


                arr[j] = arr[j-increment];
                j = j - increment;
            }

            arr[j] = temp;
        }

        if (increment === 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }

    for (let i=0; i < arr.length; i++) {
        state.push({
            numbers: arr.slice(),
            active: [...Array(i).keys(), i]
        });
    }
    state.push({
        numbers: arr.slice(),
        active: []
    });

    return state;
}
