# _Cryptosquare Conversion Tool_

#### _Encrypts text using a square grid. October 2016_

#### By _**Brad Copenhaver & Luke Philips**_

## Description

_Program specifications:_

1 If user inputs a single lowercase alphanumeric character, return that character
* Example input: r
* Example output: r

2 If user enters uppercase letter, convert to lowercase and return that letter
* Example input: F
* Example output: f

3 If user enters non-alphanumeric characters, return only alphanumeric characters
* Example input: F U
* Example output: fu

4 If user enters multi-character string, convert to array
* Example input: dog
* Example output: ["d","o","g"]

5 If user enters multi-character string, return length n of string
* Example input: dog
* Example output: 3

6 calculate the size of the (close to square as possible) A x B grid
* Example input: chicken
* Example output: 3 x 3

 7 split input array into A subarrays of equal length (B)
 * Example input: ["c", "h", "i", "c", "k", "e", "n"]
 * Example output:
 ["c", "h", "i"]
 ["c", "k", "e", ]
 ["n"]

8 Loop through and push the value of the index of each subarray to output array to create encoded array
* Example input:
["c", "h", "i"]
["c", "k", "e", ]
["n"]
* Example output:
["c","c","n","h","k","i",e]

9 Insert space after every 5 characters
Example input: ["c","c","n","h","k","i","e"]
Example output: ["c","c","n","h","k"," ","i","e"]

9 Convert output array to output string
* Example input: ["c","c","n","h","k"," ","i","e"]
* Example output: "ccnhk ie"

10 Display encoded output to user
* Example output: "ccnhk ie"

## Setup/Installation Requirements

* There are no special setup or installation requirements.


## Known Bugs

_TBD_

## Support and contact details

_Contact information: brianpritt@example.com_

## Technologies Used

_Technologies used in this version include the following:
* jQuery 3.1.1
* JavaScript


### License

*Licensed under GPLv3*

Copyright (c) 2016 **_ Brad Copenhaver & Luke Philips_**
