define(['knockout', 'text!./page-not-found'], function(ko, htmlString) {
    function PageNotFound(params) {        
        var self = this;
        
    } 
    return { viewModel: PageNotFound, template: htmlString };
});