function mergeSort(arr1,arr2) {
    let i = 0;
    let j = 0;
    let k = 0;

    let len1 = arr1.length;
    let len2 = arr2.length;

    let result = []
    result.length = len1 + len2

    while(i < len1 && j < len2) {
        if(arr1[i] >= arr2[j]) {
            result[k++] = arr2[j];
            j++
        }
        else {
            result[k++] = arr1[i];
            i++
        }
    }
    while(i < len1) result[k++] = arr1[i++];
    while(j < len2) result[k++] = arr2[j++];
    
    return result
}

let res = mergeSort([67,89,100,199],[22,31,43,89]);
console.log(res);