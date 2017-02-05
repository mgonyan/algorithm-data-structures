<?php

namespace Algorithm;

use PHPUnit\Framework\TestCase;

class SearchTest extends TestCase
{
    /**
     * @var Sort
     */
    private $sort;

    protected function setUp()
    {
        $this->sort = new Sort();
    }

    /**
     * @test
     */
    public function mergeSort()
    {
        $array = [5, 2, 4, 7, 1, 3, 2, 6];
        $this->sort->mergeSort($array, 1, 8);

        $this->assertEquals([1, 2, 2, 3, 4, 5, 6, 7], $array);
    }
}