<?php

namespace Algorithm;

class Sort
{
    /**
     * @param array $a
     * @param int $p
     * @param int $r
     */
    public function mergeSort(array &$a, int $p, int $r)
    {
        if ($p < $r) {
            $q = floor(($p + $r) / 2);
            $this->mergeSort($a, $p, $q);
            $this->mergeSort($a, $q + 1, $r);
            $this->merge($a, $p, $q, $r);
        }
    }

    /**
     * @param array $a
     * @param int $p
     * @param int $q
     * @param int $r
     */
    private function merge(array &$a, int $p, int $q, int $r)
    {
        $left = [];
        $right = [];
        $n1 = $q - $p + 1;
        $n2 = $r - $q;

        for ($i = 0; $i < $n1; $i++) {
            $left[$i] = $a[($p + $i) - 1];
        }

        $left[$n1] = PHP_INT_MAX;

        for ($i = 0; $i < $n2; $i++) {
            $right[$i] = $a[$q + $i];
        }

        $right[$n1] = PHP_INT_MAX;

        $i = 0;
        $j = 0;

        for ($k = $p - 1; $k < $r; $k++) {
            if ($left[$i] <= $right[$j]) {
                $a[$k] = $left[$i];
                $i++;
            } else {
                $a[$k] = $right[$j];
                $j++;
            }
        }
    }
}