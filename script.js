
function NoCountryName(thisFlag) {
  if (thisFlag.className.includes("theCountryName")) {
      thisFlag.className = thisFlag.className.replace("theCountryName", "");
  }
}
  function theCountryName(thisFlag) {

    if (!thisFlag.className.includes("theCountryName")) {
        thisFlag.className += "theCountryName";
    }
  }