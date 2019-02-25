function sortedName () {


    
        var firstName = document.getElementById("firstName").value;
        const parts = firstName.toLowerCase().split('')
        const sortedParts = parts.sort()
        const sortedName = sortedParts.join('');
        const upSortedName = sortedName.charAt(0).toUpperCase() + sortedName.slice(1)

        var lastName = document.getElementById("lastName").value;
        const lastParts = lastName.toLowerCase().split('')
        const lastSortedParts = lastParts.sort();
        const lastSortedName = lastSortedParts.join('');
        const upSortedLastName = lastSortedName.charAt(0).toUpperCase() + lastSortedName.slice(1)

    var fullName = upSortedName + " " + upSortedLastName;
    console.log(fullName)
    document.getElementById("postFullName").innerHTML = "YOUR ALPHABETICAL NAME:<br>" + fullName;
  }





  