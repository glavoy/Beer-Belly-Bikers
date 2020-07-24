// This is the custom JavaScript file
// for the Beer Belly Bikers website


// This function changes the DOM for 
// the pastrides.html page
// It changes the title, description
// and the embedded map route of
// each ride when the user clicks
// an image of the ride
function showMap(map) 
{
    var mapsrc;     // link to map source
    var title;      // title of the ride
    var rideDesc;   // description of the ride
    
    // Switch statement to determine which code to execute
    // based on user input
    switch (map) 
    {
        // West Nile Ride
        case "westnile":
            // Change link to map [4]
            mapsrc = "https://www.google.com/maps/embed?pb=!1m64!1m12!1m3!1d2041538.1379055677!2d30.616939965102443!3d2.0035583019229826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m49!3e0!4m5!1s0x177dbc0f9d74b39b%3A0x4538903dd96b6fec!2sKampala!3m2!1d0.34759639999999997!2d32.5825197!4m5!1s0x176fdba7083d049f%3A0xb40b95bcc7eb81e9!2sPakwach!3m2!1d2.4607140999999997!2d31.4941738!4m5!1s0x176e6265a178c769%3A0xaa1e18867d91929c!2sArua!3m2!1d3.0303299!2d30.907304!4m5!1s0x176dcb87c9e7098f%3A0xf407fcb7dfbac96c!2sKoboko!3m2!1d3.4167992!2d30.958949599999997!4m5!1s0x1772795dd49e7db5%3A0xfa829ee90de4c94!2sMoyo!3m2!1d3.6527376!2d31.7280955!4m5!1s0x17720e1410740db7%3A0x43bc308aa932cd2f!2sAdjumani!3m2!1d3.3783808!2d31.782227799999998!4m5!1s0x1771a65c0fc42a27%3A0xce6ef3d1c3d80e06!2sGulu!3m2!1d2.7724037999999998!2d32.2880726!4m5!1s0x177dbc0f9d74b39b%3A0x4538903dd96b6fec!2sKampala!3m2!1d0.34759639999999997!2d32.5825197!5e0!3m2!1sen!2sug!4v1584504280316!5m2!1sen!2sug";
            
            // Change the title of the Ride
            title = "West Nile";
            
            // Change the description of the Ride
            rideDesc = "This 1200km trip took us through the northern part of Murchison Falls National Park, the largest national park in Uganda.  From there, we went on to northwest Uganda where we crossed the River Nile. Riding around this region, we almost touched the borders of both the Democratic Republic of Congo and South Sudan.  On the way back down we had to load the bikes on a ferry for a river crossing.";
            break;
            
            
        // Kidepo Ride
        case "kidepo":
            // Change link to map [4]
            mapsrc = "https://www.google.com/maps/embed?pb=!1m64!1m12!1m3!1d2041491.4257421838!2d32.212534420751!3d2.040689128011781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m49!3e0!4m5!1s0x177dbc0f9d74b39b%3A0x4538903dd96b6fec!2sKampala!3m2!1d0.34759639999999997!2d32.5825197!4m5!1s0x1778831259d594e1%3A0x2ad7bd047873504c!2sKapchorwa!3m2!1d1.397297!2d34.448938399999996!4m5!1s0x179d78472f061321%3A0x5eeb7a7b1c21a0ba!2sMoroto!3m2!1d2.5282234!2d34.6579985!4m5!1s0x1775a2b704ecacc3%3A0xc8f0f4c78e834bb6!2sKaabong!3m2!1d3.5124435999999997!2d34.1337219!4m5!1s0x1774f95f46c177b7%3A0xfe7e684ff016b050!2sKidepo%20Valley%20UWA%20Campsite%2C%20Nagusokopire!3m2!1d3.7290486!2d33.6893177!4m5!1s0x1773e5518de5f533%3A0xf186ad6436f26449!2sKitgum!3m2!1d3.2884846999999997!2d32.8789499!4m5!1s0x1771a65c0fc42a27%3A0xce6ef3d1c3d80e06!2sGulu!3m2!1d2.7724037999999998!2d32.2880726!4m5!1s0x177dbc0f9d74b39b%3A0x4538903dd96b6fec!2sKampala!3m2!1d0.34759639999999997!2d32.5825197!5e0!3m2!1sen!2sug!4v1584510956739!5m2!1sen!2sug";
            
            // Change the title of the Ride
            title = "Kidepo National Park";
            
            // Change the description of the Ride
            rideDesc = "Kidepo National Park is always a great ride!  That's probably why we've done it four times! We always take the scenic route up through north eastern Uganda in the heart of the Karamoja region.  The Karamojong people still live a traditional lifestyle and it is always interesting to see them in their cultural garb, consisting of felt hats with a single feather and a walking stick.";
            break;
            
            
        // Bundibugyo Ride
        case "bundibugyo":
            // Change link to map [4]
            mapsrc = "https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d2042779.2595624255!2d30.16928086638145!3d0.15752432440200662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x177dbc0f9d74b39b%3A0x4538903dd96b6fec!2sKampala!3m2!1d0.34759639999999997!2d32.5825197!4m5!1s0x1763da423ccd41c1%3A0xb3115cac70684750!2sFort%20Portal!3m2!1d0.6546257!2d30.2801166!4m5!1s0x17616408921e8579%3A0x9cb43640bffe6574!2sBundibugyo!3m2!1d0.707531!2d30.0636349!4m5!1s0x1761f22d0aeab9db%3A0x2459705d97ccfe70!2sKasese!3m2!1d0.16989859999999998!2d30.078077999999998!4m5!1s0x19d91bb20d9cd3e3%3A0x883a0deaec00c519!2sMbarara!3m2!1d-0.6071596!2d30.6545022!4m5!1s0x177dbc0f9d74b39b%3A0x4538903dd96b6fec!2sKampala!3m2!1d0.34759639999999997!2d32.5825197!5e0!3m2!1sen!2sug!4v1584504430607!5m2!1sen!2sug";
            
            // Change the title of the Ride
            title = "Bundibugyo";
            
            // Change the description of the Ride
            rideDesc = "The trip to Bundibugyo took us through vast, rolling tea estates and on to some amazing winding roads approaching the border of the Congo.  We also spent time in the western Ugandan city of Fort Portal, a very popular tourist destination.  Riding south, we enjoyed the natural beauty and wildlife of Queen Elizabeth National Park.";
            break;

        
        // western Kenya Ride
        case "westkenya":
            // Change link to map [4]
            mapsrc = "https://www.google.com/maps/embed?pb=!1m76!1m12!1m3!1d1021392.9966897363!2d33.36045482733342!3d0.05631247745110963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m61!3e0!4m5!1s0x177dbc0f9d74b39b%3A0x4538903dd96b6fec!2sKampala!3m2!1d0.34759639999999997!2d32.5825197!4m5!1s0x19d523b5fb0fe10b%3A0xd5c165f4fd024073!2sMbita%2C%20Kenya!3m2!1d-0.4367915!2d34.2060283!4m5!1s0x19d4e0fd2f6c9a85%3A0x2b7bb0306012013!2sSena%2C%20Kenya!3m2!1d-0.53679!2d34.111002899999995!4m5!1s0x19d4962ac989e7f3%3A0x7db872f48179aacb!2sKarungu%2C%20Kenya!3m2!1d-0.8433537!2d34.1573669!4m5!1s0x19d4d4f7c523ddff%3A0xc3d6a7b3371a3e11!2sHoma%20Bay%2C%20Kenya!3m2!1d-0.5350427!2d34.4530968!4m5!1s0x182aa437ad4ac81d%3A0x2012a439d6248dd2!2sKisumu%2C%20Kenya!3m2!1d-0.0917016!2d34.7679568!4m5!1s0x17803c37cdba7711%3A0xd7380a06dc908a6a!2sKakamega%2C%20Kenya!3m2!1d0.2827307!2d34.7518631!4m5!1s0x1778b6126bdea17b%3A0xb84df43e61b7b568!2sMbale!3m2!1d1.0784436!2d34.1810057!4m5!1s0x177e7b862c391f47%3A0x300fe90f956a9f4a!2sJinja!3m2!1d0.4478566!2d33.2026122!4m5!1s0x177dbc0f9d74b39b%3A0x4538903dd96b6fec!2sKampala!3m2!1d0.34759639999999997!2d32.5825197!5e0!3m2!1sen!2sug!4v1584511149781!5m2!1sen!2sug";
            
            // Change the title of the Ride
            title = "Western Kenya";
            
            // Change the description of the Ride
            rideDesc = "After crossing the Kenyan border and dodging angry mobs of people due to political unrest, the quiet villages along Lake Victoria were welcoming.  The trip took us along the shores of the lake into remote fishing villages where we enjoyed fresh fish caught just hours before.  The trip was unfortunately cut short when one of our members hit a goat and we had to take him to a nearby hospital.";
            break;
    }
    
    // Update the map source
    document.getElementById("map").src = mapsrc;
    
    // Update the title of the Ride
    document.getElementById("pastrides-title").textContent = title;

    // Update the description of the Ride
    document.getElementById("pastrides-desc").textContent = rideDesc;
}




