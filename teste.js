function dramaMoviesScore(moviesArray) {
    const filteredArray = moviesArray.filter((movie) => {
      return movie.genre === "Drama";
    });
    console.log(filteredArray)
    reducedArray = filteredArray.reduce((acc, curr) => {
      if (typeof curr.score !== "number") {
        return acc;
      } else return (acc += curr.score);
    }, 0);
  
    const averageRating = reducedArray / filteredArray.length;
  
    return averageRating
  }