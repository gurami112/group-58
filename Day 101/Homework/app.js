function sumNumbers() {
    let num1 = prompt("Enter the first number");
    let num2 = prompt("Enter the second number");
    let sum = Number(num1) + Number(num2);
    document.getElementById("sumResult").innerText = `${num1} + ${num2} = ${sum}`;
  }
  
  function favoriteMovies() {
    let movies = [];
    for (let i = 0; i < 5; i++) {
      let movie = prompt("Enter your favorite movie");
      movies.push(movie);
    }
    let list = document.getElementById("movieList");
    list.innerHTML = "";
    movies.forEach(function(movie) {
      let li = document.createElement("li");
      li.innerText = movie;
      list.appendChild(li);
    });
  }
  
  function addTask() {
    let taskText = prompt("Enter a task");
    if (taskText) {
      let li = document.createElement("li");
      li.innerText = taskText + " ";
      let btn = document.createElement("button");
      btn.innerText = "delete";
      btn.onclick = function() {
        li.remove();
      };
      li.appendChild(btn);
      document.getElementById("taskList").appendChild(li);
    }
  }
  