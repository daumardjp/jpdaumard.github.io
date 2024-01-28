document.addEventListener('DOMContentLoaded', () => {
    // Function to sort the table
    function sortTable(table, column, ascending = true) {
        const tbody = table.querySelector('tbody');
        Array.from(tbody.querySelectorAll('tr'))
            .sort((a, b) => {
                const aText = a.querySelectorAll('td')[column].textContent.trim();
                const bText = b.querySelectorAll('td')[column].textContent.trim();

                return aText.localeCompare(bText, undefined, {
                    numeric: true,
                    sensitivity: 'base'
                }) * (ascending ? 1 : -1);
            })
            .forEach(tr => tbody.appendChild(tr));
    }

    // Add click event listeners to headers
    document.querySelectorAll('.article-index th').forEach(th => {
        th.addEventListener('click', () => {
            const table = th.closest('table');
            const columnIndex = Array.from(th.parentNode.children).indexOf(th);
            // Determine sort direction based on existing class
            const isAscending = th.classList.contains('sort-arrow-up');
            const newAscending = !isAscending;

            sortTable(table, columnIndex, newAscending);

            // Remove existing arrows
            th.parentNode.querySelectorAll('th').forEach(th => {
                th.classList.remove('sort-arrow-up', 'sort-arrow-down');
            });

            // Add the appropriate arrow to this header
            th.classList.toggle('sort-arrow-down', !newAscending);
            th.classList.toggle('sort-arrow-up', newAscending);
        });
    });

    // Initialize the default sorting
    const defaultHeader = document.querySelector('#sort-numero');
    if (defaultHeader) {
        sortTable(defaultHeader.closest('table'), 0, true);
        defaultHeader.classList.add('sort-arrow-up');
    }
});
