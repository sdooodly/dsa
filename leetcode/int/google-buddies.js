// there is an array/list of strings. find similar buddies with equal length and the characters are at an equal distance from each other
// eg aaa and zzz
//eg abc and def
//not eg aaa and abc

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

const checkIfEqualDist = (a, b) => {
    arrA = [...a]
    arrB = [...b]
    let flag = false
    for(let i=0; i<arrA.length; i++){
        if((arrA[i]-arrB[i])==(arrA[i+1]-arrB[i+1]))
            flag = true
        else
            flag = false
    }
    //why this line >_<
    return (flag==true)?true:false
}