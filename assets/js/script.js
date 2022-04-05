console.log("Hello, loading javascript!"); 

$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var currentTime = moment().format("hh:00"); 
console.log(currentTime); 

$('.saveBtn').click(function() {
    var key = $(this).siblings('.hour').text(); 
    // console.log($(this).siblings('.hour').text());
    var event = $(this).siblings('.description').val();

   //save to local storage 
   localStorage.setItem(key, event);
  });

  //Loop through all time-blocks 
  $(".time-block").each(function() {
    var hour = $( this );
    //use siblings or find in jquery to get the hour 
    console.log(hour)

    //if elseif to compare currentimte with hour 
        //set the css class for the entire row 


        //geet lS items and shows to back on the html 
        
  });

  