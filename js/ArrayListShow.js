var ArrayListProducts = [
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
    {
        img: "./image/selling-products.webp",
        name: "Laptop LG Gram 2023 14Z90R GAH53A5",
        cpu: "CPU 1",
        vga: "VGA 1",
        ram: "16 GB",
        ssd: "256 GB",
        lcd: "14 inch FHD+ IPS",
        pricecompare: "32.490.000₫",
        pricehighlight: "25.490.000₫",
        labelonsale: "-21%"
    },
];
function ListSellingProducts() {
    var s = `<div class="item-selling-products">`;

    for (var i = 0; i < ArrayListProducts.length; i++) {
        var product = ArrayListProducts[i];
        s += `
            <div class="item-show">
                <a href="#">
                    <img src="${product.img}" width="100%"/>
                </a>
                <div class="detail">
                    <h3 class="name">
                        <a href="#" title="${product.name}" tabindex="0">${product.name}</a>
                    </h3>
                    <div class="technical">
                        <div class="cpu">
                            <span>${product.cpu}</span>
                        </div>
                        <div class="vga">
                            <span>${product.vga}</span>
                        </div>
                        <div class="ram">
                            <span>${product.ram}</span>
                        </div>
                        <div class="ssd">
                            <span>${product.ssd}</span>
                        </div>
                        <div class="lcd">
                            <span>${product.lcd}</span>
                        </div>
                        <div class="price">
                            <div class="price--compare">
                                <del>${product.pricecompare}</del>
                            </div>
                            <div class="price--default">
                                <span class="price--highlight">${product.pricehighlight}</span>
                                <span class="label--on-sale">${product.labelonsale}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

            document.getElementById("item-selling-products").innerHTML = s;
    }
}

window.onload = function () {
    ListSellingProducts();
}
