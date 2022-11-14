var colorPicker = document.getElementById("color-picker")
var textContent = document.getElementById("text-content")

console.log(colorPicker)
textContent.addEventListener("copy", function(event) {
    
    var sel = window.getSelection()
    var text = sel.getRangeAt(0).toString()
    event.clipboardData.setData("text/plain", text)
    event.preventDefault()
    
})

textContent.addEventListener("paste", function(event) {
    console.log("paste occurred")
    // console.log(event.clipboardData.getData("text"))
})

colorPicker.addEventListener("input", function() {
    colorHighlightedContent(this.value)
})

textContent.addEventListener("input", function(event) {
    // console.log(event.data)
    // console.log(event.dataTransfer.items[0].getAsString(), "data")
    // console.log(event.getTargetRanges(), "target ranges")
})

function colorHighlightedContent(color) {
    var sel = window.getSelection()

    var span = document.createElement("span")
    // console.log(sel.anchorOffset, "anchor offset")
    for (var span of document.getElementsByTagName("span")) {
        // console.log(span.compareDocumentPosition(document.getElementById("text-content")), "compare document position")
        // console.log(span)
    }
    span.style.color = color
    // console.log(sel.getRangeAt(0).toString())
    // console.log(sel)

    // console.log(sel.getRangeAt(0).toString())
    sel.getRangeAt(0).surroundContents(span)
}