import './mainContent.css'

export default function mainContent() {
    return (
        <section className='main_holder'>
            <article className='navigation'></article>
            <article className='container_wrapper'>
                <div className="main_container"></div>
                <div className="side_bar"></div>
                <div className="values"></div>
            </article>
        </section>
    )
}
