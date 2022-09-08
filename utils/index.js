 function sortByDate(a, b) { //comparison function for sort()
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)     
 }


 export {
    sortByDate
 }