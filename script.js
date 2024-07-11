$(document).ready(function () {
    // Attach click event to the button
    $('#fetchDataBtn').click(function () {
        // Make an AJAX request to the API endpoint
        $.ajax({
            url: 'https://dummyjson.com/products',
            method: 'GET',
            dataType: 'json',
            success: function (response) {
                // Handle the successful response here
                console.log(response);

                // Check if the response is an array and has items
                if (Array.isArray(response.products) && response.products.length > 0) {
                    // Clear previous titles and images
                    $('#h1').empty();
                    $('#imagesContainer').empty();

                    // Loop through each product and display its title and images
                    response.products.forEach(function (product) {
                        $('#h1').append('<p>' + product.title + '</p>');
                        $('#imagesContainer').append('<img src="' + product.images[0] + '" width="100" />');
                    });
                } else {
                    console.error('Invalid response format or no products found');
                }
            },
            error: function (xhr, status, error) {
                // Handle any errors that occur during the request
                console.error(status + ': ' + error);
            }
        });
    });
});