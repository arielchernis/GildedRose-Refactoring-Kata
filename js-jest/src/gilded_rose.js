class Item {
  constructor(name, sellIn, quality,qualityup,qualitydown,backstage,aged,sulfuras,sellin11,sellin6){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.qualitydown=false;
    this,qualityup=false;
    this.backstage=false;
    this.aged=false;
    this.sulfuras=false;
    this.sellin11=false;
    this.sellin6=false;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if(this.items[i].name=='Aged Brie'){
        this.items[i].aged=true;
      }
      if(this.items[i].name=='Backstage passes to a TAFKAL80ETC concert'){
        this.items[i].backstage=true;
      }
      if(this.items[i].name=='Sulfuras, Hand of Ragnaros'){
        this.items[i].sulfuras=true;
      }
      
      if (this.items[i].quality > 0) {
        this.items[i].qualitydown=true;
      }
      if (this.items[i].quality < 50) {
        this.items[i].qualityup=true;
      }
      if (this.items[i].sellIn < 11) {
        this.items[i].sellin11=true;
      }
      if (this.items[i].quality < 50) {
        this.item[i].qualityup=true;
      }
      if (this.items[i].sellIn < 6) {
        this.items[i].sellin6=true;
      }
      if(this.items[i].aged==false && this.items[i].backstage==false&& this.items[i].qualitydown==true&& this.items[i].sulfuras==false){
        this.items[i].quality = this.items[i].quality - 1;
      }
      if(this.items[i].qualityup==true){
        this.items[i].quality = this.items[i].quality + 1;
      }
      if(this.items[i].qualityup==true && this.items[i].backstage==true && this.items[i].sellin11==true){
        this.items[i].quality = this.items[i].quality + 1;
      }
      if(this.items[i].sellin6==true && this.items[i].qualityup==true){
        this.items[i].quality = this.items[i].quality + 1;
      }


      /*if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {

       // if (this.items[i].quality > 0) {
         // this.items[i].qualitydown=true;
          //if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            //this.items[i].quality = this.items[i].quality - 1;
         // }
       // }
     // } else {
        //if (this.items[i].quality < 50) {
          //this.items[i].quality = this.items[i].quality + 1;
          //if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
           // if (this.items[i].sellIn < 11) {
              //if (this.items[i].quality < 50) {
              //  this.items[i].quality = this.items[i].quality + 1;
              }
            }
          //  if (this.items[i].sellIn < 6) {
              //if (this.items[i].quality < 50) {
               // this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      */
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }
    

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
