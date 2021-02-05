import './PiedDePage.css';

export default function PiedDePage(props){
    // Obtenir l'année courante
    const annee = (new Date()).getFullYear();
    return(
        <footer>
            &copy; {annee} - TIM
        </footer>
    );
}