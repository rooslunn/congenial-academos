<?php declare(strict_types=1);
/**
 * Created by PhpStorm.
 * User: russ
 * Date: 10/6/17
 * Time: 3:03 PM
 */

/**
 * @param string $s
 * @return string
 */
function solution(string $s): string
{
    $result = '';

    $capitals = range(ord('A'), ord('Z'));

    foreach (str_split($s) as $c) {
        if (in_array(ord($c), $capitals)) {
            $result .= ' ';
        }
        $result .= $c;
    }

    return $result;
}

assert(solution('camelCasing') === 'camel Casing');