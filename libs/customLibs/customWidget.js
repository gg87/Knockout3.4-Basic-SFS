'use strict';
define([], function() {
    // Private
    var myVar = '';

    // Public
    return {
        fullName: function(firstName, lastName) {
            return alert(firstName + " " + lastName + "!");
        }
    }
});