define(['knockout', 'jquery', 'text!./todos'], function(ko, $, htmlString) {
    function Todos(params) {
        var self = this;
        
        self.nCompleted = function(todos){
            var completed = 0;
            for(todo of todos){
                if(todo.completed)
                    completed++;
            }
            return completed;
        }
    } 
    // Return component definition
    return { viewModel: Todos, template: htmlString };
});