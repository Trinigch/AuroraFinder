
const Landing = () => {
    return (
        <>
        <h2 className="h-2">About Auroras</h2>
        <section className="info">
            <h3 className="h-3">What Are Auroras?</h3>
            <p>
                Auroras, also known as the Northern or Southern Lights, are often described as ribbons of mostly green light that can be observed near the poles.
            </p>
            <h3 className="h-3">How Are Auroras Made</h3>
            <section>
                Auroras form when 4 things happen:
                <ol className="fact-list">
                    <li>
                        Solar Activity such as solar flares send charged particles towards Earth.
                    </li>
                    <li>
                        Earth's magnetic field acts as a barrier to most of these particles but the rest move towards the poles.
                    </li>
                    <li>
                        The particles collide with gasses in the upper atmosphere causing light to be emitted.
                    </li>
                    <li>
                        The different gasses in the atmosphere produce different colors. The most common color is green and is made by Monatomic Oxygen
                    </li>
                </ol>
            </section>
            <h3 className="h-3">Where Can I See an Aurora</h3>
            <p>Auroras are most common and intense near the poles but can be seen as 40° or -40° latitude from the poles.</p>
        </section>
        <img className="img-aurora" src="https://services.swpc.noaa.gov/experimental/images/aurora_dashboard/tonights_static_viewline_forecast.png"></img>
        </>
    );
}


export default Landing;