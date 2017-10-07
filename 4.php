<?php declare(strict_types=1);
/**
 * Created by PhpStorm.
 * User: russ
 * Date: 10/6/17
 * Time: 5:31 PM
 */

/**
 * @param array $tests
 * @return array
 */
function carry(array $tests): array
{
    // todo: string to array
    // todo: reverse operands, array_reverse()

    $tests = array_map(function ($v) {
        $figs = explode(' ', $v);
        return array_map(function ($f) {
            return array_reverse(str_split($f));
        }, $figs);
    }, $tests);

    $result = [];

    foreach ($tests as $test) {
        $max_length = max(array_map(function($v) {
            return count($v);
        }, $test));

        $carry = $carry_count = 0;
        for ($i = 0; $i < $max_length; $i++) {
            $figures = array_map(function ($v) use ($i) {
                return array_key_exists($i, $v) ? $v[$i] : 0;
            }, $test);
            $figures[] = $carry;
            $carry = (int) (array_sum($figures)/10);
            if ($carry > 0) {
                $carry_count++;
            }
        }
        $result[] = $carry_count;
    }

    return $result;
}

$t = carry(["123 456", "123 456 123456", "555 555", "123 594"]);
assert($t === [0, 3, 3, 1], 'Returned: ' . implode(',',  $t));

