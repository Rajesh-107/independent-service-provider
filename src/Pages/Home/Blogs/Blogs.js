import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className=''>
            <h2>This is Blogs part</h2>
            <div>
                <h2>Difference between Authorization and Authentication</h2>
                <table>
                    <tr>
                        <th>Authorization</th>
                        <th>Authentication</th>
                    </tr>
                   <tr>
                   <td>Authorization determines what resources a user can access.</td>
                   <td>Authentication verifies who the user is.</td>
                   </tr>
                   <tr>
                       <td>
                       Authorization always takes place after authentication
                       </td>
                       <td>Authentication is the first step of a good identity and access management process.</td>
                   </tr>
                   <tr>
                       <td>Authorization isn’t visible to or changeable by the user.</td>
                       <td>Authentication is visible to and partially changeable by the user.</td>
                   </tr>
                </table>
            </div>

            <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>I think firebase easy to use for me. i have option other implement such as Mysql</p>

            <h2>What other services does firebase provide other than authentication?</h2>
            <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
        </div>
    );
};

export default Blogs;