var testlocal = ["r"];
    localStorage.setItem('testlocal', JSON.stringify(testlocal));

/*    const ArrayListProducts = [
        {
            img: "./image/selling-products.webp",
            name: "Laptop LG Gram 2023 14Z90R GAH53A5",
            thuonghieu: "LG",
            cpu: "Intel Core i7",
            vga: "RTX 3070",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "25490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop ASUS Gram 2023 14Z90R GAH53A5",
            thuonghieu: "ASUS",
            cpu: "Intel Core i7",
            vga: "RTX 3070",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "5490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop DELL Gram 2023 14Z90R GAH53A5",
            thuonghieu: "DELL",
            cpu: "Intel Core i5",
            vga: "RTX 3050",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "25490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop HP Gram 2023 14Z90R GAH53A5",
            thuonghieu: "HP",
            cpu: "Intel Core i5",
            vga: "RTX 3060",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "25490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop APPLE Gram 2023 14Z90R GAH53A5",
            thuonghieu: "APPLE",
            cpu: "Xeon",
            vga: "RTX 3070",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "25490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop VIVOZENBOOK Gram 2023 14Z90R GAH53A5",
            thuonghieu: "VIVOZENBOOK",
            cpu: "Intel Core i7",
            vga: "RTX 3070 Ti",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "25490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop GIGABYTE Gram 2023 14Z90R GAH53A5",
            thuonghieu: "GIGABYTE",
            cpu: "Intel Core i5",
            vga: "RTX 3060",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "5490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop LG Gram 2022 ",
            thuonghieu: "LG",
            cpu: "Intel Core i5",
            vga: "RTX 3050",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "25490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop ACER Gram 2023 14Z90R GAH53A5",
            thuonghieu: "ACER",
            cpu: "Intel Core i9",
            vga: "RTX 4060",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "25490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop ASUS TUF DASH Gram 2023 14Z90R GAH53A5",
            thuonghieu: "ASUS",
            cpu: "Intel Core i9",
            vga: "RTX 4080",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "25490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop LG Gram 2023 14Z90R GAH53A5",
            thuonghieu: "LG",
            cpu: "Intel Core i5",
            vga: "RTX 3070 Ti",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "2490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop LG Gram 2023 14Z90R GAH53A5",
            thuonghieu: "LG",
            cpu: "ADM Ryzen 5",
            vga: "RTX 3080",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "9490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop ASUS Gram 2023 14Z90R GAH53A5",
            thuonghieu: "ASUS",
            cpu: "Intel Core i7",
            vga: "RTX 3080",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "35490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop DELL Gram 2023 14Z90R GAH53A5",
            thuonghieu: "DELL",
            cpu: "ADM Ryzen 5",
            vga: "RTX 3050 Ti",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "15490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop HP Gram 2023 14Z90R GAH53A5",
            thuonghieu: "HP",
            cpu: "ADM Ryzen 7",
            vga: "RTX 3070 Ti",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "45490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop APPLE Gram 2023 14Z90R GAH53A5",
            thuonghieu: "APPLE",
            cpu: "Xeon",
            vga: "RTX 3070",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "17490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop LG Gram 2023 14Z90R GAH53A5",
            thuonghieu: "LG",
            cpu: "Intel Core i7",
            vga: "RTX 3070",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "25490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop ASUS Gram 2023 14Z90R GAH53A5",
            thuonghieu: "ASUS",
            cpu: "Intel Core i7",
            vga: "RTX 3070",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "5490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop DELL Gram 2023 14Z90R GAH53A5",
            thuonghieu: "DELL",
            cpu: "Intel Core i5",
            vga: "RTX 3050",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "25490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop HP Gram 2023 14Z90R GAH53A5",
            thuonghieu: "HP",
            cpu: "Intel Core i5",
            vga: "RTX 3060",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "25490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop APPLE Gram 2023 14Z90R GAH53A5",
            thuonghieu: "APPLE",
            cpu: "Xeon",
            vga: "RTX 3070",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "25490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop VIVOZENBOOK Gram 2023 14Z90R GAH53A5",
            thuonghieu: "VIVOZENBOOK",
            cpu: "Intel Core i7",
            vga: "RTX 3070 Ti",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "25490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop GIGABYTE Gram 2023 14Z90R GAH53A5",
            thuonghieu: "GIGABYTE",
            cpu: "Intel Core i5",
            vga: "RTX 3060",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "5490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop LG Gram 2022 ",
            thuonghieu: "LG",
            cpu: "Intel Core i5",
            vga: "RTX 3050",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "25490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop ACER Gram 2023 14Z90R GAH53A5",
            thuonghieu: "ACER",
            cpu: "Intel Core i9",
            vga: "RTX 4060",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "25490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop ASUS TUF DASH Gram 2023 14Z90R GAH53A5",
            thuonghieu: "ASUS",
            cpu: "Intel Core i9",
            vga: "RTX 4080",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "25490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop LG Gram 2023 14Z90R GAH53A5",
            thuonghieu: "LG",
            cpu: "Intel Core i5",
            vga: "RTX 3070 Ti",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "2490000",
            labelonsale: "-21%"
        },
        {
            img: "./image/selling-products.webp",
            name: "Laptop LG Gram 2023 14Z90R GAH53A5",
            thuonghieu: "LG",
            cpu: "ADM Ryzen 5",
            vga: "RTX 3080",
            ram: "16 GB",
            ssd: "256 GB",
            lcd: "14 inch FHD+ IPS",
            pricecompare: "32.490.000₫",
            pricehighlight: "9490000",
            labelonsale: "-21%"
        }
    ];
*/    

//Thêm mảng sản phẩm vào Local
localStorage.setItem('ArrayListProducts', JSON.stringify(ArrayListProducts));
// Lấy giá trị từ local storage
const storedJsonString = localStorage.getItem('ArrayListProducts');

// Chuyển đổi chuỗi JSON thành mảng
const storedArray = JSON.parse(storedJsonString);

// Sử dụng mảng trong file này
console.log(storedArray);


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
                        <div class="vga">
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
                            <span class="price--highlight">${pricehighlight}</span>
                            <span class="label--on-sale">${labelonsale}</span>
                        </div>
                    </div>    
                </div>
            </div>`;
    }

    s += `</div>`;
    document.getElementById("item-selling-products").innerHTML = s;
}
