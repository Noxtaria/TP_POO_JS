"use strict";
class Dog {
    constructor(imageUrl, imageTitle, imageDescription) {
        this.imageUrl = imageUrl;
        this.imageTitle = imageTitle;
        this.imageDescription = imageDescription;
        this._id = ++Dog._count;
    }
}
Dog._count = 0;
