import React from 'react';

const Gigs = (props) => {
    const { details } = props;
    return (
        <div>
            <section id="gigs" className="container">
                <h1>All Gigs</h1>
                {details.map((gig,key) => {
                    return <div className="gig" key={key}>
                                <h3>{gig.title}</h3>
                                <p>{gig.description}</p>
                                <ul>
                                    <li>Budget: {gig.budget}</li>
                                    <li>
                                        <a href={"mailto:" + gig.contact_email} 
                                        className="btn btn-reverse">Apply Now</a>
                                    </li>
                                </ul>
                                <div className="tech">
                                    <small>Technologies Needed: 
                                        <span>{gig.technologies}</span>
                                    </small>
                                </div>
                            </div>
                        })}
            </section>
        </div>
    )
}

export default Gigs;