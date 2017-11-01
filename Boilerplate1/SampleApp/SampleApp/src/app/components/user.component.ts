import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: '../templates/user.component.html',
    providers: [PostsService]
})
export class UserComponent {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts: post[];

    constructor(private postsService: PostsService) {
        this.name = 'sreepurna',
        this.email = 'sreepurna.jasti@gmail.com',
        this.address = {
            street: 'Nizampet village',
            city: 'Nizampet',
            state: 'Telangana'
            }
        this.hobbies = ['trekking', 'movies', 'music'];
        this.showHobbies = false;
        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }

    toggleHobbies(){
        if(this.showHobbies == true) {
            this.showHobbies = false;
        } else {
            this.showHobbies = true;
        }
    }

    addHobby(hobby: any) {
        this.hobbies.push(hobby);
    }

    deleteHobby(i: any) {
        this.hobbies.splice(i, 1);
    }
}
interface address {
    street: string;
    city: string;
    state: string
}

interface post {
    userId: number;
    id: number;
    title: string;
    body: string;
}