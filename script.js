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
                        $('#productCard').append(
                            '<div class="card m-3" style="width: 18rem;">' +
                            '<img src="' + product.images[0] + '" class="card-img-top img-thumbnail" alt="product image">' +
                            '<div class="card-body">' +
                            '<h5 class="card-title">' + product.title + '</h5>' +
                            '<p class="card-text">' + product.description + '</p>' +
                            '</div>' +
                            '</div>'
                        );
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