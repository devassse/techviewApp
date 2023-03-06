import './footerSection.css'

export default function footerSection() {
    return (
        <section className='footer_section'>
            <div className="footer_info">
                <div className="about"></div>
                <div className="site_map"></div>
                <div className="mini_links"></div>
                <div className="date_time"></div>
            </div>
            <div className="copyright">
            <p>Todos Direitos Reservados</p>
            </div>
            <div className="info">
                <p>TechView - Portal de Tecnologia</p>
            </div>
        </section>
    )
}
