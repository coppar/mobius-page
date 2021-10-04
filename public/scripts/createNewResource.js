
$(document).ready(function() {    
    // All Notes related that has an id: 1) outer div, 2) header, 3) textarea, 4) colorpicker 5) delete button 6) move up button 7) move down button
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
        var lastModifiedLabelForNotes = $('.labelForLastModifiedBy').eq(indexForTextAreaForNotes);
        indexForTextAreaForNotes++;
        textAreaForNotesThatBelongsThere.attr("id", "textArea" + indexForTextAreaForNotes);
        lastModifiedLabelForNotes.attr("id", "lastModifiedBy" + indexForTextAreaForNotes);
    } while (indexForTextAreaForNotes < noOfTextAreaForNotes);

    var noOfHeadersForNotes = $('.headersNotes').length;
    var indexForHeaderForNotes = 0;
    do {
        var headersForNotesThatBelongsThere = $('.headersNotes').eq(indexForHeaderForNotes);
        indexForHeaderForNotes++;
        headersForNotesThatBelongsThere.attr("id", "headerForNotes" + indexForHeaderForNotes);
    } while (indexForHeaderForNotes < noOfHeadersForNotes);

    var moveUpBtnItems = $('button[name$="moveUpBtn"]').length;
    var indexFormoveUpBtn = 0;
    do {
        var moveUpBtnThatBelongsThere = $('button[name$="moveUpBtn"]').eq(indexFormoveUpBtn);
        indexFormoveUpBtn++;
        moveUpBtnThatBelongsThere.attr("id", "moveUpBtn" + indexFormoveUpBtn);
    } while (indexFormoveUpBtn < moveUpBtnItems);

    var moveDownBtnItems = $('button[name$="moveDownBtn"]').length;
    var indexFormoveDownBtn = 0;
    do {
        var moveDownBtnThatBelongsThere = $('button[name$="moveDownBtn"]').eq(indexFormoveDownBtn);
        indexFormoveDownBtn++;
        moveDownBtnThatBelongsThere.attr("id", "moveDownBtn" + indexFormoveDownBtn);
    } while (indexFormoveDownBtn < moveDownBtnItems);

    var commentsTAItems = $('textarea[name$="commentsTA"]').length;
    var indexForcommentsTA = 0;
    do {
        var commentsTAThatBelongsThere = $('textarea[name$="commentsTA"]').eq(indexForcommentsTA);
        indexForcommentsTA++;
        commentsTAThatBelongsThere.attr("id", "commentsTA" + indexForcommentsTA);
    } while (indexForcommentsTA < commentsTAItems);

    var CommentsEditedByItems = $('input[name$="CommentsEditedBy"]').length;
    var indexForCommentsEditedBy = 0;
    do {
        var CommentsEditedByThatBelongsThere = $('input[name$="CommentsEditedBy"]').eq(indexForCommentsEditedBy);
        indexForCommentsEditedBy++;
        CommentsEditedByThatBelongsThere.attr("id", "CommentsEditedBy" + indexForCommentsEditedBy);
    } while (indexForCommentsEditedBy < CommentsEditedByItems);
    // Notes end




    //For Post-Lesson Survey link
    var postLessonSurveyLinkItems = $('a[name$="postLessonSurveyLink"]').length;
    var indexForpostLessonSurveyLink = 0;
    do {
        var postLessonSurveyLinkThatBelongsThere = $('a[name$="postLessonSurveyLink"]').eq(indexForpostLessonSurveyLink);
        indexForpostLessonSurveyLink++;
        postLessonSurveyLinkThatBelongsThere.attr("id", "postLessonSurveyLink" + indexForpostLessonSurveyLink);
    } while (indexForpostLessonSurveyLink < postLessonSurveyLinkItems);


    var deleteLinkBtnItems = $('button[name$="deleteLinkBtn"]').length;
    var indexFordeleteLinkBtn = 0;
    do {
        var deleteLinkBtnThatBelongsThere = $('button[name$="deleteLinkBtn"]').eq(indexFordeleteLinkBtn);
        indexFordeleteLinkBtn++;
        deleteLinkBtnThatBelongsThere.attr("id", "deleteLinkBtn" + indexFordeleteLinkBtn);
    } while (indexFordeleteLinkBtn < deleteLinkBtnItems);


    var postLessonSurveyLinkTbbItems = $('input[name$="postLessonSurveyLinkTbb"]').length;
    var indexForpostLessonSurveyLinkTbb = 0;
    do {
        var postLessonSurveyLinkTbbThatBelongsThere = $('input[name$="postLessonSurveyLinkTbb"]').eq(indexForpostLessonSurveyLinkTbb);
        indexForpostLessonSurveyLinkTbb++;
        postLessonSurveyLinkTbbThatBelongsThere.attr("id", "postLessonSurveyLinkTbb" + indexForpostLessonSurveyLinkTbb);
    } while (indexForpostLessonSurveyLinkTbb < postLessonSurveyLinkTbbItems);
    //Post-Lesson Survey link end




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
        var labelSetForLastModified = $('.labelSetForLastModified').eq(indexForNoOfTextAreaEvent);
        indexForNoOfTextAreaEvent++;
        textAreaEventThatBelongsThere.attr("id", "textAreaSet" + indexForNoOfTextAreaEvent);
        labelSetForLastModified.attr("id", "lastModifiedBySet" + indexForNoOfTextAreaEvent);
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

    var moveUpBtnTLItems = $('button[name$="moveUpBtnTL"]').length;
    var indexFormoveUpBtnTL = 0;
    var idFormoveUpBtnTL = 0;
    do {
        var moveUpBtnTLThatBelongsThere = $('button[name$="moveUpBtnTL"]').eq(indexFormoveUpBtnTL);
        indexFormoveUpBtnTL++;
        idFormoveUpBtnTL += 2;
        moveUpBtnTLThatBelongsThere.attr("id", "moveUpBtnTL" + idFormoveUpBtnTL);
    } while (indexFormoveUpBtnTL < moveUpBtnTLItems);

    var moveDownBtnTLItems = $('button[name$="moveDownBtnTL"]').length;
    var indexFormoveDownBtnTL = 0;
    var idFormoveDownBtnTL = 0;
    do {
        var moveDownBtnTLThatBelongsThere = $('button[name$="moveDownBtnTL"]').eq(indexFormoveDownBtnTL);
        indexFormoveDownBtnTL++;
        idFormoveDownBtnTL += 2;
        moveDownBtnTLThatBelongsThere.attr("id", "moveDownBtnTL" + idFormoveDownBtnTL);
    } while (indexFormoveDownBtnTL < moveDownBtnTLItems);

    var noOfmiddleTimeHidden = $('input[name$="middleTimeHidden"]').length;
    var indexFormiddleTimeHidden = 0;
    do {
        var middleTimeHiddenThatBelongsThere = $('input[name$="middleTimeHidden"]').eq(indexFormiddleTimeHidden);
        indexFormiddleTimeHidden++;
        middleTimeHiddenThatBelongsThere.attr("id", "middleTimeHidden" + indexFormiddleTimeHidden);
    } while (indexFormiddleTimeHidden < noOfmiddleTimeHidden);
    //Event End



    //If start time is not empty, the first green circle will have the start time value
    if (document.getElementById("startTimeInput").value != '') {
        var firstCircle = $('.date').eq(0);
        firstCircle.html(document.getElementById("startTimeInput").value);
        document.getElementById("middleTimeHidden1").value = document.getElementById("startTimeInput").value;
    }

    //Count number of green circle
    var circleForTimeCount = $('.date').length;

    for (t = 1; t <= circleForTimeCount; t++) {

        var circleTime = document.getElementById("middleTimeHidden" + t).value;

        var previousStartTime = circleTime;
        var previousgoDuration = document.getElementById("addDurationInput" + t).value;
        var previousgoMinutes = document.getElementById("addMinutesInput" + t).value;

        //There must be start time, duration and minutes input
        //Calculate the time
        if (previousStartTime != '' && previousgoDuration != '' && previousgoMinutes != '') {
            var strTime = previousStartTime.split(":");
            var theHour = parseInt(strTime[0]);
            var theMin = parseInt(strTime[1]);

            //The previous start time's minute add the minutes user input
            theMin += parseInt(previousgoMinutes);
            var NumberOfHoursIntheMinutes = Math.floor((theMin / 60));
            theMin -= (NumberOfHoursIntheMinutes * 60);

            //Add the number of hours the minute exceeds 60 minute
            theHour += NumberOfHoursIntheMinutes + parseInt(previousgoDuration);

            if (theHour >= 24) {
                theHour -= 24;
            }

            if (theHour < 10) {
                theHour = "0" + theHour;
            }

            if (theMin < 10) {
                theMin = "0" + theMin;
            }

            //Display end time
            var theendTime = $('.endTime').eq(0);
            theendTime.val(theHour + ":" + theMin);

            //The next green circle has the increased time
            if (document.getElementById("middleTimeHidden" + (t + 1)) != undefined) {
                var theCircleTime = $('.date').eq(t);
                theCircleTime.html(theHour + ":" + theMin);
                document.getElementById("middleTimeHidden" + (t + 1)).value = theHour + ":" + theMin;
            }
        }
    }


    var newscript = document.createElement('script');
    var insidescript = document.createTextNode("tinymce.init({selector: 'textarea:not(.commentsInput)', init_instance_callback: function(editor) {editor.on('keyup', function(e) {console.log(editor.id + ' was edited' ); var theEditorId = editor.id; if(theEditorId.includes('Set')) {var justTheNumberFromSet = theEditorId.substring(11, theEditorId.length); var lastModifiedByLabel = 'lastModifiedBySet' + justTheNumberFromSet; document.getElementById(lastModifiedByLabel).value = document.getElementById('userNameHere').innerText;} else {var justTheNumber = theEditorId.substring(8, theEditorId.length); var noteLastModifiedLabel = 'lastModifiedBy' + justTheNumber; document.getElementById(noteLastModifiedLabel).innerHTML = 'Last Modified by: ' + document.getElementById('userNameHere').innerText;} });}, content_css: '//www.tiny.cloud/css/codepen.min.css', plugins: 'print preview searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap emoticons', toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment', image_title: true, automatic_uploads: true, file_picker_types: 'image', file_picker_callback: function (cb, value, meta) {var input = document.createElement('input'); input.setAttribute('type', 'file'); input.setAttribute('accept', 'image/*'); input.onchange = function () { var file = this.files[0]; var reader = new FileReader(); reader.onload = function () { var id = 'blobid' + (new Date()).getTime(); var base64 = reader.result.split(',')[1]; var blobInfo = blobCache.create(id, file, base64); blobCache.add(blobInfo); cb(blobInfo.blobUri(), { title: file.name }); }; reader.readAsDataURL(file); }; input.click();}});");
    newscript.appendChild(insidescript);
    $("textarea").append(newscript);

    $('#removeEventBtn1').attr("disabled", true);
    document.getElementById('removeEventBtn1').style.cursor = "not-allowed";


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
        var lastModifiedLabelForNotes = $('.labelForLastModifiedBy').eq(indexForTextAreaForNotes);
        indexForTextAreaForNotes++;
        textAreaForNotesThatBelongsThere.attr("id", "textArea" + indexForTextAreaForNotes);
        lastModifiedLabelForNotes.attr("id", "lastModifiedBy" + indexForTextAreaForNotes);
    } while (indexForTextAreaForNotes < noOfTextAreaForNotes);

    var noOfHeadersForNotes = $('.headersNotes').length;
    var indexForHeaderForNotes = 0;
    do {
        var headersForNotesThatBelongsThere = $('.headersNotes').eq(indexForHeaderForNotes);
        indexForHeaderForNotes++;
        headersForNotesThatBelongsThere.attr("id", "headerForNotes" + indexForHeaderForNotes);
    } while (indexForHeaderForNotes < noOfHeadersForNotes);

    var moveUpBtnItems = $('button[name$="moveUpBtn"]').length;
    var indexFormoveUpBtn = 0;
    do {
        var moveUpBtnThatBelongsThere = $('button[name$="moveUpBtn"]').eq(indexFormoveUpBtn);
        indexFormoveUpBtn++;
        moveUpBtnThatBelongsThere.attr("id", "moveUpBtn" + indexFormoveUpBtn);
    } while (indexFormoveUpBtn < moveUpBtnItems);

    var moveDownBtnItems = $('button[name$="moveDownBtn"]').length;
    var indexFormoveDownBtn = 0;
    do {
        var moveDownBtnThatBelongsThere = $('button[name$="moveDownBtn"]').eq(indexFormoveDownBtn);
        indexFormoveDownBtn++;
        moveDownBtnThatBelongsThere.attr("id", "moveDownBtn" + indexFormoveDownBtn);
    } while (indexFormoveDownBtn < moveDownBtnItems);

    var commentsTAItems = $('textarea[name$="commentsTA"]').length;
    var indexForcommentsTA = 0;
    do {
        var commentsTAThatBelongsThere = $('textarea[name$="commentsTA"]').eq(indexForcommentsTA);
        indexForcommentsTA++;
        commentsTAThatBelongsThere.attr("id", "commentsTA" + indexForcommentsTA);
    } while (indexForcommentsTA < commentsTAItems);

    var CommentsEditedByItems = $('input[name$="CommentsEditedBy"]').length;
    var indexForCommentsEditedBy = 0;
    do {
        var CommentsEditedByThatBelongsThere = $('input[name$="CommentsEditedBy"]').eq(indexForCommentsEditedBy);
        indexForCommentsEditedBy++;
        CommentsEditedByThatBelongsThere.attr("id", "CommentsEditedBy" + indexForCommentsEditedBy);
    } while (indexForCommentsEditedBy < CommentsEditedByItems);
    //Notes end


    //Post-Lesson Survey link
    var postLessonSurveyLinkItems = $('a[name$="postLessonSurveyLink"]').length;
    var indexForpostLessonSurveyLink = 0;
    do {
        var postLessonSurveyLinkThatBelongsThere = $('a[name$="postLessonSurveyLink"]').eq(indexForpostLessonSurveyLink);
        indexForpostLessonSurveyLink++;
        postLessonSurveyLinkThatBelongsThere.attr("id", "postLessonSurveyLink" + indexForpostLessonSurveyLink);
    } while (indexForpostLessonSurveyLink < postLessonSurveyLinkItems);


    var deleteLinkBtnItems = $('button[name$="deleteLinkBtn"]').length;
    var indexFordeleteLinkBtn = 0;
    do {
        var deleteLinkBtnThatBelongsThere = $('button[name$="deleteLinkBtn"]').eq(indexFordeleteLinkBtn);
        indexFordeleteLinkBtn++;
        deleteLinkBtnThatBelongsThere.attr("id", "deleteLinkBtn" + indexFordeleteLinkBtn);
    } while (indexFordeleteLinkBtn < deleteLinkBtnItems);


    var postLessonSurveyLinkTbbItems = $('input[name$="postLessonSurveyLinkTbb"]').length;
    var indexForpostLessonSurveyLinkTbb = 0;
    do {
        var postLessonSurveyLinkTbbThatBelongsThere = $('input[name$="postLessonSurveyLinkTbb"]').eq(indexForpostLessonSurveyLinkTbb);
        indexForpostLessonSurveyLinkTbb++;
        postLessonSurveyLinkTbbThatBelongsThere.attr("id", "postLessonSurveyLinkTbb" + indexForpostLessonSurveyLinkTbb);
    } while (indexForpostLessonSurveyLinkTbb < postLessonSurveyLinkTbbItems);
    //Post-Lesson Survey link end




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
        var labelSetForLastModified = $('.labelSetForLastModified').eq(indexForNoOfTextAreaEvent);
        indexForNoOfTextAreaEvent++;
        textAreaEventThatBelongsThere.attr("id", "textAreaSet" + indexForNoOfTextAreaEvent);
        labelSetForLastModified.attr("id", "lastModifiedBySet" + indexForNoOfTextAreaEvent);
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

    var moveUpBtnTLItems = $('button[name$="moveUpBtnTL"]').length;
    var indexFormoveUpBtnTL = 0;
    var idFormoveUpBtnTL = 0;
    do {
        var moveUpBtnTLThatBelongsThere = $('button[name$="moveUpBtnTL"]').eq(indexFormoveUpBtnTL);
        indexFormoveUpBtnTL++;
        idFormoveUpBtnTL += 2;
        moveUpBtnTLThatBelongsThere.attr("id", "moveUpBtnTL" + idFormoveUpBtnTL);
    } while (indexFormoveUpBtnTL < moveUpBtnTLItems);

    var moveDownBtnTLItems = $('button[name$="moveDownBtnTL"]').length;
    var indexFormoveDownBtnTL = 0;
    var idFormoveDownBtnTL = 0;
    do {
        var moveDownBtnTLThatBelongsThere = $('button[name$="moveDownBtnTL"]').eq(indexFormoveDownBtnTL);
        indexFormoveDownBtnTL++;
        idFormoveDownBtnTL += 2;
        moveDownBtnTLThatBelongsThere.attr("id", "moveDownBtnTL" + idFormoveDownBtnTL);
    } while (indexFormoveDownBtnTL < moveDownBtnTLItems);

    var noOfmiddleTimeHidden = $('input[name$="middleTimeHidden"]').length;
    var indexFormiddleTimeHidden = 0;
    do {
        var middleTimeHiddenThatBelongsThere = $('input[name$="middleTimeHidden"]').eq(indexFormiddleTimeHidden);
        indexFormiddleTimeHidden++;
        middleTimeHiddenThatBelongsThere.attr("id", "middleTimeHidden" + indexFormiddleTimeHidden);
    } while (indexFormiddleTimeHidden < noOfmiddleTimeHidden);
    //Event End



    //If start time is not empty, the first green circle will have the start time value
    if (document.getElementById("startTimeInput").value != '') {
        var firstCircle = $('.date').eq(0);
        firstCircle.html(document.getElementById("startTimeInput").value);
        document.getElementById("middleTimeHidden1").value = document.getElementById("startTimeInput").value;
    }

    //Count number of green circle
    var circleForTimeCount = $('.date').length;

    for (t = 1; t <= circleForTimeCount; t++) {

        var circleTime = document.getElementById("middleTimeHidden" + t).value;

        var previousStartTime = circleTime;
        var previousgoDuration = document.getElementById("addDurationInput" + t).value;
        var previousgoMinutes = document.getElementById("addMinutesInput" + t).value;

        //There must be start time, duration and minutes input
        //Calculate the time
        if (previousStartTime != '' && previousgoDuration != '' && previousgoMinutes != '') {
            var strTime = previousStartTime.split(":");
            var theHour = parseInt(strTime[0]);
            var theMin = parseInt(strTime[1]);

            //The previous start time's minute add the minutes user input
            theMin += parseInt(previousgoMinutes);
            var NumberOfHoursIntheMinutes = Math.floor((theMin / 60));
            theMin -= (NumberOfHoursIntheMinutes * 60);

            //Add the number of hours the minute exceeds 60 minute
            theHour += NumberOfHoursIntheMinutes + parseInt(previousgoDuration);

            if (theHour >= 24) {
                theHour -= 24;
            }

            if (theHour < 10) {
                theHour = "0" + theHour;
            }

            if (theMin < 10) {
                theMin = "0" + theMin;
            }

            //Display end time
            var theendTime = $('.endTime').eq(0);
            theendTime.val(theHour + ":" + theMin);

            //The next green circle has the increased time
            if (document.getElementById("middleTimeHidden" + (t + 1)) != undefined) {
                var theCircleTime = $('.date').eq(t);
                theCircleTime.html(theHour + ":" + theMin);
                document.getElementById("middleTimeHidden" + (t + 1)).value = theHour + ":" + theMin;
            }
        }
    }

}
// Add new note
var myVar
var counterForNotes = $('.parent').length + 1;
var ClickedOnMoveButtonForFirstTime = 0;
$('#addNewNoteBtn').on('click', function() {
    console.log('hi');
    document.getElementById("overlayForNotes").style.display = "block";
    myVar = setTimeout(makeOverlayGone, 1000);
    tinymce.remove();

    $("#flexContainerId").append("<div class='parent' id='divForNC" + counterForNotes + "' style='background-color: #c0c0c0'><input name='headerForNotesName' placeholder='Title...' id='headerForNotes" + counterForNotes + "' class='headersNotes'><input title='Use this button to change the color of the note' type='color' value='#c0c0c0' id='color" + counterForNotes + "' name='colorPickerForNote'><button title='Use this button to delete this note' type='button' name='goRemoveNotes' id='removeBtn" + counterForNotes + "' <i class='fas fa-times'></i></button><br><button type='button' class='btn btn-info' name='moveUpBtn' id='moveUpBtn" + counterForNotes + "'><i class='fa fa-arrow-up' aria-hidden='true'></i></button>&nbsp;<button type='button' class='btn btn-info' name='moveDownBtn' id='moveDownBtn" + counterForNotes + "'><i class='fa fa-arrow-down' aria-hidden='true'></i></button><textarea class='notesTextArea' id='textArea" + counterForNotes + "' name='goTextArea'></textarea><label style='font-size: large;'>Last Modified by:</label><input readonly id='lastModifiedBy" + counterForNotes + "' class='labelForLastModifiedBy' name='labelForLastModifiedBy'></div>");
    counterForNotes++;
    var newscript = document.createElement('script');
    var insidescript = document.createTextNode("tinymce.init({selector: 'textarea:not(.commentsInput)', init_instance_callback: function(editor) {editor.on('keyup', function(e) {console.log(editor.id + ' was edited' ); var theEditorId = editor.id; if(theEditorId.includes('Set')) {var justTheNumberFromSet = theEditorId.substring(11, theEditorId.length); var lastModifiedByLabel = 'lastModifiedBySet' + justTheNumberFromSet; document.getElementById(lastModifiedByLabel).value = document.getElementById('userNameHere').innerText;} else {var justTheNumber = theEditorId.substring(8, theEditorId.length); var noteLastModifiedLabel = 'lastModifiedBy' + justTheNumber; document.getElementById(noteLastModifiedLabel).value = document.getElementById('userNameHere').innerText;} });}, content_css: '//www.tiny.cloud/css/codepen.min.css', plugins: 'print preview searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap emoticons', toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment', image_title: true, automatic_uploads: true, file_picker_types: 'image', file_picker_callback: function (cb, value, meta) {var input = document.createElement('input'); input.setAttribute('type', 'file'); input.setAttribute('accept', 'image/*'); input.onchange = function () { var file = this.files[0]; var reader = new FileReader(); reader.onload = function () { var id = 'blobid' + (new Date()).getTime(); var base64 = reader.result.split(',')[1]; var blobInfo = blobCache.create(id, file, base64); blobCache.add(blobInfo); cb(blobInfo.blobUri(), { title: file.name }); }; reader.readAsDataURL(file); }; input.click();}});");
    newscript.appendChild(insidescript);
    $("textarea").append(newscript);
    ClickedOnMoveButtonForFirstTime = 0;
});

