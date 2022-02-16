const Footer = () => {
    return (
        <>
            <footer className="footer mt-auto py-3 bg-dark">
                <div className="container">
                    <p className="text-light">App desenvolvido por <a href="https://github.com/TheHiyoko" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>Caio Pinto</a></p>
                    {/*Lista das informações sobre a pizzaria*/}
                    <ul className="text-light" style={{listStyle: "none"}}>
                        <small>
                        <li>Pizzas Manieras</li> 
                        <li>Rua Maneira 908</li>
                        <li>(81)9XXXX-XXXX</li>
                        <li>@Pizzas Maneira</li>
                        </small>
                    </ul>
                </div>
            </footer>
        </>
    );
  }
  
  export default Footer 