define(['knockout', 'jquery', 'text!./users-detail', 'customWidget'], function(ko, $, htmlString, CustomWidget) {
    function UsersDetail(params) {        
        var self = this;
               
        self.sayName = function(name, username){
            CustomWidget.fullName(name, username);
        }

        self.updateUser = function(user){
            $.ajax({
                url: _urlBase + '/users/' + user.id,
                type: "PUT",
                data: ko.toJSON(user),
                contentType: "application/json",
                success: function(result) {
                    console.log("Update User complete!");
                },
                error: function(err) {
                    console.error('XHR Failed for setUser');
                }
            });
        }
    } 
    return { viewModel: UsersDetail, template: htmlString };
});