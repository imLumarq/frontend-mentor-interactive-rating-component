/*-------------------------------rating buttons-------------------------------*/

const ratingOne = document.getElementById("btn-one");
const ratingTwo = document.getElementById("btn-two");
const ratingThree = document.getElementById("btn-three");
const ratingFour = document.getElementById("btn-four");
const ratingFive = document.getElementById("btn-five");

/*-------------------------------submit button-------------------------------*/

const submitButton = document.getElementById("btn-submit");

/*-------------------------------rating amounts-------------------------------*/
const userRating = document.querySelector("#user-rating");
const totalRating = document.querySelector("#total-rating");

let maxRating = Math.max(
    ratingOne.dataset.rating,
    ratingTwo.dataset.rating,
    ratingThree.dataset.rating,
    ratingFour.dataset.rating,
    ratingFive.dataset.rating
);

totalRating.textContent = maxRating;

let userSelectedRating;

ratingOne.addEventListener("click", () => {
    SetRating(ratingOne);
});

ratingTwo.addEventListener("click", () => {
    SetRating(ratingTwo);
});
ratingThree.addEventListener("click", () => {
    SetRating(ratingThree);
});
ratingFour.addEventListener("click", () => {
    SetRating(ratingFour);
});
ratingFive.addEventListener("click", () => {
    SetRating(ratingFive);
});

function SetRating(rate) {
    ratingOne.classList.remove("active");
    ratingTwo.classList.remove("active");
    ratingThree.classList.remove("active");
    ratingFour.classList.remove("active");
    ratingFive.classList.remove("active");

    switch (+rate.dataset.rating) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            userSelectedRating = rate.dataset.rating;
            console.log(userSelectedRating);
            rate.classList.add("active");
            break;

        default:
            userSelectedRating = "Invalid";
            break;
    }

    submitButton.addEventListener("click", () => {
        userRating.textContent = userSelectedRating;
    });
}
