// there is an array/list of strings. find similar buddies with equal length and the characters are at an equal distance from each other
// eg aaa and zzz
//eg abc and def
//not eg aaa and abc
//[aa, bb, zzz], [abc, def]
//abb, cdd

const findBuddies = (arr) => {
    const bigReturnArray = []
    for(let i=0, k=0; i<arr.length; i++){
        const mainString = arr[i]
        smolArrMainString = [mainString]
        for(let j=i; j<arr.length; j++){
            if(mainString.length == arr[j].length){
                if(checkIfEqualDist(mainString, arr[j]))
                    smolArrMainString.append(arr[j])
            }

        }
        if(smolArrMainString.length>1){
            bigReturnArray[k] = smolArrMainString
            k++
        }
    }
    return bigReturnArray
}

const checkIfEqualDist = (arrA, arrB) => {
    //string is already an array
    // arrA = [...a]
    // arrB = [...b]
    let flag = false
    const diff = (arrA[0]-arrB[0])
    for(let i=1; i<arrA.length; i++){
        // store in var (arrA[i]-arrB[i])
        if((arrA[i]-arrB[i]) != diff)
            return false;
    }
    //why this line >_<
    return true;
}

// 1 2 3 4 5 6
[1,3], [2,4,6]

// abc cef

/