//Change color for note
$('#flexContainerId').on('change', 'input[name$="colorPickerForNote"]', function() {
    var specificIdOfColorPicker = event.target.id;
    console.log(specificIdOfColorPicker);
    var noFromSpecificIdOfColorPicker = specificIdOfColorPicker.substring(5, specificIdOfColorPicker.length);
    console.log(noFromSpecificIdOfColorPicker);
    var textForDiv = "divForNC" + noFromSpecificIdOfColorPicker;
    document.getElementById(textForDiv).style.backgroundColor = event.target.value;
});


//Move note up
$('#flexContainerId').on('click', 'button[name$="moveUpBtn"]', function() {
    console.log('hello come to line 665');
    tinymce.triggerSave();
    if (ClickedOnMoveButtonForFirstTime == 0) {
        document.getElementById("overlayForNotes").style.display = "block";
        myVar = setTimeout(makeOverlayGone, 1000);
        ClickedOnMoveButtonForFirstTime++;
        tinymce.remove();
        var newscript = document.createElement('script');
        var insidescript = document.createTextNode("tinymce.init({selector: 'textarea:not(.commentsInput)', init_instance_callback: function(editor) {editor.on('keyup', function(e) {console.log(editor.id + ' was edited' ); var theEditorId = editor.id; if(theEditorId.includes('Set')) {var justTheNumberFromSet = theEditorId.substring(11, theEditorId.length); var lastModifiedByLabel = 'lastModifiedBySet' + justTheNumberFromSet; document.getElementById(lastModifiedByLabel).value = document.getElementById('userNameHere').innerText;} else {var justTheNumber = theEditorId.substring(8, theEditorId.length); var noteLastModifiedLabel = 'lastModifiedBy' + justTheNumber; document.getElementById(noteLastModifiedLabel).value = document.getElementById('userNameHere').innerText;} });}, content_css: '//www.tiny.cloud/css/codepen.min.css', plugins: 'print preview searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap emoticons', toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment', image_title: true, automatic_uploads: true, file_picker_types: 'image', file_picker_callback: function (cb, value, meta) {var input = document.createElement('input'); input.setAttribute('type', 'file'); input.setAttribute('accept', 'image/*'); input.onchange = function () { var file = this.files[0]; var reader = new FileReader(); reader.onload = function () { var id = 'blobid' + (new Date()).getTime(); var base64 = reader.result.split(',')[1]; var blobInfo = blobCache.create(id, file, base64); blobCache.add(blobInfo); cb(blobInfo.blobUri(), { title: file.name }); }; reader.readAsDataURL(file); }; input.click();}});");
        newscript.appendChild(insidescript);
        $("textarea").append(newscript);
    }

    var idOfClickedmoveUpBtn = this.id;
    var noFromIdOfClickedmoveUpBtn = parseInt(idOfClickedmoveUpBtn.substring(9, idOfClickedmoveUpBtn.length));

    if (noFromIdOfClickedmoveUpBtn != 1) {
        var theCurrentHeaderForNotes = document.getElementById("headerForNotes" + noFromIdOfClickedmoveUpBtn).value;
        var theAboveHeaderForNotes = document.getElementById("headerForNotes" + (noFromIdOfClickedmoveUpBtn - 1)).value;
        document.getElementById("headerForNotes" + noFromIdOfClickedmoveUpBtn).value = theAboveHeaderForNotes;
        document.getElementById("headerForNotes" + (noFromIdOfClickedmoveUpBtn - 1)).value = theCurrentHeaderForNotes;

        var theCurrentColor = document.getElementById("color" + noFromIdOfClickedmoveUpBtn).value;
        var theAboveColor = document.getElementById("color" + (noFromIdOfClickedmoveUpBtn - 1)).value;
        document.getElementById("color" + noFromIdOfClickedmoveUpBtn).value = theAboveColor;
        document.getElementById("color" + (noFromIdOfClickedmoveUpBtn - 1)).value = theCurrentColor;

        var theCurrentDivForNC = document.getElementById("divForNC" + noFromIdOfClickedmoveUpBtn).style.backgroundColor;
        var theAboveDivForNC = document.getElementById("divForNC" + (noFromIdOfClickedmoveUpBtn - 1)).style.backgroundColor;
        document.getElementById("divForNC" + noFromIdOfClickedmoveUpBtn).style.backgroundColor = theAboveDivForNC;
        document.getElementById("divForNC" + (noFromIdOfClickedmoveUpBtn - 1)).style.backgroundColor = theCurrentDivForNC;

        var theCurrenttextArea = document.getElementById("textArea" + noFromIdOfClickedmoveUpBtn).value;
        var theAbovetextArea = document.getElementById("textArea" + (noFromIdOfClickedmoveUpBtn - 1)).value;
        tinymce.get("textArea" + noFromIdOfClickedmoveUpBtn).setContent(theAbovetextArea);
        tinymce.get("textArea" + (noFromIdOfClickedmoveUpBtn - 1)).setContent(theCurrenttextArea);
        document.getElementById("textArea" + noFromIdOfClickedmoveUpBtn).value = theAbovetextArea;
        document.getElementById("textArea" + (noFromIdOfClickedmoveUpBtn - 1)).value = theCurrenttextArea;

        var theCurrentlastModifiedBy = document.getElementById("lastModifiedBy" + noFromIdOfClickedmoveUpBtn).value;
        var theAbovelastModifiedBy = document.getElementById("lastModifiedBy" + (noFromIdOfClickedmoveUpBtn - 1)).value;
        document.getElementById("lastModifiedBy" + noFromIdOfClickedmoveUpBtn).value = theAbovelastModifiedBy;
        document.getElementById("lastModifiedBy" + (noFromIdOfClickedmoveUpBtn - 1)).value = theCurrentlastModifiedBy;
    }
});

