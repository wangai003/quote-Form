var words = document.querySelectorAll(".word");
var tableContainer = document.getElementById("table-container");

words.forEach(function(word) {
  word.addEventListener("click", function() {
    var tableHtml = "<table><tr><td>Word 1</td><td>Word 2</td><td>Word 3</td></tr><tr><td>Word 4</td><td>Word 5</td><td>Word 6</td></tr><tr><td>Word 7</td><td>Word 8</td><td>Word 9</td></tr></table>";
    tableContainer.innerHTML = tableHtml;
  });
});


document.getElementById("myLink").addEventListener("click", function() {
    var table = "<table><tr><td>Word 1</td><td>Word 2</td><td>Word 3</td></tr></table>";
    document.getElementById("myTable").innerHTML = table;
  });