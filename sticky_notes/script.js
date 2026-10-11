
const notesContainer = document.getElementById("notes-container");
const noteInput = document.getElementById("note-input");
const addBtn = document.getElementById("add-btn");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
    notesContainer.innerHTML = "";

    notes.forEach(function(note, index) {
        const div = document.createElement("div");
        div.className = "note";

        const text = document.createElement("span");
        text.textContent = note;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.className = "delete-btn";

        deleteBtn.onclick = function() {
            deleteNote(index);
        };

        div.appendChild(text);
        div.appendChild(deleteBtn);
        notesContainer.appendChild(div);
    });
}

function addNote() {
    const text = noteInput.value.trim();

    if (text === "") {
        alert("Please enter a note!");
        return;
    }

    notes.push(text);
    localStorage.setItem("notes", JSON.stringify(notes));

    noteInput.value = "";
    displayNotes();
}


function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}


addBtn.addEventListener("click", addNote);


displayNotes();