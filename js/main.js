jQuery(document).ready(function ($) {
  "use strict";

  const imagesPerLoad = 9;
  const imageFolder = "img/";
  const imageContainer = document.getElementById("portfolio");
  const loadMoreBtn = document.getElementById("load-more");
  let displayedImageCount = 0;
  let isAllImagesDisplayed = false;
  let remainingImageNames = [];

  const allImageNames = [
    // "1_1.JPG",
    // "10_1.JPG",
    // "2_1.JPG",
    // "3_1.JPG",
    // "4_1.JPG",
    // "5_1.JPG",
    // "6_1.JPG",
    // "7_1.JPG",
    // "8_1.JPG",
    // "9_1.JPG",
    "ANN02569_1.JPG",
    "ANN02607_1.JPG",
    "ANN02684_1.JPG",
    "ANN02697_1.JPG",
    "ANN02755_1.JPG",
    "ANN02789_1.JPG",
    "ANN02794_1.JPG",
    "ANN02819_1.JPG",
    "ANN02845_1.JPG",
    "ANN02900_1.JPG",
    "ANN02906_1.JPG",
    "ANN02916_1.JPG",
    "ANN02926_1.JPG",
    "ANN02949_1.JPG",
    "ANN02962_1.JPG",
    "ANN02977_1.JPG",
    "ANN03014_1.JPG",
    "ANN03059_1.JPG",
    "ANN03085_1.JPG",
    "ANN03143_1.JPG",
    "ANN03183_1.JPG",
    "ANN03211_1.JPG",
    "ANN03275_1.JPG",
    "ANN03281_1.JPG",
    "ANN03308_1.JPG",
    "ANN03338_1.JPG",
    "ANN03366_1.JPG",
    "ANN03401_1.JPG",
    "ANN03437_1.JPG",
    "ANN03471_1.JPG",
    "ANN03580_1.JPG",
    "ANN03612_1.JPG",
    "ANN03636_1.JPG",
    "ANN03655_1.JPG",
    "ANN03671_1.JPG",
    "ANN03678_1.JPG",
    "ANN03702_1_1.JPG",
    "ANN03718_1.JPG",
    "ANN03725_1.JPG",
    "ANN03812_1.JPG",
    "bia ab_1.JPG",
    //Add all your image names here
  ];

  $(function () {
    

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    function displayImages(imageUrls) {
      imageUrls.forEach((imageUrl) => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-md-4", "col-sm-6", "item");
        const portfolioItemDiv = document.createElement("div");
        portfolioItemDiv.classList.add("portfolio-item");
        const thumbDiv = document.createElement("div");
        thumbDiv.classList.add("thumb");

        const link = document.createElement("a");
        link.href = imageUrl.replace("img/", "img/");
        link.setAttribute("data-lightbox", "image-1");

        const imageDiv = document.createElement("div");
        imageDiv.classList.add("image");

        const img = document.createElement("img");
        img.src = imageUrl;

        imageDiv.appendChild(img);
		thumbDiv.appendChild(imageDiv);
		link.appendChild(thumbDiv);
        portfolioItemDiv.appendChild(link);
        colDiv.appendChild(portfolioItemDiv);
		imageContainer.appendChild(colDiv);
		
		
	  });
	  
	  lightbox.init();
    }

    async function loadMoreImages() {
      if (isAllImagesDisplayed) {
        loadMoreBtn.disabled = true;
        loadMoreBtn.textContent = "No More Images";
        return;
      }

      const imagesToLoad = [];
      for (let i = 0; i < imagesPerLoad; i++) {
        if (remainingImageNames.length > 0) {
          imagesToLoad.push(remainingImageNames.pop());
        }
      }
      const imageUrls = imagesToLoad.map((name) => `${imageFolder}${name}`);

      if (imageUrls.length > 0) {
        displayImages(imageUrls);
        displayedImageCount += imageUrls.length;
        if (remainingImageNames.length === 0) isAllImagesDisplayed = true;
      } else {
        loadMoreBtn.disabled = true;
        loadMoreBtn.textContent = "No More Images";
        isAllImagesDisplayed = true;
	  }
	  
    }

    remainingImageNames = [...allImageNames];
    shuffleArray(remainingImageNames);
    // Initial Load and Event Listener
    loadMoreImages();
	loadMoreBtn.addEventListener("click", loadMoreImages);
	
  });

  // on click event on all anchors with a class of scrollTo
  $("a.scrollTo").on("click", function () {
    // data-scrollTo = section scrolling to name
    var scrollTo = $(this).attr("data-scrollTo");

    // toggle active class on and off. added 1/24/17
    $("a.scrollTo").each(function () {
      if (scrollTo == $(this).attr("data-scrollTo")) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });

    // animate and scroll to the sectin
    $("body, html").animate(
      {
        // the magic - scroll to section
        scrollTop: $("#" + scrollTo).offset().top,
      },
      1000
    );
    return false;
  });

});
