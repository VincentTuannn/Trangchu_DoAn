// Số lượng phần tử hiển thị trên mỗi trang
const itemsPerPage = 5;
// Trang hiện tại
let currentPage = 1;

// Hàm thay đổi trang
function changePage(page, items, paginationContainer) {
    // Cập nhật trang hiện tại
    currentPage = page;
    // Hiển thị các phần tử trên trang mới
    showPage(items, paginationContainer);
}

// Hàm hiển thị các phần tử trên trang hiện tại
function showPage(items, paginationContainer) {
    // Ẩn tất cả các phần tử
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
    }

    // Tính chỉ số bắt đầu và kết thúc của phần tử trên trang hiện tại
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Hiển thị các phần tử trong khoảng từ startIndex đến endIndex
    for (let i = startIndex; i < endIndex; i++) {
        if (items[i]) {
            items[i].style.display = 'block';
        }
    }

    // Gọi hàm renderPagination để tạo và hiển thị các nút phân trang
    renderPagination(items, paginationContainer);
}

// Hàm tạo và hiển thị các nút phân trang
function renderPagination(items, paginationContainer) {
    // Tính tổng số phần tử
    const totalItems = items.length;
    // Tính tổng số trang
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Xóa nội dung của container phân trang
    paginationContainer.innerHTML = '';

    // Tạo nút cho mỗi trang
    for (let i = 1; i <= totalPages; i++) {
        // Tạo một div để làm nút phân trang
        const btn = document.createElement('div');
        // Gán số trang cho nút
        btn.innerText = i;
        // Gán lớp CSS cho nút
        btn.className = 'pagination-btn';

        // Gán sự kiện click cho nút, gọi hàm changePage khi nút được nhấp
        btn.onclick = function () {
            changePage(i, items, paginationContainer);
        };

        // Nếu là trang hiện tại, thêm lớp 'active' để làm nổi bật
        if (i === currentPage) {
            btn.classList.add('active');
        }

        // Thêm nút vào container phân trang
        paginationContainer.appendChild(btn);
    }
}



// Ví dụ sử dụng cho item-show
const items = document.getElementsByClassName('item-show');
const paginationContainer = document.getElementById('pagenumber');
showPage(items, paginationContainer);

// Ví dụ sử dụng cho item-show-gaming
const items2 = document.getElementsByClassName('item-show-gaming');
const paginationContainer2 = document.getElementById('pagenumber2');
showPage(items2, paginationContainer2);
// Ví dụ sử dụng cho item-show-doanhnhan
const items3 = document.getElementsByClassName('item-show-doanhnhan');
const paginationContainer3 = document.getElementById('pagenumber3');
showPage(items3, paginationContainer3);

// Ví dụ sử dụng cho item-show-dohoa
const items4 = document.getElementsByClassName('item-show-dohoa');
const paginationContainer4 = document.getElementById('pagenumber4');
showPage(items3, paginationContainer4);
