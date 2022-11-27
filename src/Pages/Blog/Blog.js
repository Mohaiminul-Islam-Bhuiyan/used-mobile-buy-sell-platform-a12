import React from 'react';

const Blog = () => {
    return (
        <>
            <div className='mt-5'>
                <h1><strong>What are the different ways to manage a state in a React application?</strong></h1>
                <p>When we talk about state in our applications, it’s important to be clear about what types of state actually matter.
                    <br />
                    There are four main types of state you need to properly manage in your React apps:
                    <br />
                    1. Local state <br />
                    2. Global state <br />
                    3. Server state <br />
                    4. URL state <br /></p>
            </div>
            <br />

            <div>
                <h1><strong>How does prototypical inheritance work?</strong></h1>
                <p>
                    Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype.
                </p>
            </div>
        </>
    );
};

export default Blog;