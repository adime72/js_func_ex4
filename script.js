
function NoCountryName(currentFlag) {
  if (currentFlag.className.includes("theCountryName")) {
      currentFlag.className = currentFlag.className.replace("theCountryName", "");
  }

  function theCountryName(currentFlag) {
    // currentFlag is an element Object
    // var classNameString = currentFlag.className;
    // classNameString.includes("*****");
    if (!currentFlag.className.includes("theCountryName")) {
        currentFlag.className += "theCountryName";
    }
