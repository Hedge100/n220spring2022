let dvFavoriteThings = document.getElementById("favoriteThings")
let favorites=["Pizza", "Gaming", "Coding", "Sushi", "Taco Bell"]
for(i=0; i<favorites.length; i++)
    dvFavoriteThings.innerHTML += favorites[i] + " is one of my favorite things.<br>"