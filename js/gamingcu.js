let gaming = 'Laptop Gaming Cu';


//Lấy giá trị mảng sản phẩm từ LocalStorage
const storedJsonString = localStorage.getItem('ArrayListProducts');
// Chuyển đổi chuỗi JSON thành mảng
const storedArray = JSON.parse(storedJsonString);
// Gọi hàm ListSellingProducts với các filter
ListSellingProducts(storedArray);

function ListSellingProducts(storedArray) {
    let s = `<div class="item-selling-products" id="item-selling-products">`;
    for (let i = 0; i < storedArray.length; i++) {
        const product = storedArray[i];
        var anh = product.img;
        var thuonghieu = product.thuonghieu;
        var phanloai = product.phanloai;
        var name = product.name;
        var cpu = product.cpu;
        var ram = product.ram;
        var ssd = product.ssd;
        var vga = product.vga;
        var lcd = product.lcd;
        var pricecompare = product.pricecompare;
        var pricehighlight = product.pricehighlight;
        var labelonsale = product.labelonsale;

        // Kiểm tra điều kiện lọc, nếu filterValue không rỗng thì thực hiện lọc
        if(!storedArray.phanloai){
            if(!(storedArray.phanloai.toLowerCase() === gaming.toLowerCase()))
                continue;
        }
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