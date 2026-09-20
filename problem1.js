function isAnagram(s1, s2) {
  const arr1 = s1
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .sort();

  const arr2 = s2
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .sort();

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("Listen!", "silent"));
// true