chrome.storage.sync.get(["searchWord"], function(data) { // Get value from Chrome Storage
  if (typeof data.searchWord === 'undefined') {} // Check to see if values have been set
  else {
    document.getElementById('searchWord').value = data.searchWord; // Set input to value of data
  }
});

chrome.storage.sync.get(["usrImgs"], function(data) { // Get value from Chrome Storage
  if (typeof data.usrImgs === 'undefined') {} // Check to see if values have been set
  else {
    document.getElementById('newImages').value = data.usrImgs; // Set textarea to value of data
  }
});

document.getElementById('save').onclick = function updateButton() { // When Save button is clicked...
  let word = document.getElementById('searchWord').value; // Get value of Search Word input
  let usrImages = document.getElementById('newImages').value; // Get value of textarea
  let replacements = usrImages.split(","); // Split textarea into an array by comma

  chrome.storage.sync.set({
    "searchWord": word
  }, function() { // Save Search Word
  document.getElementsByName("saveSuccess")[0].style.display = "inline"; // Show success
  setTimeout(function(){ 
      document.getElementsByName("saveSuccess")[0].style.display = "none"; // Hide success after 3 seconds
  }, 3000);
  });

  chrome.storage.sync.set({
    "usrImgs": replacements
  }, function() { // Save Image URLs
  });

}

document.getElementById('reset').onclick = function resetButton() { // When Reset button is clicked...
  chrome.storage.sync.remove("searchWord"); // Remove search word from storage
  chrome.storage.sync.remove("usrImgs"); // Remove image URLs from storage
  document.getElementById('searchWord').value = ""; // Reset input
  document.getElementById('newImages').value = ""; // Reset textarea
  document.getElementsByName("resetSuccess")[0].style.display = "inline"; // Show success
  setTimeout(function(){ 
      document.getElementsByName("resetSuccess")[0].style.display = "none"; // Hide success after 3 seconds
  }, 3000);
}