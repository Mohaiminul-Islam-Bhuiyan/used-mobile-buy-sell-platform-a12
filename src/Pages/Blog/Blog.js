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
            <br />

            <div>
                <h1><strong>What is a unit test? Why should we write unit tests?</strong></h1>
                <p>
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended.
                </p>
                <br />
                <p>
                    Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>
            </div>
            <br />

            <div>
                <h1><strong>React vs. Angular vs. Vue?</strong></h1>
                <p>
                    React is a UI library, Angular is a fully-fledged front-end framework, while Vue. js is a progressive framework. They can be used almost interchangeably to build front-end applications, but they're not 100 percent the same, so it makes sense to compare them and understand their differences.
                </p>
                <br />
                <p><strong>Angular vs React</strong></p>
                <p>
                    If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.

                    React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.

                    React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.
                </p>
                <br />
                <p><strong>React vs Vue</strong></p>
                <p>
                    The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.

                    Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.

                    Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.
                </p>
                <br />
                <p><strong>Angular vs Vue</strong></p>
                <p>
                    In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.

                    A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.

                    It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.
                </p>
            </div>
        </>
    );
};

export default Blog;