// Wait for the DOM to fully load before running jQuery code
jQuery(document).ready(function($){
    
    // This section of code is used to scroll through the photo
    // gallery (gallery.html) automatically.  It also handles the 
    // user clicks on the scroll buttons and the thumbnails
    
    // Counter used to keep track of the images
    var imgCounter = 1;
    
    // Maximum number of images
    var maxImages = 6;
    
    // Set the interval to scroll through the images
    // Currently set to 4 seconds
    var imgInterval = 4000;
    
    // Set the main image to the thumbnail image when it is clicked
    $(".thmb-img").click(function(){
        $("#mainImage").attr('src', 
            $(this).attr('src'));
    });

    
    // Simulate a click event to load the thumbnail image into the mainimage
    $("#image"+imgCounter).click();

    
    // handle the forward button click event
    $("#btn-forward").click(function (){
        // Increment the image counter
        imgCounter +=1;
        
        // Go back to first image after reaching the last image
        if(imgCounter > maxImages){
            imgCounter = 1;
        }
        
        // Fire the click event on the image
        $("#image"+imgCounter).click();
    });
    
    
    // handle the backward button click event
    $("#btn-backward").click(function (){
        // Deccrement the image counter
        imgCounter -=1;
        
        // Go back to last image after reaching the first image
        if(imgCounter < 1){
            imgCounter = maxImages;
        }
        
        // Fire the click event on the image
        $("#image"+imgCounter).click();
    });
    
    
    // Fire the forward button click event every 4 seconds 
    setInterval(function (){
        $("#btn-forward").click();
    }, imgInterval);
    
    
    
    // Handle the click event when user clicks on Gallery 1
    $("#gallery1").on({
        'click': function(){
            // Set the title of the image gallery
            document.getElementById("viewGallery").textContent = "Thrills and spills";
            
            // Set the thumbnail images
            $('#image1').attr('src','./img/thrills/thrills1.jpg');
            $('#image2').attr('src','./img/thrills/thrills2.jpg');
            $('#image3').attr('src','./img/thrills/thrills3.jpg');
            $('#image4').attr('src','./img/thrills/thrills4.jpg');
            $('#image5').attr('src','./img/thrills/thrills5.jpg');
            $('#image6').attr('src','./img/thrills/thrills6.jpg');
            
            // Set the image counter so that it shows the first image
            imgCounter = 0;
            
            // And fire the click event on the forward button
            $("#btn-forward").click();
        }
    });
 
    
    // Handle the click event when user clicks on Gallery 2
    $("#gallery2").on({
        'click': function(){
            // Set the title of the image gallery
            document.getElementById("viewGallery").textContent = "Kidepo National Park";
            
            // Set the thumbnail images
            $('#image1').attr('src','./img/kidepo/kidepo1.jpg');
            $('#image2').attr('src','./img/kidepo/kidepo2.jpg');
            $('#image3').attr('src','./img/kidepo/kidepo3.jpg');
            $('#image4').attr('src','./img/kidepo/kidepo4.jpg');
            $('#image5').attr('src','./img/kidepo/kidepo5.jpg');
            $('#image6').attr('src','./img/kidepo/kidepo6.jpg');
            
            // Set the image counter so that it shows the first image
            imgCounter = 0;
            
            // And fire the click event on the forward button
            $("#btn-forward").click();
        }
    });
 
    
    // Handle the click event when user clicks on Gallery 3
    $("#gallery3").on({
        'click': function(){
            // Set the title of the image gallery
            document.getElementById("viewGallery").textContent = "Lake Albert";
            
            // Set the thumbnail images
            $('#image1').attr('src','./img/lakealbert/lakealbert1.jpg');
            $('#image2').attr('src','./img/lakealbert/lakealbert2.jpg');
            $('#image3').attr('src','./img/lakealbert/lakealbert3.jpg');
            $('#image4').attr('src','./img/lakealbert/lakealbert4.jpg');
            $('#image5').attr('src','./img/lakealbert/lakealbert5.jpg');
            $('#image6').attr('src','./img/lakealbert/lakealbert6.jpg');
            
            // Set the image counter so that it shows the first image
            imgCounter = 0;
            
            // And fire the click event on the forward button
            $("#btn-forward").click();
        }
    });
    
    
    // Handle the click event when user clicks on Gallery 4
    $("#gallery4").on({
        'click': function(){
            // Set the title of the image gallery
            document.getElementById("viewGallery").textContent = "Western Kenya";

            // Set the thumbnail images
            $('#image1').attr('src','./img/westkenya/westkenya1.jpg');
            $('#image2').attr('src','./img/westkenya/westkenya2.jpg');
            $('#image3').attr('src','./img/westkenya/westkenya3.jpg');
            $('#image4').attr('src','./img/westkenya/westkenya4.jpg');
            $('#image5').attr('src','./img/westkenya/westkenya5.jpg');
            $('#image6').attr('src','./img/westkenya/westkenya6.jpg');
            
            // Set the image counter so that it shows the first image
            imgCounter = 0;
            
            // And fire the click event on the forward button
            $("#btn-forward").click();
        }
    });
}); // End of jQuery(document).ready




