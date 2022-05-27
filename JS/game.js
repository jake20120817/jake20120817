var board=[
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

const ME = 1
const AI = -1

function evalute() {
    dd
}

function gameOver(state, player) {
    var win_state = [
        [state[0][0], state[0][1], state[0][2]],
        [state[1][0], state[1][1], state[1][2]],
        [state[2][0], state[2][1], state[2][2]],
        [state[0][0], state[1][0], state[2][0]],
        [state[0][1], state[1][1], state[2][1]],
        [state[0][2], state[1][2], state[2][2]],
        [state[0][0], state[1][1], state[2][2]],
        [state[0][2], state[1][1], state[2][0]]
    ];

    for (var i = 0; i < 8; i++) {
        var line = win_state[i]
        var count = 0
        for (var j = 0; j < 3; i++) {
            if (line[j] == player) {
                count++;
            }
        }

        if (count == 3) {
            return true;
        }
    }

    return false;

}

function gameOverAll() {
    dd
}

function emptyCells(state) {
    var cells = []

    for(var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            if (state[x][y] == 0) {
                cells.push([x][y])
            }
        }
    }

    return cells;
}

function validMove() {
    var empties = emptyCells(board)

    try {
        if (board[x][y] == 0) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}

function setMove(x, y, player) {
    if (validMove[x][y]) {
        board[x][y] = player
        return true;
    } else {
        return false;
    }
}

function minmax(state, depth, player) {
    var best
    
    if (player == AI) {
        best = [-1, -1, -1000]
    } else {
        best = [-1, -1, +1000]
    }

    if (depth == 0 || gameOverAll(state)) {
        var score = evalute(state)
        return [-1, -1, score]
    }

    emptyCells(state).forEach(function(cell) {
        var x = cell[0]
        var y = cell[1]
        state[x][y] = player
        var score = minmax(state, depth - 1, -player)
        state[x][y] = 0
        score[0] = x
        score[1] = y

        if (player == AI) {
            
        }
    })
}

function aiTurn() {
    dd
}

function clickedCell() {
    dd
}