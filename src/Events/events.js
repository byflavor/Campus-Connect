import React from 'react';
import './events.css';
import Chip from '@mui/material/Chip';

const events = [
    {
        name: "Holi Celebration",
        imageLink: "https://news.unl.edu/sites/default/files/styles/large_aspect/public/media/shutterstock_372922969_1.jpg?itok=tNC_Xv6r",
        eventDate: "April 12 2024",
        eventStartTime: "12:00pm",
        eventEndTime: "5:00pm",
        location: "Japan Garden",
        eventCategories: ["Outdoor", "Cultural Festival"]
    },
    {
        name: "Spring Music Fest",
        imageLink: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        eventDate: "May 20 2024",
        eventStartTime: "2:00pm",
        eventEndTime: "10:00pm",
        location: "Main Quad",
        eventCategories: ["In-Person", "Concert"]
    },
    {
        name: "Charity Run 2024",
        imageLink: "https://images.unsplash.com/photo-1507653050-4053dc17dfbb?q=80&w=2208&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        eventDate: "July 15 2024",
        eventStartTime: "7:00am",
        eventEndTime: "11:00am",
        location: "Morrow Plots",
        eventCategories: ["Outdoor", "Charity Event"]
    },
    {
        name: "Tech Innovators Meetup",
        imageLink: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        eventDate: "June 5 2024",
        eventStartTime: "9:00am",
        eventEndTime: "1:00pm",
        location: "Siebel Center for Computer Science",
        eventCategories: ["Hybrid", "Tech Conference"]
    },
    {
        name: "Local Food Carnival",
        imageLink: "https://images.unsplash.com/photo-1531062499906-c6dc9747ce10?q=80&w=3119&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        eventDate: "August 22 2024",
        eventStartTime: "3:00pm",
        eventEndTime: "9:00pm",
        location: "Arboretum",
        eventCategories: ["Food Festival", "Outdoor"]
    },
    {
        name: "Autumn Book Fair",
        imageLink: "https://images.unsplash.com/photo-1631888722728-1578b7ba6dee?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        eventDate: "September 19 2024",
        eventStartTime: "10:00am",
        eventEndTime: "6:00pm",
        location: "Grainger Engineering Library",
        eventCategories: ["In-person","Educational", "Literature"]
    }
];

function Events() {

    return (
        <div className="events-container">
            <div className='event-header'>
                Upcoming Events
            </div>
            <div className='events-list'>
                {events.map((event, index) => (
                    <div key={index} className='event-container'>
                        <div>
                            <img src={event.imageLink} alt={event.name} className='event-container-img' />
                        </div>
                        <div className='event-container-text-section'>
                            <div className='event-name'>
                                {event.name}
                            </div>
                            <div>
                                {event.eventDate} {event.eventStartTime} - {event.eventEndTime}
                            </div>
                            <div>
                                {event.location}
                            </div>
                            <div className='event-categories'>
                                {
                                    event.eventCategories.map((category, index) => (
                                        <div key={index} className='event-category'>
                                            <Chip label={category} color="primary" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;