//Move note down
$('#flexContainerId').on('click', 'button[name$="moveDownBtn"]', function() {

    tinymce.triggerSave();
    if (ClickedOnMoveButtonForFirstTime == 0) {
        document.getElementById("overlayForNotes").style.display = "block";
        myVar = setTimeout(makeOverlayGone, 1000);
        ClickedOnMoveButtonForFirstTime++;
        tinymce.remove();
        var newscript = document.createElement('script');
        var insidescript = document.createTextNode("tinymce.init({selector: 'textarea:not(.commentsInput)', init_instance_callback: function(editor) {editor.on('keyup', function(e) {console.log(editor.id + ' was edited' ); var theEditorId = editor.id; if(theEditorId.includes('Set')) {var justTheNumberFromSet = theEditorId.substring(11, theEditorId.length); var lastModifiedByLabel = 'lastModifiedBySet' + justTheNumberFromSet; document.getElementById(lastModifiedByLabel).value = document.getElementById('userNameHere').innerText;} else {var justTheNumber = theEditorId.substring(8, theEditorId.length); var noteLastModifiedLabel = 'lastModifiedBy' + justTheNumber; document.getElementById(noteLastModifiedLabel).value = document.getElementById('userNameHere').innerText;} });}, content_css: '//www.tiny.cloud/css/codepen.min.css', plugins: 'print preview searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap emoticons', toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment', image_title: true, automatic_uploads: true, file_picker_types: 'image', file_picker_callback: function (cb, value, meta) {var input = document.createElement('input'); input.setAttribute('type', 'file'); input.setAttribute('accept', 'image/*'); input.onchange = function () { var file = this.files[0]; var reader = new FileReader(); reader.onload = function () { var id = 'blobid' + (new Date()).getTime(); var base64 = reader.result.split(',')[1]; var blobInfo = blobCache.create(id, file, base64); blobCache.add(blobInfo); cb(blobInfo.blobUri(), { title: file.name }); }; reader.readAsDataURL(file); }; input.click();}});");
        newscript.appendChild(insidescript);
        $("textarea").append(newscript);
    }

    var idOfClickedmoveDownBtn = this.id;
    var noFromIdOfClickedmoveDownBtn = parseInt(idOfClickedmoveDownBtn.substring(11, idOfClickedmoveDownBtn.length));

    var theCurrentHeaderForNotes = document.getElementById("headerForNotes" + (noFromIdOfClickedmoveDownBtn)).value;
    var theBelowHeaderForNotes = document.getElementById("headerForNotes" + (noFromIdOfClickedmoveDownBtn + 1)).value
    document.getElementById("headerForNotes" + noFromIdOfClickedmoveDownBtn).value = theBelowHeaderForNotes;
    document.getElementById("headerForNotes" + (noFromIdOfClickedmoveDownBtn + 1)).value = theCurrentHeaderForNotes;

    var theCurrentColor = document.getElementById("color" + noFromIdOfClickedmoveDownBtn).value;
    var theBelowColor = document.getElementById("color" + (noFromIdOfClickedmoveDownBtn + 1)).value;
    document.getElementById("color" + noFromIdOfClickedmoveDownBtn).value = theBelowColor;
    document.getElementById("color" + (noFromIdOfClickedmoveDownBtn + 1)).value = theCurrentColor;

    var theCurrentDivForNC = document.getElementById("divForNC" + noFromIdOfClickedmoveDownBtn).style.backgroundColor;
    var theBelowDivForNC = document.getElementById("divForNC" + (noFromIdOfClickedmoveDownBtn + 1)).style.backgroundColor;
    document.getElementById("divForNC" + noFromIdOfClickedmoveDownBtn).style.backgroundColor = theBelowDivForNC;
    document.getElementById("divForNC" + (noFromIdOfClickedmoveDownBtn + 1)).style.backgroundColor = theCurrentDivForNC;

    var theCurrenttextArea = document.getElementById("textArea" + noFromIdOfClickedmoveDownBtn).value;
    var theBelowtextArea = document.getElementById("textArea" + (noFromIdOfClickedmoveDownBtn + 1)).value;
    tinymce.get("textArea" + noFromIdOfClickedmoveDownBtn).setContent(theBelowtextArea);
    tinymce.get("textArea" + (noFromIdOfClickedmoveDownBtn + 1)).setContent(theCurrenttextArea);
    document.getElementById("textArea" + noFromIdOfClickedmoveDownBtn).value = theBelowtextArea;
    document.getElementById("textArea" + (noFromIdOfClickedmoveDownBtn + 1)).value = theCurrenttextArea;

    var theCurrentlastModifiedBy = document.getElementById("lastModifiedBy" + noFromIdOfClickedmoveDownBtn).value;
    var theBelowlastModifiedBy = document.getElementById("lastModifiedBy" + (noFromIdOfClickedmoveDownBtn + 1)).value;
    document.getElementById("lastModifiedBy" + noFromIdOfClickedmoveDownBtn).value = theBelowlastModifiedBy;
    document.getElementById("lastModifiedBy" + (noFromIdOfClickedmoveDownBtn + 1)).value = theCurrentlastModifiedBy;

});

