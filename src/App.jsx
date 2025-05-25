import Header from './components/Header';
import Perfil from './components/Perfil/Perfil';
import FormularioIMC from './components/Formulario/FormularioIMC';

function App() {
    return (
        <div>
            <Header />
            <Perfil nome="helbert-guirra" email="helbert-guirra@ebac.com" />
            <FormularioIMC />
        </div>
    );
}

export default App;
