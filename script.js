let currentIndex = 0;

// Function to open the festival modal
function openFestival(festival) {
  const modal = document.getElementById("modal");
  const festivalName = document.getElementById("festival-name");
  const festivalDescription = document.getElementById("festival-description");
  const festivalImage = document.getElementById("festival-image");

  // Setting data for each festival
  const festivals = {
    Diwali: {
      description:
        "Deepavali, the festival of lights, is celebrated with diyas, rangolis, and sweets.",
      image: "deeepa.jpg",
    },
    Holi: {
      description:
        "Holi, the festival of colors, is celebrated with vibrant colors and joy.",
      image: "holii.jpg",
    },
    Christmas: {
      description:
        "Christmas is celebrated with carols, gifts, and family gatherings.",
      image: "christmas.jpg",
    },
    "Ganesha Chaturthi": {
      description:
        "Ganesha Chaturthi celebrates the birth of Lord Ganesha with grand processions and decorations.",
      image: "ganesha.jpg",
    },
    Ugadi: {
      description:
        "Ugadi marks the New Year for people in Karnataka and Andhra Pradesh, celebrated with special dishes.",
      image: "ugadi.jpg",
    },
    "New Year": {
      description:
        "New Year is celebrated with parties, feasts, and resolutions for the upcoming year!",
      image: "newyear.jpg",
    },
  };

  if (festivals[festival]) {
    festivalName.innerText = festival;
    festivalDescription.innerText = festivals[festival].description;
    festivalImage.src = festivals[festival].image;
  }

  modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Function to automatically slide the carousel
function slideCarousel() {
  const images = document.querySelector(".carousel-images");
  const totalImages = images.children.length;

  currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image
  images.style.transform = `translateX(-${
    currentIndex * (100 / totalImages)
  }%)`;
}

// Set an interval for the carousel to slide automatically every 4 seconds
setInterval(slideCarousel, 4000);
