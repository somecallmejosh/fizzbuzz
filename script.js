for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    $("<li class='list-group-item'>FizzBuzz</li>").appendTo($(".list-group"));
  } else if (i % 5 === 0) {
     $("<li class='list-group-item'>Buzz</li>").appendTo($(".list-group"));
  } else if (i % 3 === 0) {
     $("<li class='list-group-item'>Fizz</li>").appendTo($(".list-group"));
  } else {
    $("<li class='list-group-item'>" + i + "</li>").appendTo($(".list-group"));
  }
}