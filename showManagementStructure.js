const users = [
	{ id: 1, name: 'moe' },
	{ id: 2, name: 'larry', managerId: 1},
	{ id: 3, name: 'curly', managerId: 2 },
	{ id: 4, name: 'shep', managerId: 1 },
	{ id: 5, name: 'groucho', managerId: 4}
];


function showManagementStructure(users){
    // users 
    /*
    moe
     - larry
	   - curly
     - shep
	   - groucho
    */
    // tmp = []
    // tmp = [moe];
    // [moe] and larray -> [moe, - larray]
    // [moe, - larray] and curly, ->  [moe, - larray,  -curly]
    // [moe, - larray,  -curly] and shelp -> [moe, - larray,  -curly, -shep]
    // [moe, - larray,  -curly, -shep] and groucho -> [moe, - larray,  -curly, -shep,  groucho]
    let newArr = [];
    //let newPrintNameArr = [];
    while(users.length){
        const user = users.shift()
        if(user.managerId === undefined){
            user.prepend = '';
        }else{
            newArr.forEach((userObj)=>{
                if(userObj.id === user.managerId){          // moe -> ' - larry' 
                    user.prepend = userObj.prepend ? '  ' + userObj.prepend : ' - ';  // ' larry' -> 
                }
            })
        }
        newArr.push(user);
        //newPrintNameArr.push(user.prepend + user.name);
    }
    return newArr.map((ele)=>{
        return ele.prepend + ele.name;
    }).join('\n');
    //return newPrintNameArr.join('\n');
}

console.log(showManagementStructure(users));