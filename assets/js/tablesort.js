
document$.subscribe(function() {
    var tables = document.querySelectorAll("article figure.sortable table:not([class])")
    tables.forEach(function(table) {
      new Tablesort(table)
    })
  })