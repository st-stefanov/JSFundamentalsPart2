function demo(){
    let assocArray = {
        'one': 1,
        'two':2,
        'three': 3
    }
    // console.log(assocArray)

    // let isFound = assocArray.hasOwnProperty('one')
    // console.log(isFound);

    let entries = Object.entries(assocArray);
    console.log(entries)
    let  sortedArray = entries.sort(comparator);
    
    // console.log(entries[0])

    sortedArray.forEach(element => {
        console.log(element)
    })

    function comparator(a, b){
        
        let keyA = a[0];
        let keyB = b[0];

        if(keyA < keyB){
            return -1;
        }
        else if(keyA > keyB){
            return 1;
        }
        else{
            return 0;
        }
    }
}
demo()