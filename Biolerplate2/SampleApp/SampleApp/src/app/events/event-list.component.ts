import { Component, OnInit } from '@angular/core';
import { IEvent } from './event';

@Component({
    selector:'el-events',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.css']
})


export class EventListComponent implements OnInit {
    pageTitle: string = "Event List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    searchCriteria: string = 'beach';
    events: IEvent[] = [
        {
            "name": "Event 1",
            "code": "Evt100",
            "description": "The first event",
            "date": "2016.01.01",
            "time": "1:00 PM",
            "duration": "1 hour",
            "fee": 1,
            "rating": 1,
            "imageUrl": "https://i.pinimg.com/736x/39/6f/0a/396f0ad4ce00e0ccf1ffead17da426c1--purple-things-purple-stuff.jpg",
            "location": {
                "streetAddr": "101 Mian st.",
                "city": "Los Angeles",
                "state": "CA",
                "zip": "87885",
                "lon": 0,
                "lat": 0
            },
            "capacity": 100
        },
        {
            "name": "seconds to seconds ",
            "code": "Evt200",
            "description": "The second event",
            "date": "2016.02.02",
            "time": "2:00 PM",
            "duration": "2 hour",
            "fee": 2,
            "rating": 2,
            "imageUrl": "https://i.pinimg.com/736x/c9/16/0f/c9160fa806a531f62f40eacee89bb31d--lavender-roses-purple-roses.jpg",
            "location": {
                "streetAddr": "101 Mian st.",
                "city": "Los Angeles",
                "state": "CA",
                "zip": "87885",
                "lon": 0,
                "lat": 0
            },
            capacity: 200
        },
        {
            "name": "third event",
            "code": "Evt300",
            "description": "The second event",
            "date": "2016.03.03",
            "time": "3:00 PM",
            "duration": "3 hour",
            "fee": 3,
            "rating": 3,
            "imageUrl": "https://i.pinimg.com/736x/11/9a/65/119a659b27a55ed405b63532f68bc517--blue-rose-tattoos-rare-flowers.jpg",
            "location": {
                "streetAddr": "101 Mian st.",
                "city": "Los Angeles",
                "state": "CA",
                "zip": "87885",
                "lon": 0,
                "lat": 0
            },
            capacity: 300
        },
        {
            "name": "Event 4",
            "code": "Evt400",
            "description": "The second event",
            "date": "2016.04.04",
            "time": "4:00 PM",
            "duration": "4 hour",
            "fee": 4,
            "rating": 4,
            "imageUrl": "https://blog.voylla.com/wp-content/uploads/2016/02/Orange-Rose.jpg",
            "location": {
                "streetAddr": "101 Mian st.",
                "city": "Los Angeles",
                "state": "CA",
                "zip": "87885",
                "lon": 0,
                "lat": 0
            },
            capacity: 400
        }
    ]

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In OnInit');
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'EventList: ' + message;

    }
}