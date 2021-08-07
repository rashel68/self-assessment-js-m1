let friends = ['Minhajul Islam', 'Rokib Roki', 'Hasan Muhmud', 'Md Tamjid', 'Md Ibrahim Saber', 'Md Minhajus Islam Matabbor'];

function bestFriends(array) {
    let max = '';
    for (const friendsName of array) {
        if (friendsName.length > max.length) {
            max = friendsName;
        }
    }
    return max;
}

let largeName = bestFriends(friends);
console.log('This is the largest name of friends array > ', largeName);