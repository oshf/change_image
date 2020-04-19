chrome.storage.sync.get(["searchWord"], function(data) { // Get value from Chrome Storage
  if (typeof data.searchWord === 'undefined') {} // Check to see if values have been set
  else {
    let word = data.searchWord; // Assign value to data

    if (document.documentElement.innerHTML.indexOf(word) > -1) { // Search page for a string

      chrome.storage.sync.get(["usrImgs"], function(data) { // Get value from Chrome Storage
        let replacements = data.usrImgs; // Assign value to data

        let imgs = document.images; // Grab all images on page

        for (let i in imgs) { // loop for each image
          let rand = Math.floor(Math.random() * replacements.length); // Pick a random number

          document.images[i].src = replacements[rand]; // Change the image's source
        }
      });
    }
  }
});