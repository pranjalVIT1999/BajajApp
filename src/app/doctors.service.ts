import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  shoppingList=[
    {
      id:'1',
      title:'Dr. Shakuntala Devi',
      description:'Personal problems',
      price:"25",
      itemUrl:"https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
    },
    {
      id:2,
      title:"Dr. RajGopal Singhania",
      description:"Down with covid-19",
      price:"300",
      itemUrl:"https://s3.envato.com/files/287059893/17thJune2017Ahmad-29.jpg"
    },
    {
      id:3,
      title:"Dr. Charles Oberoi",
      description:"Have to drop my son at em=xam centre",
      price:"1",
      itemUrl:'https://image.shutterstock.com/image-photo/portrait-doctor-smiling-260nw-155685458.jpg'
    },
    {
      id:4,
      title:"Dr. Raja Ram Mohan Roy",
      description:"Urgent meeting at Banglore",
      price:"10",
      itemUrl:'https://previews.123rf.com/images/espies/espies1707/espies170700397/82494352-portrait-of-an-cheerful-indian-handsome-male-doctor-with-a-stethoscope-around-his-neck-isolated-over.jpg'
    },
    {
      id:5,
      title:"Dr. Raju Srivastav",
      description:"Leave for leisure activities ",
      price:"20",
      itemUrl:'https://previews.123rf.com/images/espies/espies1707/espies170700439/82494474-portrait-of-an-cheerful-indian-handsome-male-doctor-with-a-stethoscope-around-his-neck-isolated-over.jpg'
    },
  ]
  constructor() { }
}
