const wecode = {
  teacher: "Joss",
  place: "Platzi Mex",
  attendees: [
    {
      name: "Karen",
      ironhacker: true
    }
    //...
  ]
};

wecode.teacher; // "Joss"
wecode["place"]; // "Platzi Mex"
wecode.attendees[0].name; // "Karen"