// //Flip card in mobile view
// window.addEventListener('resize', flipCard);

// function flipCard(){
//     document.getElementById('rightBtnid').hidden = true;
// }


//Add new event
var noOfTextAreaEvent = $('textarea[name$="textAreasForEvents"]').length;
var secondMyVar;
var counter = 2;
var counterColorForEvent = noOfTextAreaEvent + 1;
var secondCounterColorForEvent = noOfTextAreaEvent + 2;
$('#containerBox').on('click', 'input[name$="goButton"]', function() {
    var circleForTimeCount = $('.date').length;

    var previousStartTime = document.getElementById("startTimeInput").value;
    var previousgoDuration = document.getElementById("addDurationInput" + circleForTimeCount).value;
    var previousgoMinutes = document.getElementById("addMinutesInput" + circleForTimeCount).value;
    if (previousStartTime != '' && previousgoDuration != '' && previousgoMinutes != '') {
        ClickedOnMoveButtonForFirstTime = 0;

        document.getElementById("overlay").style.display = "block";
        secondMyVar = setTimeout(off, 1000);
        tinymce.remove();

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
        $("<div class='timeline-article' id='eventSet" + counter + "'><div class='content-left-container'><div class='content-left' style='background-color: #8080ff' id='divForCPE" + counterColorForEvent + "'><input name='headerForEventName' placeholder='Title...' id='uniqueheaderForEvent" + counterColorForEvent + "' class='headerForEvent' style='background-color: white'><textarea id='textAreaSet" + counterColorForEvent + "' name='textAreasForEvents' style='height: 400px' class='taclass' contenteditable='true'></textarea><input title='Use this button to change the color of the note' type='color' value='#8080ff' name='colorPickerForEvent' id='colorForEvent" + counterColorForEvent + "' /><label style='font-size: small;'>Last Modified By:</label><input readonly class='labelSetForLastModified' name='labelSetForLastModified' id='lastModifiedBySet" + counterColorForEvent + "'></div><label>Duration:</label><br /><input type='number' min='0' max='23' value='0' name='goDuration' style='width: 50px' id='addDurationInput" + counter + "' />&nbsp<label>hour(s)</label>&nbsp<input type='number' min='0' max='59' value='0' name='goMinutes' style='width: 50px' id='addMinutesInput" + counter + "' />&nbsp<label>minute(s)</label></button>&nbsp<button title='Use this button to delete this event' type='button' name='goRemoveEvents' id='removeEventBtn" + counter + "' class='btn clever-btn btn-2'><i class='fa fa-trash' style='font-size: 18px'></i></button><br /><label hidden>Start Time:</label><br /><input name='goTime' type='time' id='inputForStartTime" + counter + "' hidden /></div><div class='content-right-container'><div class='content-right' style='background-color: #80ff00' id='divForCPE" + secondCounterColorForEvent + "'><input name='headerForEventName' placeholder='Title...' id='uniqueheaderForEvent" + secondCounterColorForEvent + "' class='headerForEvent' style='background-color: white'><textarea id='textAreaSet" + secondCounterColorForEvent + "' name='textAreasForEvents' style='height: 400px' class='taclass' contenteditable='true'></textarea><input title='Use this button to change the color of the note' type='color' value='#80ff00' name='colorPickerForEvent' id='colorForEvent" + secondCounterColorForEvent + "'/><label style='font-size: small;'>Last Modified by:</label><input readonly id='lastModifiedBySet" + secondCounterColorForEvent + "' class='labelSetForLastModified' name='labelSetForLastModified'></div></div><div class='meta-date'><span class='date' id='circleForEvent" + counter + "'></span><input name='middleTimeHidden' id='middleTimeHidden" + counter + "' value='00:00' hidden/></div><button type='button' id='moveUpBtnTL" + counter + "' class='btn btn-info' name='moveUpBtnTL' style='display: block; margin-left: auto; margin-right: auto; margin-bottom: 10px; margin-top: 150px;'><i class='fa fa-arrow-up' aria-hidden='true'></i></button><button type='button' id='moveDownBtnTL" + counter + "' class='btn btn-info' name='moveDownBtnTL' style='display: block; margin-left: auto; margin-right: auto; margin-bottom: 10px;'><i class='fa fa-arrow-down' aria-hidden='true'></i></button><input type='button' value='+' class='btn clever-btn btn-2' name='goButton' title='Use this button to add an event' style='display: block; margin: auto; max-width: 300px; margin-top: 110px; background: #00b0bd; color: rgba(0, 0, 0, 0.50); font-size:xx-large' id='addEventBtn" + counter + "' /></div>").insertAfter(whereToInsertAfter);
        checkeverytime();
        var newscript = document.createElement('script');
        var insidescript = document.createTextNode("tinymce.init({selector: 'textarea:not(.commentsInput)', init_instance_callback: function(editor) {editor.on('keyup', function(e) {console.log(editor.id + ' was edited' ); var theEditorId = editor.id; if(theEditorId.includes('Set')) {var justTheNumberFromSet = theEditorId.substring(11, theEditorId.length); var lastModifiedByLabel = 'lastModifiedBySet' + justTheNumberFromSet; document.getElementById(lastModifiedByLabel).value = document.getElementById('userNameHere').innerText;} else {var justTheNumber = theEditorId.substring(8, theEditorId.length); var noteLastModifiedLabel = 'lastModifiedBy' + justTheNumber; document.getElementById(noteLastModifiedLabel).value = document.getElementById('userNameHere').innerText;} });}, content_css: '//www.tiny.cloud/css/codepen.min.css', plugins: 'print preview searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap emoticons', toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment', image_title: true, automatic_uploads: true, file_picker_types: 'image', file_picker_callback: function (cb, value, meta) {var input = document.createElement('input'); input.setAttribute('type', 'file'); input.setAttribute('accept', 'image/*'); input.onchange = function () { var file = this.files[0]; var reader = new FileReader(); reader.onload = function () { var id = 'blobid' + (new Date()).getTime(); var base64 = reader.result.split(',')[1]; var blobInfo = blobCache.create(id, file, base64); blobCache.add(blobInfo); cb(blobInfo.blobUri(), { title: file.name }); }; reader.readAsDataURL(file); }; input.click();}});");
        newscript.appendChild(insidescript);
        $("textarea").append(newscript);

        //check how many divs are created, then take the digit from the id of the button that was clicked (E.g. 1 from addEventBtn1), pass it to the span's id (E.g. spanForAN1), take out text of that span,

        //test if spanForAN4's index is 2 (if created after 1), if yes then switch spanForAN4's text from
        counter++;
        counterColorForEvent += 2;
        secondCounterColorForEvent += 2;

    } else {
        alert("Please fill in Duration and Start Time")
    }
});

