import { Component } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  userId=""
  id=""
  title=""
  body=""

  addPosts=()=>
  {
    let postData={"userId":this.userId,"id":this.id,"title":this.title,"body":this.body}
    console.log(postData)
  }

}
