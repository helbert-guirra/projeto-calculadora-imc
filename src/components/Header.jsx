function Header() {
    return (
        <header style={estiloHeader}>
            <h1>Calculadora de IMC</h1>
        </header>
    );
}

const estiloHeader = {
    backgroundColor: '#1E90FF',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '8px',
    marginBottom: '20px'
};

export default Header;