import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  title=""
  description=""
  price=""
  image=""
  sellername=""
  quantity=""

  readValue=()=>
  {
    let data:any ={
      "title":this.title,"description":this.description,"price":this.price,"image":this.image,"sellername":this.sellername,"quantity":this.quantity
    }
    console.log(data)
  }

}
