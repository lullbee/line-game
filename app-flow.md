# Game Flow

## Start Up ##

1. Record each player's name
1. Record each player's color preference (maybe)
1. Build a grid of 10x10 dots
1. Display grid
   - TDB how


## Player Turn ##
1. Show player name and player color
1. Listen for a click between any two dots 
    - TBD how
1. Record move to database
1. Draw line using player color 
1. Check if box is completed (all 4 sides are full)
   - `checkIsComplete()`
1. If box is completed
   - Fill in box with player color 
   - Increase player score by 1
   - Check if game is ended and play game end sequence if so
   - Else restart player turn without switching
1. Else box is not completed
    - End player turn 
    - switch to next player 
    - restart turn cycle

## Game End ##

1. Show player scores and reveal winner is who has more points (more completed squares)

## Checking if game is over ##

1. Game is over when there are missing lines, all boxes are complete
   - Option 1 is to check if combined player score equals 64 (10x10 grid has 64 boxes)
   - Option 2 is to look in the array that stores possible moves to see if it's empty/full


# Game Components

`<Game>`
   - Parent object
   - stores the grid, the players, and the scores

`<Grid>`
   - The game board itself
   - made up of `<Cell>`s 
   
`<Cell>`
   - 4 dots and 4 lines with a fill color upon completion
   - Properties:
     - TL <Line>
     - TR <Line>
     - BL <Line>
     - BR <Line>
     - completedPlayer
   - Methods:
     - checkIsComplete()
       - Look at each line object and check if the player property is not null
         - If no null, then it's complete. else, incomplete

`<Point>`
   - Properties:
     - ID
     - x/y?

`<Line>`
   - Properties:
     - `<Point> A`
     - `<Point> B`
     - player 
       - reference to the player who drew the line, or null if the line is empty

`<Player>`
   - Properties:
     - Name
     - Color
     - Score


# Sample Board #

## Single Cell States

### State 1 - Single line
.   .          .    .
               |
.---.     or   .    .    etc 

### State 2 - Two lines
.   .          .    .
|              |    |
.---.     or   .    .    etc

### State 3 - Three lines
.---.          .----.
|              |    |
.---.     or   .    .    etc

### State 4 - Four lines
.---. 
|   | 
.---. 

### State 5 - Completed
.---.   
| X |
.---. 




     0   1   2   3   4   5   6   7   8   9
 A   .   .   .   .   .   .   .   .   .   .
    
 B   .   .---.---.   .   .   .   .   .   .
         |
 C   .   .   .   .   .   .   .   .   .   .
    
 D   .   .   .   .   .   .   .   .   .   .

 E   .   .   .   .   .   .   .   .   .   .

 F   .   .   .   .   .   .   .   .   .   .

 G   .   .   .   .   .   .   .   .   .   .

 H   .   .   .   .   .   .   .   .   .   .

 J   .   .   .   .   .   .   .   .   .   .
     0   1   2   3   4   5   6   7   8   9

points[][] = <ListOfConnectedPoints>
points[B][1] = [B2, C1]
points[B][2] = [B1]
points[C][1] = [B1]


// to get line A0 -> B0: 



.---.   .   .   .   .   .   .   .   .
| X |
.---.   .   .   .   .   .   .   .   .
            D
.   .   . A . B .   .   .   .   .   .
            C
.   .   .   .   .   .   .   .   .   .

.   .   .   .   .   .   .   .   .   .

.   .   .   .   .   .   .   .   .   .

.   .   .   .   .   .   .   .   .   .

.   .   .   .   .   .   .   .   .   .

.   .   .   .   .   .   .   .   .   .

.   .   .   .   .   .   .   .   .   .