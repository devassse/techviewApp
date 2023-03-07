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
                <p>TechView - Portal de Tecnologia | 2023</p>
            </div>
            <div className="info">
                <p>Todos Direitos Reservados &copy; <a href="software.keomagroup.com" target={'_blank'}>Keoma Software, Inc.</a></p>
            </div>
        </section>
    )
}
