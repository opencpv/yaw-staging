const countItemInArray=(arr:string[], item:string)=> {
    return arr.reduce((count, currentValue) => {
        return count + (currentValue === item ? 1 : 0);
    }, 0);
}

export default  countItemInArray