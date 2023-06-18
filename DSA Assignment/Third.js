  //Q3. Write a program to check if two strings are a rotation of each other?
  function areRotations(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const concatenated = str1 + str1;
  
    if (concatenated.includes(str2)) {
      return true;
    }
  
    return false;
  }
  const string1 = "hello";
  const string2 = "llohe";
  const rotation = areRotations(string1, string2);
  console.log(result);