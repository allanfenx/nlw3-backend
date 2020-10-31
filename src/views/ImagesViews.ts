import Image from "../models/Images";

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://localhost:8080/uploads/${image.path}`,
            urlmobile: `http://192.168.0.102:8080/uploads/${image.path}`
        }

    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }

}