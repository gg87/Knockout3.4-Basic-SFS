define(['knockout', 'text!./topnav', 'sammy'], function(ko, htmlString, Sammy) {
    function Topnav(params) {        
        var self = this;
        
        ko.components.register('select-lang', {
            require: 'app/translate/select-lang'
        });
    } 
    return { viewModel: Topnav, template: htmlString };
});