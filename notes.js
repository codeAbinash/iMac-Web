$(document).ready(function () {
    if(!(localStorage.myNotes))
        localStorage.myNotes="Hello This is My Notes.";
    setNoteData();
});
function setNoteData(){
    $(".main .left .note textarea").val(localStorage.myNotes);
}
function editNote(x){
    localStorage.myNotes=x;
}