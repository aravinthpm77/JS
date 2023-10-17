
// console.log("Hello!!!")
// const id= setInterval(()=>{
//     console.log(Math.random());

// },500)
// clearInterval(id)


const movies =[
    {
        title: 'MA',
        score:9.3,
        year:1981
    },{
        title: 'MB',
        score:9.3,
        year:1951
    },{
        title: 'MC',
        score:9.1,
        year:1921
    },{
        title: 'EA',
        score:6.3,
        year:2021
    }
]


console.log(movies.some(movie=> movie.year<=2015))