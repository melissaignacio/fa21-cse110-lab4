* Question 1: The code at line 12 outputs "3". The variable 'i' is used to track the length of the 'prices' array which has a length of 3. The for loop is used to make sure to only iterate as long as 'i' has a value which is within the indices of the 'prices' array. The variable 'i' has a value of 3 at the end of the for loop becasuse the conditionn inside the loop no longer allowed it to increment. 
* Question 2: The code at line 13 outputs "150". The last iteration of the for loop updates 'discountedPrice' with calculations to 150. Once the program exits the for loop, 'discountedPrice' is printed.
* Question 3: The code at line 14 outputs "150". The last iteration of the for loop updates 'finalPrice' with calculations to 150. Once the program exits the for loop, 'finalPrice' is printed.
* Question 4: The function returns an array of discounted prices based on the discount percentage and array of original prices. It will still return the desired ouput for the example which is [50, 100, 150].
* Question 5: The code outputs an error becasue the variable 'i' is defined in the for loop block and is no longer considered defined in line 12.
* Question 6: The code outputs an error becasue the variable 'discountedPrice' is defined in the for loop block and is no longer considered defined in line 13.
* Question 7: The code at line 14 outputs "150". The last iteration of the for loop updates 'finalPrice' with calculations to 150. Once the program exits the for loop, 'finalPrice' is printed. 'finalPrice' is is defined in the outside block which allows it to be defined throughtout the function.
* Question 8: The function returns an array of discounted prices based on the discount percentage and array of original prices. It will still return the desired ouput for the example which is [50, 100, 150].
* Question 9: The code outputs an error becasue the variable 'i' is defined in the for loop block and is no longer considered defined in line 11.
* Question 10: The code at line 12 outputs "3". The variable 'length' is a const that was set equalt to the length of the array prices which is 3.
* Question 11: The function returns an array of discounted prices based on the discount percentage and array of original prices. It will still return the desired ouput for the example which is [50, 100, 150].
* Question 12: 
    * (A) student.name 
    * (B) student["Grad Year"] 
    * (C) student.greeting() 
    * (D) student["Favorite Teacher"].name 
    * (E) student.courseLoad[0]

* Question 13:
    * (A) The output was '32' since integers map to their exact string representation when using the plus operation.
    * (B) The output was 1 since the string is subtracted by a integer it gives an integer with the result of the expression.
    * (C) The output is 3 since null has no value, which means nothing is changed in the 3.  
    * (D) The output is '3null' since the string 3 and null are added to create a new string.
    * (E) The output is 4 since true is equilavelent to 1 and 3 + 1 is equal to 4. 
    * (F) The output is 0 since false is equilavelent to 0 and null also has no value.
    * (G) The output is '3undefined' since the string 3 and null are added to create a new string.
    * (H) The output is NaN which is undefined as a number. The reason for this is because the substraction did not allow it to become a string.

* Question 14:
    * (A) The output is true becasue '2' is converetd to a int and the expression is 2 > 1 is true.
    * (B) The output is false because from the strin '12' the only number evaluated is 1 meaning the statement 2 < 1 is false which explains our output.
    * (C)  The output is true becasue '2' is converetd to a int and the expression is  2 == 2 is true.
    * (D) The output is false becasue a strict equality check is made and the two values are not the same type.
    * (E) The output is false becasue the value of true is 1 and 1 ==2 is false
    * (F) The output is true becasue Boolean(2) hava a true value which makes true === true
* Question 15: The == operator does not check type while the ==== operator checks type for a strict equality check.
* Question 16: In part2-question16.js
* Question 17: The result of the function on the example give would be [2,4,6]. The reason is because what is being pushed in the newArr that is returned is the value that is returned by the function doSomething which is called with the use of callback.
* Question 18: In part2-question18.js
* Question 19: The ouput is "1\n4\n3\n2\n".