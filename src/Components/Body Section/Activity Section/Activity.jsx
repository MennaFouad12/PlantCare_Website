import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './activity.css';
import { BsArrowRightShort } from 'react-icons/bs';
import user from '../../../Assets/User_1.png';
import user1 from '../../../Assets/User_2.png';
import user2 from '../../../Assets/User_3.png';

const Activity = () => {
    const navigate = useNavigate(); 

    return (
        <div className='activitySection'>
            <div className="heading flex">
                <h1>Recent Activity</h1>
                <button className='btn flex' onClick={() => navigate('/activity')}>
                    See All
                    <BsArrowRightShort className="icon"/>
                </button>
            </div>

            <div className="secContainer grid">
                {[ 
                    { img: user, name: 'Ahmed Hamdy', time: '10 min ago' },
                    { img: user1, name: 'Menna', time: '15 min ago' },
                    { img: user2, name: 'Baher', time: '20 min ago' },
                    { img: user1, name: 'Mohameed', time: '30 min ago' },
                    { img: user2, name: 'Islam', time: '35 min ago' },
                    { img: user2, name: 'NoUrhan', time: '40 min ago' },
                    { img: user, name: 'Ahmed Hamdy', time: '50 min ago' },
                    { img: user, name: 'Ahmed Hamdy', time: '45 min ago' }
                ].map((customer, index) => (
                    <div className="singleCustomer flex" key={index}>
                        <img src={customer.img} alt="User" />
                        <div className="customerDetails">
                            <span className="name">{customer.name}</span>
                            <small>Ordered a new plant</small>
                        </div>
                        <div className="duration">{customer.time}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Activity;
