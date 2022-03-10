function doneOrNot( board ) {
    //Insert your code here
    let row1 = board[0].reduce((act, cont)=>{return act + cont;},0);
    let row2 = board[1].reduce((act, cont)=>{return act + cont;},0);
    let row3 = board[2].reduce((act, cont)=>{return act + cont;},0);
    let row4 = board[3].reduce((act, cont)=>{return act + cont;},0);
    let row5 = board[4].reduce((act, cont)=>{return act + cont;},0);
    let row6 = board[5].reduce((act, cont)=>{return act + cont;},0);
    let row7 = board[6].reduce((act, cont)=>{return act + cont;},0);
    let row8 = board[7].reduce((act, cont)=>{return act + cont;},0);
    let row9 = board[8].reduce((act, cont)=>{return act + cont;},0);

    let colum1 = Number(board[0].slice(0,1)) + Number(board[1].slice(0,1)) + Number(board[2].slice(0,1)) + Number(board[3].slice(0,1)) + Number(board[4].slice(0,1)) + Number(board[5].slice(0,1)) + Number(board[6].slice(0,1)) + Number(board[7].slice(0,1)) + Number(board[8].slice(0,1));
    let colum2 = Number(board[0].slice(1,2)) + Number(board[1].slice(1,2)) + Number(board[2].slice(1,2)) + Number(board[3].slice(1,2)) + Number(board[4].slice(1,2)) + Number(board[5].slice(1,2)) + Number(board[6].slice(1,2)) + Number(board[7].slice(1,2)) + Number(board[8].slice(1,2));
    let colum3 = Number(board[0].slice(2,3)) + Number(board[1].slice(2,3)) + Number(board[2].slice(2,3)) + Number(board[3].slice(2,3)) + Number(board[4].slice(2,3)) + Number(board[5].slice(2,3)) + Number(board[6].slice(2,3)) + Number(board[7].slice(2,3)) + Number(board[8].slice(2,3));
    let colum4 = Number(board[0].slice(3,4)) + Number(board[1].slice(3,4)) + Number(board[2].slice(3,4)) + Number(board[3].slice(3,4)) + Number(board[4].slice(3,4)) + Number(board[5].slice(3,4)) + Number(board[6].slice(3,4)) + Number(board[7].slice(3,4)) + Number(board[8].slice(3,4));
    let colum5 = Number(board[0].slice(4,5)) + Number(board[1].slice(4,5)) + Number(board[2].slice(4,5)) + Number(board[3].slice(4,5)) + Number(board[4].slice(4,5)) + Number(board[5].slice(4,5)) + Number(board[6].slice(4,5)) + Number(board[7].slice(4,5)) + Number(board[8].slice(4,5));
    let colum6 = Number(board[0].slice(5,6)) + Number(board[1].slice(5,6)) + Number(board[2].slice(5,6)) + Number(board[3].slice(5,6)) + Number(board[4].slice(5,6)) + Number(board[5].slice(5,6)) + Number(board[6].slice(5,6)) + Number(board[7].slice(5,6)) + Number(board[8].slice(5,6));
    let colum7 = Number(board[0].slice(6,7)) + Number(board[1].slice(6,7)) + Number(board[2].slice(6,7)) + Number(board[3].slice(6,7)) + Number(board[4].slice(6,7)) + Number(board[5].slice(6,7)) + Number(board[6].slice(6,7)) + Number(board[7].slice(6,7)) + Number(board[8].slice(6,7));
    let colum8 = Number(board[0].slice(7,8)) + Number(board[1].slice(7,8)) + Number(board[2].slice(7,8)) + Number(board[3].slice(7,8)) + Number(board[4].slice(7,8)) + Number(board[5].slice(7,8)) + Number(board[6].slice(7,8)) + Number(board[7].slice(7,8)) + Number(board[8].slice(7,8));
    let colum9 = Number(board[0].slice(-1)) + Number(board[1].slice(-1)) + Number(board[2].slice(-1)) + Number(board[3].slice(-1)) + Number(board[4].slice(-1)) + Number(board[5].slice(-1)) + Number(board[6].slice(-1)) + Number(board[7].slice(-1)) + Number(board[8].slice(-1));
    
    const verify = [row1, row2, row3, row4, row5, row6, row7, row8, row9, colum1 , colum2, colum3, colum4, colum5, colum6, colum7, colum8, colum9].some(e => e != 45);

    // console.log("Filas: " + row1 + " " + row2 + " " + row3 + " " + row4 + " " + row5 + " " + row6 + " " + row7 + " " + row8 + " " + row9 + " Columnas: " + colum1  + " " + colum2 + " " + colum3 + " " + colum4 + " " + colum5 + " " + colum6 + " " + colum7 + " " + colum8 + " " + colum9);

    return verify == true ? "Try Again" : "Finished!";

}


// -- Testing -- //

// doneOrNot([[1, 3, 2, 5, 7, 9, 4, 6, 8],
//     [4, 9, 8, 2, 6, 1, 3, 7, 5],
//     [7, 5, 6, 3, 8, 4, 2, 1, 9],
//     [6, 4, 3, 1, 5, 8, 7, 9, 2],
//     [5, 2, 1, 7, 9, 3, 8, 4, 6],
//     [9, 8, 7, 4, 2, 6, 5, 3, 1],
//     [2, 1, 4, 9, 3, 5, 6, 8, 7],
//     [3, 6, 5, 8, 1, 7, 9, 2, 4],
//     [8, 7, 9, 6, 4, 2, 1, 3, 5]])
// ---> 'Try Again'


// doneOrNot([[1, 3, 2, 5, 7, 9, 4, 6, 8],
//     [4, 9, 8, 2, 6, 1, 3, 7, 5],
//     [7, 5, 6, 3, 8, 4, 2, 1, 9],
//     [6, 4, 3, 1, 5, 8, 7, 9, 2],
//     [5, 2, 1, 7, 9, 3, 8, 4, 6],
//     [9, 8, 7, 4, 2, 6, 5, 3, 1],
//     [2, 1, 4, 9, 3, 5, 6, 8, 7],
//     [3, 6, 5, 8, 1, 7, 9, 2, 4],
//     [8, 7, 9, 6, 4, 2, 1, 5, 3]]);
// ---> 'Finished!'


// doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 0, 3, 4, 9],
//     [1, 0, 0, 3, 4, 2, 5, 6, 0],
//     [8, 5, 9, 7, 6, 1, 0, 2, 0],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 0, 1, 5, 3, 7, 2, 1, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 0, 0, 4, 8, 1, 1, 7, 9]])
// ---> 'Try Again'


// doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]])
// ---> 'Finished!'