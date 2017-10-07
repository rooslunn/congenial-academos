<?php declare(strict_types=1);
/**
 * Created by PhpStorm.
 * User: russ
 * Date: 10/6/17
 * Time: 2:57 PM
 */

/**
 * @param int $number
 * @return string
 */
function spam(int $number): string
{
    return str_repeat('hue', $number);
}

assert(spam(3) === 'huehuehue');
