// TODO: write your code here
const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

function orderByProps(obj, propsArr){
    const copy = {...obj};
    const result = [];
    let i = 0;
    for(let prop of propsArr){
        result[i] = {};
        result[i].key = prop;
        result[i].value =  copy[prop];
        delete copy[prop];
        i++;
    }
    for(let key of Object.keys(copy).sort()){
        result[i] = {};
        result[i].key = key;
        result[i].value =  copy[key];
        i++;
    }
    // console.log(result, obj);
    return result;
}

console.log(orderByProps(obj, ["name", "level"]));