// This function is used to show the modal video on the gallery.html page
// I found an exampl at: https://jsfiddle.net/esedic/aekw4ftr/ [7]
// The original author is Elvis Sedić
// I made some changes to the function so that the video starts playing
// at the 90 second mark and also showed the time remaining on the video
$(".video-modal").click(function () {
    // After clicking the button to watch the video, stop the pulse animation
    // The pulse animation was used to ge the users attention
    document.getElementById('videoButton').style.animationIterationCount = '1';
    
    // variable for the modal video
    var theModal = $(this).data("target")
    
    // variable for the video source
    var videoSRC = $(this).attr("data-video")
    
    // add some parameters to the video source
    var videoSRCauto = videoSRC + "&modestbranding=1&rel=0&controls=1&showinfo=0&html5=1&autoplay=1&mute=1";
    
    // Set the source for the iframe to be the video with all the parameters
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal).on('hidden.bs.modal', function () {
        $(theModal + ' iframe').attr('src', videoSRC);
    });
});






// This function is used on the home page to show the scrolling images
// I adapted the code found at https://www.w3schools.com/howto/howto_js_slideshow.asp [8]
// I removed the dots indicating which image is showing and also the scrolling
// because this slidewhow is not interactive

// Set the index to begin at the first miage
var slideIndex = 0;

// Call the function to initiate the slideshow
showSlides();

// Slideshow function starts here
function showSlides(){
    // Set the interval for changing slides to 4 seconds
    var slideInterval = 4000;
    
    // Stores an array of all the elements of the class 'index-slides'
    var bbbSlides;
    bbbSlides = document.getElementsByClassName("index-slides");
    
    // Loop through each image and set the display style to 'none'
    for (var i = 0; i < bbbSlides.length; i++) {
        bbbSlides[i].style.display = "none";  
    }
    
    // Increment the slide index
    slideIndex++;
    
    // if we are on the last image, go back to the first
    if (slideIndex > bbbSlides.length) {
        slideIndex = 1
    }    
    
    // set the display style to 'block'
    bbbSlides[slideIndex-1].style.display = "block";
    
    // Change the image according to the slideInterval
    setTimeout(showSlides, slideInterval);
}


