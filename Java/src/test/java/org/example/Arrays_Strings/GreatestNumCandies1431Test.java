package org.example.Arrays_Strings;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class GreatestNumCandies1431Test {

    @Test
    void kidsWithCandies() {
        int[] array = new int[]{2, 3, 5, 1, 3};
        List<Boolean> result = GreatestNumCandies1431.kidsWithCandies(array, 3);
        boolean[] expected = new boolean[]{true, true, true, false, true};

        for(int i = 0; i < expected.length; i++){
            assertEquals(expected[i], result.get(i));
        }
    }
}