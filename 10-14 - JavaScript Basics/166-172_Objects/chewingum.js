var movies = [
    {title: "Braveheart",
    rating: 4.4,
    hasWatched: true
    },
    {
        title: "Wonder Woman",
        rating: 4.2,
        hasWatched: true
    },
    {
        title: "The Avengers",
        rating: 4.8,
        hasWatched: false
    },
    {
        title: "Downton Abbey (The Movie)",
        rating: 3.9,
        hasWatched: false
    }
]

movies.forEach(element => {
    var watched;
    if (element.hasWatched) {
        watched = "watched"
    } else {
        watched = "not seen"
    }
    console.log("You have " + watched + " \"" + element.title + "\" - " + element.rating + " stars")
});