function makeOverlayGone() {
    document.getElementById("overlayForNotes").style.display = "none";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

//Change event color
$('#containerBox').on('change', 'input[name$="colorPickerForEvent"]', function() {
    var specificIdOfCPE = event.target.id;
    console.log(specificIdOfCPE);
    var noFromSpecificIdOfCPE = specificIdOfCPE.substring(13, specificIdOfCPE.length);
    console.log(noFromSpecificIdOfCPE);
    var colorForDiv = "divForCPE" + noFromSpecificIdOfCPE;
    document.getElementById(colorForDiv).style.backgroundColor = event.target.value;
});


//Move event up
$('#containerBox').on('click', 'button[name$="moveUpBtnTL"]', function() {
    tinymce.triggerSave();
    if (ClickedOnMoveButtonForFirstTime == 0) {
        //This is for the tinymce to display words when button up is clicked
        document.getElementById("overlayForNotes").style.display = "block";
        myVar = setTimeout(makeOverlayGone, 1000);
        ClickedOnMoveButtonForFirstTime++;
        tinymce.remove();
        var newscript = document.createElement('script');
        var insidescript = document.createTextNode("tinymce.init({selector: 'textarea:not(.commentsInput)', init_instance_callback: function(editor) {editor.on('keyup', function(e) {console.log(editor.id + ' was edited' ); var theEditorId = editor.id; if(theEditorId.includes('Set')) {var justTheNumberFromSet = theEditorId.substring(11, theEditorId.length); var lastModifiedByLabel = 'lastModifiedBySet' + justTheNumberFromSet; document.getElementById(lastModifiedByLabel).value = document.getElementById('userNameHere').innerText;} else {var justTheNumber = theEditorId.substring(8, theEditorId.length); var noteLastModifiedLabel = 'lastModifiedBy' + justTheNumber; document.getElementById(noteLastModifiedLabel).value = document.getElementById('userNameHere').innerText;} });}, content_css: '//www.tiny.cloud/css/codepen.min.css', plugins: 'print preview searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap emoticons', toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment', image_title: true, automatic_uploads: true, file_picker_types: 'image', file_picker_callback: function (cb, value, meta) {var input = document.createElement('input'); input.setAttribute('type', 'file'); input.setAttribute('accept', 'image/*'); input.onchange = function () { var file = this.files[0]; var reader = new FileReader(); reader.onload = function () { var id = 'blobid' + (new Date()).getTime(); var base64 = reader.result.split(',')[1]; var blobInfo = blobCache.create(id, file, base64); blobCache.add(blobInfo); cb(blobInfo.blobUri(), { title: file.name }); }; reader.readAsDataURL(file); }; input.click();}});");
        newscript.appendChild(insidescript);
        $("textarea").append(newscript);

    }
    var idOfClickedmoveUpBtnTL = this.id;
    var noFromIdOfClickedmoveUpBtnTL = parseInt(idOfClickedmoveUpBtnTL.substring(11, idOfClickedmoveUpBtnTL.length));

    if (noFromIdOfClickedmoveUpBtnTL != 2) {

        var theAboveHeaderForNotesLeft = document.getElementById("uniqueheaderForEvent" + (noFromIdOfClickedmoveUpBtnTL - 3)).value;
        var theAboveHeaderForNotesRight = document.getElementById("uniqueheaderForEvent" + (noFromIdOfClickedmoveUpBtnTL - 2)).value;
        var theCurrentHeaderForNotesLeft = document.getElementById("uniqueheaderForEvent" + (noFromIdOfClickedmoveUpBtnTL - 1)).value;
        var theCurrentHeaderForNotesRight = document.getElementById("uniqueheaderForEvent" + noFromIdOfClickedmoveUpBtnTL).value;
        document.getElementById("uniqueheaderForEvent" + (noFromIdOfClickedmoveUpBtnTL - 3)).value = theCurrentHeaderForNotesLeft;
        document.getElementById("uniqueheaderForEvent" + (noFromIdOfClickedmoveUpBtnTL - 1)).value = theAboveHeaderForNotesLeft;
        document.getElementById("uniqueheaderForEvent" + (noFromIdOfClickedmoveUpBtnTL - 2)).value = theCurrentHeaderForNotesRight;
        document.getElementById("uniqueheaderForEvent" + noFromIdOfClickedmoveUpBtnTL).value = theAboveHeaderForNotesRight;

        var theAbovetextAreaSetLeft = document.getElementById("textAreaSet" + (noFromIdOfClickedmoveUpBtnTL - 3)).value;
        var theAbovetextAreaSetRight = document.getElementById("textAreaSet" + (noFromIdOfClickedmoveUpBtnTL - 2)).value;
        var theCurrenttextAreaSetLeft = document.getElementById("textAreaSet" + (noFromIdOfClickedmoveUpBtnTL - 1)).value;
        var theCurrenttextAreaSetRight = document.getElementById("textAreaSet" + noFromIdOfClickedmoveUpBtnTL).value;
        document.getElementById("textAreaSet" + (noFromIdOfClickedmoveUpBtnTL - 3)).value = theCurrenttextAreaSetLeft;
        document.getElementById("textAreaSet" + (noFromIdOfClickedmoveUpBtnTL - 1)).value = theAbovetextAreaSetLeft;
        document.getElementById("textAreaSet" + (noFromIdOfClickedmoveUpBtnTL - 2)).value = theCurrenttextAreaSetRight;
        document.getElementById("textAreaSet" + noFromIdOfClickedmoveUpBtnTL).value = theAbovetextAreaSetRight;
        tinymce.get("textAreaSet" + (noFromIdOfClickedmoveUpBtnTL - 3)).setContent(theCurrenttextAreaSetLeft);
        tinymce.get("textAreaSet" + (noFromIdOfClickedmoveUpBtnTL - 1)).setContent(theAbovetextAreaSetLeft);
        tinymce.get("textAreaSet" + (noFromIdOfClickedmoveUpBtnTL - 2)).setContent(theCurrenttextAreaSetRight);
        tinymce.get("textAreaSet" + noFromIdOfClickedmoveUpBtnTL).setContent(theAbovetextAreaSetRight);

        var theAbovelastModifiedBySetLeft = document.getElementById("lastModifiedBySet" + (noFromIdOfClickedmoveUpBtnTL - 3)).value;
        var theAbovelastModifiedBySetRight = document.getElementById("lastModifiedBySet" + (noFromIdOfClickedmoveUpBtnTL - 2)).value;
        var theCurrentlastModifiedBySetLeft = document.getElementById("lastModifiedBySet" + (noFromIdOfClickedmoveUpBtnTL - 1)).value;
        var theCurrentlastModifiedBySetRight = document.getElementById("lastModifiedBySet" + noFromIdOfClickedmoveUpBtnTL).value;
        document.getElementById("lastModifiedBySet" + (noFromIdOfClickedmoveUpBtnTL - 3)).value = theCurrentlastModifiedBySetLeft;
        document.getElementById("lastModifiedBySet" + (noFromIdOfClickedmoveUpBtnTL - 1)).value = theAbovelastModifiedBySetLeft;
        document.getElementById("lastModifiedBySet" + (noFromIdOfClickedmoveUpBtnTL - 2)).value = theCurrentlastModifiedBySetRight;
        document.getElementById("lastModifiedBySet" + noFromIdOfClickedmoveUpBtnTL).value = theAbovelastModifiedBySetRight;

        var theAbovecolorForEventLeft = document.getElementById("colorForEvent" + (noFromIdOfClickedmoveUpBtnTL - 3)).value;
        var theAbovecolorForEventRight = document.getElementById("colorForEvent" + (noFromIdOfClickedmoveUpBtnTL - 2)).value;
        var theCurrentcolorForEventLeft = document.getElementById("colorForEvent" + (noFromIdOfClickedmoveUpBtnTL - 1)).value;
        var theCurrentcolorForEventRight = document.getElementById("colorForEvent" + noFromIdOfClickedmoveUpBtnTL).value;
        document.getElementById("colorForEvent" + (noFromIdOfClickedmoveUpBtnTL - 3)).value = theCurrentcolorForEventLeft;
        document.getElementById("colorForEvent" + (noFromIdOfClickedmoveUpBtnTL - 1)).value = theAbovecolorForEventLeft;
        document.getElementById("colorForEvent" + (noFromIdOfClickedmoveUpBtnTL - 2)).value = theCurrentcolorForEventRight;
        document.getElementById("colorForEvent" + noFromIdOfClickedmoveUpBtnTL).value = theAbovecolorForEventRight;

        var theAbovedivForCPELeft = document.getElementById("divForCPE" + (noFromIdOfClickedmoveUpBtnTL - 3)).style.backgroundColor;
        var theAbovedivForCPERight = document.getElementById("divForCPE" + (noFromIdOfClickedmoveUpBtnTL - 2)).style.backgroundColor;
        var theCurrentdivForCPELeft = document.getElementById("divForCPE" + (noFromIdOfClickedmoveUpBtnTL - 1)).style.backgroundColor;
        var theCurrentdivForCPERight = document.getElementById("divForCPE" + noFromIdOfClickedmoveUpBtnTL).style.backgroundColor;
        document.getElementById("divForCPE" + (noFromIdOfClickedmoveUpBtnTL - 3)).style.backgroundColor = theCurrentdivForCPELeft;
        document.getElementById("divForCPE" + (noFromIdOfClickedmoveUpBtnTL - 2)).style.backgroundColor = theCurrentdivForCPERight
        document.getElementById("divForCPE" + (noFromIdOfClickedmoveUpBtnTL - 1)).style.backgroundColor = theAbovedivForCPELeft;
        document.getElementById("divForCPE" + noFromIdOfClickedmoveUpBtnTL).style.backgroundColor = theAbovedivForCPERight;

        var DurationInputCount = noFromIdOfClickedmoveUpBtnTL / 2;
        var theAboveaddDurationInput = document.getElementById("addDurationInput" + (DurationInputCount - 1)).value;
        var theCurrentaddDurationInput = document.getElementById("addDurationInput" + DurationInputCount).value;
        document.getElementById("addDurationInput" + (DurationInputCount - 1)).value = theCurrentaddDurationInput;
        document.getElementById("addDurationInput" + DurationInputCount).value = theAboveaddDurationInput;

        var theAboveaddMinutesInput = document.getElementById("addMinutesInput" + (DurationInputCount - 1)).value;
        var theCurrentaddMinutesInput = document.getElementById("addMinutesInput" + DurationInputCount).value;
        document.getElementById("addMinutesInput" + (DurationInputCount - 1)).value = theCurrentaddMinutesInput;
        document.getElementById("addMinutesInput" + DurationInputCount).value = theAboveaddMinutesInput;

        var theAboveinputForStartTime = document.getElementById("inputForStartTime" + (DurationInputCount - 1)).value;
        var theCurrentinputForStartTime = document.getElementById("inputForStartTime" + DurationInputCount).value;
        document.getElementById("inputForStartTime" + (DurationInputCount - 1)).value = theCurrentinputForStartTime;
        document.getElementById("inputForStartTime" + DurationInputCount).value = theAboveinputForStartTime;
    }
});

//Move event down
$('#containerBox').on('click', 'button[name$="moveDownBtnTL"]', function() {
    tinymce.triggerSave();
    if (ClickedOnMoveButtonForFirstTime == 0) {
        //This is for the tinymce to display words when button down is clicked
        document.getElementById("overlayForNotes").style.display = "block";
        myVar = setTimeout(makeOverlayGone, 1000);
        ClickedOnMoveButtonForFirstTime++;
        tinymce.remove();
        var newscript = document.createElement('script');
        var insidescript = document.createTextNode("tinymce.init({selector: 'textarea:not(.commentsInput)', init_instance_callback: function(editor) {editor.on('keyup', function(e) {console.log(editor.id + ' was edited' ); var theEditorId = editor.id; if(theEditorId.includes('Set')) {var justTheNumberFromSet = theEditorId.substring(11, theEditorId.length); var lastModifiedByLabel = 'lastModifiedBySet' + justTheNumberFromSet; document.getElementById(lastModifiedByLabel).value = document.getElementById('userNameHere').innerText;} else {var justTheNumber = theEditorId.substring(8, theEditorId.length); var noteLastModifiedLabel = 'lastModifiedBy' + justTheNumber; document.getElementById(noteLastModifiedLabel).value = document.getElementById('userNameHere').innerText;} });}, content_css: '//www.tiny.cloud/css/codepen.min.css', plugins: 'print preview searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap emoticons', toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment', image_title: true, automatic_uploads: true, file_picker_types: 'image', file_picker_callback: function (cb, value, meta) {var input = document.createElement('input'); input.setAttribute('type', 'file'); input.setAttribute('accept', 'image/*'); input.onchange = function () { var file = this.files[0]; var reader = new FileReader(); reader.onload = function () { var id = 'blobid' + (new Date()).getTime(); var base64 = reader.result.split(',')[1]; var blobInfo = blobCache.create(id, file, base64); blobCache.add(blobInfo); cb(blobInfo.blobUri(), { title: file.name }); }; reader.readAsDataURL(file); }; input.click();}});");
        newscript.appendChild(insidescript);
        $("textarea").append(newscript);
    }

    var idOfClickedmoveDownBtnTL = this.id;
    var noFromIdOfClickedmoveDownBtnTL = parseInt(idOfClickedmoveDownBtnTL.substring(13, idOfClickedmoveDownBtnTL.length));

    var theCurrentHeaderForNotesLeft = document.getElementById("uniqueheaderForEvent" + (noFromIdOfClickedmoveDownBtnTL - 1)).value;
    var theCurrentHeaderForNotesRight = document.getElementById("uniqueheaderForEvent" + noFromIdOfClickedmoveDownBtnTL).value;
    var theBelowHeaderForNotesLeft = document.getElementById("uniqueheaderForEvent" + (noFromIdOfClickedmoveDownBtnTL + 1)).value;
    var theBelowHeaderForNotesRight = document.getElementById("uniqueheaderForEvent" + (noFromIdOfClickedmoveDownBtnTL + 2)).value;
    document.getElementById("uniqueheaderForEvent" + (noFromIdOfClickedmoveDownBtnTL - 1)).value = theBelowHeaderForNotesLeft;
    document.getElementById("uniqueheaderForEvent" + noFromIdOfClickedmoveDownBtnTL).value = theBelowHeaderForNotesRight;
    document.getElementById("uniqueheaderForEvent" + (noFromIdOfClickedmoveDownBtnTL + 1)).value = theCurrentHeaderForNotesLeft;
    document.getElementById("uniqueheaderForEvent" + (noFromIdOfClickedmoveDownBtnTL + 2)).value = theCurrentHeaderForNotesRight;

    var theCurrenttextAreaSetLeft = document.getElementById("textAreaSet" + (noFromIdOfClickedmoveDownBtnTL - 1)).value;
    var theCurrenttextAreaSetRight = document.getElementById("textAreaSet" + noFromIdOfClickedmoveDownBtnTL).value;
    var theBelowtextAreaSetLeft = document.getElementById("textAreaSet" + (noFromIdOfClickedmoveDownBtnTL + 1)).value;
    var theBelowtextAreaSetRight = document.getElementById("textAreaSet" + (noFromIdOfClickedmoveDownBtnTL + 2)).value;
    document.getElementById("textAreaSet" + (noFromIdOfClickedmoveDownBtnTL - 1)).value = theBelowtextAreaSetLeft;
    document.getElementById("textAreaSet" + noFromIdOfClickedmoveDownBtnTL).value = theBelowtextAreaSetRight;
    document.getElementById("textAreaSet" + (noFromIdOfClickedmoveDownBtnTL + 1)).value = theCurrenttextAreaSetLeft;
    document.getElementById("textAreaSet" + (noFromIdOfClickedmoveDownBtnTL + 2)).value = theCurrenttextAreaSetRight;
    tinymce.get("textAreaSet" + (noFromIdOfClickedmoveDownBtnTL - 1)).setContent(theBelowtextAreaSetLeft);
    tinymce.get("textAreaSet" + noFromIdOfClickedmoveDownBtnTL).setContent(theBelowtextAreaSetRight);
    tinymce.get("textAreaSet" + (noFromIdOfClickedmoveDownBtnTL + 1)).setContent(theCurrenttextAreaSetLeft);
    tinymce.get("textAreaSet" + (noFromIdOfClickedmoveDownBtnTL + 2)).setContent(theCurrenttextAreaSetRight);

    var theCurrentlastModifiedBySetLeft = document.getElementById("lastModifiedBySet" + (noFromIdOfClickedmoveDownBtnTL - 1)).value;
    var theCurrentlastModifiedBySetRight = document.getElementById("lastModifiedBySet" + noFromIdOfClickedmoveDownBtnTL).value;
    var theBelowlastModifiedBySetLeft = document.getElementById("lastModifiedBySet" + (noFromIdOfClickedmoveDownBtnTL + 1)).value;
    var theBelowlastModifiedBySetRight = document.getElementById("lastModifiedBySet" + (noFromIdOfClickedmoveDownBtnTL + 2)).value;
    document.getElementById("lastModifiedBySet" + (noFromIdOfClickedmoveDownBtnTL - 1)).value = theBelowlastModifiedBySetLeft;
    document.getElementById("lastModifiedBySet" + noFromIdOfClickedmoveDownBtnTL).value = theBelowlastModifiedBySetRight;
    document.getElementById("lastModifiedBySet" + (noFromIdOfClickedmoveDownBtnTL + 1)).value = theCurrentlastModifiedBySetLeft;
    document.getElementById("lastModifiedBySet" + (noFromIdOfClickedmoveDownBtnTL + 2)).value = theCurrentlastModifiedBySetRight;

    var theCurrentcolorForEventLeft = document.getElementById("colorForEvent" + (noFromIdOfClickedmoveDownBtnTL - 1)).value;
    var theCurrentcolorForEventRight = document.getElementById("colorForEvent" + noFromIdOfClickedmoveDownBtnTL).value;
    var theBelowcolorForEventLeft = document.getElementById("colorForEvent" + (noFromIdOfClickedmoveDownBtnTL + 1)).value;
    var theBelowcolorForEventRight = document.getElementById("colorForEvent" + (noFromIdOfClickedmoveDownBtnTL + 2)).value;
    document.getElementById("colorForEvent" + (noFromIdOfClickedmoveDownBtnTL - 1)).value = theBelowcolorForEventLeft;
    document.getElementById("colorForEvent" + noFromIdOfClickedmoveDownBtnTL).value = theBelowcolorForEventRight;
    document.getElementById("colorForEvent" + (noFromIdOfClickedmoveDownBtnTL + 1)).value = theCurrentcolorForEventLeft;
    document.getElementById("colorForEvent" + (noFromIdOfClickedmoveDownBtnTL + 2)).value = theCurrentcolorForEventRight;

    var theCurrentdivForCPELeft = document.getElementById("divForCPE" + (noFromIdOfClickedmoveDownBtnTL - 1)).style.backgroundColor;
    var theCurrentdivForCPERight = document.getElementById("divForCPE" + noFromIdOfClickedmoveDownBtnTL).style.backgroundColor;
    var theBelowdivForCPELeft = document.getElementById("divForCPE" + (noFromIdOfClickedmoveDownBtnTL + 1)).style.backgroundColor;
    var theBelowdivForCPERight = document.getElementById("divForCPE" + (noFromIdOfClickedmoveDownBtnTL + 2)).style.backgroundColor;
    document.getElementById("divForCPE" + (noFromIdOfClickedmoveDownBtnTL - 1)).style.backgroundColor = theBelowdivForCPELeft;
    document.getElementById("divForCPE" + noFromIdOfClickedmoveDownBtnTL).style.backgroundColor = theBelowdivForCPERight;
    document.getElementById("divForCPE" + (noFromIdOfClickedmoveDownBtnTL + 1)).style.backgroundColor = theCurrentdivForCPELeft;
    document.getElementById("divForCPE" + (noFromIdOfClickedmoveDownBtnTL + 2)).style.backgroundColor = theCurrentdivForCPERight;

    var DurationInputCount = noFromIdOfClickedmoveDownBtnTL / 2;
    var theBelowaddDurationInput = document.getElementById("addDurationInput" + (DurationInputCount + 1)).value;
    var theCurrentaddDurationInput = document.getElementById("addDurationInput" + DurationInputCount).value;
    document.getElementById("addDurationInput" + (DurationInputCount + 1)).value = theCurrentaddDurationInput;
    document.getElementById("addDurationInput" + DurationInputCount).value = theBelowaddDurationInput;

    var theBelowaddMinutesInput = document.getElementById("addMinutesInput" + (DurationInputCount + 1)).value;
    var theCurrentaddMinutesInput = document.getElementById("addMinutesInput" + DurationInputCount).value;
    document.getElementById("addMinutesInput" + (DurationInputCount + 1)).value = theCurrentaddMinutesInput;
    document.getElementById("addMinutesInput" + DurationInputCount).value = theBelowaddMinutesInput;

    var theBelowinputForStartTime = document.getElementById("inputForStartTime" + (DurationInputCount + 1)).value;
    var theCurrentinputForStartTime = document.getElementById("inputForStartTime" + DurationInputCount).value;
    document.getElementById("inputForStartTime" + (DurationInputCount + 1)).value = theCurrentinputForStartTime;
    document.getElementById("inputForStartTime" + DurationInputCount).value = theBelowinputForStartTime;
});







var postLessonSurveyLinkCounter = $('a[name$="postLessonSurveyLink"]').length + 1;

$('#LinkDiv').on('click', 'button[name$="addLinkBtn"]', function(event) {
    tinymce.triggerSave();
    var linkDiv = document.getElementById("LinkDiv");
    var linkTbValue = document.getElementById("postLessonSurveyLinkTb").value;
    var linkTbObj = document.getElementById("postLessonSurveyLinkTb");
    document.getElementById("postLessonSurveyLinkTb").style.borderColor = "black"
    document.getElementById("postLessonSurveyLinkTb").style.borderStyle = "solid"
    document.getElementById("alertErrorsForLink").innerHTML = '';
    var allInputed = true;

    if (linkTbObj.value == '') {
        document.getElementById("postLessonSurveyLinkTb").style.borderColor = "red"
        document.getElementById("postLessonSurveyLinkTb").style.borderStyle = "solid"
        document.getElementById("alertErrorsForLink").innerHTML += "<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">" +
            "Please enter a link" +
            "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">" +
            "<span aria-hidden=\"true\">&times;</span>" +
            "</button></div>";
        allInputed = false;

    } else {
        var str = document.getElementById("alertErrorsForLink").innerHTML.trim();
        str = str.replace("<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">" +
            "Please enter a link" +
            "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">" +
            "<span aria-hidden=\"true\">&times;</span>" +
            "</button></div>", "");
        document.getElementById("alertErrorsForLink").innerHTML = str;
        allInputed = true;

        if (!linkTbObj.checkValidity()) {
            event.preventDefault();
            document.getElementById("postLessonSurveyLinkTb").style.borderColor = "red"
            document.getElementById("postLessonSurveyLinkTb").style.borderStyle = "solid"
            document.getElementById("alertErrorsForLink").innerHTML += "<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">" +
                "Invalid URL" +
                "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">" +
                "<span aria-hidden=\"true\">&times;</span>" +
                "</button></div>";
            allInputed = false;
        } else {
            var str = document.getElementById("alertErrorsForLink").innerHTML.trim();
            str = str.replace("<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">" +
                "Invalid URL" +
                "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">" +
                "<span aria-hidden=\"true\">&times;</span>" +
                "</button></div>", "");
            document.getElementById("alertErrorsForLink").innerHTML = str;
            allInputed = true;
        }
    }

    if (allInputed) {
        var table = document.getElementById("tableForLinks");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        document.getElementById("postLessonSurveyLinkTb").value = '';

        cell1.innerHTML += "<a href='" + linkTbValue + "' name='postLessonSurveyLink' target='_blank' id='postLessonSurveyLink" + postLessonSurveyLinkCounter + "' value='" + linkTbValue + "'>" + linkTbValue + "</a>";
        cell1.innerHTML += "<input name='postLessonSurveyLinkTbb' type='url' id='postLessonSurveyLinkTbb" + postLessonSurveyLinkCounter + "' class='form-control col mr-2' value='" + linkTbValue + "' hidden>";
        cell2.innerHTML += "<button class='btn btn-danger mt-2' name='deleteLinkBtn' type='button' data-toggle='modal' data-target='#exampleModal' id='deleteLinkBtn" + postLessonSurveyLinkCounter + "'> Delete</button>";
    }
});

$('#LinkDiv').on('click', 'button[name$="deleteLinkBtn"]', function() {
    tinymce.triggerSave();
    var idOfClickeddeleteLinkBtnTL = this.id;
    var noFromIdOfClickeddeleteLinkBtnTL = parseInt(idOfClickeddeleteLinkBtnTL.substring(13, idOfClickeddeleteLinkBtnTL.length));
    document.getElementById("modal-bodyID").innerHTML = "";
    document.getElementById("modal-bodyID").innerHTML += "<p hidden id='idOfDeleteBtn'>" + idOfClickeddeleteLinkBtnTL + "</p>";
    document.getElementById("modal-bodyID").innerHTML += "<p>Are you sure to delete this link?</p>";
    $('#exampleModal').modal('show')
});


//Modal pop-up delete
$('#ModalPopUpForDeletion').on('click', 'button[name$="ConfirmDeleteBtnInModal"]', function() {
    tinymce.triggerSave();
    $('#exampleModal').modal('hide');

    var idOfClickeddeleteLinkBtnTL = document.getElementById("idOfDeleteBtn").innerHTML;
    var idOfClickeddeleteLinkBtnTLText = idOfClickeddeleteLinkBtnTL.substring(0, 13);
    var noFromIdOfClickeddeleteLinkBtnTL = parseInt(idOfClickeddeleteLinkBtnTL.substring(13, idOfClickeddeleteLinkBtnTL.length));

    var idOfClickedRemoveBtn = document.getElementById("idOfDeleteBtn").innerHTML;
    var idOfClickedRemoveBtnText = idOfClickedRemoveBtn.substring(0, 9);
    var noFromIdOfClickedRemoveBtn = parseInt(idOfClickedRemoveBtn.substring(9, idOfClickedRemoveBtn.length));

    var idOfClickedRemoveEventBtn = document.getElementById("idOfDeleteBtn").innerHTML;
    var idOfClickedRemoveEventBtnText = idOfClickedRemoveEventBtn.substring(0, 14);
    var noFromIdOfClickedRemoveEventBtn = parseInt(idOfClickedRemoveEventBtn.substring(14, idOfClickedRemoveEventBtn.length));

    if (idOfClickeddeleteLinkBtnTLText == 'deleteLinkBtn') {
        document.getElementById("tableForLinks").deleteRow(noFromIdOfClickeddeleteLinkBtnTL);
    } else if (idOfClickedRemoveBtnText == 'removeBtn') {
        var divToDelete = "divForNC" + noFromIdOfClickedRemoveBtn;
        // console.log(divToDelete);
        var noteToRemove = document.getElementById(divToDelete);

        counterForNotes--; //This needs to be minus so that can be increment when adding new one, else it will affect the tinymce to have no textarea
        ClickedOnMoveButtonForFirstTime = 0;
        noteToRemove.remove();
        tinymce.triggerSave();
        tinymce.remove();

        checkeverytime();
        document.getElementById("overlayForNotes").style.display = "block";
        myVar = setTimeout(makeOverlayGone, 1000);
        var newscript = document.createElement('script');
        var insidescript = document.createTextNode("tinymce.init({selector: 'textarea:not(.commentsInput)', init_instance_callback: function(editor) {editor.on('keyup', function(e) {console.log(editor.id + ' was edited' ); var theEditorId = editor.id; if(theEditorId.includes('Set')) {var justTheNumberFromSet = theEditorId.substring(11, theEditorId.length); var lastModifiedByLabel = 'lastModifiedBySet' + justTheNumberFromSet; document.getElementById(lastModifiedByLabel).value = document.getElementById('userNameHere').innerText;} else {var justTheNumber = theEditorId.substring(8, theEditorId.length); var noteLastModifiedLabel = 'lastModifiedBy' + justTheNumber; document.getElementById(noteLastModifiedLabel).value = document.getElementById('userNameHere').innerText;} });}, content_css: '//www.tiny.cloud/css/codepen.min.css', plugins: 'print preview searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap emoticons', toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment', image_title: true, automatic_uploads: true, file_picker_types: 'image', file_picker_callback: function (cb, value, meta) {var input = document.createElement('input'); input.setAttribute('type', 'file'); input.setAttribute('accept', 'image/*'); input.onchange = function () { var file = this.files[0]; var reader = new FileReader(); reader.onload = function () { var id = 'blobid' + (new Date()).getTime(); var base64 = reader.result.split(',')[1]; var blobInfo = blobCache.create(id, file, base64); blobCache.add(blobInfo); cb(blobInfo.blobUri(), { title: file.name }); }; reader.readAsDataURL(file); }; input.click();}});");
        newscript.appendChild(insidescript);
        $("textarea").append(newscript);
    } else if (idOfClickedRemoveEventBtnText == 'removeEventBtn') {
        var eventSetToDelete = "eventSet" + noFromIdOfClickedRemoveEventBtn;
        var setOfEventToRemove = document.getElementById(eventSetToDelete);

        ClickedOnMoveButtonForFirstTime = 0;
        counter--;
        counterColorForEvent -= 2;
        secondCounterColorForEvent -= 2;
        var eventSetToDelete = "eventSet" + noFromIdOfClickedRemoveEventBtn;
        var setOfEventToRemove = document.getElementById(eventSetToDelete);
        setOfEventToRemove.remove();
        tinymce.triggerSave();
        tinymce.remove();

        //Do this for the lastmodifiedby to work when typing in textarea after deletion
        checkeverytime();
        document.getElementById("overlayForNotes").style.display = "block";
        myVar = setTimeout(makeOverlayGone, 1000);
        var newscript = document.createElement('script');
        var insidescript = document.createTextNode("tinymce.init({selector: 'textarea:not(.commentsInput)', init_instance_callback: function(editor) {editor.on('keyup', function(e) {console.log(editor.id + ' was edited' ); var theEditorId = editor.id; if(theEditorId.includes('Set')) {var justTheNumberFromSet = theEditorId.substring(11, theEditorId.length); var lastModifiedByLabel = 'lastModifiedBySet' + justTheNumberFromSet; document.getElementById(lastModifiedByLabel).value = document.getElementById('userNameHere').innerText;} else {var justTheNumber = theEditorId.substring(8, theEditorId.length); var noteLastModifiedLabel = 'lastModifiedBy' + justTheNumber; document.getElementById(noteLastModifiedLabel).value = document.getElementById('userNameHere').innerText;} });}, content_css: '//www.tiny.cloud/css/codepen.min.css', plugins: 'print preview searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap emoticons', toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment', image_title: true, automatic_uploads: true, file_picker_types: 'image', file_picker_callback: function (cb, value, meta) {var input = document.createElement('input'); input.setAttribute('type', 'file'); input.setAttribute('accept', 'image/*'); input.onchange = function () { var file = this.files[0]; var reader = new FileReader(); reader.onload = function () { var id = 'blobid' + (new Date()).getTime(); var base64 = reader.result.split(',')[1]; var blobInfo = blobCache.create(id, file, base64); blobCache.add(blobInfo); cb(blobInfo.blobUri(), { title: file.name }); }; reader.readAsDataURL(file); }; input.click();}});");
        newscript.appendChild(insidescript);
        $("textarea").append(newscript);
    }
});


$('#containerBox').on('click', 'button[name$="goRemoveEvents"]', function() {
    tinymce.triggerSave();

    var idOfClickedRemoveEventBtn = this.id;
    document.getElementById("modal-bodyID").innerHTML = "";
    document.getElementById("modal-bodyID").innerHTML += "<p hidden id='idOfDeleteBtn'>" + idOfClickedRemoveEventBtn + "</p>";
    document.getElementById("modal-bodyID").innerHTML += "<p>Are you sure to delete this event?</p>";
    $('#exampleModal').modal('show')
});


$('#flexContainerId').on('click', 'button[name$="goRemoveNotes"]', function() {
    tinymce.triggerSave();

    var idOfClickedRemoveBtn = this.id;
    document.getElementById("modal-bodyID").innerHTML = "";
    document.getElementById("modal-bodyID").innerHTML += "<p hidden id='idOfDeleteBtn'>" + idOfClickedRemoveBtn + "</p>";
    document.getElementById("modal-bodyID").innerHTML += "<p>Are you sure to delete this note?</p>";
    $('#exampleModal').modal('show')
});



function displaySubmitFormOverlay() {
    document.getElementById("titleOfResourceTb").style.borderColor = "black"
    document.getElementById("titleOfResourceTb").style.borderStyle = "solid"
    document.getElementById("categoryOfResourceTb").style.borderColor = "black"
    document.getElementById("categoryOfResourceTb").style.borderStyle = "solid"
    document.getElementById("alertErrors").innerHTML = '';
    var titleOfResourceTbInputed = true;
    var categoryOfResourceTbInputed = true;

    if (document.getElementById("titleOfResourceTb").value == '') {
        document.getElementById("titleOfResourceTb").style.borderColor = "red"
        document.getElementById("titleOfResourceTb").style.borderStyle = "solid"

        document.getElementById("alertErrors").innerHTML += "<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">" +
            "Please enter Title of resource" +
            "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">" +
            "<span aria-hidden=\"true\">&times;</span>" +
            "</button></div>";
        titleOfResourceTbInputed = false;

    } else {
        var str = document.getElementById("alertErrors").innerHTML.trim();
        str = str.replace("<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">" +
            "Please enter Title of resource" +
            "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">" +
            "<span aria-hidden=\"true\">&times;</span>" +
            "</button></div>", "");
        document.getElementById("alertErrors").innerHTML = str;
        titleOfResourceTbInputed = true;
    }

    if (document.getElementById("categoryOfResourceTb").value == '') {
        document.getElementById("categoryOfResourceTb").style.borderColor = "red"
        document.getElementById("categoryOfResourceTb").style.borderStyle = "solid"

        document.getElementById("alertErrors").innerHTML += "<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">" +
            "Please enter Category of resource" +
            "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">" +
            "<span aria-hidden=\"true\">&times;</span>" +
            "</button></div>";
        categoryOfResourceTbInputed = false;

    } else {
        var str = document.getElementById("alertErrors").innerHTML.trim();
        str = str.replace("<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">" +
            "Please enter Category of resource" +
            "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">" +
            "<span aria-hidden=\"true\">&times;</span>" +
            "</button></div>", "");
        document.getElementById("alertErrors").innerHTML = str;
        categoryOfResourceTbInputed = true;
    }

    if (titleOfResourceTbInputed && categoryOfResourceTbInputed) {
        $("#saveResourceBtn").click()
    }
}


function makeSubmitFormOverlayGone() {
    document.getElementById("overlayForFormSubmission").style.display = "none";
}


var counterForNotes = $('.parent').length + 1;
//Paste copied notes and events to new resource
$('#pasteBtn').click(function() {
    var headerForNotesStoredArray = JSON.parse(sessionStorage.getItem("headerForNotesArray")); //no brackets
    var colorPickerForNoteArrayStoredArray = JSON.parse(sessionStorage.getItem("colorPickerForNoteArray")); //no brackets
    var goTextAreaArrayStoredArray = JSON.parse(sessionStorage.getItem("goTextAreaArray")); //no brackets
    var notesLastModifiedByArrayStoredArray = JSON.parse(sessionStorage.getItem("notesLastModifiedByArray")); //no brackets

    if (headerForNotesStoredArray != '') {
        if (headerForNotesStoredArray != null) {
            checkeverytime();
            tinymce.triggerSave();
            document.getElementById("overlayForNotes").style.display = "block";
            myVar = setTimeout(makeOverlayGone, 3000);
            tinymce.remove();

            for (v = 0; v < headerForNotesStoredArray.length; v++) {
                $("#flexContainerId").append("<div class='parent' id='divForNC" + counterForNotes + "' style='background-color: " + colorPickerForNoteArrayStoredArray[v] + "'><input name='headerForNotesName' placeholder='Title...' id='headerForNotes" + counterForNotes + "' class='headersNotes' style='background-color: white' value='" + headerForNotesStoredArray[v] + "'><input title='Use this button to change the color of the note' type='color' value='" + colorPickerForNoteArrayStoredArray[v] + "' id='color" + counterForNotes + "' name='colorPickerForNote'><button title='Use this button to delete this note' type='button' name='goRemoveNotes' id='removeBtn" + counterForNotes + "' class='btn btn-danger' >Delete</button><button type='button' class='btn btn-info' name='moveUpBtn' id='moveUpBtn" + counterForNotes + "'><i class='fa fa-arrow-up' aria-hidden='true'></i></button>&nbsp;<button type='button' class='btn btn-info' name='moveDownBtn' id='moveDownBtn" + counterForNotes + "'><i class='fa fa-arrow-down' aria-hidden='true'></i></button><textarea class='notesTextArea' id='textArea" + counterForNotes + "' name='goTextArea'>" + goTextAreaArrayStoredArray[v] + "</textarea><label style='font-size: large;'>Last Modified by:</label><input readonly id='lastModifiedBy" + counterForNotes + "' class='labelForLastModifiedBy' name='labelForLastModifiedBy' value='" + notesLastModifiedByArrayStoredArray[v] + "'></div>");
                counterForNotes++;
            }

            checkeverytime();
            var newscript = document.createElement('script');
            var insidescript = document.createTextNode("tinymce.init({selector: 'textarea:not(.commentsInput)', init_instance_callback: function(editor) {editor.on('keyup', function(e) {console.log(editor.id + ' was edited'); var theEditorId = editor.id; if(theEditorId.includes('Set')) {var justTheNumberFromSet = theEditorId.substring(11, theEditorId.length); var lastModifiedByLabel = 'lastModifiedBySet' + justTheNumberFromSet; document.getElementById(lastModifiedByLabel).value = document.getElementById('userNameHere').innerText;} else {var justTheNumber = theEditorId.substring(8, theEditorId.length); var noteLastModifiedLabel = 'lastModifiedBy' + justTheNumber; document.getElementById(noteLastModifiedLabel).value = document.getElementById('userNameHere').innerText;} });}, content_css: '//www.tiny.cloud/css/codepen.min.css', plugins: 'print preview searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap emoticons', toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment', image_title: true, automatic_uploads: true, file_picker_types: 'image', file_picker_callback: function (cb, value, meta) {var input = document.createElement('input'); input.setAttribute('type', 'file'); input.setAttribute('accept', 'image/*'); input.onchange = function () { var file = this.files[0]; var reader = new FileReader(); reader.onload = function () { var id = 'blobid' + (new Date()).getTime(); var base64 = reader.result.split(',')[1]; var blobInfo = blobCache.create(id, file, base64); blobCache.add(blobInfo); cb(blobInfo.blobUri(), { title: file.name }); }; reader.readAsDataURL(file); }; input.click();}});");
            newscript.appendChild(insidescript);
            $("textarea").append(newscript);
            ClickedOnMoveButtonForFirstTime = 0;
        }
    }

    var IdToInsertAfter = $('.timeline-article').length;

    // var counter = 2;
    // var counterColorForEvent = noOfTextAreaEvent + 1;
    // var secondCounterColorForEvent = noOfTextAreaEvent + 2;

    var uniqueheaderForEventStoredArray = JSON.parse(sessionStorage.getItem("uniqueheaderForEventArray")); //no brackets
    var colorForEventStoredArray = JSON.parse(sessionStorage.getItem("colorForEventArray")); //no brackets
    var textAreaSetStoredArray = JSON.parse(sessionStorage.getItem("textAreaSetArray")); //no brackets
    var labelSetForLastModifiedStoredArray = JSON.parse(sessionStorage.getItem("labelSetForLastModifiedArray")); //no brackets
    var addDurationInputStoredArray = JSON.parse(sessionStorage.getItem("addDurationInputArray")); //no brackets
    var addMinutesInputStoredArray = JSON.parse(sessionStorage.getItem("addMinutesInputArray")); //no brackets


    if (uniqueheaderForEventStoredArray != '') {
        if (uniqueheaderForEventStoredArray != null) {
            ClickedOnMoveButtonForFirstTime = 0;
            checkeverytime();
            tinymce.triggerSave();
            document.getElementById("overlayForNotes").style.display = "block";
            myVar = setTimeout(makeOverlayGone, 3000);
            var forDurationAndMinIndex = 0;

            for (x = 0; x < uniqueheaderForEventStoredArray.length; x += 2) {
                tinymce.remove();

                var whereToInsertAfter = document.getElementById("eventSet" + IdToInsertAfter);
                $("<div class='timeline-article' id='eventSet" + counter + "'><div class='content-left-container'><div class='content-left' style='background-color: " + colorForEventStoredArray[x] + "' id='divForCPE" + counterColorForEvent + "'><input name='headerForEventName' placeholder='Title...' id='uniqueheaderForEvent" + counterColorForEvent + "' class='headerForEvent' style='background-color: white' value='" + uniqueheaderForEventStoredArray[x] + "'><textarea id='textAreaSet" + counterColorForEvent + "' name='textAreasForEvents' style='height: 400px' class='taclass' contenteditable='true'>" + textAreaSetStoredArray[x] + "</textarea><input title='Use this button to change the color of the note' type='color' value='" + colorForEventStoredArray[x] + "' name='colorPickerForEvent' id='colorForEvent" + counterColorForEvent + "' /><label style='font-size: small;'>Last Modified By:</label><input readonly class='labelSetForLastModified' name='labelSetForLastModified' id='lastModifiedBySet" + counterColorForEvent + "' value='" + labelSetForLastModifiedStoredArray[x] + "'></div><label>Duration:</label><br /><input type='number' min='0' max='23' name='goDuration' style='width: 50px' id='addDurationInput" + counter + "' value='" + addDurationInputStoredArray[forDurationAndMinIndex] + "' />&nbsp<label>hour(s)</label>&nbsp<input type='number' min='0' max='59' name='goMinutes' style='width: 50px' id='addMinutesInput" + counter + "' value='" + addMinutesInputStoredArray[forDurationAndMinIndex] + "' />&nbsp<label>minute(s)</label><br /><label hidden>Start Time:</label><br /><input name='goTime' type='time' id='inputForStartTime" + counter + "' hidden /></div><div class='content-right-container'><div class='content-right' style='background-color: " + colorForEventStoredArray[(x + 1)] + "' id='divForCPE" + secondCounterColorForEvent + "'><input name='headerForEventName' placeholder='Title...' id='uniqueheaderForEvent" + secondCounterColorForEvent + "' class='headerForEvent' style='background-color: white' value='" + uniqueheaderForEventStoredArray[(x + 1)] + "'><textarea id='textAreaSet" + secondCounterColorForEvent + "' name='textAreasForEvents' style='height: 400px' class='taclass' contenteditable='true'>" + textAreaSetStoredArray[(x + 1)] + "</textarea><input title='Use this button to change the color of the note' type='color' value='" + colorForEventStoredArray[(x + 1)] + "' name='colorPickerForEvent' id='colorForEvent" + secondCounterColorForEvent + "'/><label style='font-size: small;'>Last Modified by:</label><input readonly id='lastModifiedBySet" + secondCounterColorForEvent + "' class='labelSetForLastModified' name='labelSetForLastModified' value='" + labelSetForLastModifiedStoredArray[(x + 1)] + "'></div></div><div class='meta-date'><span class='date' id='circleForEvent" + counter + "'></span><input name='middleTimeHidden' id='middleTimeHidden" + counter + "' value='00:00' hidden/></div><button type='button' id='moveUpBtnTL" + counter + "' class='btn btn-info' name='moveUpBtnTL' style='display: block; margin-left: auto; margin-right: auto; margin-bottom: 10px; margin-top: 150px;'><i class='fa fa-arrow-up' aria-hidden='true'></i></button><button type='button' id='moveDownBtnTL" + counter + "' class='btn btn-info' name='moveDownBtnTL' style='display: block; margin-left: auto; margin-right: auto; margin-bottom: 10px;'><i class='fa fa-arrow-down' aria-hidden='true'></i></button><button title='Use this button to delete this event' type='button' name='goRemoveEvents' id='removeEventBtn" + counter + "' class='btn clever-btn btn-2' style='display: block; margin-left: auto; margin-right: auto; margin-bottom: 10px; margin-top: 100px;'><i class='fa fa-trash' style='font-size: 18px'></i></button><input type='button' value='+' class='btn clever-btn btn-2' name='goButton' title='Use this button to add an event' style='display: block; margin: auto; max-width: 300px; margin-top: 110px; background: #00b0bd; color: rgba(0, 0, 0, 0.50); font-size:xx-large' id='addEventBtn" + counter + "' /></div>").insertAfter(whereToInsertAfter);

                IdToInsertAfter++;
                forDurationAndMinIndex++;
                counter++;
                counterColorForEvent += 2;
                secondCounterColorForEvent += 2;

                checkeverytime();
                var newscript = document.createElement('script');
                var insidescript = document.createTextNode("tinymce.init({selector: 'textarea:not(.commentsInput)', init_instance_callback: function(editor) {editor.on('keyup', function(e) {console.log(editor.id + ' was edited'); var theEditorId = editor.id; if(theEditorId.includes('Set')) {var justTheNumberFromSet = theEditorId.substring(11, theEditorId.length); var lastModifiedByLabel = 'lastModifiedBySet' + justTheNumberFromSet; document.getElementById(lastModifiedByLabel).value = document.getElementById('userNameHere').innerText;} else {var justTheNumber = theEditorId.substring(8, theEditorId.length); var noteLastModifiedLabel = 'lastModifiedBy' + justTheNumber; document.getElementById(noteLastModifiedLabel).value = document.getElementById('userNameHere').innerText;} });}, content_css: '//www.tiny.cloud/css/codepen.min.css', plugins: 'print preview searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap emoticons', toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl | showcomments addcomment', image_title: true, automatic_uploads: true, file_picker_types: 'image', file_picker_callback: function (cb, value, meta) {var input = document.createElement('input'); input.setAttribute('type', 'file'); input.setAttribute('accept', 'image/*'); input.onchange = function () { var file = this.files[0]; var reader = new FileReader(); reader.onload = function () { var id = 'blobid' + (new Date()).getTime(); var base64 = reader.result.split(',')[1]; var blobInfo = blobCache.create(id, file, base64); blobCache.add(blobInfo); cb(blobInfo.blobUri(), { title: file.name }); }; reader.readAsDataURL(file); }; input.click();}});");
                newscript.appendChild(insidescript);
                $("textarea").append(newscript);
            }

        }
    }

    // media screen changes
    var screensize = window.matchMedia("(max-width: 400px)");
    if (screensize.matches) {
        const timelinewrapall = document.querySelector(".timeline-article")
        const timelineflip = document.querySelector(".timeline-3D-wrapper")
        const timelinecontent = document.querySelectorAll(".content-left .content-right")
        let frontButton = ""
        let backButton = ""

        for (let i=0; i < timelineflip.length; i++){
            frontButton = timelineflip[i].querySelector("#frontBtnid")
            frontButton.style.visibility = "visible"
            frontButton.onclick = function(){
                timelinecontent[i].classList.toggle('do-flip')
            }
            backButton = timelineflip[i].querySelector("#backBtnid")
            backButton.style.visibility = "visible"
            backButton.onclick = function(){
            timelinecontent[i].classList.toggle('do-flip')
        }
        
        }
    }

});