export function useProductList(key1, key2)   {
    let arr = [];
    for(let i = 0; i < key1.length; i++){
    let finding = key2.find(item => {
        let { code } = item;
        return code === key1[i];
    })
    arr.push(finding);
}

return arr;
}