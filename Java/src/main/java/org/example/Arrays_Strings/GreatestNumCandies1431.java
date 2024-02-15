package org.example.Arrays_Strings;

import java.util.ArrayList;
import java.util.List;

/*
EASY

There are n kids with candies. You are given an integer array candies,
where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies,
denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if,
after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids,
or false otherwise.

Note that multiple kids can have the greatest number of candies.
*/

public class GreatestNumCandies1431 {

    public static List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        int max = 0;
        List<Boolean> result = new ArrayList<>();
        for (int candy : candies) {
            if (candy > max) max = candy;
        }

        for(int candy : candies) {
            int addedCandy = candy + extraCandies;
            if(addedCandy >= max) result.add(true);
            else result.add(false);
        }

        return result;
    }
}

/*
    Completed on first try. Algorithm is pretty intuitive.
    Iterate candies to find max, then iterate to compare after adding extra candies.
    Time Complexity: O(n), where n is length of candies array
    Space Complexity: O(n), since we store result in array of n length
*/
