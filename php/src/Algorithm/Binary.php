<?php

namespace Algorithm;

class Binary
{
    /**
     * Add to binary number
     *
     * @param array $a
     * @param array $b
     *
     * @return array
     */
    public function add(array $a, array $b): array
    {
        $c = [];
        $carry = 0;

        for ($i = count($a) - 1; $i >= 0; $i--) {
            $temp = $a[$i] + $b[$i] + $carry;
            array_unshift($c, $temp % 2);
            $carry = intval($temp / 2);
        }

        array_unshift($c, $carry);

        return $c;
    }
}