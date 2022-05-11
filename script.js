var N = 9;

function isinRange(board) {
  for (var i = 0; i < N; i++) {
    for (var j = 0; j < N; j++) {
      if (board[i][j] <= 0 || board[i][j] > 9) {
        return false;
      }
    }
  }
  return true;
}

function isValidSudoku(board) {
  if (isinRange(board) == false) {
    return false;
  }

  var unique = Array(N + 1).fill(false);

  for (var i = 0; i < N; i++) {
    unique = Array(N + 1).fill(false);

    for (var j = 0; j < N; j++) {
      var Z = board[i][j];

      if (unique[Z]) {
        return false;
      }
      unique[Z] = true;
    }
  }

  for (var i = 0; i < N; i++) {
    unique = Array(N + 1).fill(false);

    for (var j = 0; j < N; j++) {
      var Z = board[j][i];

      if (unique[Z]) {
        return false;
      }
      unique[Z] = true;
    }
  }

  for (var i = 0; i < N - 2; i += 3) {
    for (var j = 0; j < N - 2; j += 3) {
      unique = Array(N + 1).fill(false);

      for (var k = 0; k < 3; k++) {
        for (var l = 0; l < 3; l++) {
          var X = i + k;

          var Y = j + l;

          var Z = board[X][Y];

          if (unique[Z]) {
            return false;
          }
          unique[Z] = true;
        }
      }
    }
  }

  return true;
}
//Example: OutOfRangeError
var board = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [9, 1, 2, 3, 4, 5, 6, 7, 8],
  [3, 4, 5, 6, 7, 8, 9, 1, 2],
  [6, 7, 8, 9, 1, 2, 3, 4, 5],
  [8, 9, 1, 2, 3, 4, 5, 6, 7],
  [2, 3, 4, 5, 6, 7, 8, 9, 1],
  [5, 6, 7, 8, 9, 1, 2, 3, 4],
];
if (isValidSudoku(board)) {
  document.write("True");
} else {
  document.write("False");
}
