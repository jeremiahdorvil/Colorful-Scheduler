// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
    var saveEl = $(".saveBtn");
    // var hour8 = $("#hour-8");
    // var hour9 = $("#hour-9");
    // var hour10 = $("#hour-10");
    // var hour11 = $("#hour-11");
    // var hour12 = $("#hour-12");
    // var hour13 = $("#hour-13");
    // var hour14 = $("#hour-14");
    // var hour15 = $("#hour-15");
    // var hour16 = $("#hour-16");
    // var hour17 = $("#hour-17");
    // var save
    // var message = $(".description").text();
    var timeDisplayEl = $('#currentDay')


    // Added a listener for click events on the save button. 

    saveEl.on("click", function(event) {
        event.preventDefault();
        var key = $(this).parent().attr("id")
        var message = $(this).siblings(".description").val()
        saveNotesToStorage(key, message);
    });
    // save = saveEl.textContent

    // Added code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour.
   
    function tense() {
        var thisHour = dayjs().hour();

        $('.time-block').each(function () {
            var hourIndex = parseInt($(this).attr('id').split('-')[1]);
            console.log(hourIndex, thisHour);

            if(hourIndex < thisHour) {
                $(this).removeClass('past present future');
                $(this).addClass('past');
            } else if (hourIndex === thisHour) {
                $(this).removeClass('past present future');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past present future');
                $(this).addClass('future');
            }
        })
    }
    tense();
    // Added code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. 

    function saveNotesToStorage(key, val) {
        localStorage.setItem(key,val)
    // var notes = {
    //     hour: whatHour,
    //     comment: message.value
    //   };
    // var whatHour = [hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];
    // for(let i = 0; i > whatHour.length; i++)
    // whatHour[i];
    
    // if(this !== null){
    //   localStorage.setItem("notes", JSON.stringify(notes));
    //     } else{
    // return;
     };

    // function pullNotesFromStorage() {
    //     message = localStorage.getItem("notes");
    //     if (message) {
    //         save = JSON.parse(message);
    //     } else {
    //         message = [];
    //     }
    //     return message;
    // };
    // pullNotesFromStorage();  
    
    $(".time-block").each(function(){
        var pull = $(this).attr("id")
        $(this).children(".description").val(localStorage.getItem(pull))
    })



    // Added code to display the current date in the header of the page.
    function displayTime() {
        var rightNow = dayjs().format('MMM DD, YYYY [at] h:mm A');
        timeDisplayEl.text(rightNow);
    }
    displayTime();
    setInterval(displayTime, 1000);
});