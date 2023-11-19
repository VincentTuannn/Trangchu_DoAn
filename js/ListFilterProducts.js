/*Nhận giá trị từ localStorage
const storedJsonString = localStorage.getItem('ArrayListProducts');
const storedArray = JSON.parse(storedJsonString);
*/

function ListSellingProducts(filterthuonghieu = [], filtergiaban = [], filtercpu = [], filtervga = []) {
    let s = `<div class="item-selling-products" id="item-selling-products">`;
    for (let i = 0; i < storedArray.length; i++) {
        const product = storedArray[i];
        var anh = product.img;
        var thuonghieu = product.thuonghieu;
        var name = product.name;
        var cpu = product.cpu;  
        var ram = product.ram;
        var ssd = product.ssd;
        var vga = product.vga;
        var lcd = product.lcd;
        var pricecompare = product.pricecompare;
        var pricehighlight = product.pricehighlight;
        var labelonsale = product.labelonsale;

        console.log('filter.thuonghieu.length');
        if (filterthuonghieu.length > 0) {
            if (filterthuonghieu.includes(thuonghieu) == false)
                continue;
        }

        if (filtergiaban.length > 0) {
            if (pricehighlight < 10000000 && !filtergiaban.includes('1')) continue;
            if (pricehighlight >= 10000000 && pricehighlight <= 15000000 && !filtergiaban.includes('2')) continue;
            if (pricehighlight > 15000000 && pricehighlight <= 25000000 && !filtergiaban.includes('3')) continue;
            if (pricehighlight > 25000000 && !filtergiaban.includes('4')) continue;
        }

        if (filtercpu.length > 0) {
           if(filtercpu.includes(cpu) == false)
             continue;
        }

        if (filtervga.length > 0) {
            if(filtervga.includes(vga) == false)
              continue;
         }
        if(filterthuonghieu.length > 0 || filtergiaban.length > 0 || filtercpu.length > 0 || filtergiaban.length > 0)
        textss = document.getElementById('filter-result');
        textss.innerHTML = "Laptop";
        s += `
            <div class="item-show">
                <a href="#">
                    <img src="${anh}" width="100%"/>
                </a>
                <div class="detail">
                    <h3 class="name-product">
                        <a id="name" href="#" title="${name}" tabindex="0">${name}</a>
                    </h3>
                    <div class="technical">
                        <div class="cpu">
                            <span>${cpu}</span>
                        </div>
                        <div class ="vga">
                            <span>${vga}</span>
                        </div>
                        <div class="ram">
                            <span>${ram}</span>
                        </div>
                        <div class="ssd">
                            <span>${ssd}</span>
                        </div>
                        <div class="lcd">
                            <span>${lcd}</span>
                        </div>
                    </div>
                    <div class="price">
                        <div class="price--compare">
                            <del>${pricecompare}</del>
                        </div>
                        <div class="price--default">
                            <span class="pricehighlight">${pricehighlight}</span>
                            <span class="label--on-sale">${labelonsale}</span>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    s += `</div>`;
    document.getElementById("item-selling-products").innerHTML = s;
}

const urlParams = new URLSearchParams(window.location.search);
const filterTerm = urlParams.get('Filter');
/* Hàm thêm tag filter */
function addFilterTag(category, values) {
    const selectedFilters = document.getElementById('result-filter-full');
    const li = document.createElement('li');
    li.innerHTML = `<strong>${category}:</strong> ${values.join(', ')} <button onclick="removeFilter('${category}')">X</button>`;
    selectedFilters.appendChild(li);
}



function filteritem() {
    var arrthuonghieu = document.getElementsByClassName("thuonghieu");
    var filterthuonghieu = [];
    for (var i = 0; i < arrthuonghieu.length; i++) {
        if (arrthuonghieu[i].checked) filterthuonghieu.push(arrthuonghieu[i].value);
    }

    var arrgiaban = document.getElementsByClassName("gia");
    var filtergiaban = [];
    for(var i = 0; i< arrgiaban.length; i++){
        if(arrgiaban[i].checked) filtergiaban.push(arrgiaban[i].value);
    }


    var arrcpu = document.getElementsByClassName("cpu");
    var filtercpu = [];
    for(var i=0; i< arrcpu.length; i++){
        if(arrcpu[i].checked) filtercpu.push(arrcpu[i].value);
    }

    var arrvga = document.getElementsByClassName("vga");
    var filtervga = [];
    for(var i=0; i< arrvga.length; i++){
        if(arrvga[i].checked) filtervga.push(arrvga[i].value);
    }


    ListSellingProducts(filterthuonghieu,filtergiaban, filtercpu, filtervga);  

    console.log(filterthuonghieu);
    // Lưu trạng thái checkbox vào localStorage
    localStorage.setItem('filterthuonghieu', JSON.stringify(filterthuonghieu));
    localStorage.setItem('filtergiaban', JSON.stringify(filtergiaban));
    localStorage.setItem('filtercpu', JSON.stringify(filtercpu));
    localStorage.setItem('filtervga', JSON.stringify(filtervga));

    // Hiển thị các thẻ filter đã chọn
    displaySelectedFilters();
}

/* Hàm hiển thị các thẻ filter đã chọn */
function displaySelectedFilters() {
    // Lấy các giá trị filter từ localStorage
    const storedFilterThuongHieu = JSON.parse(localStorage.getItem('filterthuonghieu')) || [];
    const storedFilterGiaBan = JSON.parse(localStorage.getItem('filtergiaban')) || [];
    const storedFilterCpu = JSON.parse(localStorage.getItem('filtercpu')) || [];
    const storedFilterVga = JSON.parse(localStorage.getItem('filtervga')) || [];

    // Hiển thị các thẻ filter đã chọn nếu có ít nhất một filter được chọn
    const selectedFilters = document.getElementById('result-filter-full');
    selectedFilters.innerHTML = '';
    if (storedFilterThuongHieu.length > 0) addFilterTag("Thương hiệu", storedFilterThuongHieu);
    if (storedFilterGiaBan.length > 0) addFilterTag("Lọc giá", storedFilterGiaBan);
    if (storedFilterCpu.length > 0) addFilterTag("CPU", storedFilterCpu);
    if (storedFilterVga.length > 0) addFilterTag("VGA", storedFilterVga);
}
/* Hàm xóa filter theo category */
function removeFilter(category) {
    // Xóa filter từ localStorage
    localStorage.removeItem('filter' + category.toLowerCase());

    // Gọi lại hàm hiển thị các filter đã chọn
    displaySelectedFilters();

    // Gọi lại hàm lọc sản phẩm để cập nhật kết quả lọc
    filteritem();
    ListSellingProducts();
}

// Gọi hàm hiển thị các filter đã chọn khi trang được tải
displaySelectedFilters();
