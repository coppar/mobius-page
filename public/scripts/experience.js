$(document).ready(function() {
    var deleteBtnItems = $('a[name$="deleteBtn"]').length;
    var indexFordeleteBtn = 0;
    do {
        var deleteBtnThatBelongsThere = $('a[name$="deleteBtn"]').eq(indexFordeleteBtn);
        indexFordeleteBtn++;
        deleteBtnThatBelongsThere.attr("id", "deleteBtn" + indexFordeleteBtn);
    } while (indexFordeleteBtn < deleteBtnItems);
});

function checkeverytime() {
    var deleteBtnItems = $('a[name$="deleteBtn"]').length;
    var indexFordeleteBtn = 0;
    do {
        var deleteBtnThatBelongsThere = $('a[name$="deleteBtn"]').eq(indexFordeleteBtn);
        indexFordeleteBtn++;
        deleteBtnThatBelongsThere.attr("id", "deleteBtn" + indexFordeleteBtn);
    } while (indexFordeleteBtn < deleteBtnItems);
};

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("LessonPlanTable");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}



function searchFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    var inputtwo, filtertwo, tdtwo, txtValuetwo;
    var inputthree, filterthree, tdthree, txtValuethree;

    input = document.getElementById("titleSearchInput");
    inputtwo = document.getElementById("categorySearchInput");
    inputthree = document.getElementById("authorSearchInput");
    filter = input.value.toUpperCase();
    filtertwo = inputtwo.value.toUpperCase();
    filterthree = inputthree.value.toUpperCase();
    table = document.getElementById("LessonPlanTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        tdtwo = tr[i].getElementsByTagName("td")[1];
        tdthree = tr[i].getElementsByTagName("td")[4];

        if (td || tdtwo || tdthree) {
            txtValue = td.textContent || td.innerText;
            txtValuetwo = tdtwo.textContent || tdtwo.innerText;
            txtValuethree = tdthree.textContent || tdthree.innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValuetwo.toUpperCase().indexOf(filtertwo) > -1 && txtValuethree.toUpperCase().indexOf(filterthree) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}