<?php

use Algorithm\Binary;
use PHPUnit\Framework\TestCase;

class BinaryTest extends TestCase
{
    /**
     * @var Binary
     */
    private $binary;

    protected function setUp()
    {
        $this->binary = new Binary();
    }

    /**
     * @test
     */
    public function add()
    {
        $this->assertEquals(
            [0, 1, 0, 1, 1, 1, 0, 1],
            $this->binary->add(
                [1, 0, 0, 0, 1, 1, 1],
                [0, 0, 1, 0, 1, 1, 0]
            //  ----------------------
            //[0, 1, 0, 1, 1, 1, 0, 1]
            )
        );

        $this->assertEquals(
            [1, 0, 0],
            $this->binary->add(
                [0, 1],
                [1, 1]
           //  ---------
           //[1, 0, 0]
            )
        );
    }
}