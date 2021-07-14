import Vue from 'vue'

Vue.filter('encoded', function (value) {
    if (!value) return '';
    value = value.toLowerCase().replace(/[au]/g, function(letter) { return letter === 'a' ? 'u' : 'a' });
    return value.replace(/[eo]/g, function(letter) { return letter === 'e' ? 'o' : 'e' });
})

Vue.filter('upperCase', function (value) {
    if (!value) return '';
    return value.toUpperCase();
})

Vue.filter('lowerCase', function (value) {
    if (!value) return '';
    return value.toLowerCase();
})

Vue.filter('UpperLowerCase', function (value) {
    if (!value) return '';
    let newValue = '';
    for (let i = 0; i < value.length; i++) {
        newValue += (i % 2 == 0) ? value.charAt(i).toUpperCase() : value.charAt(i).toLowerCase();
    }
    return newValue;
})

Vue.filter('lowerUpperCase', function (value) {
    if (!value) return '';
    let newValue = '';
    for (let i = 0; i < value.length; i++) {
        newValue += (i % 2 == 0) ? value.charAt(i).toLowerCase() : value.charAt(i).toUpperCase();
    }
    return newValue;
})

