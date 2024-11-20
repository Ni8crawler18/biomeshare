document.addEventListener("DOMContentLoaded", function() {
    // Function to get URL parameters
    function getUrlParams() {
        var params = {};
        var queryString = window.location.search.substring(1);
        var vars = queryString.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
        return params;
    }

    // Function to display form data
    function displayFormData() {
        var urlParams = getUrlParams();
        document.getElementById("name").innerText = urlParams.name || "";
        document.getElementById("email").innerText = urlParams.email || "";
        document.getElementById("mobile").innerText = urlParams.countryCode + urlParams.mobile || "";
        document.getElementById("organizationName").innerText = urlParams.organizationName || "";
        document.getElementById("organizationWebsite").innerText = urlParams.organizationWebsite || "";
    }

    // Call displayFormData when the page loads
    displayFormData();
});
document.addEventListener("DOMContentLoaded", function() {
    // Function to redirect to createProject.html
    function redirectToCreateProject() {
        window.location.href = "createProject.html";
    }

    // Event listener for the "Create Project" button
    var createProjectButton = document.getElementById("create");
    createProjectButton.addEventListener("click", redirectToCreateProject);
});
// home_organizer.js
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve form data from localStorage
    var formData = JSON.parse(localStorage.getItem('projectFormData'));

    // Function to display summary form data
    function displaySummaryFormData() {
        // Select the container element where the form data will be displayed
        var container = document.getElementById('formDataContainer');

        // Display only the summary form data (admin name, mobile number, project image, location, budget)
        var summaryData = {
            adminName: formData.adminName,
            mobile: formData.countryCode + formData.mobile,
            projectImage: formData.projectImage,
            location: formData.latitude + ", " + formData.longitude,
            budget: formData.budget
        };

        // Create and append HTML elements to display summary form data
        for (var key in summaryData) {
            var div = document.createElement('div');
            div.innerHTML = "<strong>" + key + ":</strong> " + summaryData[key];
            container.appendChild(div);
        }
    }

    // Function to display complete form data
    function displayCompleteFormData() {
        // Select the container element where the form data will be displayed
        var container = document.getElementById('formDataContainer');

        // Clear the container before displaying complete form data
        container.innerHTML = "";

        // Create and append HTML elements to display complete form data
        for (var key in formData) {
            var div = document.createElement('div');
            div.innerHTML = "<strong>" + key + ":</strong> " + formData[key];
            container.appendChild(div);
        }
    }

    // Call the function to display summary form data initially
    displaySummaryFormData();

    // Event listener for the "See More" button
    var seeMoreButton = document.getElementById("seeMoreButton");
    seeMoreButton.addEventListener("click", function() {
        // Display complete form data when the button is clicked
        var fullDetailsContainer = document.getElementById("fullDetailsContainer");
        fullDetailsContainer.style.display = "block"
        displayCompleteFormData();
    });
});


