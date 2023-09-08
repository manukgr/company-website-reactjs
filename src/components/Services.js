import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Web Development" img="card1.png" text="One stop solution for mobile and web development with AI-enabled technologies" />
                    </div>
                    {/* // <div className="col-md-4 mb-2">
                    // <Card title="E-Commerce Services" img="card2.png" text="Maecenas dictum efficitur felis non gravida. Vestibulum vitae ante luctus, accumsan mi vitae, pretium metus." />
                    // </div> */}
                    <div className="col-md-4 mb-2">
                    <Card title="Cyber Security" img="card3.png" text="Fully automated AI-powered cyber security testing" />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="Software Automated Testing" img="card2.png" text="Test automation powered by AI/ML. Increase automation speed up to 80% with our AI expert. Add AI power to your existing frameworks or just clone our frameworks for free." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
