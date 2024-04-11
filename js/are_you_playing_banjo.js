function areYouPlayingBanjo(name) {
  // Methode 1:
  // if (name.startsWith("R") || name.startsWith("r")) {
  //   return name + " Playing A Django";
  // } else {
  //   return name + " Are Not Playing A Django";
  // }

  // Methode 2:
  // const result =
  //   name.startsWith("R") || name.startsWith("r")
  //     ? name + " Playing A Django"
  //     : name + " Are Not Playing A Django";

  // return result;

  // Methode 3:
  //   return name.charAt(0) == "R" || name.charAt(0) == "r"
  //     ? name + " Playing A Django"
  //     : name + " Are Not Playing A Django";

  // Methode 4:
  //   return name.slice(0, 1) == "R" || name.slice(0, 1) == "r"
  //     ? name + " Playing A Django"
  //     : name + " Are Not Playing A Django";

  // Methode 5:
  //   return name[0] == "R" || name[0] == "r"
  //     ? name + " Playing A Django"
  //     : name + " Are Not Playing A Django";

  // Methode 6:
    // return name[name.indexOf("R")] == "R" 
    //   || name[name.indexOf("r")] == "r"
    //   ? name + " Playing A Django"
    //   : name + " Are Not Playing A Django";

  // Methode 7:
    return (/^r/i).test(name)
      ? name + " Playing A Django"
      : name + " Are Not Playing A Django";
}

console.log(areYouPlayingBanjo("kimo"));