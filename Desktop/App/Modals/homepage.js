const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/business');

const homepageSchema = new mongoose.Schema({
    homeImages: {
        type: Array,
        required: true,
    },
    greeting: {
        welcome_string: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        service_intro: {
            type: Array,
            required: true,
        },
        membership_array: {
            type: String,
            required: true,
        },
        bts_text: {
            bt_1: {
                type: String,
                required: true,
            },
            bt_2: {
                type: String,
                required: true,
            }
        }
    },
    business_paragraphs: {
        paragraph_one: {
            type: String,
            required: true,
        },
        paragraph_two: {
            type: String,
            required: true,
        },
        paragraph_three: {
            type: String,
            required: true,
        },
    },
    services: {
        title: {
            type: String,
            required: true,
        },
        service_options: {
            option_1: {
                type: String,
                required: true,
            },
            option_2: {
                type: String,
                required: true,
            },
            option_3: {
                type: String,
                required: true,
            },
            option_4: {
                type: String,
                required: true,
            },
            option_5: {
                type: String,
                required: true,
            },
            option_6: {
                type: String,
                required: true,
            }
        },
        technician_info: {
            title: {
                type: String,
                required: true,
            },
            technician_one: {
                img: {
                    type: String,
                    required: true,
                },
                info: {
                    name: {
                        type: String,
                        required: true,
                    },
                    profession: {
                        type: String,
                        required: true,
                    }
                }
            },
            technician_two: {
                img: {
                    type: String,
                    required: true,
                },
                info: {
                    name: {
                        type: String,
                        required: true,
                    },
                    profession: {
                        type: String,
                        required: true,
                    }
                }
            },
            technician_three: {
                img: {
                    type: String,
                    required: true,
                },
                info: {
                    name: {
                        type: String,
                        required: true,
                    },
                    profession: {
                        type: String,
                        required: true,
                    }
                }
            },
        },
    },
    testimonial: {
        title: {
            type: String,
            required: true,
        },
        paragraph: {
            type: String,
            required: true,
        }
    },
});

const Homepage = mongoose.model('Homepage', homepageSchema);

const homeInstance = new Homepage({
    homeImages: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
    greeting: {
        welcome_string: 'Welcome to our website!',
        title: 'Explore our services',
        service_intro: ['Service 1', 'Service 2', 'Service 3'],
        membership_array: 'Membership details',
        bts_text: {
            bt_1: 'Button 1',
            bt_2: 'Button 2'
        }
    },
    business_paragraphs: {
        paragraph_one: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        paragraph_two: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        paragraph_three: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    services: {
        title: 'Our Services',
        service_options: {
            option_1: 'Service A',
            option_2: 'Service B',
            option_3: 'Service C',
            option_4: 'Service D',
            option_5: 'Service E',
            option_6: 'Service F'
        },
        technician_info: {
            title: 'Our Technicians',
            technician_one: {
                img: 'technician1.jpg',
                info: {
                    name: 'John Doe',
                    profession: 'Plumber'
                }
            },
            technician_two: {
                img: 'technician2.jpg',
                info: {
                    name: 'Jane Smith',
                    profession: 'Electrician'
                }
            },
            technician_three: {
                img: 'technician3.jpg',
                info: {
                    name: 'Mike Johnson',
                    profession: 'Carpenter'
                }
            },
        },
    },
    testimonial: {
        title: 'Testimonial',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
});

// Save the instance to the database
homeInstance.save()
    .then(doc => {
        console.log(doc);
    })
    .catch(err => {
        console.error(err);
    });

module.exports = Homepage;
