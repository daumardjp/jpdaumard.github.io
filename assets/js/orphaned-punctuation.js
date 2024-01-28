function replaceOrphanedPunctuation() {
    // Select all text nodes in the body of the page
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

    let node;
    while (node = walker.nextNode()) {
        // Replace space after '«' with a non-breaking space
        node.nodeValue = node.nodeValue.replace(/« /g, '«\u00A0');
    }
}

// Run the function when the document is fully loaded
document.addEventListener('DOMContentLoaded', replaceOrphanedPunctuation);
