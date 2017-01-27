define(['knockout', 'jquery', 'text!./posts'], function(ko, $, htmlString) {
    function Posts(params) {        
        var self = this;
        
    }
    return { viewModel: Posts, template: htmlString };
});