Create an input tag with di "book_title" and a button to Save Book. When user clicks Save book, save the book inside an array. Convert array to JSON, save it in localStorage. Also Create an h3 tag above the input tag with initial value "Book Title"

Display the saved book title in a h3 tag above the input. Clear the "book_title" input.

Then retrieve the JSON array from localstorage, and parse it to a js object, then print to console.

The user can add as many books as they want, and they all are saved in localStorage. But the h3 tag just displays the most recent book, not all the books.

To use:

JSON.stringify

localStorage

addEventListener