const productList = document.getElementById('item-show'); // Lấy phần tử chứa danh sách sản phẩm
const searchInput = document.getElementById('search'); // Lấy ô tìm kiếm

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    const products = productList.getElementById('productname');

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productName = product.textContent.toLowerCase();
        const productItem = product.parentElement.parentElement.parentElement;

        if (productName.includes(searchTerm)) {
            productItem.style.display = 'block';
        } else {
            productItem.style.display = 'none';
        }
    }
});
