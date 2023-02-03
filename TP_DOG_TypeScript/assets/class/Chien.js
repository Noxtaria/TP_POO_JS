export default class Dog {
    constructor(imageUrl, imageTitle, imageDescription) {
        this.imageUrl = imageUrl;
        this.imageTitle = imageTitle;
        this.imageDescription = imageDescription;
        this._id = ++Dog._count;
    }
    get id() {
        return this._id;
    }
    get imgUrl() {
        if (this.imageUrl === "") {
            return "./assets/img/unknow.jpg";
        }
        else {
            return this.imageUrl;
        }
    }
    set imgUrl(value) {
        this.imageUrl = value;
    }
    get imgTitle() {
        return this.imageTitle;
    }
    set imgTitle(value) {
        this.imageTitle = value;
    }
    get imgDescription() {
        return this.imageDescription;
    }
    set imgDescription(value) {
        this.imageDescription = value;
    }
}
Dog._count = 0;
