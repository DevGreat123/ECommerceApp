class ProductSchema {
    constructor(id, description, price, image_id, rating) {
        this.id = id;
        this.description = description;
        this.price = price;
        this.image_id = image_id;
        this.rating = rating;
    }
}

class ImageSchema {
    constructor(image_id, image_url) {
        this.image_id = image_id;
        this.image_url = image_url;
    }
}

class CategorySchema {
    constructor(id, category_name) {
        this.id = id;
        this.category_name = category_name;
    }
}


