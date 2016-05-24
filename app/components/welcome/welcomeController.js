  angular.module('myControllers', [])

  .controller('welcomectrl', welcomectrl);

  function welcomectrl(){
    	this.name = "name function has not yet been called";
    	this.setName = function(name){
      	this.name = name;
    };
  }

  
