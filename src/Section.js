import React from 'react'

function Section({ title, className }) {
    return (
        <div>
            <Section class={className}>
                <div className="container">
                    <div class="title-wrapper bold black">{title}</div>

                    <div class="price-wrapper grey">From $999.</div>
                    <div class="links-wrapper">
                        <ul>
                            <li><a href="">Learn more</a></li>
                            <li><a href="">Order</a></li>
                        </ul>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Section