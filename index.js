


function superbowlWin(record) {
let winningYear = record.find(element => element.result === 'W');
console.log(winningYear)
    if (winningYear) {
        return winningYear.year
    } else {
        return undefined
    }
}
