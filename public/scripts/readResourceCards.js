$(document).ready(function () {
    var newscript = document.createElement('script');
    var insidescript = document.createTextNode("tinymce.init({selector: 'textarea:not(.commentsInput)', readonly: 1, content_css: '//www.tiny.cloud/css/codepen.min.css', plugins: 'print preview searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap emoticons', toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment', image_title: true, automatic_uploads: true, file_picker_types: 'image', file_picker_callback: function (cb, value, meta) {var input = document.createElement('input'); input.setAttribute('type', 'file'); input.setAttribute('accept', 'image/*'); input.onchange = function () { var file = this.files[0]; var reader = new FileReader(); reader.onload = function () { var id = 'blobid' + (new Date()).getTime(); var blobCache = tinymce.activeEditor.editorUpload.blobCache; var base64 = reader.result.split(',')[1]; var blobInfo = blobCache.create(id, file, base64); blobCache.add(blobInfo); cb(blobInfo.blobUri(), { title: file.name }); }; reader.readAsDataURL(file); }; input.click();}});");
    newscript.appendChild(insidescript);
    $("textarea").append(newscript);

    
    // All Notes related that has an id: 1) outer div, 2) header, 3) textarea, 4) colorpicker 5) delete button
    var noOfDivForNC = $('.parent').length;
    var indexForDivForNC = 0;
    do {
        var notesDivForNCThatBelongsThere = $('.parent').eq(indexForDivForNC);
        var colorPickerThere = $('input[name$="colorPickerForNote"]').eq(indexForDivForNC);
        indexForDivForNC++;
        notesDivForNCThatBelongsThere.attr("id", "divForNC" + indexForDivForNC);
        colorPickerThere.attr("id", "color" + indexForDivForNC);
    } while (indexForDivForNC < noOfDivForNC);

    var removeNotesBtnItems = $('button[name$="goRemoveNotes"]').length;
    var indexForRemoveNotesBtn = 0;
    do {
        var deleteNoteBtnThatBelongsThere = $('button[name$="goRemoveNotes"]').eq(indexForRemoveNotesBtn);
        indexForRemoveNotesBtn++;
        deleteNoteBtnThatBelongsThere.attr("id", "removeBtn" + indexForRemoveNotesBtn);
    } while (indexForRemoveNotesBtn < removeNotesBtnItems);

    var noOfTextAreaForNotes = $('textarea[name$="goTextArea"]').length;
    var indexForTextAreaForNotes = 0;
    do {
        var textAreaForNotesThatBelongsThere = $('textarea[name$="goTextArea"]').eq(indexForTextAreaForNotes);
        indexForTextAreaForNotes++;
        textAreaForNotesThatBelongsThere.attr("id", "textArea" + indexForTextAreaForNotes);
    } while (indexForTextAreaForNotes < noOfTextAreaForNotes);

    var noOflabelForLastModifiedByItems = $('input[name$="labelForLastModifiedBy"]').length;
    var indexForlabelForLastModifiedBy = 0;
    do {
        var labelForLastModifiedByForNotes = $('input[name$="labelForLastModifiedBy"]').eq(indexForlabelForLastModifiedBy);
        indexForlabelForLastModifiedBy++;
        labelForLastModifiedByForNotes.attr("id", "lastModifiedBy" + indexForlabelForLastModifiedBy);
    } while (indexForlabelForLastModifiedBy < noOflabelForLastModifiedByItems);

    var noOfHeadersForNotes = $('.headersNotes').length;
    var indexForHeaderForNotes = 0;
    do {
        var headersForNotesThatBelongsThere = $('.headersNotes').eq(indexForHeaderForNotes);
        indexForHeaderForNotes++;
        headersForNotesThatBelongsThere.attr("id", "headerForNotes" + indexForHeaderForNotes);
    } while (indexForHeaderForNotes < noOfHeadersForNotes);
    //Notes end
   






    var myCheckItems = $('input[name$="myCheck"]').length;
    var indexFormyCheck = 0;
    do {
        var myCheckThatBelongsThere = $('input[name$="myCheck"]').eq(indexFormyCheck);
        indexFormyCheck++;
        myCheckThatBelongsThere.attr("id", "myCheck" + indexFormyCheck);
    } while (indexFormyCheck < myCheckItems);
    

    // All Event related that has an id: 1) colorPicker, 2) Hour/Duration, 3) Minutes, 4) Start Time, 5) Add Event, 6) Remove Event, 7) timeline-article, 8) content-left, 9) textarea, 10) content-right, 11) headerForEvent, 12) span Circle
    var durationItem = $('input[name$="goDuration"]').length;
    var i = 0;
    do {
        var durationInputThatBelongsThere = $('input[name$="goDuration"]').eq(i);
        var circleSpanThatBelongsThere = $('.date').eq(i)
        i++;
        durationInputThatBelongsThere.attr("id", "addDurationInput" + i);
        circleSpanThatBelongsThere.attr("id", "circleForEvent" + i);
    } while (i < durationItem);

    var minutesItem = $('input[name$="goMinutes"]').length;
    var j = 0;
    do {
        var minutesInputThatBelongsThere = $('input[name$="goMinutes"]').eq(j);
        j++;
        minutesInputThatBelongsThere.attr("id", "addMinutesInput" + j);
    } while (j < minutesItem);

    var startTimeItem = $('input[name$="goTime"]').length;
    var b = 0;
    do {
        var startTimeInputThatBelongsThere = $('input[name$="goTime"]').eq(b);
        b++;
        startTimeInputThatBelongsThere.attr("id", "inputForStartTime" + b);
    } while (b < startTimeItem);

    var addEventBtnItem = $('input[name$="goButton"]').length;
    var x = 0;
    do {
        var eventBtnThatBelongsThere = $('input[name$="goButton"]').eq(x);
        x++;
        eventBtnThatBelongsThere.attr("id", "addEventBtn" + x);
    } while (x < addEventBtnItem);

    var removeEventBtnItem = $('button[name$="goRemoveEvents"]').length;
    var y = 0;
    do {
        var deleteBtnThatBelongsThere = $('button[name$="goRemoveEvents"]').eq(y);
        y++;
        deleteBtnThatBelongsThere.attr("id", "removeEventBtn" + y);
    } while (y < removeEventBtnItem);

    var noOfTimeLine = $('.timeline-article').length;
    var z = 0;
    do {
        var eventThatBelongsThere = $('.timeline-article').eq(z);
        z++;
        eventThatBelongsThere.attr("id", "eventSet" + z);
    } while (z < noOfTimeLine);

    var noOfLeftEvent = $('.content-left').length;
    var indexForNoOfLeftEvent = 0;
    var noToGiveForNoOfLeftEvent = 1;
    do {
        var leftEventThatBelongsThere = $('.content-left').eq(indexForNoOfLeftEvent);
        leftEventThatBelongsThere.attr("id", "divForCPE" + noToGiveForNoOfLeftEvent);
        indexForNoOfLeftEvent++;
        noToGiveForNoOfLeftEvent += 2;
    } while (indexForNoOfLeftEvent < noOfLeftEvent);

    var noOfTextAreaEvent = $('textarea[name$="textAreasForEvents"]').length;
    var indexForNoOfTextAreaEvent = 0;
    do {
        var textAreaEventThatBelongsThere = $('textarea[name$="textAreasForEvents"]').eq(indexForNoOfTextAreaEvent);
        indexForNoOfTextAreaEvent++;
        textAreaEventThatBelongsThere.attr("id", "textAreaSet" + indexForNoOfTextAreaEvent);
    } while (indexForNoOfTextAreaEvent < noOfTextAreaEvent);

    var noOfRightEvent = $('.content-right').length;
    var indexForNoOfRightEvent = 0;
    var noToGiveForNoOfRightEvent = 2;
    do {
        var rightEventThatBelongsThere = $('.content-right').eq(indexForNoOfRightEvent);
        rightEventThatBelongsThere.attr("id", "divForCPE" + noToGiveForNoOfRightEvent);
        indexForNoOfRightEvent++;
        noToGiveForNoOfRightEvent += 2;
    } while (indexForNoOfRightEvent < noOfRightEvent);

    var noOfHeaderForEvent = $('.headerForEvent').length;
    var indexForHeaderForEvent = 0;
    do {
        var headerEventThatBelongsThere = $('.headerForEvent').eq(indexForHeaderForEvent);
        indexForHeaderForEvent++;
        headerEventThatBelongsThere.attr("id", "uniqueheaderForEvent" + indexForHeaderForEvent);
    } while (indexForHeaderForEvent < noOfHeaderForEvent);

    var noOfColorPickerEvent = $('input[name$="colorPickerForEvent"]').length;
    var indexForColorInputEvent = 0;
    do {
        var colorPickerEventThatBelongsThere = $('input[name$="colorPickerForEvent"]').eq(indexForColorInputEvent);
        indexForColorInputEvent++;
        colorPickerEventThatBelongsThere.attr("id", "colorForEvent" + indexForColorInputEvent);
    } while (indexForColorInputEvent < noOfColorPickerEvent);
    //Event ends



    //If sessionStorage is not empty
    if (sessionStorage.length != 0) {
        //Get all sessionStorage data
        var headerForNotesStoredArray = JSON.parse(sessionStorage.getItem("headerForNotesArray"));//no brackets
        var colorPickerForNoteArrayStoredArray = JSON.parse(sessionStorage.getItem("colorPickerForNoteArray"));//no brackets
        var goTextAreaArrayStoredArray = JSON.parse(sessionStorage.getItem("goTextAreaArray"));//no brackets
        var notesLastModifiedByArrayStoredArray = JSON.parse(sessionStorage.getItem("notesLastModifiedByArray"));//no brackets
        document.getElementById("copiedLbl").innerHTML = "Copied to Clipboard"

        var noOfHeadersForNotes = $('.headersNotes').length;
        var everythingisCopiedHere = 0;

        //If stored array is not empty, myCheck checkbox will be checked when the note is already stored in session storage
        if(headerForNotesStoredArray != ""){
                if(headerForNotesStoredArray != null){ 
                    for (a = 0; a < headerForNotesStoredArray.length; a++) {
                        for(v = 0; v < noOfHeadersForNotes; v++){
                            if(headerForNotesStoredArray[a] == document.getElementById("headerForNotes" + (v + 1)).value){
                                if(colorPickerForNoteArrayStoredArray[a] == document.getElementById("color" + (v + 1)).value){
                                    if(goTextAreaArrayStoredArray[a] == document.getElementById("textArea" + (v + 1)).value){
                                        if(notesLastModifiedByArrayStoredArray[a] == document.getElementById("lastModifiedBy" + (v + 1)).value){
                                            document.getElementById("myCheck" + (v + 1)).checked = true;
                                            everythingisCopiedHere++;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
            }
            else{
                document.getElementById("copiedLbl").innerHTML = ""
            }
        }
        else{
            document.getElementById("copiedLbl").innerHTML = ""
        }
    }






    // Putting hour (duration), minutes and time into respective place
    var noOfTempDurationHolder = $('.displayDuration').length;
    var indexForTempDurationHolder = 0;
    do {
        var theTempDurationHolder = $('.displayDuration').eq(indexForTempDurationHolder);
        indexForTempDurationHolder++;
        theTempDurationHolder.attr("id", "displayDuration" + indexForTempDurationHolder);
    } while (indexForTempDurationHolder < noOfTempDurationHolder);

    var noOfTempMinutesHolder = $('.displayMinutes').length;
    var indexForTempMinutesHolder = 0;
    do {
        var theTempMinutesHolder = $('.displayMinutes').eq(indexForTempMinutesHolder);
        indexForTempMinutesHolder++;
        theTempMinutesHolder.attr("id", "displayMinutes" + indexForTempMinutesHolder);
    } while (indexForTempMinutesHolder < noOfTempMinutesHolder);

    var noOfTempTimeHolder = $('.displayTime').length;
    var indexForTempTimeHolder = 0;
    do {
        var theTempTimeHolder = $('.displayTime').eq(indexForTempTimeHolder);
        indexForTempTimeHolder++;
        theTempTimeHolder.attr("id", "displayTime" + indexForTempTimeHolder);
    } while (indexForTempTimeHolder < noOfTempTimeHolder);

    var noOfTempHolders = $('.displayDuration').length;
    // Put in respective place
    for (indexForPlacing = 1; indexForPlacing <= noOfTempHolders; indexForPlacing++) {
        var thatDuration = "addDurationInput" + indexForPlacing;
        var thatTempDuration = "displayDuration" + indexForPlacing;
        document.getElementById(thatDuration).value = document.getElementById(thatTempDuration).value;
        var thatMinutes = "addMinutesInput" + indexForPlacing;
        var thatTempMinutes = "displayMinutes" + indexForPlacing;
        document.getElementById(thatMinutes).value = document.getElementById(thatTempMinutes).value;
        var thatTime = "inputForStartTime" + indexForPlacing;
        var thatTempTime = "displayTime" + indexForPlacing;
        document.getElementById(thatTime).value = document.getElementById(thatTempTime).value;
    }
});






function checkeverytime() {
    // All Notes related that has an id: 1) outer div, 2) header, 3) textarea, 4) colorpicker 5) delete button
    var noOfDivForNC = $('.parent').length;
    var indexForDivForNC = 0;
    do {
        var notesDivForNCThatBelongsThere = $('.parent').eq(indexForDivForNC);
        var colorPickerThere = $('input[name$="colorPickerForNote"]').eq(indexForDivForNC);
        indexForDivForNC++;
        notesDivForNCThatBelongsThere.attr("id", "divForNC" + indexForDivForNC);
        colorPickerThere.attr("id", "color" + indexForDivForNC);
    } while (indexForDivForNC < noOfDivForNC);

    var removeNotesBtnItems = $('button[name$="goRemoveNotes"]').length;
    var indexForRemoveNotesBtn = 0;
    do {
        var deleteNoteBtnThatBelongsThere = $('button[name$="goRemoveNotes"]').eq(indexForRemoveNotesBtn);
        indexForRemoveNotesBtn++;
        deleteNoteBtnThatBelongsThere.attr("id", "removeBtn" + indexForRemoveNotesBtn);
    } while (indexForRemoveNotesBtn < removeNotesBtnItems);

    var noOfTextAreaForNotes = $('textarea[name$="goTextArea"]').length;
    var indexForTextAreaForNotes = 0;
    do {
        var textAreaForNotesThatBelongsThere = $('textarea[name$="goTextArea"]').eq(indexForTextAreaForNotes);
        indexForTextAreaForNotes++;
        textAreaForNotesThatBelongsThere.attr("id", "textArea" + indexForTextAreaForNotes);
    } while (indexForTextAreaForNotes < noOfTextAreaForNotes);

    var noOfHeadersForNotes = $('.headersNotes').length;
    var indexForHeaderForNotes = 0;
    do {
        var headersForNotesThatBelongsThere = $('.headersNotes').eq(indexForHeaderForNotes);
        indexForHeaderForNotes++;
        headersForNotesThatBelongsThere.attr("id", "headerForNotes" + indexForHeaderForNotes);
    } while (indexForHeaderForNotes < noOfHeadersForNotes);
    //Note ends




    

    var myCheckItems = $('input[name$="myCheck"]').length;
    var indexFormyCheck = 0;
    do {
        var myCheckThatBelongsThere = $('input[name$="myCheck"]').eq(indexFormyCheck);
        indexFormyCheck++;
        myCheckThatBelongsThere.attr("id", "myCheck" + indexFormyCheck);
    } while (indexFormyCheck < myCheckItems);




    // All Event related that has an id: 1) colorPicker, 2) Hour/Duration, 3) Minutes, 4) Start Time, 5) Add Event, 6) Remove Event, 7) timeline-article, 8) content-left, 9) textarea, 10) content-right, 11) headerForEvent, 12) span Circle
    var durationItem = $('input[name$="goDuration"]').length;
    var i = 0;
    do {
        var durationInputThatBelongsThere = $('input[name$="goDuration"]').eq(i);
        var circleSpanThatBelongsThere = $('.date').eq(i)
        i++;
        durationInputThatBelongsThere.attr("id", "addDurationInput" + i);
        circleSpanThatBelongsThere.attr("id", "circleForEvent" + i);
    } while (i < durationItem);

    var minutesItem = $('input[name$="goMinutes"]').length;
    var j = 0;
    do {
        var minutesInputThatBelongsThere = $('input[name$="goMinutes"]').eq(j);
        j++;
        minutesInputThatBelongsThere.attr("id", "addMinutesInput" + j);
    } while (j < minutesItem);

    var startTimeItem = $('input[name$="goTime"]').length;
    var b = 0;
    do {
        var startTimeInputThatBelongsThere = $('input[name$="goTime"]').eq(b);
        b++;
        startTimeInputThatBelongsThere.attr("id", "inputForStartTime" + b);
    } while (b < startTimeItem);

    var addEventBtnItem = $('input[name$="goButton"]').length;
    var x = 0;
    do {
        var eventBtnThatBelongsThere = $('input[name$="goButton"]').eq(x);
        x++;
        eventBtnThatBelongsThere.attr("id", "addEventBtn" + x);
    } while (x < addEventBtnItem);

    var removeEventBtnItem = $('button[name$="goRemoveEvents"]').length;
    var y = 0;
    do {
        var deleteBtnThatBelongsThere = $('button[name$="goRemoveEvents"]').eq(y);
        y++;
        deleteBtnThatBelongsThere.attr("id", "removeEventBtn" + y);
    } while (y < removeEventBtnItem);

    var noOfTimeLine = $('.timeline-article').length;
    var z = 0;
    do {
        var eventThatBelongsThere = $('.timeline-article').eq(z);
        z++;
        eventThatBelongsThere.attr("id", "eventSet" + z);
    } while (z < noOfTimeLine);

    var noOfLeftEvent = $('.content-left').length;
    var indexForNoOfLeftEvent = 0;
    var noToGiveForNoOfLeftEvent = 1;
    do {
        var leftEventThatBelongsThere = $('.content-left').eq(indexForNoOfLeftEvent);
        leftEventThatBelongsThere.attr("id", "divForCPE" + noToGiveForNoOfLeftEvent);
        indexForNoOfLeftEvent++;
        noToGiveForNoOfLeftEvent += 2;
    } while (indexForNoOfLeftEvent < noOfLeftEvent);

    var noOfTextAreaEvent = $('textarea[name$="textAreasForEvents"]').length;
    var indexForNoOfTextAreaEvent = 0;
    do {
        var textAreaEventThatBelongsThere = $('textarea[name$="textAreasForEvents"]').eq(indexForNoOfTextAreaEvent);
        indexForNoOfTextAreaEvent++;
        textAreaEventThatBelongsThere.attr("id", "textAreaSet" + indexForNoOfTextAreaEvent);
    } while (indexForNoOfTextAreaEvent < noOfTextAreaEvent);

    var noOfRightEvent = $('.content-right').length;
    var indexForNoOfRightEvent = 0;
    var noToGiveForNoOfRightEvent = 2;
    do {
        var rightEventThatBelongsThere = $('.content-right').eq(indexForNoOfRightEvent);
        rightEventThatBelongsThere.attr("id", "divForCPE" + noToGiveForNoOfRightEvent);
        indexForNoOfRightEvent++;
        noToGiveForNoOfRightEvent += 2;
    } while (indexForNoOfRightEvent < noOfRightEvent);

    var noOfHeaderForEvent = $('.headerForEvent').length;
    var indexForHeaderForEvent = 0;
    do {
        var headerEventThatBelongsThere = $('.headerForEvent').eq(indexForHeaderForEvent);
        indexForHeaderForEvent++;
        headerEventThatBelongsThere.attr("id", "uniqueheaderForEvent" + indexForHeaderForEvent);
    } while (indexForHeaderForEvent < noOfHeaderForEvent);

    var noOfColorPickerEvent = $('input[name$="colorPickerForEvent"]').length;
    var indexForColorInputEvent = 0;
    do {
        var colorPickerEventThatBelongsThere = $('input[name$="colorPickerForEvent"]').eq(indexForColorInputEvent);
        indexForColorInputEvent++;
        colorPickerEventThatBelongsThere.attr("id", "colorForEvent" + indexForColorInputEvent);
    } while (indexForColorInputEvent < noOfColorPickerEvent);
    //Event ends
}





// Add new note
var myVar
var counterForNotes = 12;
$('#addNewNoteBtn').on('click', function () {
    document.getElementById("overlayForNotes").style.display = "block";
    myVar = setTimeout(makeOverlayGone, 4000);
    // <h4 id='headerForNotes" + counterForNotes + "' contenteditable='true' data-placeholder='Title...' class='headersNotes'></h4>
    $("#flexContainerId").append("<div class='parent' id='divForNC" + counterForNotes + "' style='background-color: #c0c0c0'><input name='headerForNotesName' placeholder='Title...' id='headerForNotes" + counterForNotes + "' class='headersNotes' style='background-color: #c0c0c0'><input title='Use this button to change the color of the note' type='color' value='#c0c0c0' id='color" + counterForNotes + "' name='colorPickerForNote'><button title='Use this button to delete this note' type='button' name='goRemoveNotes' id='removeBtn" + counterForNotes + "' class='btn btn-danger' >Delete</button><textarea class='notesTextArea' id='textArea" + counterForNotes + "' name='goTextArea'></textarea></div>");
    counterForNotes++;
    var newscript = document.createElement('script');
    var insidescript = document.createTextNode("tinymce.init({selector: 'textarea:not(.commentsInput)', content_css: '//www.tiny.cloud/css/codepen.min.css', plugins: 'print preview searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap emoticons', toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment', image_title: true, automatic_uploads: true, file_picker_types: 'image', file_picker_callback: function (cb, value, meta) {var input = document.createElement('input'); input.setAttribute('type', 'file'); input.setAttribute('accept', 'image/*'); input.onchange = function () { var file = this.files[0]; var reader = new FileReader(); reader.onload = function () { var id = 'blobid' + (new Date()).getTime(); var blobCache = tinymce.activeEditor.editorUpload.blobCache; var base64 = reader.result.split(',')[1]; var blobInfo = blobCache.create(id, file, base64); blobCache.add(blobInfo); cb(blobInfo.blobUri(), { title: file.name }); }; reader.readAsDataURL(file); }; input.click();}});");
    newscript.appendChild(insidescript);
    $("textarea").append(newscript);
});

$('#flexContainerId').on('change', 'input[name$="colorPickerForNote"]', function () {
    var specificIdOfColorPicker = event.target.id;
    console.log(specificIdOfColorPicker);
    var noFromSpecificIdOfColorPicker = specificIdOfColorPicker.substring(5, specificIdOfColorPicker.length);
    console.log(noFromSpecificIdOfColorPicker);
    //alert(noFromSpecificIdOfColorPicker);
    var textForDiv = "divForNC" + noFromSpecificIdOfColorPicker;
    document.getElementById(textForDiv).style.backgroundColor = event.target.value;
    var inputHeaderToChange = "headerForNotes" + noFromSpecificIdOfColorPicker;
    document.getElementById(inputHeaderToChange).style.backgroundColor = event.target.value;
});

$('#flexContainerId').on('click', 'button[name$="goRemoveNotes"]', function () {
    var idOfClickedRemoveBtn = this.id;
    var noFromIdOfClickedRemoveBtn = idOfClickedRemoveBtn.substring(9, idOfClickedRemoveBtn.length);
    //alert(noFromIdOfClickedRemoveBtn);
    var divToDelete = "divForNC" + noFromIdOfClickedRemoveBtn;
    console.log(divToDelete);
    var noteToRemove = document.getElementById(divToDelete);

    var rmv = confirm("Are you sure you want to delete this note?");
    if (rmv == true) {
        noteToRemove.remove();
        console.log("Removed successfully: " + noteToRemove);
    }
    else {
        console.log("Failed to remove");
    }
});

var secondMyVar;
var counter = 2;
var counterColorForEvent = 3;
var secondCounterColorForEvent = 4;
$('#containerBox').on('click', 'input[name$="goButton"]', function () {

    document.getElementById("overlay").style.display = "block";
    secondMyVar = setTimeout(off, 1000);
    // tinymce.remove();

    var specificId = event.target.id;
    var noFromSpecificId = specificId.substring(11, specificId.length);
    var text = $('#spanForAN' + noFromSpecificId).html();
    noFromSpecificId++;
    //If want to give index 1 2 3 for the events

    //If want to put date there
    // <h4 class='headerForEvent' contenteditable='true' id='uniqueheaderForEvent" + counterColorForEvent + "' data-placeholder='Title...'></h4>
    // <h4 contenteditable='true' id='uniqueheaderForEvent" + secondCounterColorForEvent + "' class='headerForEvent' data-placeholder='Title...'></h4>

    var idOfTheEventToDelete = this.id;
    var noFromIdOfTheEventToDelete = idOfTheEventToDelete.substring(11, idOfTheEventToDelete.length);
    var whereToInsertAfter = document.getElementById("eventSet" + noFromIdOfTheEventToDelete);
    $("<div class='timeline-article' id='eventSet" + counter + "'><div class='content-left-container'><div class='content-left' style='background-color: #8080ff' id='divForCPE" + counterColorForEvent + "'><input name='headerForEventName' placeholder='Title...' id='uniqueheaderForEvent" + counterColorForEvent + "' class='headerForEvent' style='background-color: #8080ff'><textarea id='textAreaSet" + counterColorForEvent + "' name='textAreasForEvents' style='height: 400px' class='taclass' contenteditable='true'></textarea><input title='Use this button to change the color of the note' type='color' value='#8080ff' name='colorPickerForEvent' id='colorForEvent" + counterColorForEvent + "' /></div><label>Duration:</label><br /><input type='number' min='0' max='23' name='goDuration' style='width: 50px' id='addDurationInput" + counter + "' />&nbsp<label>hour(s)</label>&nbsp<input type='number' min='0' max='59' name='goMinutes' style='width: 50px' id='addMinutesInput" + counter + "' />&nbsp<label>minute(s)</label><br /><label>Start Time:</label><br /><input name='goTime' type='time' id='inputForStartTime" + counter + "' /></div><div class='content-right-container'><div class='content-right' style='background-color: #80ff00' id='divForCPE" + secondCounterColorForEvent + "'><input name='headerForEventName' placeholder='Title...' id='uniqueheaderForEvent" + secondCounterColorForEvent + "' class='headerForEvent' style='background-color: #80ff00'><textarea id='textAreaSet" + secondCounterColorForEvent + "' name='textAreasForEvents' style='height: 400px' class='taclass' contenteditable='true'></textarea><input title='Use this button to change the color of the note' type='color' value='#80ff00' name='colorPickerForEvent' id='colorForEvent" + secondCounterColorForEvent + "'/></div></div><div class='meta-date'><span class='date' id='circleForEvent" + counter + "'></span></div><button title='Use this button to delete this event' type='button' name='goRemoveEvents' id='removeEventBtn" + counter + "' class='btn clever-btn btn-2' style='display: block; margin-left: auto; margin-right: auto; margin-bottom: 50px; margin-top: 300px'><i class='fa fa-trash' style='font-size: 18px'></i></button><input type='button' value='+' class='btn clever-btn btn-2' name='goButton' title='Use this button to add an event' style='display: block; margin: auto; max-width: 300px; margin-top: 150px; background: #00b0bd; color: rgba(0, 0, 0, 0.50); font-size:xx-large' id='addEventBtn" + counter + "' /></div>").insertAfter(whereToInsertAfter);

    var newscript = document.createElement('script');
    var insidescript = document.createTextNode("tinymce.init({selector: 'textarea:not(.commentsInput)', content_css: '//www.tiny.cloud/css/codepen.min.css', plugins: 'print preview searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap emoticons', toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl | showcomments addcomment', image_title: true, automatic_uploads: true, file_picker_types: 'image', file_picker_callback: function (cb, value, meta) {var input = document.createElement('input'); input.setAttribute('type', 'file'); input.setAttribute('accept', 'image/*'); input.onchange = function () { var file = this.files[0]; var reader = new FileReader(); reader.onload = function () { var id = 'blobid' + (new Date()).getTime(); var blobCache = tinymce.activeEditor.editorUpload.blobCache; var base64 = reader.result.split(',')[1]; var blobInfo = blobCache.create(id, file, base64); blobCache.add(blobInfo); cb(blobInfo.blobUri(), { title: file.name }); }; reader.readAsDataURL(file); }; input.click();}});");
    newscript.appendChild(insidescript);
    $(".taclass").append(newscript);

    //check how many divs are created, then take the digit from the id of the button that was clicked (E.g. 1 from addEventBtn1), pass it to the span's id (E.g. spanForAN1), take out text of that span, 

    //test if spanForAN4's index is 2 (if created after 1), if yes then switch spanForAN4's text from 
    counter++;
    counterColorForEvent += 2;
    secondCounterColorForEvent += 2;;
});

$('#containerBox').on('click', 'button[name$="goRemoveEvents"]', function () {
    console.log("START")
    var idOfClickedRemoveEventBtn = this.id;
    var noFromIdOfClickedRemoveEventBtn = idOfClickedRemoveEventBtn.substring(14, idOfClickedRemoveEventBtn.length);
    //console.log(noFromIdOfClickedRemoveEventBtn);
    var eventSetToDelete = "eventSet" + noFromIdOfClickedRemoveEventBtn;
    console.log("EVENT SET TO DELETE: " + eventSetToDelete)
    var setOfEventToRemove = document.getElementById(eventSetToDelete);
    console.log("SET OF EVENT TO REMOVE: " + setOfEventToRemove)

    var del = confirm("Are you sure you want to delete this event?");
    if (del == true) {
        var eventSetToDelete = "eventSet" + noFromIdOfClickedRemoveEventBtn;
        console.log("EVENT SET TO DELETE: " + eventSetToDelete)
        var setOfEventToRemove = document.getElementById(eventSetToDelete);
        console.log("SET OF EVENT TO REMOVE: " + setOfEventToRemove)

        setOfEventToRemove.remove();
        console.log("REMOVED SUCCESS: " + setOfEventToRemove)
    }
    else {
        console.log("EVENT SET TO DELETE: " + eventSetToDelete)
        console.log("SET OF EVENT TO REMOVE: " + setOfEventToRemove)
        console.log("FAILED TO REMOVE")
    }
});

$('#containerBox').on('change', 'input[name$="colorPickerForEvent"]', function () {
    var specificIdOfCPE = event.target.id;
    console.log(specificIdOfCPE);
    var noFromSpecificIdOfCPE = specificIdOfCPE.substring(13, specificIdOfCPE.length);
    console.log(noFromSpecificIdOfCPE);
    //alert(noFromSpecificIdOfCPE);
    var colorForDiv = "divForCPE" + noFromSpecificIdOfCPE;
    document.getElementById(colorForDiv).style.backgroundColor = event.target.value;
    var inputHeaderEventToChange = "uniqueheaderForEvent" + noFromSpecificIdOfCPE;
    document.getElementById(inputHeaderEventToChange).style.backgroundColor = event.target.value;
});

// $('#addNewNoteBtn').on('click', function() {
//     alert('Hello');
// });

tinyMCE.triggerSave();
var noteD = '{"author":[],"authorEmail":[],"theModuleCode":[],"dateAndTimeCreated":[],"headerForNotesName":[],"colorPickerForNotes":[],"goTextArea":[],"headerForEventName":[],"textAreasForEvents":[],"colorPickerForEvent":[],"goDuration":[],"goMinutes":[],"goTime":[],"nameOfLessonPlan":[],"commitMsg":[],"lastModified":[],"notesLastModifiedBy":[],"eventsLastModifiedBy":[]}'
function saveToJSON() {
    var noOfHeadersNotes = $('.headersNotes').length;
    console.log(noOfHeadersNotes);
    // headerForNotesName
    for (var indexForSavingHeadersNotes = 1; indexForSavingHeadersNotes <= noOfHeadersNotes; indexForSavingHeadersNotes++) {
        // save the header contents first
        var headerToPush = document.getElementById('headerForNotes' + indexForSavingHeadersNotes).value;
        var obj = JSON.parse(noteD);
        obj['headerForNotesName'].push(headerToPush);
        noteD = JSON.stringify(obj);
    }
    // colorPickerForNotes
    for (var indexForSavingColorNotes = 1; indexForSavingColorNotes <= noOfHeadersNotes; indexForSavingColorNotes++) {
        // save color of notes
        var colorNotesToPush = document.getElementById('color' + indexForSavingColorNotes).value;
        var obj2 = JSON.parse(noteD);
        obj2['colorPickerForNotes'].push(colorNotesToPush);
        noteD = JSON.stringify(obj2);
    }
    // goTextArea
    for (var indexForSavingTextAreaNotes = 1; indexForSavingTextAreaNotes <= noOfHeadersNotes; indexForSavingTextAreaNotes++) {
        // save text area notes
        var textAreaNotesToPush = document.getElementById('textArea' + indexForSavingTextAreaNotes).value;
        var obj3 = JSON.parse(noteD);
        obj3['goTextArea'].push(textAreaNotesToPush);
        noteD = JSON.stringify(obj3);
    }
    // headerForEventName
    var noOfHeaderEvent = $('.headerForEvent').length;
    for (var indexForSavingEventNotes = 1; indexForSavingEventNotes <= noOfHeaderEvent; indexForSavingEventNotes++) {
        // save the event header contents
        var headerEventToPush = document.getElementById('uniqueheaderForEvent' + indexForSavingEventNotes).value;
        var obj4 = JSON.parse(noteD);
        obj4['headerForEventName'].push(headerEventToPush);
        noteD = JSON.stringify(obj4);
    }
    // textAreasForEvents
    for (var indexForSavingEventTextAreas = 1; indexForSavingEventTextAreas <= noOfHeaderEvent; indexForSavingEventTextAreas++) {
        var textAreaEventToPush = document.getElementById('textAreaSet' + indexForSavingEventTextAreas).value;
        var obj5 = JSON.parse(noteD);
        obj5['textAreasForEvents'].push(textAreaEventToPush);
        noteD = JSON.stringify(obj5);
    }
    // colorPickerForEvent
    for (var indexForSavingColorEvent = 1; indexForSavingColorEvent <= noOfHeaderEvent; indexForSavingColorEvent++) {
        var colorEventToPush = document.getElementById('colorForEvent' + indexForSavingColorEvent).value;
        var obj6 = JSON.parse(noteD);
        obj6['colorPickerForEvent'].push(colorEventToPush);
        noteD = JSON.stringify(obj6);
    }
    // goDuration
    var noOfTimeInputs = $('input[name$="goTime"]').length;
    for (var indexForHourEvent = 1; indexForHourEvent <= noOfTimeInputs; indexForHourEvent++) {
        var hourEventToPush = document.getElementById('addDurationInput' + indexForHourEvent).value;
        var obj7 = JSON.parse(noteD);
        obj7['goDuration'].push(hourEventToPush);
        noteD = JSON.stringify(obj7);
    }
    // goMinutes
    for (var indexForMinuteEvent = 1; indexForMinuteEvent <= noOfTimeInputs; indexForMinuteEvent++) {
        var minuteEventToPush = document.getElementById('addMinutesInput' + indexForMinuteEvent).value;
        var obj8 = JSON.parse(noteD);
        obj8['goMinutes'].push(minuteEventToPush);
        noteD = JSON.stringify(obj8);
    }
    // goTime
    for (var indexForTimeEvent = 1; indexForTimeEvent <= noOfTimeInputs; indexForTimeEvent++) {
        var timeEventToPush = document.getElementById('inputForStartTime' + indexForTimeEvent).value;
        var obj9 = JSON.parse(noteD);
        obj9['goTime'].push(timeEventToPush);
        noteD = JSON.stringify(obj9);
    }
    // nameOfLessonPlan
    var nameOfLessonPlanToPush = document.getElementById('nameOfLessonPlanDisplayed').innerText;
    var obj10 = JSON.parse(noteD);
    obj10['nameOfLessonPlan'].push(nameOfLessonPlanToPush);
    noteD = JSON.stringify(obj10);
    // author
    var authorNameToPush = document.getElementById('authorName').innerText;
    var obj11 = JSON.parse(noteD);
    obj11['author'].push(authorNameToPush);
    noteD = JSON.stringify(obj11);
    // author email
    var authorEmailToPush = document.getElementById('authorEmail').innerText;
    var obj12 = JSON.parse(noteD);
    obj12['authorEmail'].push(authorEmailToPush);
    noteD = JSON.stringify(obj12);
    // module code
    var moduleCodeToPush = document.getElementById('moduleCodeDisplayed').innerText;
    var obj13 = JSON.parse(noteD);
    obj13['theModuleCode'].push(moduleCodeToPush);
    noteD = JSON.stringify(obj13);
    // Date and Time Created
    var dateAndTimeToPush = document.getElementById('creationDateAndTimeForLP').innerText;
    var obj14 = JSON.parse(noteD);
    obj14['dateAndTimeCreated'].push(dateAndTimeToPush);
    noteD = JSON.stringify(obj14);
    // Commit message
    var commitMsgToPush = document.getElementById('commitMsgInput').value;
    var obj15 = JSON.parse(noteD);
    obj15['commitMsg'].push(commitMsgToPush);
    noteD = JSON.stringify(obj15);
    // Last modified
    var lastModifiedToPush = document.getElementById('lastModifiedDateAndTimeDisplayed').innerText;
    var obj16 = JSON.parse(noteD);
    obj16['lastModified'].push(lastModifiedToPush);
    noteD = JSON.stringify(obj16);
    console.log(noteD);
    // console.log(JSON.stringify(noteD));

    // Notes last modified by (notesLastModifiedBy)
    var noOfNotesLastModified = $('.labelForLastModifiedBy').length
    for(var i = 0; i < noOfNotesLastModified; i++) {
        var inputOfNotesLastModified = $('.labelForLastModifiedBy').eq(i).val();
        var obj17 = JSON.parse(noteD);
        obj17['notesLastModifiedBy'].push(inputOfNotesLastModified);
        noteD = JSON.stringify(obj17);
    }

    // Events last modified by (eventsLastModifiedBy)
    var noOfEventsLastModified = $('.labelSetForLastModified').length
    for(var j = 0; j < noOfEventsLastModified; j++) {
        var inputOfEventsLastModified = $('.labelSetForLastModified').eq(j).val();
        var obj18 = JSON.parse(noteD);
        obj18['eventsLastModifiedBy'].push(inputOfEventsLastModified);
        noteD = JSON.stringify(obj18);
    }

    // Allow download with same lesson plan name (nameOfLessonPlanToPush)
    download(nameOfLessonPlanToPush + ".json", noteD);
}

function download(filename, content) {
    var element = document.createElement('a');
    element.style.display = 'none';
    element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}










$('#ModalPopUpForDeletion').on('click', 'button[name$="ConfirmDeleteBtnInModal"]', function () {
    $('#exampleModal').modal('hide');
    var idOfcommentDeleteBtn = document.getElementById("idOfDeleteBtn").innerHTML;
    var idOfcommentDeleteBtnText = idOfcommentDeleteBtn.substring(0, 16);
    var noFromidOfcommentDeleteBtn = parseInt(idOfcommentDeleteBtn.substring(16, idOfcommentDeleteBtn.length));
    var commentToRemove = document.getElementById('commentsDivRight' + noFromidOfcommentDeleteBtn);

    if(idOfcommentDeleteBtnText == 'commentDeleteBtn'){
        commentToRemove.remove();
        $("#CommentCommentBtn1").click()
    }
});


//Check all note to copy
$("#selectAllBtn").click(function(){
    if(document.getElementById("selectAllBtn").innerHTML == "Select All"){
        var noOfHeadersForNotes = $('.headersNotes').length;
        for (i = 0; i < noOfHeadersForNotes; i++) {           
            document.getElementById("myCheck" + (i + 1)).checked = true
        }
        document.getElementById("selectAllBtn").innerHTML = "Unselect All";
    }
    else if(document.getElementById("selectAllBtn").innerHTML == "Unselect All"){
        var noOfHeadersForNotes = $('.headersNotes').length;
        for (i = 0; i < noOfHeadersForNotes; i++) {           
            document.getElementById("myCheck" + (i + 1)).checked = false
        }
        document.getElementById("selectAllBtn").innerHTML = "Select All";
    }
});

$("#copyBtn").click(function(){
    var noOfHeadersForNotes = $('.headersNotes').length;
    var headerForNotesArray = [];
    var colorPickerForNoteArray = [];
    var goTextAreaArray = [];
    var notesLastModifiedByArray = [];

    for (i = 0; i < noOfHeadersForNotes; i++) {
        if(document.getElementById("myCheck" + (i + 1)).checked){
            headerForNotesArray.push(document.getElementById("headerForNotes" + (i + 1)).value)
            colorPickerForNoteArray.push(document.getElementById("color" + (i + 1)).value)
            goTextAreaArray.push(document.getElementById("textArea" + (i + 1)).value)
            notesLastModifiedByArray.push(document.getElementById("lastModifiedBy" + (i + 1)).value)
        }
    }

    window.sessionStorage.setItem("headerForNotesArray", JSON.stringify(headerForNotesArray));
    window.sessionStorage.setItem("colorPickerForNoteArray", JSON.stringify(colorPickerForNoteArray));
    window.sessionStorage.setItem("goTextAreaArray", JSON.stringify(goTextAreaArray));
    window.sessionStorage.setItem("notesLastModifiedByArray", JSON.stringify(notesLastModifiedByArray));

    document.getElementById("copiedLbl").innerHTML = "Copied to Clipboard"
});

$("#clearBtn").click(function(){
    sessionStorage.clear();
    document.getElementById("copiedLbl").innerHTML = "Cleared!"
});