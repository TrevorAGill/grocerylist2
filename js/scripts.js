var emptyArray = [];
var priceArray = [];

//Business Logic

function ListItem(item, count, price) {
  this.item = item;
  this.count = count;
  this.price = price;
}



// user interface Logic
$(document).ready(function() {
  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var inputtedListItem = $("input#new-list-item").val();
    var inputtedListCount = $("input#new-list-count").val();
    var inputtedListPrice = $("input#new-list-price").val();
    alert(inputtedListPrice);
    var priceArray = emptyArray.push(inputtedListPrice);

    alert(priceArray);
    console.log(priceArray);
    var newListItem = new ListItem(inputtedListItem, inputtedListCount, inputtedListPrice);

    $(".listItem").append("<li><input type='checkbox' class='listItem' name='grocery-thing' value='" + newListItem.item + "'>" + " " + "<span class='click-me'>" + newListItem.item + "</span></li>");

    $("input#new-list-item").val("");


    $(".click-me").last().click(function() {
    $("#show-list").show();
    $("#show-list h2").text(newListItem.item);
    $(".count").text(newListItem.count);
    $(".price").text(newListItem.price);
    debugger;
    });
  });







  $("form#list-edit").submit(function(event) {
    event.preventDefault();

    $("input:checkbox[name=grocery-thing]:checked").each(function(){
      var listEditSelection = $(this).val();




    if(listEditSelection=$(this).val()) {
      $(this).parent().remove();
      // var array2 = array.push($(this).val());


    //   // alert($(this).val());
    //   var listEditStrike = listEditSelection.replace(/listEditSelection/i, listEditSelection.strike());
      // alert(listEditStrike);


    }


    });
  });
});
