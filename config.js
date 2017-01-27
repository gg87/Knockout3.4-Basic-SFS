requirejs.config({
	urlArgs: "antiCache=1.0",
	shim: {
		//vendor
		'i18next': ['knockout'],
        'bootstrap': ['jquery'],
		'sammy': ['jquery'],
    },
	paths: {
		//vendor
		'jquery': 'libs/jquery-3.1.1.min',
		'knockout': 'libs/knockout-3.4.1',
		'i18next': 'libs/i18next',
		'text': 'libs/text',
		'sammy': 'libs/sammy',
        'nprogress': 'libs/nprogress',
        'bootstrap': 'libs/bootstrap.min',
	    //my App js
	    'lang': 'app/translate/languages',
        'viewModelApp': 'app/viewModelApp',
	    'customWidget': 'libs/customLibs/customWidget'
	}
});