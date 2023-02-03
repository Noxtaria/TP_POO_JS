export default class Dog {
    private static _count: number = 0;
    private _id: number;
  
    constructor(private imageUrl: string, private imageTitle: string, private imageDescription: string) {
      this._id = ++Dog._count;
    }

    get id(){
        return this._id;
    }

    get imgUrl(){
        if(this.imageUrl === ""){
            return "./assets/img/unknow.jpg"
        } else {
            return this.imageUrl;
        }
    }

    set imgUrl(value: string){
        this.imageUrl = value;
    }

    get imgTitle(){
        return this.imageTitle;
    }

    set imgTitle(value){
        this.imageTitle = value;
    }

    get imgDescription(){
        return this.imageDescription;
    }

    set imgDescription(value){
        this.imageDescription = value
    }

  }