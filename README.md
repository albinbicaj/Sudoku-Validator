# Sudoku-Validator
I have solved the Sudoku Validator problem by checking these condition using Javascript:
1.Creating a variable "N" that tells the size of the board,
* var N = 9; *
2.I created a function called isinRange() that checks if any of the values in the board are less than or equal to zero or greater than 9, return false,
otherwise return true. 
The function isinRange() is returning a boolean value.
![10](https://user-images.githubusercontent.com/44977687/167908880-f2c3cadf-dde4-40e8-a8d1-653765c0f87a.PNG)
3.I created another function called isValidSudoku() that checks if the board is in range.
![11](https://user-images.githubusercontent.com/44977687/167909412-bd45a626-ccc5-4cf0-ba75-da37fc53e594.PNG)
4.I have created an array of size "N+1" and filling it with the false.
![12](https://user-images.githubusercontent.com/44977687/167910185-8dda2f93-0e12-4369-b3d0-f210f95db790.PNG)
5.I have checked if the rows are valid.
![13](https://user-images.githubusercontent.com/44977687/167910512-0f8ebf67-f071-457f-b6b2-408a96fea104.PNG)
6.I have checked if the columns are valid.
![14](https://user-images.githubusercontent.com/44977687/167910899-c4326c5e-67e4-4bb3-8f2b-e7b677fbd2b2.PNG)
7.I have checked if the 3X3 sub-grids are valid.
![15](https://user-images.githubusercontent.com/44977687/167911253-d783d1a7-090e-4b4f-b823-d327870d3a1c.PNG)
8.And I have made some tests that shows if a sudoku is created well that are down bellow:
@***This is the first example with the result that will show true because it is the right Sudoku***@
![16](https://user-images.githubusercontent.com/44977687/167913325-888010a8-1201-4e4e-a4d0-502a2a7bb849.PNG)
@***This is the second example with the result on web-browser that will show false because it is outOfRangeError***@
![17](https://user-images.githubusercontent.com/44977687/167914188-f9df44bc-80a1-43ca-bf02-2102fb527f5d.PNG)

