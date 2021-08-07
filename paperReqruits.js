function paperReqruits(book1copy, book2copy, book3copy) {
    let book1page = 100;
    let book2page = 200;
    let book3page = 300;
    // book pade and book copy multiply 
    let book1TotalPage = book1page * book1copy;
    let book2TotalPage = book2page * book2copy;
    let book3TotalPage = book3page * book3copy;
    // all book page sumation 
    const totalBookPage = book1TotalPage + book2TotalPage + book3TotalPage;
    return totalBookPage;
}

let book1 = 1;
let book2 = 2;
let book3 = 1;

const totalPage = paperReqruits(book1, book2, book3);
console.log('Total need ', totalPage, ' pages');