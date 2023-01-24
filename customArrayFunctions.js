function myforEach(arr, func)
{
    let i = 0;
    for(let element of arr)
    {
        func(arr[i],i,arr);
        i+=1;
    }
}
function myMap(arr, func)
{
    let i = 0;
    let map = [];
    for(let element of arr)
    {
        map.push(func(arr[i],i,arr));
        i+=1;
    }
    return map;
}
function myFilter(arr, func)
{
    let i = 0;
    let filteredArray = [];
    for(let element of arr)
    {
        if(func(arr[i],i,arr))
        {
            filteredArray.push(arr[i]);
        }
        i+=1;
    }
    return filteredArray;
}