/*-------------------------------rating buttons-------------------------------*/

const ratingOne = document.getElementById("btn-one");
const ratingTwo = document.getElementById("btn-two");
const ratingThree = document.getElementById("btn-three");
const ratingFour = document.getElementById("btn-four");
const ratingFive = document.getElementById("btn-five");

/*-------------------------------submit button-------------------------------*/

const submitButton = document.getElementById("btn-submit");

/*-------------------------------rating amounts-------------------------------*/
const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thank-you-card");

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

submitButton.disabled = true;
submitButton.style.opacity = 0.1;
submitButton.style.transition =
    "opacity 1s ease, background-color 1s ease, color 1s ease";

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
            submitButton.disabled = false;
            submitButton.style.opacity = 1;
            userSelectedRating = rate.dataset.rating;
            rate.classList.add("active");
            break;

        default:
            userSelectedRating = "Invalid";
            break;
    }

    submitButton.addEventListener("click", () => {
        ratingOne.classList.remove("selected");
        ratingTwo.classList.remove("selected");
        ratingThree.classList.remove("selected");
        ratingFour.classList.remove("selected");
        ratingFive.classList.remove("selected");

        if (rate.classList.contains("active")) {
            rate.classList.add("selected");
        }
        userRating.textContent = userSelectedRating;
    });
}
