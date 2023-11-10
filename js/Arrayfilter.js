var ArrayListFilterThuonghieu = [
    {filtername:" ASUS"},
    {filtername:" DELL"}
];
var ArrayListFilterGia = [
    {filtergia:"Dưới 10.000.000đ"},
    {filtergia:"10.000.000đ - 15.000.000đ"},
];
var ArrayListFilterCPU = [
    {filtercpu:"Dưới 10.000.000đ"},
    {filtercpu:"10.000.000đ - 15.000.000đ"},
];
var ArrayListFilterVGA = [
    {filtervga:"Dưới 10.000.000đ"},
    {filtervga:"10.000.000đ - 15.000.000đ"},
];



var thuonghieu = document.getElementById('item-thuonghieu');
thuonghieu.addEventListener('click', function(){
    ListFilterThuonghieu();
});
// Gọi hàm để tạo danh sách khi trang được tải
ListFilterThuonghieu();
function ListFilterThuonghieu() {
    let listfilter = '';
    for (let i = 0; i < ArrayListFilterThuonghieu.length; i++) {
        const filter = ArrayListFilterThuonghieu[i];
        listfilter += `
            <li>
                <label id="label-item-search">
                    <input type="checkbox" id="filtername">${filter.filtername}
                </label>
            </li>
             `;
    }
    document.getElementById("group-filter-thuonghieu").innerHTML = listfilter;
}




var gia = document.getElementById('item-gia');
gia.addEventListener('click', function(){
    ListFilterGia();
});
// Gọi hàm để tạo danh sách khi trang được tải
ListFilterGia();
function ListFilterGia(){
    let listfiltergia = '';
    for (let i = 0; i < ArrayListFilterGia.length; i++) {
        const filtergia = ArrayListFilterGia[i];
        listfiltergia += `
            <li>
                <label>
                    <input type="checkbox">
                    <p class="filtergia">${filtergia.filtergia}</p>
                </label>
            </li>
             `;
    }
    document.getElementById("group-filter-gia").innerHTML = listfiltergia;
}




var cpu = document.getElementById('item-cpu');
cpu.addEventListener('click', function(){
    ListFilteCPU();
});
// Gọi hàm để tạo danh sách khi trang được tải
ListFilterCPU();
function ListFilterCPU(){
    let listfiltercpu = '';
    for (let i = 0; i < ArrayListFilterCPU.length; i++) {
        const filtercpu = ArrayListFilterCPU[i];
        listfiltercpu += `
            <li>
                <label>
                    <input type="checkbox">
                    <p class="filtercpu">${filtercpu.filtercpu}</p>
                </label>
            </li>
             `;
    }
    document.getElementById("group-filter-cpu").innerHTML = listfiltercpu;
}



var vga = document.getElementById('item-vga');
vga.addEventListener('click', function(){
    ListFilteVGA();
});
// Gọi hàm để tạo danh sách khi trang được tải
ListFilterVGA();
function ListFilterVGA(){
    let listfiltervga = '';
    for (let i = 0; i < ArrayListFilterVGA.length; i++) {
        const filtervga = ArrayListFilterVGA[i];
        listfiltervga += `
            <li>
                <label>
                    <input type="checkbox">
                    <p class="filtervga">${filtervga.filtervga}</p>
                </label>
            </li>
             `;
    }
    document.getElementById("group-filter-vga").innerHTML = listfiltervga;
}




/* Hàm tìm kiếm xuất giá trị trong trang */ 
function handleSearch() {
    const text = document.getElementById('filtername');
    const products = document.getElementsByClassName('name');
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productName = product.textContent.toLowerCase();
        const productItem = product.parentElement.parentElement.parentElement;
        const searchResult = text.textContent;
        if (productName.includes(searchResult.toLowerCase())) {
            productItem.style.display = 'block';
        } else {
            productItem.style.display = 'none';
        }
    }

    return false; // Ngăn chặn việc gửi biểu mẫu
}



