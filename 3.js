
function autocomplete(input, dictionary)
{
    function clearInput(input) {
        return input.replace(/[\W\d]+/, '');
    }

    var result = [];
    var key = clearInput(input);

    while ( (result.length === 0) && (key.length > 0) ) {
        dictionary.forEach(function (v) {
            if (v.indexOf(key) > -1) {
                result.push(v);
            }
        }(key));
        key = key.slice(0, key.length-1);
    }
    return result;
}

console.log(autocomplete("ai", ["airplane","airport","apple","ball"]));
console.log(autocomplete("a*&1i", ["airplane","airport","apple","ball"]));
console.log(autocomplete("aim", ["airplane","airport","apple","ball"]));
console.log(autocomplete("ap", ["airplane","airport","apple","ball"]));
console.log(autocomplete("btm", ["airplane","airport","apple","ball"]));
