import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#3cc55c' }} >
            <div className="container p-5">
                <div className="text-center">
                    <h3 className="text-warning">Let's make this inbox official</h3>
                    <p >Once a new article is published, it will be delivered to your email directly.</p>

                    <div class="input-group mb-3 w-50 m-auto pb-5">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button class="btn btn-outline-warning" type="button" id="button-addon2">Button</button>
                    </div>
                    <p><a href="#">Powerd by Blogger</a> @2021 The <a href="#">HelloSite</a> Design by <a target="_blank" href="https://github.com/niazmurshedsiam">Niaz Murshed Siam</a> </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;