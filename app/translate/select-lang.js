define(['knockout', 'text!./select-lang', 'i18next'], function(ko, htmlString, i18nextko) {
    function SelectLang(params) {        
        var self = this;
        
        self.changeLanguage = function(value){
            i18nextko.setLanguage(value);
        };
    }
    return { viewModel: SelectLang, template: htmlString };
});