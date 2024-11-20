document.addEventListener('DOMContentLoaded', function() {
    const projectForm = document.getElementById('projectForm');
    const steps = projectForm.querySelectorAll('.step');
    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            if (index === stepIndex) {
                step.style.display = 'block';
            } else {
                step.style.display = 'none';
            }
        });
    }

    showStep(currentStep);

    function goToNextStep() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    }

    function goToPreviousStep() {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    }

    // Event listeners for next and previous buttons
    const nextButton = projectForm.querySelectorAll('#nextStep');
    const prevButton = projectForm.querySelectorAll('#prevStep');

    nextButton.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            goToNextStep();
        });
    });

    prevButton.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            goToPreviousStep();
        });
    });

    // Event listener for form submission (you can add form validation here)
    const submitButton = projectForm.querySelector('#submitForm');
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        // You can collect and process form data here
        // Then submit the form or perform any other action
        projectForm.submit();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var formData = {}; // Object to store form data

    // Function to show the current step and hide other steps
    function showStep(stepId) {
        var steps = document.querySelectorAll('.step');
        steps.forEach(function(step) {
            if (step.id === stepId) {
                step.style.display = 'block';
            } else {
                step.style.display = 'none';
            }
        });
    }

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Gather form data from each step
        var step1Data = {
            projectTitle: document.getElementById('projectTitle').value,
            adminName: document.getElementById('adminName').value,
            adminEmail: document.getElementById('adminEmail').value,
            summaryDescription: document.getElementById('summaryDescription').value,
            alignedOrganization: document.getElementById('alignedOrganization').value,
            projectProof: document.getElementById('projectProof').value
        };
        var step2Data = {
            benefits: document.getElementById('benefits').value,
            collateral: document.getElementById('collateral').value,
            latitude: document.getElementById('latitude').value,
            longitude: document.getElementById('longitude').value,
            projectSite: document.getElementById('projectSite').value,
            alignment: document.getElementById('alignment').value,
            area: document.getElementById('area').value
        };
        var step3Data = {
            startingDate: document.getElementById('startingDate').value,
            endingDate: document.getElementById('endingDate').value,
            budget: document.getElementById('budget').value,
            split: document.getElementById('split').value,
            stakeholders: document.getElementById('stakeholders').value
        };

        // Combine all form data into one object
        formData = { ...step1Data, ...step2Data, ...step3Data };

        // Store form data locally
        localStorage.setItem('projectFormData', JSON.stringify(formData));

        // Redirect to home_organizer.html
        window.location.href = "home_organizer.html";
    }
    

    // Event listener for form submission
    var submitButton = document.getElementById('submitForm');
    submitButton.addEventListener('click', handleSubmit);
});
