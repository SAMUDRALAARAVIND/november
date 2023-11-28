const content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, deserunt?"

function downloadContent() {
    // download a file with file name as `temp.txt` => with content being the `content` variable.
    // blob objects
    const blob = new Blob([content], { type: "text/plain" });
    console.log(blob);
    const url = URL.createObjectURL(blob);
    console.log(url);

    const link = document.createElement("a");
    link.href = url;
    link.download = "temp.txt";
    // <a href="url" download="temp.txt">Click to download</a>
    link.click(); // clickig with the javascript
    // document.body.appendChild(link);
}