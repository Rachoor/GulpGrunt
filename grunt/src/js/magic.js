(function() {
	var AppModule = {
        init: function() {
			var button = document.getElementById('button__add-todo');
			button.addEventListener('click', AppModule.createTodo);

			document.onkeydown = function(e) {
				if(e.which == 13) { 
                AppModule.createTodo(); 
				}
			};
			
			console.log(this.jsonData);

			document.addEventListener('mousemove', AppModule.moveTodo);
			AppModule.getAllTodos();
		}
    };

    AppModule = {};
})();