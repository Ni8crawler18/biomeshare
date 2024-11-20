document.addEventListener('DOMContentLoaded', function() {
    // Retrieve form data from localStorage
    var formData = JSON.parse(localStorage.getItem('projectFormData'));

    // Display form data on the page
    for (var key in formData) {
        var div = document.createElement('div');
        div.innerHTML = '<strong>' + key + ':</strong> ' + formData[key];
        document.getElementById('formDataContainer').appendChild(div);
    }
});
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
        
    }

    // Call displayFormData when the page loads
    displayFormData();
});