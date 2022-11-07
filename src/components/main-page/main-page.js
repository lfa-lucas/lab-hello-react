function MainPage(props) {
    
    return (
        <article className="main-page">
            <header className="top-bar">
                <img className="topbar-logo"
                    src={props.iconLOGO}
                    alt=""
                />
                <img className="topbar-menu"
                    src={props.iconMENU}
                    alt=""
                />
            </header>

            <div className="page-title">{props.pageTitle1} <br /> {props.pageTitle2}</div>
            <div className="page-text">{props.pageText1} <br /> {props.pageText2} <br /> {props.pageText3}</div>
            <button className="btn-page">{props.btnTittle}</button>
        </article>
    )
}

export default MainPage