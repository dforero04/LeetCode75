package org.example.Arrays_Strings;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MergeStringsAlternately1768Test {

    @Test
    @DisplayName("1768. Merge Strings Alternately")
    void mergeAlternately() {
        assertEquals("axbycz", MergeStringsAlternately1768.mergeAlternately("abc", "xyz"));
        assertEquals("ambncop", MergeStringsAlternately1768.mergeAlternately("abc", "mnop"));
    }
}