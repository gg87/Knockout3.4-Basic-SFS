define(['knockout', 'jquery', 'text!./users'], function(ko, $, htmlString) {
    function Users(params) {
        var self = this;
        
    } 
    // Return component definition
    return { viewModel: Users, template: htmlString };
});