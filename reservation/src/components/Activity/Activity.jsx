import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styles from './Activity.module.css';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { getImageUrl } from '../../utils';

const activitiesData = [
    {
        id: 2,
        title: "Storytelling for Kids",
        description: "Immerse your children in a magical world of imagination with our storytelling session. This event is perfect for young minds eager to explore new adventures through captivating tales. Join us for a heartwarming experience that will leave lasting memories!",
        date: "2024-12-12",
        startTime: "1:00 PM",
        endTime: "3:00 PM",
        location: 'Jose Abad Santos Dr, Baguio City, Philippines',
        image: getImageUrl('activities/storytelling.png'),
    },

    {
        id: 6,
        title: "Math Tutorial Session",
        description: "Join us for a comprehensive math tutorial designed to help students grasp challenging concepts and improve their problem-solving skills. Whether you're preparing for exams or just need extra help, this session is perfect for all levels!",
        date: "2024-12-15",
        startTime: "2:00 PM",
        endTime: "4:00 PM",
        location: 'Jose Abad Santos Dr, Baguio City, Philippines',
        image: getImageUrl('activities/mathtutorial.png'),
    },
    
    {
        id: 7,
        title: "English Tutorial Session",
        description: "Enhance your English language skills in our interactive tutorial session! From grammar to vocabulary, our expert tutors will guide you through essential language components, helping you communicate with confidence.",
        date: "2024-12-18",
        startTime: "10:00 AM",
        endTime: "12:00 PM",
        location: 'Jose Abad Santos Dr, Baguio City, Philippines',
        image: getImageUrl('activities/englishtutorial.png'),
    },
    
    {
        id: 8,
        title: "Baguio City Library Hosts Cybersecurity Seminar",
        description: "Stay ahead in the digital world by attending this Cybersecurity Seminar hosted by the Baguio City Library. Learn essential tips and techniques to protect yourself online, featuring expert speakers and hands-on demonstrations.",
        date: "2025-01-05",
        startTime: "9:00 AM",
        endTime: "12:00 PM",
        location: 'Baguio City Library, Baguio City, Philippines',
        image: getImageUrl('activities/cybersecurity.png'),
    },
    {
        id: 9,
        title: "Story Writing Seminar",
        description: "Unleash your creativity at our Story Writing Seminar! Whether you're a beginner or an experienced writer, this seminar will help you refine your storytelling skills. Learn the secrets to crafting compelling plots, developing characters, and engaging your readers.",
        date: "2024-12-20",
        startTime: "1:00 PM",
        endTime: "4:00 PM",
        location: 'Jose Abad Santos Dr, Baguio City, Philippines',
        image: getImageUrl('activities/storywriting.png'),
    },
    {
        id: 10,
        title: "Computer Basics Seminar Training for Senior Citizens",
        description: "Join us for a comprehensive seminar designed specifically for senior citizens to learn the basics of computers. From using the internet to mastering email, this seminar will help you feel confident and empowered in the digital world.",
        date: "2024-12-15",
        startTime: "9:00 AM",
        endTime: "12:00 PM",
        location: 'Jose Abad Santos Dr, Baguio City, Philippines',
        image: getImageUrl('activities/computerseminar.png'),
    }
];

const Activity = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [sortedActivities, setSortedActivities] = useState(activitiesData);

    const openModal = (activity) => {
        setSelectedActivity(activity);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedActivity(null);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        Swal.fire({
            title: 'Success!',
            text: 'You have successfully joined the activity.',
            icon: 'success',
            confirmButtonText: 'OK',
        }).then(() => {
            closeModal();
        });
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        const [month, day, year] = formattedDate.split(' ');
        return { month, day, year };
    };

    const handleSort = () => {
        const sorted = [...sortedActivities].sort((a, b) => {
            const dateA = new Date(a.date + ' ' + a.startTime);
            const dateB = new Date(b.date + ' ' + b.startTime);
            return dateA - dateB;
        });
        setSortedActivities(sorted);
    };

    return (
        <section className={styles.activitiesSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>Activities</h2>
            </div>
            <div className={styles.activitiesContainer}>
                {sortedActivities.map((activity, index) => {
                    const { month, day, year } = formatDate(activity.date);
                    return (
                        <div
                            key={activity.id}
                            className={`${styles.card} ${index % 2 !== 0 ? styles.reverse : ''}`}
                        >
                            <div className={styles.textContainer}>
                                <h3 className={styles.activityTitle}>{activity.title}</h3>
                                <p className={styles.description}>{activity.description}</p>
                                <button
                                    className={styles.joinButton}
                                    onClick={() => openModal(activity)}
                                >
                                    Join
                                </button>
                            </div>
                            <div className={styles.imageContainer}>
                                <div className={styles.calendar}>
                                    <span className={styles.calendarMonth}>{month}</span>
                                    <span className={styles.calendarDate}>{day}</span>
                                    <span className={styles.calendarYear}>{year}</span>
                                    <span className={styles.calendarTime}>
                                        {activity.startTime} - {activity.endTime}
                                    </span>
                                </div>
                                <img
                                    src={activity.image}
                                    alt={activity.title}
                                    className={styles.image}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <div className={styles.modalContent}>
                            <button className={styles.closeButton} onClick={closeModal}>
                                &times;
                            </button>
                            <div className={styles.modalFormContainer}>
                                <h3 className={styles.modalTitle}>Request to Join</h3>
                                <form onSubmit={handleFormSubmit} className={styles.modalForm}>
                                    <label>Full Name:</label>
                                    <input type="text" className={styles.inputField} name="fullName" placeholder='Enter your full name' required />
                                    <label>Email:</label>
                                    <input type="email" className={styles.inputField} name="email" placeholder='Enter your email' required />
                                    <label>Mobile Number:</label>
                                    <input type="tel" className={styles.inputField} name="mobile" placeholder='Enter your mobile number' required />
                                    <label>Gender:</label>
                                    <select className={styles.inputField} name="gender" required>
                                        <option value="" disabled selected hidden>Select your gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <label>Age:</label>
                                    <input type="number" className={styles.inputField} name="age" min="1" placeholder='Enter your age' required />
                                    <button type="submit" className={styles.submitButton}>
                                        Submit
                                    </button>
                                </form>
                            </div>
                            <div className={styles.modalImageContainer}>
                                <h3 className={styles.modalBookTitle}>{selectedActivity.title}</h3>
                                <p className={styles.modalDescription}>{selectedActivity.description}</p>
                                <p className={styles.modalDetails}>
                                    <FaCalendarAlt className={styles.icon} /> Date: {formatDate(selectedActivity.date).month} {formatDate(selectedActivity.date).day} {formatDate(selectedActivity.date).year}
                                </p>
                                <p className={styles.modalDetails}>
                                    <FaClock className={styles.icon} /> Time: {selectedActivity.startTime} - {selectedActivity.endTime}
                                </p>
                                <p className={styles.modalDetails}>
                                    <FaMapMarkerAlt className={styles.icon} /> Location: {selectedActivity.location}
                                </p>
                                <img
                                    src={selectedActivity.image}
                                    alt={selectedActivity.title}
                                    className={styles.modalImage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Activity;
