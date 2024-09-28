// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let allDirectors = [];
  moviesArray.map((movie) => {
    allDirectors.push(movie.director);
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let numberOfMovies = 0;
  moviesArray.filter((movie) => {
    if (movie.director === "Steven Spielberg") {
      for (let i = 0; i < movie.genre.length; i++) {
        if (movie.genre[i] === "Drama") {
          numberOfMovies += 1;
        }
      }
    }
  });

  return numberOfMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const sum = moviesArray.reduce((acc, curr) => {
    return curr.score ? (acc += curr.score) : acc;
  }, 0);

  const average = sum / moviesArray.length;

  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const filteredArray = moviesArray.filter((movie) => movie.genre.includes('Drama'));

  console.log(filteredArray)

  if (filteredArray.length === 0) {
    return 0
  }

  const sum = filteredArray.reduce((acc, curr) => {
    return curr.score ? (acc += curr.score) : acc;
  }, 0);

  const averageRating = sum / filteredArray.length;

  return parseFloat(averageRating.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  
   const newArray = moviesArray.sort((a, b) => {
    if(a.year > b.year) {
      return 1
    }else if( a.year < b.year) {
      return -1
    } else {
      return a.title - b.title
    }
   })
   console.log(newArray)

   if(newArray.length === 1) return newArray[0];

   return newArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
