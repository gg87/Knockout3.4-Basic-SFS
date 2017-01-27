'use strict';
// Define: If you want to declare a module other parts of your application will depend on.
// Require: If you just want to load and use stuff.
var _urlBase = 'http://localhost:3000';

define(['knockout', 'jquery', 'nprogress', 'sammy'], function (ko, $, NProgress, Sammy) {
    return function viewModelApp() {
        var self = this;
        self.users = ko.observableArray();
        self.posts = ko.observableArray();
        self.user = ko.observable();
        self.todos = ko.observableArray();
        self.notFound = ko.observable(false);

        self.goToPage = function(page){
            location.hash = page;
        }

        // Components
        ko.components.register('topnav', {
            require: 'app/layout/topnav'
        });
        ko.components.register('users', {
            require: 'app/users/users'
        });
        ko.components.register('users-detail', {
            require: 'app/users/users-detail'
        });
        ko.components.register('user-todos', {
            require: 'app/users/todos/todos'
        });
        ko.components.register('posts', {
            require: 'app/posts/posts'
        });
        ko.components.register('page-not-found', {
            require: 'app/page-not-found/page-not-found'
        });

        // NProgress on ajax
        $(document).ajaxStart(function(){
            NProgress.start(); 
        }).ajaxStop(function(){
            NProgress.done();
        });
            
        // Handlers
        ko.bindingHandlers.showPage = {
            init: function init(element, valueAccessor) {
                $(element).animate({ opacity: 1 }, 300);
            }
        };

        self.currentPage = ko.observable('')
        // Sammy (routing)
        var app = Sammy(function (app) {
            // Override this function so that Sammy doesn't mess with forms
            this._checkFormSubmission = function (form) {
                return false;
            };
            this.notFound = function () {
                self.notFound(true);
                self.posts(null);
                self.users(null);
                self.user(null);
                self.todos(null);
                self.currentPage('notFound');
            };
            this.get('#users', function () {
                self.posts(null);
                self.user(null);
                self.todos(null);
                self.notFound(false);
                $.get(_urlBase + "/users")
                .done(function(result){
                    self.users(result);
                }).fail(function(err){
                    console.error('XHR Failed for getUsers');
                    self.users(null);
                });
                self.currentPage('users');
            });
            this.get('#users/:id', function () {
                $.get(_urlBase + '/users/' + this.params.id)
                .done(function(result) {
                    self.user(result);
                }).fail(function(err) {
                    console.error('XHR Failer for getUserDetails');
                    self.user(null);
                });
                self.posts(null);
                self.users(null);
                self.todos(null);
                self.notFound(false);
                self.currentPage('user-details');
            });
            this.get('#users/:id/todos', function () {
                 $.get(_urlBase + '/users/' + this.params.id + '/todos')
                .done(function(result) {
                    self.todos(result);
                }).fail(function(err) {
                    console.error('XHR Failer for getUserTodos');
                    self.todos(null);
                });
                self.posts(null);
                self.users(null);
                self.user(null);
                self.notFound(false);
                self.currentPage('todos');
            });
            this.get('#posts', function () {
                self.users(null);
                self.user(null);
                self.todos(null);
                self.notFound(false);
                $.get(_urlBase + "/posts")
                .done(function(result){
                    self.posts(result);
                }).fail(function(err){
                    console.error('XHR Failed for getPosts');
                    self.posts(null);
                }); 
                self.currentPage('posts');
            });

            
        });
        // start the application
        app.run('#users');
    };
});