table -> fragment -> tr -> td
the purpose of using a fragment is to improve performance. If a fragment is not used, we  update and render the DOM everytime we append a tr using a for loop. Fragments are only stored in memory and not in the DOM. Therefore, we can append the fragment to the DOM when the fragment is ready and only render the screen once. 

